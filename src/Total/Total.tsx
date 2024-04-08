import React from "react";
import { useSelector } from 'react-redux';
import { useAppSelector } from "../redux/hooks";
import { round } from "../utils";

export function Total() {
    const total = useAppSelector(state => {
        const subtotal = state.products.reduce((acc, product) => {
            return acc + product.price * product.quantity;
        }, 0);
        const tax = subtotal * .13;
        const total = subtotal + tax;

        return {
            subtotal: round(subtotal),
            tax: round(tax),
            total: round(total)
        }
    })

    return <table className="bill">
        <tbody>
            <tr className="subtotal">
                <td className="label">Subtotal :</td>
                <td className="value">$ {total.subtotal}</td>
            </tr>
            <tr className="salestax">
                <td className="label">Sales tax :</td>
                <td className="value">$ {total.tax}</td>
            </tr>
            <tr className="total">
                <td className="label">Total :</td>
                <td className="value">$ {total.total}</td>
            </tr>
        </tbody>
    </table>;
}
