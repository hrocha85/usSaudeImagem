
import { Box, Checkbox, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

import SubTorax from "./subTorax/subTorax";

function Torax() {
  const altura = '100%'
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"
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
