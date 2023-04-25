import { useContext } from 'react';

import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import CartContext from '../../../CartContext';

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addItemToCart = (event) => {
        event.preventDefault();
        let quantity = document.getElementById('amount' + props.item.id).value;
        cartCtx.addItem({...props.item, quantity: quantity});
    }

    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount' + props.item.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={addItemToCart}>+ Add</button>
        </form>
    )
};

export default MealItemForm;