import React from "react";
import "./Hero.css";
import { Header } from "../Header/Header";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

export function Hero() {
  return (
    <div className="hero">
      <div className="left-side">
        <Header />

        <div className="ads">
          <div></div>
          <span>The best gym in town</span>
        </div>
        <div className="header-text">
          <div>
            <span className="stroke-text">Sharp </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              I here we help to shape and build your ideal body and live up your
              life to the fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+2</span>
            <span>Expert Coach</span>
          </div>
          <div>
            <span>+562</span>
            <span>Members</span>
          </div>
          <div>
            <span>+204</span>
            <span>Facities</span>
          </div>
        </div>
        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-side">
        <button className="btn">Join now</button>

        <div className="heart-rate">
          <img src={Heart} alt="Heart" />
          <span>Heart rate </span>
          <span>74 bpm</span>
        </div>

        <img src={hero_image} alt="Hero image" className="hero-image" />
        <img src={hero_image_back} alt="Hero image back" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt="Calories" />
          <div>
          <span>Calories burned </span><span>132 kcal</span>
          
          </div>
        </div>

      </div>
    </div>
  );
}
