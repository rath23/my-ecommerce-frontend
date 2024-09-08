import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./homeCarouselData";

const MainCarousel = () => {
  const items = homeCarouselData.map((item) => (
    <img src={item.image} role="presentation" alt="top-value-products" />
  ));
  return (
    <div  className="z-0">
    <AliceCarousel disableButtonsControls  items={items} autoPlay autoPlayInterval={2000} infinite />
    </div>
  );
};

export default MainCarousel;
