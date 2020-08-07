import React from "react";
import Particles from "react-particles-js";

import particle1 from '../asset/images/particles/star.svg';
import particle2 from '../asset/images/particles/shipping-and-delivery.svg';
import particle3 from '../asset/images/particles/sun.svg';
import particle4 from '../asset/images/particles/wedding.svg';
import particle5 from '../asset/images/particles/heart.svg';


export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      background: "#ff9ba8"
    }}
  >
    <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 3,
              density: { enable: true, value_area: 1000 },
            },
            shape: {
              type: ['image'],
              image: [
                {
                  src: `${particle1}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${particle2}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${particle3}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${particle4}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${particle5}`,
                  width: 50,
                  height: 50,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.2, sync: false },
            },
            size: {
              value: 30,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              attract: { enable: true,  rotateY: 200 },
            },
          },
          retina_detect: true,
        }}
      />
  </div>
);
