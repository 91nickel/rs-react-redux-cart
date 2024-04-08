import React, { useContext } from "react";
import { Product } from "../Product/Product";
import { ProductsContext } from "../ProductsContext";

export function Cart() {
    const {products} = useContext(ProductsContext);
    return (
        <ul className="cart">
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))}
        </ul>
    );
}
