/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ObsBIRADS from '../../../images/ObsBIRADS.png'


function Extra4() {
    const altura = "100%";
    const largura = "66%";

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="24px 15px 10px 15px"
            mt='20px'
        >
            <Image src={ObsBIRADS} />
        </Box>
    );
}

export default Extra4;
