import React from "react";
import "./header.css";
const Header = ()=>{
    return(
<header id="home">
    <div className="container">
        <div className="row">
        <div className="col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <a className="btn" href="#Explore">order now</a>
            <a className="btn"  href="#about">learn more </a>
        </div>
        <div className="col-md-6"></div> 
        </div>
    </div>
</header>
    )
}
export default Header;