import "./Home.scss";
import React from 'react';
import {FaRupeeSign} from "react-icons/fa";
import useFetch from '../../hooks/useFetch';
import {NavLink} from 'react-router-dom';


const HomeProduct = () => {
    const {loading, error, dataser} = useFetch(`http://localhost:1337/api/home-products?populate=*`);

    return (
            <section class="products" >
                <div class="products__bg section">
                    <div class="products__container container grid">
                        <div class="products__data">
                            <a href="#about" class="products__button">
                                Scroll Down <i class="ri-arrow-down-s-line"></i>
                            </a>

                            <p class="products__description">
                                We strive to form deep partnerships with farmers 
                                from all over the world to create perspective
                                together and form healthy working relationships
                                build on trust and respect.
                            </p>
                        </div>

                        <div class="products__content">
                        {dataser?.data.map((home_product) =>(
                            <artricle key={home_product?.id} class="products__card">
                                <NavLink to={`/Product/${home_product?.id}`}>
                                <img src={"http://localhost:1337"+home_product?.attributes?.image?.data?.attributes?.url} alt="products item" class="products__img" />
                                </NavLink>
                                
                                <h3 class="products__name">{home_product?.attributes?.Name}</h3>
                                <span class="products__price"><FaRupeeSign/>{home_product?.attributes?.Price}</span>
                            </artricle>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default HomeProduct;