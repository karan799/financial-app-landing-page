import React from 'react';
import '../style/HeroSection.css'

export const HeroSection = () => {
  return (
    <sdiv class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="hero-left-content">
                        <h1>Make The Best Financial Decisions</h1>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div class="hero-btns">
                            <a href="#" class="button get-started">Get Started <i class="fa-solid fa-arrow-right-long"></i></a>
                            <a href="#" class="button watch-video"><i class="fa-regular fa-circle-play"></i> Watch Video</a>
                        </div>
                        <div class="hero-left-img">
                            <img src="img/hero-left-img.png" alt="Hero Img"></img>
                        </div>
                        <div class="red-circle">
                            <img src="img/circle-rt.png" alt="Red"></img>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="hero-img">
                        <img src="img/hero-img.png" alt="Hero img"></img>
                        <div class="red-circle hero-right">
                            <img src="img/circle-hero-right.png" alt="Red"></img>
                        </div>
                        <div class="hero-img-ring">
                            <img src="img/ring.png" alt="Ring"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </sdiv>
  );
};

export default HeroSection;
