import Product from "./Product";

export default function ProductsTab(){
    return (
        <>
        <Product title="Mobile" price={20000}/>
        <Product title="Laptop" price={40000}/>
        </>
    );
}