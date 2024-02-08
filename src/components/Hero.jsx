import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
      gsap.set(".reveal", {
        y: 500,
      });

      gsap.set(".header",{
        y: -300,
      })

      const AnimationHero = () => {
      gsap.to(".reveal", {
        duration: 1.2,
        y: 0,
        stagger: 0.2,
      });

      gsap.to(".header",{
        duration: 1.2,
        delay: 0.8,
        y:0
      })
    };
   
    const LoaderHero = () => {

      gsap.set(".movetext",{
        x: 1480,
      })

      gsap.set(".movetext2",{
        x: -1440
      })

      gsap.to(".movetext",{
        delay: 1,
        duration: 3.8,
        x: -1440
      })

      gsap.to(".movetext2",{
        delay: 1,
        duration: 3.8,
        x: 1480
      })

      gsap.to(".background-container",{
        duration: 2.4,
        delay: 2.8,
        width: "100%",
        height: "100vh",
        ease: "expo.inOut",
        onComplete: function () {
          AnimationHero();
        },
      })
    }
   LoaderHero()

  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray("#layer").forEach((layer) => {
      const speed = layer.dataset.speed;
      const movement = layer.offsetHeight * speed;
      tl.to(
        layer,
        {
          y: movement,
          ease: "ease-in",
        },
        0
      );
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="background-container">
        <div className="background-top"></div>
        <div className="background-bottom"></div>
      </div>
      <div className="text-title">
        <h1 className="movetext">Isla Brava</h1>
      </div>
      <div className="text-title2">
        <h1 className="movetext2">Isla Brava</h1>
      </div>
      <div id="layer" data-speed="0.4" className="text-top">
        <h1 className="reveal">Unlock</h1>
      </div>
      <div id="layer" data-speed="-0.4" className="text-bottom">
        <h1 className="reveal">The</h1>
        <h1 className="reveal">Stoke</h1>
      </div>
    </section>
  );
};

export default Hero;
