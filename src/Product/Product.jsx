import React, { memo } from "react";
import { useDispatch } from 'react-redux'
import { decreaseQuantityActionCreator, increaseQuantityActionCreator } from "../redux/actions";

export const Product = memo(({ product }) => {
    const dispatch = useDispatch();

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
                <div
                    className="button plus"
                    onClick={() => dispatch(increaseQuantityActionCreator(product.id))}
                >
                    +
                </div>
                <div
                    className="button minus"
                    onClick={() => dispatch(decreaseQuantityActionCreator(product.id))}
                >
                    -
                </div>
            </div>
        </li>
    );
})
