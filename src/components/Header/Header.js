import React from "react";
import "./Header.css"
import logo from "../../assets/logo.png"
export function Header(){
    return(
        <div className="header">
            <img src={logo} alt="logo" className="logo" />

            <ul className="header-manu">
                <li>Home</li>
                <li>Programs</li>
                <li>About us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
}