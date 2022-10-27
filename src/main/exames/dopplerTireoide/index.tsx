import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import Normal from "./dopplerTireoideNormal/normal";
import Cisto from "./cisto/cisto";
import Idade from "./idade/idade";
import EcotexturaParenquima from "./EcotexturaParenquima/EcotexturaParenquima";
import Cirurgias from "./cirurgias/cirurgias";
import Medidas from "./medidas/medidas";
import Nodulos from "./nodulos/nodulos";


function DopplerTireoide() {

    return (

        <Box
            w="100%"
            h="100%"
            verticalAlign="center"
            alignSelf="center"
            alignItems="center"
            backgroundImage={BGImage}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
        >
            <BoxTitleBackground PadLeft="30px" fontsize='19px' tamanho="252px 67px" titulo="Doppler da Tireoide" />

            <Exames></Exames>

            <Box
                ml='10px'
            >
                <Normal></Normal>

                <Medidas></Medidas>

                <EcotexturaParenquima></EcotexturaParenquima>

                <Cirurgias></Cirurgias>

                <Cisto></Cisto>

                <Idade></Idade>

                <Nodulos></Nodulos>
            </Box >
        </Box >
    );
}

export default DopplerTireoide;