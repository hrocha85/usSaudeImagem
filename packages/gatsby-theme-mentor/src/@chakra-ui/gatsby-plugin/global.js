import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    "html, body": {
      fontFamily: "body",
      scrollBehavior: "smooth",
    },
    h1: {
      fontWeight: 700,
    },
    "*::selection, mark": {
      color: mode("brand.400", "brand.400")(props),
      background: mode("brand.50", "brand.900")(props),
    },

    "*::placeholder": {
      color: mode("gray.600", "whiteAlpha.400")(props),
    },

    "[data-sal='fadeup-low']": {
      transform: "translate3d(0, 20px, 0)",
      opacity: 0,
      transitionProperty: "transform, opacity",
      "&.sal-animate": {
        transform: "translate3d(0, 0, 0)",
        opacity: 1,
      },
    },
  }),
};

export default styles;
