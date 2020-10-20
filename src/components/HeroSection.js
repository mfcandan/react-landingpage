import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Welcome to Portfolio Site</h1>
            <p>This site created with React.js</p>
            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button 
                className="btns" 
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
