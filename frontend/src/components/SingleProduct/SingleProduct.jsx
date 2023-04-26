import "./SingleProduct.scss";
import React, { useState,useContext} from 'react';
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {TbCurrencyRupee} from "react-icons/tb";
import {Context} from "../../utils/Context";
import { TodoWrapper } from "./Comments/TodoWrapper";


const SingleProduct = () =>{
 
    const {id} = useParams();
    const {loading, error, dataser} = useFetch(`http://localhost:1337/api/products?populate=*&[filters][id]=${id}`);
    const[quantity, setQuantity] = useState(1);
    const  {handleAddToCart}= useContext(Context);
    const increment =() => {
        setQuantity(prevState => prevState + 1);
    };
    
    const decrement =() => {
        setQuantity(prevState => {
            if(prevState === 1) return 1;
            return prevState-1;
        });
    };
    if(loading){
        return <p>LOADING...</p>;
      }
      if(error){
      return <p>ERROR...</p>;
      }

const ser=dataser?.data[0];
    return (
        <div className="div__margin">
            <div className="product__bg">
                <div className="product__card">
                    <div className="proc">
                    <div className="product__img">
                        <img src={'http://localhost:1337'+ser?.attributes?.picture?.data[0]?.attributes?.url} alt="product coffee" />
                    </div>
                    
                    <div className="product__details">
                        <h4 className="title">Coffetto</h4>
                        <h3>{ser?.attributes?.name}</h3>
                        
                        <span className="price"><TbCurrencyRupee className="logo"/>{ser?.attributes?.price}</span>
                        <div className="description">
                            <h4>Description</h4>
                        <p>{ser?.attributes?.description}</p>
                        </div>
                        
                        <div className="buttons">
                            <span className="inc-dec" role="button" onClick={increment}>+</span>
                            <span className="number">{quantity}</span>
                            <span className="inc-dec" onClick={decrement} role="button" >-</span>
                        </div>
                        <div className="button" onClick={() => {
                        handleAddToCart(dataser?.data[0],quantity)
                        setQuantity(1)}}>
                            <div>ADD TO CART</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
<div className="comments__container">
    <h1 className="comment__heading">Comments</h1>
<TodoWrapper className="todowrapper" idd={id} nama={ser?.attributes?.name}/>
</div>
            
        </div>
    );
};

export default SingleProduct;