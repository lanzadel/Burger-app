import React from 'react';

import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
const logo = (props) => (
    <div>
        <img className={classes.Logo} src={BurgerLogo} alt="MyBurger" />
    </div>
);

export default logo;
