import React from 'react';
import '../style/FeaturesSection.css'

export const FeaturesSection = () => (
  <div class="features-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="features-img">
                        <img src="img/features-phone.png" alt="Features Img"></img>
                        <div class="red-circle">
                            <img src="img/circle-rb.png" alt="Red"></img>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="features-content">
                        <div class="section-header">
                            <p>features</p>
                            <h2>Uifry Premium</h2>
                        </div>
                        <div class="features-item">
                            <div class="features-item-title">
                                <img src="img/icon1.png" alt="Icon"></img>
                                <h5>Budgeting Intervals</h5>
                            </div>
                            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        </div>
                        <div class="features-item">
                            <div class="features-item-title">
                                <img src="img/icon2.png" alt="Icon"></img>
                                <h5>Budgeting Intervals</h5>
                            </div>
                            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        </div>
                        <div class="features-item">
                            <div class="features-item-title">
                                <img src="img/icon3.png" alt="Icon"></img>
                                <h5>Budgeting Intervals</h5>
                            </div>
                            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
