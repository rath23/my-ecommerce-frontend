import React, { useState, useRef, useEffect } from "react";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import 'react-alice-carousel/lib/alice-carousel.css';

function ItemCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1); // State to keep track of visible items
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  useEffect(() => {
    // Update the number of visible items based on screen size
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 720) {
        setVisibleItems(responsive[0].items);
      } else if (width < 1024) {
        setVisibleItems(responsive[720].items);
      } else {
        setVisibleItems(responsive[1024].items);
      }
    };

    // Call the function initially and on resize
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const items = props.data.slice(0, 10).map((item, index) => (
    <HomeSectionCard
      key={index}
      imageUrl={item.imageUrl}
      description={item.description}
      brand={item.brand}
    />
  ));

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slideTo(activeIndex - 1);
    }
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideTo(activeIndex + 1);
    }
    setActiveIndex((prev) => Math.min(prev + 1, items.length - visibleItems));
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <div className="border shadow mb-[1.5rem] px-4">
      <h1 className="text-2xl font-bold mb-1 pt-2 ml-4">{props.title}</h1>
      <div className="relative p-5 ">
        <AliceCarousel
          ref={carouselRef}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          mouseTracking
        />
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "40%",
              left: "0",
              transform: "translateX(-35%) rotate(90deg)",
              backgroundColor: "transparent",
              padding: 0,
              minWidth: 0,
              ":hover": {
                backgroundColor: "transparent",
              },
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{
                fontSize: "2rem",
                transform: "rotate(-90deg)",
                color: "black",
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "rotate(-90deg) scale(1.5)",
                },
              }}
            />
          </Button>
        )}
        {activeIndex < items.length - visibleItems && (
          <Button
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "40%",
              right: "0",
              transform: "translateX(50%) rotate(90deg)",
              backgroundColor: "transparent",
              padding: 0,
              minWidth: 0,
              ":hover": {
                backgroundColor: "transparent",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{
                fontSize: "2rem",
                transform: "rotate(90deg)",
                color: "black",
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "rotate(90deg) scale(1.5)",
                },
              }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

export default ItemCarousel;
