import React from "react";
import "../Home/Home.scss";
import tc from "../assets/img/testimonial-coffee.png";

const HomeTestimonial = () => {
return (
    <section class="testimonial" id="testimonial">
    <div class="testimonial__bg section">
        <div class="testimonial__container container grid">
            <div class="testimonial__data">
                <h2 class="section__title">
                    People say money can't buy happiness. They Lie, 
                    Money buys Coffee, Coffee makes me Happy!
                </h2>

                <span class="testimonial__name">
                    - Tushar Paul, Deepak Singh  
                </span>
            </div>

            <img src={tc} alt="testimonial image" class="testimonial__img" />
        </div>
    </div>
</section>
    );
};

export default HomeTestimonial;