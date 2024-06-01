import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import './Advertise.css';

function Advertise() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="Advertise">
      <Carousel
        height={180}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <div className="Advertise1">
            <h2>
              "Whoever is generous to the poor lends to the Lord, and he will
              repay him for his deed." <br />
              - Proverbs 19:17
            </h2>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="Advertise2">
            <h2
            >
              "Do not neglect to do good and to share what you have, for such
              sacrifices are pleasing to God." <br />
              - Hebrews 13:16
            </h2>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
export default Advertise;
