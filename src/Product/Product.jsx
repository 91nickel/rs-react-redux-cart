import React, { memo, useContext } from "react";
import { ProductsContext } from "../ProductsContext";

export const Product = memo(({ product }) => {
    const { increaseQuantity, decreaseQuantity } = useContext(ProductsContext);

    return (
        <li className="product">
            <div className="product-preview">
                <div className="thumbnail">
                    <img
                        className="image"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <div className="product-paper">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">$ {product.price}</div>
                </div>
            </div>
            <div className="product-quantity">x{product.quantity}</div>
            <div className="product-interactions">
                <div className="button plus" onClick={() => increaseQuantity(product.id)}>+</div>
                <div className="button minus" onClick={() => decreaseQuantity(product.id)}>-</div>
            </div>
        </li>
    );
})
