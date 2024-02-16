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
            <img src="https://images.unsplash.com/photo-1523606772308-64a28db0ef2c?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img surfing Unsplash" />
          </div>
          <div className="img-info-container2">
            <img src="https://images.unsplash.com/photo-1611858447026-b16c9351c9df?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img skate Unsplash" />
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
