import { Header } from "./header/Header";
import { Body } from "./body/Body";
import {  Box, Stack, VStack } from "@chakra-ui/react";
import { About } from "./about/About";


function LandingPage() {
  return (
    <Box overflow="hidden" >
    <Header />
    <Body />
    <About/>
    </Box>
 
  );
}
export default LandingPage;
