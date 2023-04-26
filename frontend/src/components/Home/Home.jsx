import "./Home.scss";
import React from 'react';
import HomeUpper from "./HomeUpper";
import HomeProduct from "./HomeProduct";
import HomeAbout from "./HomeAbout"
import HomeSteps from "./HomeSteps";
import HomeTestimonial from "./HomeTestimonial";
const Home = () => {
    return (
        <main className="main">
            <HomeUpper/>
            <HomeProduct/>
            <HomeAbout/>
            <HomeSteps/>
            <HomeTestimonial/>
        </main>
        
    );
};

export default Home;