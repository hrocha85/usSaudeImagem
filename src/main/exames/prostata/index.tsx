/* eslint-disable react/jsx-pascal-case */
import { Box, } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import Exames from "../../folha_laudos/Laudos";
import BGImage from "../../images/bg_img.png";

import CalculoProstata from "./calculoProstata/calculoProstata";
import CalculoVolume from "./calculoVolume/calculoVolume";
import Extra from "./extra/extra";

function Prostata() {
    return (
        <Box
            w="100%"
            h="100vh"
            verticalAlign="center"
            alignSelf="center"
            alignItems="center"
            backgroundImage={BGImage}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
        >
            <BoxTitleBackground
                PadLeft="20px"
                fontsize="19px"
                tamanho="180px"
                titulo="Próstata"
            />
            <Exames></Exames>
            <Box ml="10px">
                <CalculoProstata></CalculoProstata>

                <CalculoVolume></CalculoVolume>

                <Extra></Extra>
            </Box>
        </Box>
    );
}

export default Prostata;
