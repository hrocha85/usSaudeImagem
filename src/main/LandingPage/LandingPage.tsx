import { Header } from "./header/Header";
import { Body } from "./body/Body";
import {  Box, Stack, VStack } from "@chakra-ui/react";
import { About } from "./about/About";
import { ExamesLp } from "./exames/ExamesLP";


function LandingPage() {
  return (
    <Box overflow="hidden" >
    <Header />
    <Body />
    <About/>
    <ExamesLp/>
    </Box>
 
  );
}
export default LandingPage;
