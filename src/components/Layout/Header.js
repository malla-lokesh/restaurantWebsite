import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton showCart={props.showCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Delicious food!" />
            </div>
        </React.Fragment>
    );
};

export default Header;