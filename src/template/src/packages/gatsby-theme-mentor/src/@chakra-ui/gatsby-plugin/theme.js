import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import colors from "./colors";
import * as Components from "./components";
import fonts from "./fonts";
import styles from "./global";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

// Color mode config
const config = {
  // initialColorMode: "light",
  initialColorMode: "system",
  // useSystemColorMode: true,
};

const overrides = {
  styles,
  config,
  colors,
  fonts,
  components: {
    ...Components,
    Heading: {
      baseStyle: {
        letterSpacing: "-0.01em",
        fontWeight: 600,
      },
    },
    Input: {
      baseStyle: {
        field: {
          rounded: "full",
        },
      },
      defaultProps: {
        focusBorderColor: "brand.400",
      },
      sizes: {
        lg: {
          field: {
            px: 6,
            py: 4,
            borderRadius: "full",
          },
          addon: {
            borderRadius: "full",
          },
        },
        md: {
          field: {
            borderRadius: "full",
          },
          addon: {
            borderRadius: "full",
          },
        },
        sm: {
          field: {
            borderRadius: "full",
          },
          addon: {
            borderRadius: "full",
          },
        },
        xs: {
          field: {
            borderRadius: "full",
          },
          addon: {
            borderRadius: "full",
          },
        },
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "brand.400",
        borderRadius: "xl",
      },
      sizes: {
        lg: {
          field: {
            borderRadius: "xl",
          },
        },
        md: {
          field: {
            borderRadius: "xl",
          },
        },
        sm: {
          field: {
            borderRadius: "lg",
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "brand.400",
      },
      sizes: {
        lg: {
          borderRadius: "xl",
        },
      },
    },
    Table: {
      defaultProps: {
        colorScheme: "gray",
      },
    },
  },
  layerStyles: {
    pageTitle: {
      bg: "gray.100",
      py: 20,
      mb: [10, 14, 20],
      ".chakra-ui-dark &": {
        bg: "gray.700",
      },
    },
    colorBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      rounded: "xl",
      textIndent: "-9999px",
      whiteSpace: "nowrap",
    },
    changelog: {
      "h2:first-child > a": {
        marginTop: 0,
      },
      "h2 > a": {
        display: "flex",
        justifyContent: "space-between",
        width: "full",
        borderBottomWidth: "1px",
        borderBottomColor: "gray.200",
        paddingBottom: 2,
        marginTop: 10,
        ".chakra-ui-dark &": {
          borderBottomColor: "gray.700",
        },
      },
    },
  },
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
);
