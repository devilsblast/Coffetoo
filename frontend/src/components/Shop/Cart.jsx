import React, { useContext } from 'react';
import "./Cart.scss";
import {BsArrowLeft} from "react-icons/bs";
import {TbCurrencyRupee} from "react-icons/tb";
import {RiCloseFill} from "react-icons/ri";
import emptyCart from "../assets/img/empty-cart.svg";
import {Context} from "../../utils/Context";
import { NavLink } from 'react-router-dom';



const Cart = ({closeCart}) =>  {
const {cartItems, handleRemoveFromCart, cartSubTotal} = useContext(Context);
    

    let cartitem ="cart__items ";

cartitem+=(!cartItems.length)?"mt":"";
    

  return (
    <div className="cart__section">
        <div className="cart__heading">
            <BsArrowLeft className='back__icon' onClick={() => closeCart(false)}/>
            <p>My Cart</p>
        </div>
        
        <div className={cartitem}>
            {!cartItems?.length && <div className="empty">
                <img src={emptyCart} alt="empty-cart" />
                <p>Go grab some items</p>
                <NavLink to="/Shop"className="checkout" onClick={() => closeCart(false)}>
                <div>SHOP NOW</div>
            </NavLink> 
            </div>}
            {!!cartItems.length && <>
                {cartItems.map(item => (
                    <div key={item.id} className="cart__item" >
                    <img src={"http://localhost:1337"+item.attributes.picture.data[0].attributes.url} alt="product" />
                    <div className="smsc">
                    <div className='pd'>
                        <h4>{item.attributes.name}</h4>
                        <p>Quantity x {item.attributes.quantity}</p>
                    </div>
                    <h5><TbCurrencyRupee className='cur'/><div>{item.attributes.price * item.attributes.quantity}</div></h5>
                    </div>
                    
                    <div className='cross' onClick={() => handleRemoveFromCart(item)}><RiCloseFill/></div>
                </div>
                ))}
                </>}
          </div>

        {!!cartItems.length && <div className="cart__total">
            <div className='total__border'></div>
            <div className='total'>
                <p>TOTAL<span>(Incl. Taxes)</span></p> 
                <span className='price'><TbCurrencyRupee className='icon'/>{cartSubTotal}</span>
            </div>
          
            <div className="checkout">
                <div>CHECKOUT </div>
            </div>   
        </div>}

        </div>

    
  );
};

export default Cart;