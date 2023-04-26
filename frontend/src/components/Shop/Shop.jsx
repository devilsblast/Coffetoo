import React from "react";
import "./Shop.scss";
import useFetch from '../../hooks/useFetch';
import {NavLink} from 'react-router-dom';
const Shop = () => {
  const {loading, error, dataser} = useFetch(`http://localhost:1337/api/products?populate=*`);
if(loading){
  return <p>LOADING...</p>;
}
if(error){
return <p>ERROR...</p>;
}

return (
    <div className="div__margin shop">
        
    <div className="gallery">
    {dataser?.data.map((product) =>(
    <NavLink to={`/Product/${product.id}`} className="content">
      <img src={"http://localhost:1337"+product?.attributes?.picture?.data[0]?.attributes?.url} alt="product-coffee-1"/>
      <h3>{product.attributes.name}</h3>
      <p>{product.attributes.description}</p>
      <h6>₹ {product.attributes.price}</h6>
      <button class="shop-1">shop now</button>
    </NavLink>
  
    ))}
 </div>
    </div>
);
};

export default Shop;