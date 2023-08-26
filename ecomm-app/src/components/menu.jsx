import React from "react";
import './navbar.css'
import './menu.css'
import PRO from '../data.json'

export const NewGoods = ()=> {
    return (
        <div className="dropdown-content">
          {Object.entries(PRO).map(([category, products]) => (
            <div className="grid" key={category}>
              <div className="col1">
                <a className="maincata" href={`/${category}`}>{category.toUpperCase()}</a>
                {/* <div className="item">
                  {products.map(product => (
                    <a href="#" key={product.id}>{product.productName}</a>
                  ))}
                </div> */}
              </div>
              {/* Add more columns or styling here if needed */}
            </div>
          ))}
        </div>
      );
    };
    
    // export default NewGoods;