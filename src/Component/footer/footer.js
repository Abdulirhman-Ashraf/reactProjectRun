import React from "react";
import "./footer.css"
const footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row m-auto" >
            <div className="col-md-4 col-lg-4"></div>
            <div className="col-md-1 col-lg-1"><a href="#">Register</a></div>
            <div className="col-md-1 col-lg-1"> <a href="#">Forum</a></div>
            <div className="col-md-1 col-lg-1"><a href="#">Affiliate</a>  </div>
            <div className="col-md-1 col-lg-1"><a href="#">FAQ</a></div>
            <div className="col-md-4 col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 right ">© 2021. Foodera. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default footer;
