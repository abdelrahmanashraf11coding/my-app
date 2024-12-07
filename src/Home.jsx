import React from "react";
import "./Home.css";
import img from "./assets/img05.png";
import img2 from "./assets/img06.png";
import img3 from "./assets/img07.png";
import flower1 from "./assets/img08.jpg";
import flower2 from "./assets/img09.jpg";
import flower3 from "./assets/img10.jpg";
import flower4 from "./assets/img11.jpg";

const Home = () => {
  return (
    <>
      <section className="box-all" id="About">
        <div className="box1 box">
          <img src={img} alt="" />
          <h1>ready to be impressed</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.
          </p>
        </div>

        <div className="box2 box">
          <img src={img2} alt="" />
          <h1>ready to be impressed</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.
          </p>
        </div>
        <div className="box3 box">
          <img src={img3} alt="" />
          <h1>ready to be impressed</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo.
          </p>
        </div>
      </section>
      <section className="all-img">
        <div className="text">
          <h1> Welcome ful </h1>
          <h2>OUR WORNDERFU ARRANGEMENTS</h2>
        </div>
        <div className="content">
          <div>
            <img src={flower1} alt="" />
            <h1>ORANGE SILK</h1>
            <p>$330</p>
          </div>
          <div>
            <img src={flower2} alt="" />
            <h1>DARK FOREST</h1>
            <p>$250</p>
          </div>
          <div>
            <img src={flower3} alt="" />
            <h1>PEARL ROSES</h1>
            <del>$125</del>
            <span>$250</span>
          </div>
          <div>
            <img src={flower4} alt="" />
            <h1>RUSTIC DECOR</h1>
            <p>$350</p>
          </div>
        </div>
      </section>
      <div className="bacg"> </div>
      <hr className="boder" />
      <section className="page">
      <div className="timr">
        <h1> 86 </h1>
        <p>BLOG POSTS</p>
      </div>
      <div>
        <h1> 25 </h1>
        <p>happy clients</p>
      </div>
      <div>
        <h1> 17 </h1>
        <p>WEB AWARDS</p>
      </div>
      <div>
        <h1> 98 </h1>
        <p>FLOWER SORTS</p>
      </div>
      </section>
    </>
  );
};

export default Home;
