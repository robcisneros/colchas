import { Fragment } from "react";
import classes from "./Header.module.css";
import frontImage from "../../assets/sheeplogo.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Mary Shop</h1>
            <HeaderCartButton onClick={props.onShowCart} ></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={frontImage} alt='Don Borregon' />
        </div>
    </Fragment>
};

export default Header;