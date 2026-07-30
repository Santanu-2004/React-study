import "./ProductTab.css";
import Product from "./Product";

export default function ProductsTab(){
    return (
        <div className="product-collection">
        <Product title="Mobile" price={20000}/>
        <Product title="Laptop" price={40000}/>
        <Product title="Tablate" price={30000}/>
        <Product title="Headphones" price={2000}/>
        </div>
    );
}