import React from "react";
import { Product } from "../Product/Product";

export function Cart({ products, increaseQuantity, decreaseQuantity }) {
    return (
        <ul className="cart">
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            ))}
        </ul>
    );
}
