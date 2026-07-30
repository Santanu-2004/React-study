import "./ProductTab.css";
import Product from "./Product";
import Price from "./Price";

export default function ProductsTab(){
    return (
        <div className="product-collection">
        <Product title="Mobile" idx={0} />
        <Product title="Laptop" idx={1} />
        <Product title="Tablate" idx={2} />
        <Product title="Headphones" idx={3}/>
        </div>
    ); 
}