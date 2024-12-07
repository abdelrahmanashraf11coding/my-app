import React from "react";
import "./Portfolio.css";
import cart from "./assets/img14.jpg";
import cover from "./assets/img04.png";
import photo from "./assets/img17.jpg";
import photo2 from "./assets/img18.jpg";
import photo3 from "./assets/img19.jpg";
import photo4 from "./assets/img20.jpg";
import cover21 from "./assets/img21.jpg"
import cover22 from "./assets/img22.jpg"
import cover23 from "./assets/img23.jpg"
import cover24 from "./assets/img24.jpg"

const Portfolio = () => {
  return (
    <>
      <section className="cart-all">
        <div className="card1">
          <h1>APERFECT SPOT</h1>
          <p>
            Proin gravida nibh velit auctor aliquet . Aenean sollictudin , lorem
            quis bible ndum auctor , nisi elit conse quat . Proin gravida nibh
            vel velit auctor ali qute . Aen ean sol lici tudin , lorem quis
            biben dum.
          </p>
          <button className="out-line">READ MORE</button>
        </div>
        <div>
          <img src={cart} alt="" />
        </div>
      </section>
      <div className="photo-cover">
        <img className="IMG" src={cover} alt="" />
        <h1>AN EXPERIENCE DELIVERED</h1>
        <p>
          Proin gravida nibh velit auctor aliquet . Aenean sollictudin , lorem
          quis bible ndum auctor , nisi elit conse quat . Proin gravida nibh vel
          velit auctor aliqute . Aen ean sol lici tudin , lorem quis biben dum.
        </p>
        <p className="pp">HELEN MALONE</p>
      </div>
      <div className="mam">
        <h1>OUR TEAM OF EXPERTS</h1>
      </div>
      <section className="imff">
        <div className="all-img-P">
          <img src={photo} alt="" />
          <img src={photo2} alt="" />
          <img src={photo3} alt="" />
          <img src={photo4} alt="" />
        </div>
        <hr />
      </section>
      <section class="team">
        <h2>Wonderful Gift</h2>
        <h3>Our Team of Experts</h3>

        <div class="team-members">
          <div class="member">
            <img src={photo} alt="Mason Robinson" />
            <h4>Mason Robinson</h4>
            <p>Florist</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="member">
            <img src={photo2} alt="Amber Green" />
            <h4>Amber Green</h4>
            <p>Designer</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="member">
            <img src={photo3} alt="Amely Hunter" />
            <h4>Amely Hunter</h4>
            <p>Florist</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div class="member">
            <img src={photo4} alt="Amber Green" />
            <h4>Amber Green</h4>
            <p>Founder</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flower-page">
        <div className="page">
          <img src={cover21} alt="" />
        </div>
        <div>
          <img src={cover22} alt=""/>
        </div>
        <div>
          <img src={cover23} alt="" />
        </div>
        <div>
          <img src={cover24} alt="" />
        </div>
      </section>
      <section className="subi">
      <div>
      <p>SUBSCRIBE TO OUR WEEKLY NEWSLETTER </p>
      </div>
      <div className="subscribe">
        <input type="email" placeholder="Your E-mail address"/>
        <button>SEND MESSAGE </button>
      </div>
      </section>
    </>
  );
};

export default Portfolio;
