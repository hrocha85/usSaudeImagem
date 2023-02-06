import { Box, Text } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import HerniaDireito from "./direito/HerniaDireito"

function Regiao_Inguinal() {

    return (
        <>
            <Box
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">

                <Box w='45%'>
                    <HerniaDireito />
                </Box>
                <Box w='45%'
                // display='flex'
                // flexWrap='wrap'
                >

                </Box>
            </Box>
        </>
    );
}

export default Regiao_Inguinal;