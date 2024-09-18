import React from "react";
import Header from "./header";
import about from "./../../Images/about 1.jpg";
import about2 from "./../../Images/about 2.png";
import "./Home.css";
import Data from "./../../Data";
import Carousel from "react-bootstrap/Carousel";
import man from "./../../Images/man.jpg";
import woman from "./../../Images/woman.jpg";

const Home = () => {
  const dataItems = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
          <hr />
          <button>order now</button>
        </div>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="members">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h5>saving</h5>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <h5>Photos</h5>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h5>Rockets</h5>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h5>Globes</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="pride" id="about">
        <div className="container">
          <div className="row m-auto">
            <div className="col-md-6">
              <img src={about} alt="about us image" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>learn more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="about2">
        <div className="container">
          <div className="row m-auto">
            <div className=" col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>learn more</button>
            </div>
            <div className="col-md-6">
              <img src={about2} alt="image" />
            </div>
          </div>
        </div>
      </section>
      <section className="watch">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <h2>
                When a man's stomach is full it makes no
                <br />
                difference whether he is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <a href="#">watch our story</a>
            </div>
          </div>
        </div>
      </section>
      <section className="Explore " id="Explore">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row">{dataItems}</div>
        </div>
      </section>
      <section className="slider" id="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel data-bs-theme="dark" className="carousel">
                <Carousel.Item>
                  <img src={man} />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={woman} />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="question" id="ques">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h5>~ Is Foodera Bread really baked fresh each day?</h5>
              <h6>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </h6>
            </div>
            <div className="col-lg-6 col-md-6">
              <h5>~ Do you bake breads containing animal fats or products?</h5>
              <h6>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h5>~ Can I order your products online?</h5>
              <h6>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </h6>
            </div>
            <div className="col-lg-6 col-md-6">
              <h5>~ When are you opening a shop near me?</h5>
              <h6>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="fresh">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h3>Baked fresh daily by bakers with passion.</h3>
            </div>
            <div className="col-lg-6 col-md-6">
              <button>learn more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="Subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                Hurry up! Subscribe our newsletter
                <br />
                and get 25% Off
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <p>
                Limited time offer for this month. No credit card required. f
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <input type="email" placeholder="email address here"></input>
              <button>subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
