import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import Normal from "./abdomenNormal/normal";
import Figado from "./figado/figado";
import Baco from "./baco/baco";
import ViasBiliares from "./vias biliares/vias_biliares";
import Pancreas from "./pancreas/pancreas";
import LiquidoLivre from "./liquido_livre/liquido_livre";
import Aorta from "./aorta/aorta";
import VesiculaBiliar from "./vesicula_biliar/vesicula_biliar";

function AbdomemSuperior() {

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
            <BoxTitleBackground PadLeft="30px" fontsize='19px' tamanho="240px 65px" titulo="Abdômen Superior" />

            <Exames></Exames>

            <Box
                ml='10px'
            >
                <Normal></Normal>

                <Figado></Figado>

                <Baco></Baco>

                <ViasBiliares></ViasBiliares>

                <Pancreas></Pancreas>

                <LiquidoLivre></LiquidoLivre>

                <Aorta></Aorta>

                <VesiculaBiliar></VesiculaBiliar>

            </Box >
        </Box >
    );
}

export default AbdomemSuperior;