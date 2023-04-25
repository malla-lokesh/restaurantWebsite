import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const addItemToCartHandler = (item) => {
        const existingItemIndex = items.findIndex((i) => i.id === item.id);

        if (existingItemIndex !== -1) {
            const existingItem = items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: Number(existingItem.quantity) + Number(item.quantity)
            };

            const updatedItems = [...items];
            updatedItems[existingItemIndex] = updatedItem;
            setItems(updatedItems);
        } else {
            setItems([...items, item]);
        }
    };

    const removeItemFromCartHandler = (id) => {

    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;