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

    const addFromCartHandler = (item) => {
        const existingItemIndex = items.findIndex((i) => i.id === item.id);

        if (existingItemIndex !== -1) {
            const existingItem = items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: Number(existingItem.quantity) + 1
            };

            const updatedItems = [...items];
            updatedItems[existingItemIndex] = updatedItem;
            setItems(updatedItems);
        } else {
            setItems([...items, item]);
        }
    };

    const removeItemFromCartHandler = (id) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((i) => i.id === id);
            const existingItem = prevItems[existingItemIndex];
            const updatedItems = [...prevItems];

            if(existingItem.quantity === 1) {
                updatedItems.splice(existingItemIndex, 1);
            }
            else {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1
                }
                updatedItems[existingItemIndex] = updatedItem;
            }
            return updatedItems
        })
    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        addFromCart: addFromCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;