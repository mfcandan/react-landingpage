import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    This site is an example for resonsive web app for react.js
                </p>
                <p className="footer-subscription-text">
                    Every buttons, cards, contents are component
                </p>
                <form>
                    <input type="email" name="email" placeholde="Your email" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorship</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/p">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="socail-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo">
                        Fatih Candan <i className="fas fa-anchor" />
                    </Link>
                </div>
                <small className="website-rights">M. Fatih Candan Frontend Developer - 2020</small>
                <div className="social-icons">
                    <Link 
                    className="social-icon-link facebook"
                    to='/'
                    target="_blank"
                    aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link 
                    className="social-icon-link instagram"
                    to='/'
                    target="_blank"
                    aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link 
                    className="social-icon-link youtube"
                    to='/'
                    target="_blank"
                    aria-label="youtube"
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link 
                    className="social-icon-link twitter"
                    to='/'
                    target="_blank"
                    aria-label="twitter"
                    >
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link 
                    className="social-icon-link linkedin"
                    to='/'
                    target="_blank"
                    aria-label="linkedin"
                    >
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default Footer
