import { Box, Text } from "@chakra-ui/react";
import "./Laudos.css";
import React, { useContext } from "react";
import { LaudosContext } from "../../context/LuadosContext";

function Exames() {
  const { laudoPrin } = useContext(LaudosContext);

  return (
    <Box className="fixo">
      <Text>{laudoPrin}</Text>
          
    </Box>
  );
}

export default Exames;
