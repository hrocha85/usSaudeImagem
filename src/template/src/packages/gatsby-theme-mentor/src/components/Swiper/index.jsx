import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";

import { chakra, shouldForwardProp } from "@chakra-ui/react";

const SwiperComponent = ({ children, ...rest }) => {
  // Default Breakpoints
  const breakpoints = {
    0: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    980: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  };
  return (
    <Swiper breakpoints={breakpoints} {...rest}>
      {children &&
        children.map((child) => (
          <SwiperSlide key={child.key}>{child}</SwiperSlide>
        ))}
    </Swiper>
  );
};

const ChakraSwiper = chakra(SwiperComponent, {
  shouldForwardProp: (prop) => {
    // don't forward Chakra's props
    const isChakraProp = !shouldForwardProp(prop);
    if (isChakraProp) return false;

    return [
      "children",
      "sx",
      "speed",
      "autoHeight",
      "direction",
      "mousewheel",
      "effect",
      "creativeEffect",
      "modules",
      "grabCursor",
      "navigation",
      "pagination",
      "scrollbar",
      "breakpoints",
      "spaceBetween",
      "slidesPerView",
      "centeredSlides",
      "onSlideChange",
      "onSwiper",
    ].includes(prop);
  },
});

export default React.memo(ChakraSwiper);
