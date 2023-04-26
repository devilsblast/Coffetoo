import "./Footer.scss"
import coffee_beans_bg from "../assets/img/coffee-beans-bg.png";
import logo from "../assets/img/logo.png";
import {BsFacebook, BsLinkedin, BsInstagram, BsYoutube, BsTwitter} from "react-icons/bs";
import React from 'react';

const Footer = () => {
return (
    <footer class="footer" id="footer">
            <div class="footer__bg">
                <img src={coffee_beans_bg} alt="footer image" class="footer__bg-img" />
                <div class="footer__container container grid">
                    <div class="footer__data grid">
                        <div>
                            <a href="#" class="footer__logo">
                                <img src={logo} alt="logo" />
                                Coffetto
                            </a>

                            <h3 class="footer__title">
                                Sign up for our newsletter
                            </h3>
                        </div>

                        <form action="" class="footer__form grid">
                            <input type="email" placeholder="Enter e-mail address" class="footer__input" />

                            <button class="button footer__button" type="submit">
                                Subscribe <i class="ri-arrow-right-s-line"></i>
                            </button>

                            <p class="footer__description">
                                We don't care about your data.
                                Read our <a href="assets/html/privacy_policy.html" class="footer__privacy">Privacy Policy</a>
                            </p>
                        </form>
                    </div>

                    <div class="footer__content grid">
                        <div class="footer__social">
                            <a rel="noopener" href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                                <BsFacebook className="i"/>
                            </a>

                            <a rel="noopener" href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                                <BsInstagram className="i"/>
                            </a>
                            
                            <a  rel="noopener" href="https://www.youtube.com/" target="_blank" class="footer__social-link">
                                <BsYoutube className="i"/>
                            </a>

                            <a  rel="noopener" href="https://www.linkedin.com/" target="_blank" class="footer__social-link">
                                <BsLinkedin className="i"/>
                            </a>

                            <a  rel="noopener" href="https://www.twitter.com/" target="_blank" class="footer__social-link">
                                <BsTwitter className="i"/>
                            </a>
                        </div>

                        <span class="footer__copy">
                            &#169; Copyright Tushar Paul & Deepak Singh. All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </footer>
);
};



export default Footer;
