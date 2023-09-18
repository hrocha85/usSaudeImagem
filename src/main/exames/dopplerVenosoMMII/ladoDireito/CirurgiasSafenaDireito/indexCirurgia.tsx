/* eslint-disable array-callback-return */

import { Box, Checkbox, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import CirurgiaSafenaMagmaDireito from "./CirurgiasSafenaMagmaDireito";
import CirurgiaSafenaParvaDireito from "./CirurgiasSafenaParvaDireito";

function IndexCirurgias() {
    const altura = "100%";
    const largura = "95%";

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="24px 15px 20px 15px"
            mt="15px"
        >
            <TituloNomeExame titulo="Cirurgias" />

            <Box
                borderBottom='1px'
            >
                <CirurgiaSafenaMagmaDireito />
            </Box >
            <CirurgiaSafenaParvaDireito />

        </Box >
    );
}
export default IndexCirurgias;
