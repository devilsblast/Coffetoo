import React from "react";
import "../Home/Home.scss";
import cbb from "../assets/img/coffee-beans-bg.png";
import scl from "../assets/img/steps-curve-line.svg";
import sgc from "../assets/img/steps-green-coffee.png";
import scb from "../assets/img/steps-coffee-beans.png";
import sgrc from "../assets/img/steps-ground-coffee.png";

const HomeSteps = () => {
return (
    <section class="steps" id="steps">
                <div class="steps__bg section">
                    <h2 class="section__title">
                        Steps of manufacturing our products
                    </h2> 

                    <div class="steps__container container grid">
                        <img src={cbb} alt="steps image" class="steps__bg-img" />

                        <div class="steps__content">
                            <img src={scl} alt="steps image" class="steps__border" />

                            <div class="steps__card">
                                <div class="steps__circle">
                                    <div class="steps__subcircle">
                                        01
                                    </div>

                                    <img src={sgc} alt="steps image" class="steps__img" />
                                </div>

                                <p class="steps__description">
                                    Harvest occurs annually when the coffee 
                                    beans reach matuity and are collected
                                    for precessing.
                                </p>
                            </div>

                            <div class="steps__card steps__card-move">
                                <div class="steps__circle">
                                    <div class="steps__subcircle">
                                        02
                                    </div>

                                    <img src={scb} alt="steps image" class="steps__img" />
                                </div>

                                <p class="steps__description">
                                    The beans are dried using a wet or dry 
                                    technique, depending on the taste we want
                                    to obtain.
                                </p>
                            </div>

                            <div class="steps__card">
                                <div class="steps__circle">
                                    <div class="steps__subcircle">
                                        03
                                    </div>

                                    <img src={sgrc} alt="steps image" class="steps__img" />
                                </div>

                                <p class="steps__description">
                                   The coffee is roasted and acquires 
                                   its flavor by processing the grain
                                   in ovens. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
);

};

export default HomeSteps;