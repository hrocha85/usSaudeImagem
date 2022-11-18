import { Box } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";

import Exames from "../../folha_laudos/Laudos";

import Nodulo from "./nodulos/nodulos";
import Cistos from "./cistos/cistos";
import Cirurgia from "./cirurgia/cirurgia";
import Axilas from "./axilas/axilas";
import Implantes from "./implantes/implantes";
import Abscesso from "./abscesso/abscesso";
import Observacoes from "./observacoes/observacoes";
import Birads from "./birads/birads";
import MamaMasculina from "./mamaMasculina/mamaMasculina";
import Extra from "./extra/extra";


function Mamas() {

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
            <BoxTitleBackground PadLeft="24px" fontsize="19px" tamanho="150px 64px" titulo="Mamas" />

            <Exames></Exames>

            <Box
                ml='10px'
            >

                <Nodulo />
                <Cistos />

                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <Cirurgia />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <Axilas />
                    </Box>
                </Box >
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <Implantes />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <Observacoes />
                    </Box>
                </Box >
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <Birads />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <Abscesso />
                    </Box>
                </Box >
                <Box w='70%'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <MamaMasculina />
                    </Box>
                    <Box
                        w='450px'
                        mb='15px'
                    >
                        <Extra />
                    </Box>
                </Box >

            </Box >
        </Box >
    );
}

export default Mamas;