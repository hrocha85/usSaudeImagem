const variantSubtitle = (props) => {
  const { colorMode: m, colorScheme: c } = props;

  return {
    fontSize: "md",
    fontWeight: 900,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: m === "light" ? `${c}.400` : `${c}.300`,
  };
};

const variants = {
  subtitle: variantSubtitle,
};

export default {
  // baseStyle,
  variants,
  // sizes,
};
