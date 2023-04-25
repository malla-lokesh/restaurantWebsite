import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../CartContext';

const Cart = props => {

    const cartCtx = useContext(CartContext);

    let totalAmount = 0;

    for (const item of cartCtx.items) {
        totalAmount += item.price * item.quantity;
    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => {
            return <li key={item.id}>Name: {item.name} Price: {item.price} Quantity: {item.quantity}</li>})
    }</ul>;

    return(
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button 
                    className={classes['button--alt']}
                    onClick={props.hideCart}
                >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;