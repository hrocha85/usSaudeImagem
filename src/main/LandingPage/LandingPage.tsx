import { Header } from "./header/Header";
import { Body } from "./body/Body";
import { Box, Stack, VStack } from "@chakra-ui/react";
import { About } from "./about/About";
import { ExamesLp } from "./exames/ExamesLP";
import { System } from "./system/System";
import { Planos } from "./planos/Planos";
import { Footer } from "./footer/Footer";
import Cookies from 'js-cookie';
import { useEffect } from "react";


function LandingPage() {
  useEffect(() => {
    // Cookies.remove('USGImage_token')
    Cookies.remove('USGImage_user')
    Cookies.remove('USGImage_role')
    localStorage.removeItem('user')
  }, [])

  return (
    <Box overflow="hidden">
      <Header />
      <Body />
      <About />
      <ExamesLp />
      <System />
      <Planos />
      <Footer />
    </Box>

  );
}
export default LandingPage;
