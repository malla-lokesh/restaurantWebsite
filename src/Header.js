import React from "react";
import './Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="restName">
                    ReactMeals
                </div>
                <div className="cart">
                    <div className="cartIcon">
                        <i className="bi bi-cart4"></i>
                    </div>
                    <div className="cartName">
                        Your Cart
                    </div>
                    <div className="cartCount">
                        0
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;