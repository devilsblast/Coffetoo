import "./Header.scss";
import logo_nav from "../assets/img/logo.png";
import {HiHome} from "react-icons/hi";
import {AiFillShop} from "react-icons/ai"
import {RiBookMarkFill, RiMessage3Fill,RiShoppingCartFill} from "react-icons/ri";
import {NavLink} from "react-router-dom";
import React, { useContext } from 'react';
import Cart from "../Shop/Cart";
import { useState } from "react";
import { Context } from "../../utils/Context";

 
const Header = () => {
    const {cartCount} = useContext(Context)
    const [showCart, setShowCart] = useState(false);

return(
    <>
    <header class="header" id="header">
            <div class="header__border"></div>

            <nav class="nav container">
                <NavLink to="/">
                <a href="#footer" className="nav__logo">
                    <img src={logo_nav} alt="logo" />
                    Coffetto
                </a>
                </NavLink>
               
                <div class="nav__menu">
                    <ul class="nav__list">

                        <NavLink to="/">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">
                                    <HiHome className="i"/>
                                    <span>Home</span>
                                </a>
                            </li>
                        </NavLink>

                        <NavLink to="/Shop">
                            <li class="nav__item">
                                <a  href="#Shop" class="nav__link">
                                    <AiFillShop className="i"/>
                                    <span>Shop</span>
                                </a>
                            </li>
                        </NavLink>

                        
                            <li class="nav__item">
                                <a href="#about" class="nav__link">
                                    <RiBookMarkFill className="i"/>
                                    <span>About</span>
                                </a>
                            </li>
                        

                        <li class="nav__item">
                            <a href="#footer" class="nav__link">
                                <RiMessage3Fill className="i"/>
                                <span>Social</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="shop__logo" onClick={() => setShowCart(true)}>
                    <RiShoppingCartFill className="s__logo"/>
                    {!!cartCount && <span className="shop__num">{cartCount}</span>}
                </div>
            </nav> 
        </header>
        
        {showCart && <Cart closeCart ={setShowCart} />}
        </>
);
};

export default Header;

