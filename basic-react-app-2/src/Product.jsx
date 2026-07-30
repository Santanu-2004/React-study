import "./Product.css";

//conditions 
// export default function Product({title,price}){
//     return (
//         <div className="product">
//           <h1>{title}</h1>
//           <h5>price : {price}</h5>
//           {price > 25000? <p>Discount 5%</p> : null}
//         </div>
//     );
// }

// //dynamic styling 
// export default function Product({title,price}){
//     let styles = {backgroundColor : price >= 30000 ? "pink" : ""};
//     return (
//         <div className="product" style={styles}>
//           <h1>{title}</h1>
//           <h3>price : {price}</h3>
//           {price > 25000? <p>Discount 5%</p> : null}
//         </div>
//     );
// }

//amazon card craetion Practice
import Price from "./Price";

export default function Product({title,idx}){
    let oldPrices = ["12,580","45,805","16,547","999"];
    let newPrices = ["11,999","43,199","14,743","875"];
    let styles = {};
    return (
        <div className="product" style={styles}>
          <h1>{title}</h1>
          {/* <p>{description}</p> */}
          <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}