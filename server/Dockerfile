FROM python:3.8-slim

WORKDIR /app

COPY . /app

RUN pip install --trusted-host pypi.python.org Flask bcrypt

CMD ["python", "server.py"]

EXPOSE 3000