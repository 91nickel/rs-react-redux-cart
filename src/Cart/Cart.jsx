import React from "react";
import { useSelector } from 'react-redux';
import { Product } from "../Product/Product";

export function Cart() {
    const products = useSelector(state => state.products);
    
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
