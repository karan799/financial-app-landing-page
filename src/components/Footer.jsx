import React from 'react';
import '../style/Footer.css'

export const Footer = () => (
  <footer class="footer">
  <div class="container">
      <div class="row">
          <div class="col-md-3">
              <div class="footer-single-col">
                  <img src="/logo.svg" alt="Footer Logo"></img>
                  <div class="footer-contact">
                      <img src="/gmail-icon.png" alt="Gmail"></img>
                      <a href="#">2021kucp1120@iiitkota.ac.in</a>
                  </div>
                  <div class="footer-contact">
                      <img src="/phone-icon.png" alt="Gmail"></img>
                      <a href="#">7206511078</a>
                  </div>
              </div>
          </div>
          <div class="col-md-2">
              <div class="footer-single-col">
                  <h4>Links</h4>
                  <a href="#">Home</a>
                  <a href="#">About Us</a>
                  <a href="#">Bookings</a>
                  <a href="#">Blog</a>
              </div>
          </div>
          <div class="col-md-2">
              <div class="footer-single-col">
                  <h4>Legal</h4>
                  <a href="#">Terms Of Use</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookie Policy</a>
              </div>
          </div>
          <div class="col-md-2">
              <div class="footer-single-col">
                  <h4>Product</h4>
                  <a href="#">Take tour</a>
                  <a href="#">Live chat</a>
                  <a href="#">Reveiws</a>
              </div>
          </div>
          <div class="col-md-3">
              <div class="footer-single-col">
                  <h4>Newsletter</h4>
                  <a href="#">Stay up to date</a>
                  <div class="footer-form">
                      <form action="#">
                          <input type="email" name="" id="" placeholder="Your Email"></input>
                          <a href="#" class="button">Subscribe</a>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-bottom">
          <p>Copyright KARANBHATIA all rights reserved</p>
      </div>
  </div>
</footer>
);
