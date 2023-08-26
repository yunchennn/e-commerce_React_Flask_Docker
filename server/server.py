from flask import Flask, request, jsonify, send_file
import json
import bcrypt
import collections
import csv


# productinfo = os.open('/products.json')

app = Flask(__name__)

#create the product csv_to_json
def csv_to_json(csv_file_path):
    data = collections.defaultdict(list)
    with open(csv_file_path, 'r', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            category = row['type']
            product = {
                'id': int(row['id']),
                'name':row['name'],
                'productName': row['item'],
                'price': float(row['price']),
                'productImage': row['image1'],
                'productImage2':row['image2']
            }
            data[category].append(product)

    output_json_file = 'data.json'
    with open(output_json_file, 'w') as jsonfile:
        json.dump(data, jsonfile, indent=4)

#send products information to the font 
@app.route('/get_json_data')
def get_json_data():
    json_file_path = './data.json'
    return send_file(json_file_path, mimetype='application/json')


@app.route('/api/order-submit', methods=['POST'])
def save_font():
    font_data = request.json  
    try:
        with open('orders.json', 'r') as json_file:
            all_data = json.load(json_file)
    except (FileNotFoundError, json.JSONDecodeError):
        all_data = []

    all_data.append(font_data)

    with open('orders.json', 'w') as json_file:
        json.dump(all_data, json_file, indent=4)

    return jsonify({'message': 'Order saved successfully'})


#for login
def load_users_from_json():
    try:
        with open('users.json', 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return {}

users = load_users_from_json()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users:
        hashed_password = users[username]
        if bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8')):
            return jsonify({'message': 'Login successful', 'username': username})
        else:
            return jsonify({'message': 'Invalid password'}), 401
    else:
        return jsonify({'message': 'User not found'}), 401
    

#create user account   
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users:
        return jsonify({'message': 'Username already exists'}), 400

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    users[username] = hashed_password.decode('utf-8')
    save_users_to_json(users)  # Save users to JSON file or database

    return jsonify({'message': 'Registration successful'})

def save_users_to_json(users_data):
    with open('users.json', 'w') as file:
        json.dump(users_data, file)


if __name__ == '__main__':
    csv_file_path = './data.csv'
    csv_to_json(csv_file_path)
    app.run(debug=True, host='0.0.0.0')
