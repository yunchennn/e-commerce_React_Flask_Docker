import PRO from './data.json'




const tmp = [];
const coffee = [];
const bundles = [];
const goods = [];
const gears = [];


for (var outerKey in PRO){
   if (PRO.hasOwnProperty(outerKey)) {
      // console.log("Outer Key:", outerKey);
      var innerArray = PRO[outerKey];
      if (outerKey === "coffee") {
         coffee.push(...innerArray);
      } else if (outerKey === "bundles") {
         bundles.push(...innerArray);
       }else if (outerKey === 'goods'){
         goods.push(...innerArray);
      }
      else if (outerKey === 'gears'){
         gears.push(...innerArray)
      }
      tmp.push(...innerArray);
    }
  }
//   console.log(tmp)
export const PRODUCTS = tmp;
export const COFFEE = coffee;
export const BUNDLES = bundles;
export const GEARS = gears;
export const GOODS = goods;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const products = [];
// const coffee = [];
// const bundles = [];
// const goods = [];
// const gears = [];

// export const MyComponent = () => {
//   const [jsonData, setJsonData] = useState(null);

//   useEffect(() => {
//     axios.get("/get_json_data").then(response => {
//       setJsonData(response.data);
//       const jsonData = response.data;

//       for (var outerKey in jsonData){
//         if (jsonData.hasOwnProperty(outerKey)) {
//            // console.log("Outer Key:", outerKey);
//            var innerArray = jsonData[outerKey];
//            if (outerKey === "coffee") {
//                 coffee.push(...innerArray);
//             } else if (outerKey === "bundles") {
//                 bundles.push(...innerArray);
//             }else if (outerKey === 'goods'){
//                 goods.push(...innerArray);
//             }
//             else if (outerKey === 'gears'){
//                 gears.push(...innerArray)
//            }
//            products.push(...innerArray);
//          }
//        }
//     });
//   }, []);
  
//   if (jsonData === null) {
//     return <div>Loading...</div>;
//   }
// //   console.log(products)
//   // Use jsonData to render your component

//   return (
//     <div>
//       {/* ... render your component using the jsonData ... */}
//     </div>
//   );
// };

// export default MyComponent;
// export const COFFEE = coffee;
// export const BUNDLES = bundles;
// export const GOODS = goods;
// export const GEARS = gears;
// export const PRODUCTS = products;


