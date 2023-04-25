import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon.js'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../CartContext.js';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    let quantity = 0;
    cartCtx.items.forEach(item => {
        quantity = quantity + Number(item.quantity);
    })

    return (
        <button 
            className={classes.button}
            onClick={props.showCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {quantity}
            </span>
        </button>
    );
};

export default HeaderCartButton;