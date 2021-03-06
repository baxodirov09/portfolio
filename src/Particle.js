import React from "react";
import Particles from "react-particles-js";
const Particle = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 250,
          },
          size: {
            value: 3,
          },
          "color": {
            "value": "#ff0000",
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff0000",
            "opacity": 0.4,
            "width": 1
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },

        
      }}
    />
  );
};

export default Particle;
