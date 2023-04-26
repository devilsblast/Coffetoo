import "./Home.scss";
import React from 'react';
import hct from "../assets/img/home-coffee-title.png"; 
import hc from "../assets/img/home-coffee.png";
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'

const HomeUpper = () => {
return (
    <section class="home section" id="home">
                <div class="home__container container grid">
                    <div class="home__data">
                        <h3 class="home__subtitle">
                            EXCETIONAL QUALITY
                        </h3>
                        <h1 class="home__title">
                            It's time for a <br />
                            good coffee
                            <img src={hct} alt="home image" />
                        </h1>

                        <p class="home__description">
                            Each select coffee bean reflects out commitment 
                            to Indian coffee growers, who bring the best 
                            select coffee to your table.
                        </p>
                        <NavLink to="/Shop">
                        <a href="#" class="button">
                            Shop Now <i class="ri-arrow-right-s-line"></i>
                        </a>
                        </NavLink>
                    </div>
                    <img src={hc} alt="home image" class="home__img" />
                </div>
            </section>
);
};

export default HomeUpper;