import * as React from "react";

import { chakra } from "@chakra-ui/react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ isHeaderOverlay, children, ...rest }) => {
  return (
    <>
      <Header
        py={4}
        width="full"
        minHeight={[32, 36, 20]}
        zIndex={isHeaderOverlay ? "sticky" : null}
        pos={isHeaderOverlay ? "absolute" : "relative"}
      />
      <chakra.main {...rest}>{children}</chakra.main>
      <Footer />
    </>
  );
};

export default Layout;
