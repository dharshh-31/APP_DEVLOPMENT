import React from "react";
import "../membership/membership.css";
import Footer from "../footer/Footer";

const Pricing = () => {
  return (
    <section id="membership">
      <div className="membership-container">
          <h1>
            Better The Diet - <span>You are what you eat</span>
          </h1>
          <h2 className="plans-h2">Diet plans so don’t be fast heap, easy, or fake</h2>

        <div className="membership-cards">
          <div className="membership-card">
            <p className="price">Balanced plan</p>
            <p className="per_month">HARD </p>
            <ul>
              <li> 2500 calories</li>
              <li> 100 g protein x bw</li>
              <li>  vegetables</li>
            </ul>
            
          </div>

          <div className="membership-card-strike">
            <p className="price">Moderate</p>
            <p className="per_month">Balanced DIET</p>
            <ul>
              <li> calories 2000</li>
              <li> vitamin d rich food</li>
              <li>  NO oil</li>
            </ul>
            
          </div>

          <div className="membership-card">
            <p className="price">Pro</p>
            <p className="per_month">high protein</p>
            <ul>
              <li>20G protein x wt</li>
              <li>1300 calories</li>
              <li>3x vEGIES</li>
              <li>low fats</li>
              <li>water  fruits</li>
            </ul>
          </div>

        </div>
          
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
