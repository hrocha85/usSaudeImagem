import { Header } from "./header/Header";
import { Body } from "./body/Body";
import { Box, Image, Stack, VStack } from "@chakra-ui/react";
import { About } from "./about/About";
import { ExamesLp } from "./exames/ExamesLP";
import { System } from "./system/System";
import { Planos } from "./planos/Planos";
import { Footer } from "./footer/Footer";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import marca from "../images/Marca.png";
import { motion } from "framer-motion";


function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(true); 
  useEffect(() => {
    Cookies.remove('USGImage_token')
    Cookies.remove('USGImage_user')
    Cookies.remove('USGImage_role')
    localStorage.removeItem('user')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsSpinnerVisible(false);
    }, 3000);
  }, []);

  return (
    <Box overflow="hidden">
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ display: isSpinnerVisible ? 'block' : 'none' }}
      >
        <Box display={'flex'} alignItems={'center'} flexDir={'column'} pt={'15%'}>
          <Box w={'60%'}>
            <Image src={marca} />
          </Box>
          <Spinner size="xl" color="blue.500" />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }} 
        transition={{ duration: 1 }} 
        style={{ display: isSpinnerVisible ? 'none' : 'block' }}
      >
        <Box>
          <Header />
          <Body />
          <About />
          <ExamesLp />
          <System />
          <Planos />
          <Footer />
        </Box>
      </motion.div>
    </Box>

  );
}
export default LandingPage;
