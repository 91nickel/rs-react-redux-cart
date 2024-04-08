import { useAppSelector } from "../redux/hooks";

export const OrderModal = () => {
    const show = useAppSelector(state => state.order.confirmed);
    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Order confirmed</h2>
                <div className="main-button">Perfect!</div>
            </div>
        </div>
    );
}
