import { IconButton } from "@chakra-ui/react";
import React from "react";
import PlusButton from "../images/button_plus.png";
import Clinica from "../configuracao/clinicas";


const button = React.createElement("img", { src: PlusButton });

const IconButtonPlus = () => {
    
  return (
    <>
      <IconButton
        aria-label="sdfs"
        icon={button}
        variant="link"
        h="22"
        w="22"
        size="xs"
        textColor="blue"
        onClick={()=>{}}
      />
      ;
    </>
  );
};

export default IconButtonPlus
