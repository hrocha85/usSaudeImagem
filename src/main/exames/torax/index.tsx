
import { Box, Checkbox } from "@chakra-ui/react";
import { useState } from "react";

import SubTorax from "./subTorax/subTorax";

function Torax() {
  const altura = '100%'
  const largura = '220px'
  const [Disable, SetDisable] = useState(false)
  return (
    <>
      <Box
        bg="#FAFAFA"
        w={largura}
        h={altura}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="10.85px"
        boxShadow="md"
        padding='10px 15px 10px 15px'
        mt='2px'
        mb='5px'>

        <Checkbox
          onChange={(e) => { SetDisable(!Disable) }}
        >Torax normal</Checkbox>

      </Box >
      <SubTorax Disable={Disable} />

    </>
  );
}

export default Torax;
