import { Header } from "./header/Header";
import { Body } from "./body/Body";
import {  Box, Stack, VStack } from "@chakra-ui/react";
import { About } from "./about/About";
import { ExamesLp } from "./exames/ExamesLP";
import { System } from "./system/System";
import { Planos } from "./planos/Planos";


function LandingPage() {
  return (
    <Box overflow="hidden" >
    <Header />
    <Body />
    <About/>
    <ExamesLp/>
    <System/>
    <Planos/>
    </Box>
 
  );
}
export default LandingPage;
