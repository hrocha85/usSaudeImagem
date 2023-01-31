import { Box, Text } from "@chakra-ui/react";
import BoxTitleBackground from "../../component/box_title_background";
import BGImage from "../../images/bg_img.png";
import Exames from "../../folha_laudos/Laudos";
import OmbroLadoDireito from "./ombro/omboDireito/ladoDireito";
import CotoveloLadoDireito from "./cotovelo/cotoveloDireito/ladoDireito";
import OmbroLadoEsquerdo from "./ombro/ombroEsquerdo/ladoEsquerdo";
import CotoveloLadoEsquerdo from "./cotovelo/cotoveloEsquerdo/ladoEsquerdo";
import TendaoInfraespinhalOmbroDireito from "./ombro/omboDireito/TendaoInfraespinhal";
import TendaoInfraespinhalOmbroEsquerdo from "./ombro/ombroEsquerdo/TendaoInfraespinhal"
import SubescapularOmbroDireito from "./ombro/omboDireito/subescapular";
import SubescapularOmbroEsquerdo from "./ombro/ombroEsquerdo/subescapular";

import OmbroNormalDireito from "./ombro/omboDireito/normal";
import OmbroNormalEsquerdo from "./ombro/ombroEsquerdo/normal";
import CotoveloNormalDireito from "./cotovelo/cotoveloDireito/normal";
import CotoveloNormalEsquerdo from "./cotovelo/cotoveloEsquerdo/normal";
import CotoveloDireito from "./cotovelo/cotoveloDireito/cotoveloDireito";
import CotoveloEsquerdo from "./cotovelo/cotoveloEsquerdo/cotoveloEsquerdo";
import PunhoDireito from "./punho/punhoDireito/punhoDireito";
import PunhoLadoDireito from "./punho/punhoDireito/ladoDireito";
import PunhoNormalDireito from "./punho/punhoDireito/normal";
import PunhoLadoEsquerdo from "./punho/punhoEsquerdo/ladoEsquerdo";
import PunhoNormalEsquerdo from "./punho/punhoEsquerdo/normal";
import PunhoEsquerdo from "./punho/punhoEsquerdo/punhoDireito";
import MaoLadoDireito from "./mao/maoDireita/ladoDireito";
import MaoLadoEsquerdo from "./mao/maoEsquerda/ladoEsquerdo";
import MaoNormalEsquerdo from "./mao/maoEsquerda/normal";
import MaoNormalDireito from "./mao/maoDireita/normal";
import BracoNormalDireito from "./braco/bracoDireito/normal";
import BracoLadoDireito from "./braco/bracoDireito/ladoDireito";
import BracoDireito from "./braco/bracoDireito/bracoDireito";
import BracoEsquerdo from "./braco/bracoEsquerdo/bracoEsquerdo";
import BracoNormalEsquerdo from "./braco/bracoEsquerdo/normal";
import BracoLadoEsquerdo from "./braco/bracoEsquerdo/ladoEsquerdo";
import AntebracoNormalDireito from "./antebraco/antebracoDireito/normal";
import AntebracoLadoDireito from "./antebraco/antebracoDireito/ladoDireito";
import AntebracoNormalEsquerdo from "./antebraco/antebracoEsquerdo/normal";
import AntebracoLadoEsquerdo from "./antebraco/antebracoEsquerdo/ladoEsquerdo";
import DedoNormalDireito from "./dedo/dedoDireito/normal";
import DedoDireito from "./dedo/dedoDireito/dedoDireito";
import DedoLadoDireito from "./dedo/dedoDireito/ladoDireito";
import DedoNormalEsquerdo from "./dedo/dedoEsquerdo/normal";
import DedoEsquerdo from "./dedo/dedoEsquerdo/dedoEsquerdo";
import DedoLadoEsquerdo from "./dedo/dedoEsquerdo/ladoEsquerdo";
import JoelhoDerrameArticularDireito from "./joelho/joelhoDireito/JoelhoDerrameArticularDireito";
import JoelhoLadoDireito from "./joelho/joelhoDireito/ladoDireito";
import JoelhoNormalDireito from "./joelho/joelhoDireito/normal";
import JoelhoDerrameArticularEsquerdo from "./joelho/joelhoEsquerdo/JoelhoDerrameArticularEsquerdo";
import JoelhoLadoEsquerdo from "./joelho/joelhoEsquerdo/ladoEsquerdo";
import JoelhoNormalEsquerdo from "./joelho/joelhoEsquerdo/normal";
import LigColTibialMedialDireito from "./joelho/joelhoDireito/LigamentoColateralTibialMedialDireito";
import LigColTibialMedialEsquerdo from "./joelho/joelhoEsquerdo/LigamentoColateralTibialMedialEsquerdo";
import TendaoPatelarDireito from "./joelho/joelhoDireito/tendaoPatelarDireito";
import TendaoPatelarEsquerdo from "./joelho/joelhoEsquerdo/tendaoPatelarEsquerdo";
import TendaoPataGansoDireito from "./joelho/joelhoDireito/tendaoPataGansoDireito";
import TendaoPataGansoEsquerdo from "./joelho/joelhoEsquerdo/tendaoPataGansoEsquerdo";
import MeniscosDireito from "./joelho/joelhoDireito/meniscosDireito";
import MeniscosEsquerdo from "./joelho/joelhoEsquerdo/meniscosEsquerdo";

import QuadrilLadoDireito from "./quadril/quadrilDireito/ladoDireito";
import QuadrilNormalDireito from "./quadril/quadrilDireito/normal";
import QuadrilDireito from "./quadril/quadrilDireito/quadrilDireito";
import QuadrilEsquerdo from "./quadril/quadrilEsquerdo/quadrilEsquerdo";
import QuadrilLadoEsquerdo from "./quadril/quadrilEsquerdo/ladoEsquerdo";
import QuadrilNormalEsquerdo from "./quadril/quadrilEsquerdo/normal";
import CoxaLadoDireito from "./coxa/coxaDireita/ladoDireito";
import CoxaNormalDireito from "./coxa/coxaDireita/normal";
import CoxaLadoEsquerdo from "./coxa/coxaEsquerda/ladoEsquerdo";
import CoxaNormalEsquerdo from "./coxa/coxaEsquerda/normal";
import PernaLadoDireito from "./perna/pernaDireita/ladoDireito";
import PernaNormalDireito from "./perna/pernaDireita/normal";
import PernaLadoEsquerdo from "./perna/pernaEsquerda/ladoEsquerdo";
import PernaNormalEsquerdo from "./perna/pernaEsquerda/normal";
import PeTendaoAquilesDireito from "./pe/peDireito/tendaoAquilesDireito";
import PeTendaoAquilesEsquerdo from "./pe/peEsquerdo/tendaoAquilesEsquerdo";
import PeExtraDireito from "./pe/peDireito/extraDireito"
import PeExtraEsquerdo from "./pe/peEsquerdo/extraEsquerdo"
import PeLadoDireito from './pe/peDireito/ladoDireito'
import PeNormalDireito from './pe/peDireito/normal'
import PeNormalEsquerdo from './pe/peEsquerdo/normal'
import PeLadoEsquerdo from './pe/peEsquerdo/ladoEsquerdo'
import TenComumExtensoresAntebracoDireito from "./cotovelo/cotoveloDireito/TenComumExtensoresAntebracoDireito";
import TenComumFlexoresAntebracoDireito from "./cotovelo/cotoveloDireito/TenComumFlexosoresAntebracoDireito";
import TenComumFlexoresAntebracoEsquerdo from "./cotovelo/cotoveloEsquerdo/TenComumFlexosoresAntebracoEsquerdo";
import TenComumExtensoresAntebracoEsquerdo from "./cotovelo/cotoveloEsquerdo/TenComumExtensoresAntebracoEsquerdo";
import TendaoBicepsBraquialDireito from "./cotovelo/cotoveloDireito/TendaoBicepsBraquialDireito";
import TendaoBicepsBraquialEsquerdo from "./cotovelo/cotoveloEsquerdo/TendaoBicepsBraquialEsquerdo";
import TendaoTricepsBraquialDireito from "./cotovelo/cotoveloDireito/TendaoTricepsBraquialDireito";
import TendaoTricepsBraquialEsquerdo from "./cotovelo/cotoveloEsquerdo/TendaoTricepsBraquialEsquerdo";
import LiquidoPeritendineoDireito from "./cotovelo/cotoveloDireito/LiquidoPeritendineoDireito";
import BolsaOlecreaneanaDireito from "./cotovelo/cotoveloDireito/BolsaOlecraneanaDireito";
import LiquidoPeritendineoEsquerdo from "./cotovelo/cotoveloEsquerdo/LiquidoPeritendineoEsquerdo";
import BolsaOlecreaneanaEsquerdo from "./cotovelo/cotoveloEsquerdo/BolsaOlecraneanaEsquerdo";
import DerrameArticularDireito from "./cotovelo/cotoveloDireito/DerrameArticularDireito";
import DerrameArticularEsquerdo from "./cotovelo/cotoveloEsquerdo/DerrameArticularEsquerdo";
import NervoUlnarDireito from "./cotovelo/cotoveloDireito/NervoUlnarDireito";
import NervoUlnarEsquerdo from "./cotovelo/cotoveloEsquerdo/NervoUlnarEsquerdo";
import LigColFibularLateralDireito from "./joelho/joelhoDireito/LigamentoColateralFibularLateralDireito";
import LigColFibularLateralEsquerdo from "./joelho/joelhoEsquerdo/LigamentoColateralFibularLateralEsquerdo";
import TendaoQuadricepsFemoralDireito from "./joelho/joelhoDireito/TendaoQuadricepsFemoralDireito";
import TendaoQuadricepsFemoralEsquerdo from "./joelho/joelhoEsquerdo/TendaoQuadricepsFemoralEsquerdo";
import TendaoBicepsFemoralDireito from "./joelho/joelhoDireito/TendaoBicepsFemoralDireito";
import TendaoBicepsFemoralEsquerdo from "./joelho/joelhoEsquerdo/TendaoBicepsFemoralEsquerdo";
import CistosDireito from "./joelho/joelhoDireito/CistosDireito";
import CistosEsquerdo from "./joelho/joelhoEsquerdo/CistosEsquerdo";
import RoturaExtensoresDireito from "./mao/maoDireita/RoturaExtensoresDireito/RoturaExtensores";
import RoturaExtensoresEsquerdo from "./mao/maoEsquerda/RoturaExtensoresEsquerdo/RoturaExtensores";
import TenossinoviteExtensoresDireita from "./mao/maoDireita/TenossinoviteExtensoresDireito/TenossinoviteExtensores";
import TenossinoviteExtensoresEsquerda from "./mao/maoEsquerda/TenossinoviteExtensoresEsquerdo/TenossinoviteExtensores";
import LiquidoPeritendineoHexoresDireita from "./mao/maoDireita/LiquidoPeritendineoHexoresDireito/LiquidoPeritendineoHexores";
import LiquidoPeritendineoHexoresEsquerda from "./mao/maoEsquerda/LiquidoPeritendineoHexoresEsquerdo/LiquidoPeritendineoHexores";
import PoliasDireita from "./mao/maoDireita/PoliasDireito/Polias";
import PoliasEsquerdo from "./mao/maoEsquerda/PoliasEsquerdo/Polias";
import FibromatosePalmarDireito from "./mao/maoDireita/FibromatosePalmarSuperficialDireito/FibromatosePalmar";
import FibromatosePalmarEsquerdo from "./mao/maoEsquerda/FibromatosePalmarSuperficialEsquerdo/FibromatosePalmar";
import RoturaFlexoresDireito from "./mao/maoDireita/RoturaFlexoresDireito/RoturaFlexores";
import RoturaFlexoresEsquerdo from "./mao/maoEsquerda/RoturaFlexoresEsquerdo/RoturaFlexores";
import TenossinoviteFlexoresDireito from "./mao/maoDireita/TenossinoviteFlexoresDireito/TenossinoviteFlexores";
import TenossinoviteFlexoresEsquerdo from "./mao/maoEsquerda/TenossinoviteFlexoresEsquerdo/TenossinoviteFlexores";
import MaoCistosDireito from "./mao/maoDireita/CistosDireito";
import MaoCistosEsquerdo from "./mao/maoEsquerda/CistosEsquerdo";
import OssosDireita from "./mao/maoDireita/OssosDireito/Ossos";
import OssosEsquerda from "./mao/maoEsquerda/OssosEsquerdo/Ossos";
import MaoDerrameArticularDireita from "./mao/maoDireita/DerrameArticularDireito/DerrameArticular";
import MaoDerrameArticularEsquerdo from "./mao/maoEsquerda/DerrameArticularEsquerdo/DerrameArticular";
import ColecaoDireito from "./mao/maoDireita/colecaoDireito";
import ColecaoEsquerdo from "./mao/maoEsquerda/colecaoEsquerdo";
import AlteracaoPosCirurgiaDireito from "./mao/maoDireita/AlteracaoPosDireito";
import AlteracaoPosCirurgiaEsquerdo from "./mao/maoEsquerda/AlteracaoPosEsquerda";
import CorpoEstranhoDireito from "./mao/maoDireita/CorpoEstranhoDireito";
import CorpoEstranhoEsquerdo from "./mao/maoEsquerda/CorpoEstranhoEsquerdo";
import OmbroTendaoSupraespinhalDireito from "./ombro/omboDireito/TendaoSupraespinhal";
import OmbroTendaoSupraespinhalEsquerdo from "./ombro/ombroEsquerdo/TendaoSupraespinhal";
import VentreSupraespinhalDireito from "./ombro/omboDireito/VentreSupraespinhal";
import VentreSupraespinhalEsquerdo from "./ombro/ombroEsquerdo/VentreSupraespinhal";
import VentreInfraespinhalEsquerdo from "./ombro/ombroEsquerdo/VentreInfraespinhal";
import VentreInfraespinhalDireito from "./ombro/omboDireito/VentreInfraespinhal";
import TendaoSubescapularOmbroEsquerdo from "./ombro/ombroEsquerdo/TendaoSubescapular";
import TendaoSubescapularOmbroDireito from "./ombro/omboDireito/TendaoSubescapular";
import TendaoCabeçaLongaBicepsDireito from "./ombro/omboDireito/TendaoCabeçaLongaBiceps";
import TendaoCabeçaLongaBicepsEsquerdo from "./ombro/ombroEsquerdo/TendaoCabeçaLongaBiceps";
import BolsaSubacromial_SubdeltoideaDireito from "./ombro/omboDireito/BolsaSubacromial";
import BolsaSubacromial_SubdeltoideaEsquerdo from "./ombro/ombroEsquerdo/BolsaSubacromial";
import ArticulacaoAcromioclavicularDireito from "./ombro/omboDireito/ArticulacaoAcromioclavicular";
import ArticulacaoAcromioclavicularEsquerdo from "./ombro/ombroEsquerdo/ArticulacaoAcromioclavicular";
import TendaoFlexoresTenossinoviteDireito from "./punho/punhoDireito/TendaoFlexoresTenossinovite";
import TendaoFlexoresTenossinoviteEsquerdo from "./punho/punhoEsquerdo/TendaoFlexoresTenossinovite";
import TendaoExtensoresTenossinoviteDireito from "./punho/punhoDireito/TendaoExtensoresTenossinovite";
import TendaoExtensoresTenossinoviteEsquerdo from "./punho/punhoEsquerdo/TendaoExtensoresTenossinovite";
import PunhoNervoMedianoDireito from "./punho/punhoDireito/NervoMediano";
import PunhoNervoMedianoEsquerdo from "./punho/punhoEsquerdo/NervoMedianoEsquerdo";
import RetinaculoFlexoresDireito from "./punho/punhoDireito/RetinaculoFlexores";
import RetinaculoFlexoresEsquerdo from "./punho/punhoEsquerdo/RetinaculoFlexores";
import PunhoCistosDireito from "./punho/punhoDireito/PunhoCistos";
import PunhoCistosEsquerdo from "./punho/punhoEsquerdo/PunhoCistos";
import QuadrilDerrameArticularDireito from "./quadril/quadrilDireito/QuadrilDerrameArticularDireito";
import TendaoGluteoMedioDireito from "./quadril/quadrilDireito/TendaoGluteoMedio";
import TendaoGluteoMinimoDireito from "./quadril/quadrilDireito/TendaoGluteoMinimo";
import QuadrilBolsasDireito from "./quadril/quadrilDireito/QuadrilBolsasDireito";
import FasciaLataDireito from "./quadril/quadrilDireito/FasciaLata";
import QuadrilDerrameArticularEsquerdo from "./quadril/quadrilEsquerdo/QuadrilDerrameArticularEsquerdo";
import TendaoGluteoMedioEsquerdo from "./quadril/quadrilEsquerdo/TendaoGluteoMedio";
import TendaoGluteoMinimoEsquerdo from "./quadril/quadrilEsquerdo/TendaoGluteoMinimo";
import QuadrilBolsasEsquerdo from "./quadril/quadrilEsquerdo/QuadrilBolsasEsquerdo";
import FasciaLataEsquerdo from "./quadril/quadrilEsquerdo/FasciaLata";

function Articulacoes() {

    return (
        <>
            <Box
                display='flex'
                flexWrap='wrap'
                w='66%'
                ml="10px">

                <Box w='45%'>
                    <Box

                        textAlign="center" >
                        <OmbroLadoDireito />
                    </Box>
                    <Box
                        mt='10px'
                        textAlign="center" >
                        <OmbroNormalDireito />
                    </Box>

                    <Box >
                        <Box
                            // w='450px'
                            mb='15px'>
                            <  OmbroTendaoSupraespinhalDireito />
                        </Box>

                        <Box
                            // w='450px'
                            mb='15px'>
                            <  VentreSupraespinhalDireito />
                        </Box>


                        <Box
                            // w='450px'
                            mb='15px'>
                            <TendaoInfraespinhalOmbroDireito />
                        </Box>
                        <Box
                            // w='450px'
                            mb='15px'>
                            <VentreInfraespinhalDireito />
                        </Box>
                        <Box
                            // w='450px'
                            mb='15px'>
                            <TendaoSubescapularOmbroDireito />
                        </Box>
                        <Box
                            // w='450px'
                            mb='15px'>
                            <TendaoCabeçaLongaBicepsDireito />
                        </Box>
                        <Box
                            // w='450px'
                            mb='15px'>
                            <BolsaSubacromial_SubdeltoideaDireito />
                        </Box>
                        <Box
                            // w='450px'
                            mb='15px'>
                            <ArticulacaoAcromioclavicularDireito />
                        </Box>
                        <Box

                            textAlign="center" >
                            <CotoveloLadoDireito />
                        </Box>

                        <Box
                            mt='10px'
                            textAlign="center" >
                            <CotoveloNormalDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TenComumExtensoresAntebracoDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TenComumFlexoresAntebracoDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoBicepsBraquialDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoTricepsBraquialDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <LiquidoPeritendineoDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <NervoUlnarDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <BolsaOlecreaneanaDireito />
                        </Box>

                        <Box
                            // w='450px'
                            textAlign="center" >
                            <DerrameArticularDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PunhoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PunhoNormalDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoFlexoresTenossinoviteDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoExtensoresTenossinoviteDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <PunhoNervoMedianoDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <RetinaculoFlexoresDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <PunhoCistosDireito />
                        </Box>
                        {/* <Box
                            // w='450px'
                            textAlign="center" >
                            <PunhoDireito />
                        </Box> */}
                        <Box
                            textAlign="center" >
                            <MaoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <MaoNormalDireito />
                        </Box>

                        <Box
                            textAlign="center" >
                            <RoturaFlexoresDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <TenossinoviteFlexoresDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <LiquidoPeritendineoHexoresDireita />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PoliasDireita />
                        </Box>
                        <Box
                            textAlign="center" >
                            <FibromatosePalmarDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <RoturaExtensoresDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <TenossinoviteExtensoresDireita />
                        </Box>
                        <Box
                            textAlign="center" >
                            <MaoCistosDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <OssosDireita />
                        </Box>
                        <Box
                            textAlign="center" >
                            <MaoDerrameArticularDireita />
                        </Box>
                        <Box
                            textAlign="center" >
                            <AlteracaoPosCirurgiaDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <ColecaoDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <CorpoEstranhoDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <BracoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <BracoNormalDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <BracoDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <AntebracoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <AntebracoNormalDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <DedoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <DedoNormalDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <DedoDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <JoelhoLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <JoelhoNormalDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <JoelhoDerrameArticularDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <LigColTibialMedialDireito />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <LigColFibularLateralDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoPataGansoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoQuadricepsFemoralDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoBicepsFemoralDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoPatelarDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <MeniscosDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <CistosDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <QuadrilLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilNormalDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilDerrameArticularDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoGluteoMedioDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoGluteoMinimoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilBolsasDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <FasciaLataDireito />
                        </Box>
                        {/* <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilDireito />
                        </Box> */}
                        <Box
                            textAlign="center" >
                            <CoxaLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <CoxaNormalDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PernaLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PernaNormalDireito />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PeLadoDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PeNormalDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PeTendaoAquilesDireito />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PeExtraDireito />
                        </Box>
                    </Box>
                </Box>
                <Box w='45%'
                // display='flex'
                // flexWrap='wrap'
                >
                    <Box
                        // w='450px'
                        textAlign="center" >
                        <OmbroLadoEsquerdo />
                    </Box>

                    <Box
                        mt='10px'
                        textAlign="center" >
                        <OmbroNormalEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        mb='15px'>
                        <  OmbroTendaoSupraespinhalEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        mb='15px'>
                        <  VentreSupraespinhalEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        mb='15px'>
                        <TendaoInfraespinhalOmbroEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        mb='15px'>
                        <VentreInfraespinhalEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        mb='15px'>
                        <TendaoSubescapularOmbroEsquerdo />
                    </Box>

                    <Box
                        // w='450px'
                        mb='15px'>
                        <TendaoCabeçaLongaBicepsEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        mb='15px'>
                        <BolsaSubacromial_SubdeltoideaEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        mb='15px'>
                        <ArticulacaoAcromioclavicularEsquerdo />
                    </Box>

                    <Box
                        // w='450px'
                        textAlign="center" >
                        <CotoveloLadoEsquerdo />
                    </Box>
                    <Box
                        mt='10px'
                        textAlign="center" >
                        <CotoveloNormalEsquerdo />
                    </Box>
                    <Box
                        // w='450px'
                        textAlign="center" >
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TenComumExtensoresAntebracoEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TenComumFlexoresAntebracoEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoBicepsBraquialEsquerdo />
                        </Box>

                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoTricepsBraquialEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <LiquidoPeritendineoEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <NervoUlnarEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <BolsaOlecreaneanaEsquerdo />
                        </Box>

                        <Box
                            // w='450px'
                            textAlign="center" >
                            <DerrameArticularEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PunhoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PunhoNormalEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoFlexoresTenossinoviteEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <TendaoExtensoresTenossinoviteEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <PunhoNervoMedianoEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <RetinaculoFlexoresEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <PunhoCistosEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <PunhoEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <MaoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <MaoNormalEsquerdo />
                        </Box>

                        <Box
                            textAlign="center" >
                            <RoturaFlexoresEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <TenossinoviteFlexoresEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <LiquidoPeritendineoHexoresEsquerda />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PoliasEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <FibromatosePalmarEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <RoturaExtensoresEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <TenossinoviteExtensoresEsquerda />
                        </Box>
                        <Box
                            textAlign="center" >
                            <MaoCistosEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <OssosEsquerda />
                        </Box>
                        <Box
                            textAlign="center" >
                            <MaoDerrameArticularEsquerdo />
                        </Box>

                        <Box
                            textAlign="center" >
                            <AlteracaoPosCirurgiaEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <ColecaoEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <CorpoEstranhoEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <BracoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <BracoNormalEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <BracoEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <AntebracoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <AntebracoNormalEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <DedoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <DedoNormalEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <DedoEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <JoelhoLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <JoelhoNormalEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <JoelhoDerrameArticularEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <LigColTibialMedialEsquerdo />
                        </Box>
                        <Box
                            // w='450px'
                            textAlign="center" >
                            <LigColFibularLateralEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoPataGansoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoQuadricepsFemoralEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoBicepsFemoralEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoPatelarEsquerdo />
                        </Box>

                        <Box
                            mt='10px'
                            textAlign="center" >
                            <MeniscosEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <CistosEsquerdo />
                        </Box>

                        <Box
                            textAlign="center" >
                            <QuadrilLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilNormalEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilDerrameArticularEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoGluteoMedioEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <TendaoGluteoMinimoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilBolsasEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <FasciaLataEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <CoxaLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <CoxaNormalEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PernaLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PernaNormalEsquerdo />
                        </Box>
                        <Box
                            textAlign="center" >
                            <PeLadoEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PeNormalEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PeTendaoAquilesEsquerdo />
                        </Box>
                        <Box
                            mt='10px'
                            textAlign="center" >
                            <PeExtraEsquerdo />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Articulacoes;