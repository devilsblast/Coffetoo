import "./Home.scss";
import React from 'react';
import ac from "../assets/img/about-coffee.png";

const HomeAbout = () => {
    return (
        <section class="about" id="about">
                <div class="about__bg section">
                    <div class="about__container container grid">
                        <div class="about__data">
                            <h2 class="section__title">
                                Our History
                            </h2>
                            <p class="about__description">
                                We make and grow the best coffee in India, accompanying
                                families since 2069, with professtional workers who
                                harvest, collect and select the coffee with quality 
                                work, thus providing exquisite coffee to enjoy together
                                as a family.
                            </p>
                        </div>

                        <img src={ac}alt="about image" class="about__img" />
                    </div>
                </div>
            </section>
    );
};

export default HomeAbout;