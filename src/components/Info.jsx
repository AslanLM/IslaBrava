import React, { useEffect } from "react";
import "./Info.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {

  useEffect(() => {

    gsap.set(".img-info-container2", {
        y: "-100%",
    })

    gsap.to(".img-info-container2", {
      y: "0%",
      scrollTrigger: {
        trigger: ".img-info",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="info-container">
      <div className="info-wrap">
        <div className="img-info">
          <div className="img-info-container">
            <img src="https://images.unsplash.com/photo-1523606772308-64a28db0ef2c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img surfing info" />
          </div>
          <div className="img-info-container2">
            <img src="https://images.vans.com/is/image/VansBrand/HO23%5FOmni%5FSportLow%5F0N5A7339%2DDesktop%2D334x412?$fullres$" alt="vans robada" />
          </div>
        </div>
        <div className="info-shop">
          <div className="info-shop-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              incidunt vel ea itaque quidem. Eos iste ratione delectus minima
              ipsum.
            </p>
            <button className="btn">Shop</button>
          </div>
          <div className="info-shop-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              incidunt vel ea itaque quidem. Eos iste ratione delectus minima
              ipsum.
            </p>
            <button className="btn">Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
