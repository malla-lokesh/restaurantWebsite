import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../CartContext';

const Cart = props => {

    const cartCtx = useContext(CartContext);

    let totalAmount = 0;

    for (const item of cartCtx.items) {
        totalAmount += item.price * Number(item.quantity);
    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => {
            return <li key={item.id}>
                <div className={classes.nameAndPrice}>
                    <span className={classes.itemName}>{item.name}</span>
                    <span className={classes.itemPrice}>{`${(item.price * item.quantity).toFixed(2)}`}</span>
                </div>
                <div className={classes.quantityAndButtons}>
                    <span>{item.price}</span>
                    <span className={classes.quantity}>x {item.quantity}</span>
                    <div className={classes.buttons}>
                        <button className={classes.positive} onClick={() => cartCtx.addFromCart(item)}>+</button>
                        <button className={classes.negative} onClick={() => cartCtx.removeItem(item.id)}>-</button>
                    </div>
                </div>
                <hr/>
            </li>})
    }
    </ul>;

    return(
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`${totalAmount.toFixed(2)}`}</span>
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