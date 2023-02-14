import { Box, Checkbox, Flex } from "@chakra-ui/react";
import CotoveloLadoDireito from "./cotovelo/cotoveloDireito/ladoDireito";
import CotoveloLadoEsquerdo from "./cotovelo/cotoveloEsquerdo/ladoEsquerdo";
import OmbroLadoDireito from "./ombro/omboDireito/ladoDireito";
import TendaoInfraespinhalOmbroDireito from "./ombro/omboDireito/TendaoInfraespinhal";
import OmbroLadoEsquerdo from "./ombro/ombroEsquerdo/ladoEsquerdo";
import TendaoInfraespinhalOmbroEsquerdo from "./ombro/ombroEsquerdo/TendaoInfraespinhal";

import CotoveloNormalDireito from "./cotovelo/cotoveloDireito/normal";
import CotoveloNormalEsquerdo from "./cotovelo/cotoveloEsquerdo/normal";
import JoelhoDerrameArticularDireito from "./joelho/joelhoDireito/JoelhoDerrameArticularDireito";
import JoelhoLadoDireito from "./joelho/joelhoDireito/ladoDireito";
import LigColTibialMedialDireito from "./joelho/joelhoDireito/LigamentoColateralTibialMedialDireito";
import MeniscosDireito from "./joelho/joelhoDireito/meniscosDireito";
import JoelhoNormalDireito from "./joelho/joelhoDireito/normal";
import TendaoPataGansoDireito from "./joelho/joelhoDireito/tendaoPataGansoDireito";
import TendaoPatelarDireito from "./joelho/joelhoDireito/tendaoPatelarDireito";
import JoelhoDerrameArticularEsquerdo from "./joelho/joelhoEsquerdo/JoelhoDerrameArticularEsquerdo";
import JoelhoLadoEsquerdo from "./joelho/joelhoEsquerdo/ladoEsquerdo";
import LigColTibialMedialEsquerdo from "./joelho/joelhoEsquerdo/LigamentoColateralTibialMedialEsquerdo";
import MeniscosEsquerdo from "./joelho/joelhoEsquerdo/meniscosEsquerdo";
import JoelhoNormalEsquerdo from "./joelho/joelhoEsquerdo/normal";
import TendaoPataGansoEsquerdo from "./joelho/joelhoEsquerdo/tendaoPataGansoEsquerdo";
import TendaoPatelarEsquerdo from "./joelho/joelhoEsquerdo/tendaoPatelarEsquerdo";
import MaoLadoDireito from "./mao/maoDireita/ladoDireito";
import MaoNormalDireito from "./mao/maoDireita/normal";
import MaoLadoEsquerdo from "./mao/maoEsquerda/ladoEsquerdo";
import MaoNormalEsquerdo from "./mao/maoEsquerda/normal";
import OmbroNormalDireito from "./ombro/omboDireito/normal";
import OmbroNormalEsquerdo from "./ombro/ombroEsquerdo/normal";
import PunhoLadoDireito from "./punho/punhoDireito/ladoDireito";
import PunhoNormalDireito from "./punho/punhoDireito/normal";
import PunhoLadoEsquerdo from "./punho/punhoEsquerdo/ladoEsquerdo";
import PunhoNormalEsquerdo from "./punho/punhoEsquerdo/normal";

import BolsaOlecreaneanaDireito from "./cotovelo/cotoveloDireito/BolsaOlecraneanaDireito";
import DerrameArticularDireito from "./cotovelo/cotoveloDireito/DerrameArticularDireito";
import LiquidoPeritendineoDireito from "./cotovelo/cotoveloDireito/LiquidoPeritendineoDireito";
import NervoUlnarDireito from "./cotovelo/cotoveloDireito/NervoUlnarDireito";
import TenComumExtensoresAntebracoDireito from "./cotovelo/cotoveloDireito/TenComumExtensoresAntebracoDireito";
import TenComumFlexoresAntebracoDireito from "./cotovelo/cotoveloDireito/TenComumFlexosoresAntebracoDireito";
import TendaoBicepsBraquialDireito from "./cotovelo/cotoveloDireito/TendaoBicepsBraquialDireito";
import TendaoTricepsBraquialDireito from "./cotovelo/cotoveloDireito/TendaoTricepsBraquialDireito";
import BolsaOlecreaneanaEsquerdo from "./cotovelo/cotoveloEsquerdo/BolsaOlecraneanaEsquerdo";
import DerrameArticularEsquerdo from "./cotovelo/cotoveloEsquerdo/DerrameArticularEsquerdo";
import LiquidoPeritendineoEsquerdo from "./cotovelo/cotoveloEsquerdo/LiquidoPeritendineoEsquerdo";
import NervoUlnarEsquerdo from "./cotovelo/cotoveloEsquerdo/NervoUlnarEsquerdo";
import TenComumExtensoresAntebracoEsquerdo from "./cotovelo/cotoveloEsquerdo/TenComumExtensoresAntebracoEsquerdo";
import TenComumFlexoresAntebracoEsquerdo from "./cotovelo/cotoveloEsquerdo/TenComumFlexosoresAntebracoEsquerdo";
import TendaoBicepsBraquialEsquerdo from "./cotovelo/cotoveloEsquerdo/TendaoBicepsBraquialEsquerdo";
import TendaoTricepsBraquialEsquerdo from "./cotovelo/cotoveloEsquerdo/TendaoTricepsBraquialEsquerdo";
import CistosDireito from "./joelho/joelhoDireito/CistosDireito";
import LigColFibularLateralDireito from "./joelho/joelhoDireito/LigamentoColateralFibularLateralDireito";
import TendaoBicepsFemoralDireito from "./joelho/joelhoDireito/TendaoBicepsFemoralDireito";
import TendaoQuadricepsFemoralDireito from "./joelho/joelhoDireito/TendaoQuadricepsFemoralDireito";
import CistosEsquerdo from "./joelho/joelhoEsquerdo/CistosEsquerdo";
import LigColFibularLateralEsquerdo from "./joelho/joelhoEsquerdo/LigamentoColateralFibularLateralEsquerdo";
import TendaoBicepsFemoralEsquerdo from "./joelho/joelhoEsquerdo/TendaoBicepsFemoralEsquerdo";
import TendaoQuadricepsFemoralEsquerdo from "./joelho/joelhoEsquerdo/TendaoQuadricepsFemoralEsquerdo";
import AlteracaoPosCirurgiaDireito from "./mao/maoDireita/AlteracaoPosDireito";
import MaoCistosDireito from "./mao/maoDireita/CistosDireito";
import ColecaoDireito from "./mao/maoDireita/colecaoDireito";
import CorpoEstranhoDireito from "./mao/maoDireita/CorpoEstranhoDireito";
import MaoDerrameArticularDireita from "./mao/maoDireita/DerrameArticularDireito/DerrameArticular";
import FibromatosePalmarDireito from "./mao/maoDireita/FibromatosePalmarSuperficialDireito/FibromatosePalmar";
import LiquidoPeritendineoHexoresDireita from "./mao/maoDireita/LiquidoPeritendineoHexoresDireito/LiquidoPeritendineoHexores";
import OssosDireita from "./mao/maoDireita/OssosDireito/Ossos";
import PoliasDireita from "./mao/maoDireita/PoliasDireito/Polias";
import RoturaExtensoresDireito from "./mao/maoDireita/RoturaExtensoresDireito/RoturaExtensores";
import RoturaFlexoresDireito from "./mao/maoDireita/RoturaFlexoresDireito/RoturaFlexores";
import TenossinoviteExtensoresDireita from "./mao/maoDireita/TenossinoviteExtensoresDireito/TenossinoviteExtensores";
import TenossinoviteFlexoresDireito from "./mao/maoDireita/TenossinoviteFlexoresDireito/TenossinoviteFlexores";
import AlteracaoPosCirurgiaEsquerdo from "./mao/maoEsquerda/AlteracaoPosEsquerda";
import MaoCistosEsquerdo from "./mao/maoEsquerda/CistosEsquerdo";
import ColecaoEsquerdo from "./mao/maoEsquerda/colecaoEsquerdo";
import CorpoEstranhoEsquerdo from "./mao/maoEsquerda/CorpoEstranhoEsquerdo";
import MaoDerrameArticularEsquerdo from "./mao/maoEsquerda/DerrameArticularEsquerdo/DerrameArticular";
import FibromatosePalmarEsquerdo from "./mao/maoEsquerda/FibromatosePalmarSuperficialEsquerdo/FibromatosePalmar";
import LiquidoPeritendineoHexoresEsquerda from "./mao/maoEsquerda/LiquidoPeritendineoHexoresEsquerdo/LiquidoPeritendineoHexores";
import OssosEsquerda from "./mao/maoEsquerda/OssosEsquerdo/Ossos";
import PoliasEsquerdo from "./mao/maoEsquerda/PoliasEsquerdo/Polias";
import RoturaExtensoresEsquerdo from "./mao/maoEsquerda/RoturaExtensoresEsquerdo/RoturaExtensores";
import RoturaFlexoresEsquerdo from "./mao/maoEsquerda/RoturaFlexoresEsquerdo/RoturaFlexores";
import TenossinoviteExtensoresEsquerda from "./mao/maoEsquerda/TenossinoviteExtensoresEsquerdo/TenossinoviteExtensores";
import TenossinoviteFlexoresEsquerdo from "./mao/maoEsquerda/TenossinoviteFlexoresEsquerdo/TenossinoviteFlexores";
import ArticulacaoAcromioclavicularDireito from "./ombro/omboDireito/ArticulacaoAcromioclavicular";
import BolsaSubacromial_SubdeltoideaDireito from "./ombro/omboDireito/BolsaSubacromial";
import TendaoCabeçaLongaBicepsDireito from "./ombro/omboDireito/TendaoCabeçaLongaBiceps";
import TendaoSubescapularOmbroDireito from "./ombro/omboDireito/TendaoSubescapular";
import OmbroTendaoSupraespinhalDireito from "./ombro/omboDireito/TendaoSupraespinhal";
import VentreInfraespinhalDireito from "./ombro/omboDireito/VentreInfraespinhal";
import VentreSupraespinhalDireito from "./ombro/omboDireito/VentreSupraespinhal";
import ArticulacaoAcromioclavicularEsquerdo from "./ombro/ombroEsquerdo/ArticulacaoAcromioclavicular";
import BolsaSubacromial_SubdeltoideaEsquerdo from "./ombro/ombroEsquerdo/BolsaSubacromial";
import TendaoCabeçaLongaBicepsEsquerdo from "./ombro/ombroEsquerdo/TendaoCabeçaLongaBiceps";
import TendaoSubescapularOmbroEsquerdo from "./ombro/ombroEsquerdo/TendaoSubescapular";
import OmbroTendaoSupraespinhalEsquerdo from "./ombro/ombroEsquerdo/TendaoSupraespinhal";
import VentreInfraespinhalEsquerdo from "./ombro/ombroEsquerdo/VentreInfraespinhal";
import VentreSupraespinhalEsquerdo from "./ombro/ombroEsquerdo/VentreSupraespinhal";
import PunhoNervoMedianoDireito from "./punho/punhoDireito/NervoMediano";
import PunhoCistosDireito from "./punho/punhoDireito/PunhoCistos";
import RetinaculoFlexoresDireito from "./punho/punhoDireito/RetinaculoFlexores";
import TendaoExtensoresTenossinoviteDireito from "./punho/punhoDireito/TendaoExtensoresTenossinovite";
import TendaoFlexoresTenossinoviteDireito from "./punho/punhoDireito/TendaoFlexoresTenossinovite";
import PunhoNervoMedianoEsquerdo from "./punho/punhoEsquerdo/NervoMedianoEsquerdo";
import PunhoCistosEsquerdo from "./punho/punhoEsquerdo/PunhoCistos";
import RetinaculoFlexoresEsquerdo from "./punho/punhoEsquerdo/RetinaculoFlexores";
import TendaoExtensoresTenossinoviteEsquerdo from "./punho/punhoEsquerdo/TendaoExtensoresTenossinovite";
import TendaoFlexoresTenossinoviteEsquerdo from "./punho/punhoEsquerdo/TendaoFlexoresTenossinovite";
import FasciaLataDireito from "./quadril/quadrilDireito/FasciaLata";
import QuadrilLadoDireito from "./quadril/quadrilDireito/ladoDireito";
import QuadrilNormalDireito from "./quadril/quadrilDireito/normal";
import QuadrilBolsasDireito from "./quadril/quadrilDireito/QuadrilBolsasDireito";
import QuadrilDerrameArticularDireito from "./quadril/quadrilDireito/QuadrilDerrameArticularDireito";
import TendaoGluteoMedioDireito from "./quadril/quadrilDireito/TendaoGluteoMedio";
import TendaoGluteoMinimoDireito from "./quadril/quadrilDireito/TendaoGluteoMinimo";
import FasciaLataEsquerdo from "./quadril/quadrilEsquerdo/FasciaLata";
import QuadrilLadoEsquerdo from "./quadril/quadrilEsquerdo/ladoEsquerdo";
import QuadrilNormalEsquerdo from "./quadril/quadrilEsquerdo/normal";
import QuadrilBolsasEsquerdo from "./quadril/quadrilEsquerdo/QuadrilBolsasEsquerdo";
import QuadrilDerrameArticularEsquerdo from "./quadril/quadrilEsquerdo/QuadrilDerrameArticularEsquerdo";
import TendaoGluteoMedioEsquerdo from "./quadril/quadrilEsquerdo/TendaoGluteoMedio";
import TendaoGluteoMinimoEsquerdo from "./quadril/quadrilEsquerdo/TendaoGluteoMinimo";
import Tornozelos from "./tornozelo/tornozelos";
import { useState } from "react";

function Articulacoes() {
  const altura = '100%'
  const largura = '180px'
  const [Disable, SetDisable] = useState(false)

  return (

    <Flex
      flex={1}
      gap={4}
      h="100%"
      w="65%"
      maxW="65%"
      alignItems="start"
      justifyItems="center"
      flexWrap="wrap"
    >

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
        <Box w='150px' >
          <Checkbox
            id="tudoNormal"
            onChange={(e) => { SetDisable(!Disable) }}
          >Articulações normais</Checkbox>
        </Box>
      </Box >

      <Tornozelos Disable={Disable} />
      <Flex
        gap={4}
        alignItems="start"
        justifyItems="center"
        flexWrap="wrap"
        w="98%"
      >
        {/*OMBRO ESQUERDO */}
        <Flex flex={1} flexDirection="column">
          <OmbroLadoEsquerdo />

          <OmbroNormalEsquerdo />

          <OmbroTendaoSupraespinhalEsquerdo Disable={Disable} />

          <VentreSupraespinhalEsquerdo Disable={Disable} />

          <TendaoInfraespinhalOmbroEsquerdo Disable={Disable} />

          <VentreInfraespinhalEsquerdo Disable={Disable} />

          <TendaoSubescapularOmbroEsquerdo Disable={Disable} />

          <TendaoCabeçaLongaBicepsEsquerdo Disable={Disable} />

          <BolsaSubacromial_SubdeltoideaEsquerdo Disable={Disable} />

          <ArticulacaoAcromioclavicularEsquerdo Disable={Disable} />
        </Flex>

        {/*OMBRO DIREITO */}
        <Flex flex={1} flexDirection="column">
          <OmbroLadoDireito />

          <OmbroNormalDireito />

          <OmbroTendaoSupraespinhalDireito Disable={Disable} />

          <VentreSupraespinhalDireito Disable={Disable} />

          <TendaoInfraespinhalOmbroDireito Disable={Disable} />

          <VentreInfraespinhalDireito Disable={Disable} />

          <TendaoSubescapularOmbroDireito Disable={Disable} />

          <TendaoCabeçaLongaBicepsDireito Disable={Disable} />

          <BolsaSubacromial_SubdeltoideaDireito Disable={Disable} />

          <ArticulacaoAcromioclavicularDireito Disable={Disable} />
        </Flex>
      </Flex>

      <Flex
        gap={4}
        alignItems="start"
        justifyItems="center"
        flexWrap="wrap"
        w="98%"
      >
        {/*COTOVELO ESQUERDO */}
        <Flex flex={1} flexDirection="column">
          <CotoveloLadoEsquerdo />

          <CotoveloNormalEsquerdo />

          <TenComumExtensoresAntebracoEsquerdo Disable={Disable} />

          <TenComumFlexoresAntebracoEsquerdo Disable={Disable} />

          <TendaoBicepsBraquialEsquerdo Disable={Disable} />

          <TendaoTricepsBraquialEsquerdo Disable={Disable} />

          <LiquidoPeritendineoEsquerdo Disable={Disable} />

          <NervoUlnarEsquerdo Disable={Disable} />

          <BolsaOlecreaneanaEsquerdo Disable={Disable} />

          <DerrameArticularEsquerdo Disable={Disable} />
        </Flex>

        {/*COTOVELO DIREITO */}
        <Flex flex={1} flexDirection="column">
          <CotoveloLadoDireito />

          <CotoveloNormalDireito />

          <TenComumExtensoresAntebracoDireito Disable={Disable} />

          <TenComumFlexoresAntebracoDireito Disable={Disable} />

          <TendaoBicepsBraquialDireito Disable={Disable} />

          <TendaoTricepsBraquialDireito Disable={Disable} />

          <LiquidoPeritendineoDireito Disable={Disable} />

          <NervoUlnarDireito Disable={Disable} />

          <BolsaOlecreaneanaDireito Disable={Disable} />

          <DerrameArticularDireito Disable={Disable} />
        </Flex>
      </Flex>

      <Flex
        gap={4}
        alignItems="start"
        justifyItems="center"
        flexWrap="wrap"
        w="98%"
      >
        {/*PUNHO ESQUERDO */}
        <Flex flex={1} flexDirection="column">
          <PunhoLadoEsquerdo />

          <PunhoNormalEsquerdo />

          <TendaoFlexoresTenossinoviteEsquerdo Disable={Disable} />

          <TendaoExtensoresTenossinoviteEsquerdo Disable={Disable} />

          <PunhoNervoMedianoEsquerdo Disable={Disable} />

          <RetinaculoFlexoresEsquerdo Disable={Disable} />

          <PunhoCistosEsquerdo Disable={Disable} />
        </Flex>

        {/*PUNHO DIREITO */}
        <Flex flex={1} flexDirection="column">
          <PunhoLadoDireito />

          <PunhoNormalDireito />

          <TendaoFlexoresTenossinoviteDireito Disable={Disable} />

          <TendaoExtensoresTenossinoviteDireito Disable={Disable} />

          <PunhoNervoMedianoDireito Disable={Disable} />

          <RetinaculoFlexoresDireito Disable={Disable} />

          <PunhoCistosDireito Disable={Disable} />
        </Flex>
      </Flex>

      <Flex
        gap={4}
        alignItems="start"
        justifyItems="center"
        flexWrap="wrap"
        w="98%"
      >
        {/*MAO ESQUERDO */}
        <Flex flex={1} flexDirection="column">
          <MaoLadoEsquerdo />

          <MaoNormalEsquerdo />

          <RoturaFlexoresEsquerdo Disable={Disable} />

          <TenossinoviteFlexoresEsquerdo Disable={Disable} />

          <LiquidoPeritendineoHexoresEsquerda Disable={Disable} />

          <PoliasEsquerdo Disable={Disable} />

          <FibromatosePalmarEsquerdo Disable={Disable} />

          <RoturaExtensoresEsquerdo Disable={Disable} />

          <TenossinoviteExtensoresEsquerda Disable={Disable} />

          <MaoCistosEsquerdo Disable={Disable} />

          <OssosEsquerda Disable={Disable} />

          <MaoDerrameArticularEsquerdo Disable={Disable} />

          <AlteracaoPosCirurgiaEsquerdo Disable={Disable} />

          <ColecaoEsquerdo Disable={Disable} />

          <CorpoEstranhoEsquerdo Disable={Disable} />
        </Flex>

        {/*MAO DIREITO */}
        <Flex flex={1} flexDirection="column">
          <MaoLadoDireito />

          <MaoNormalDireito />

          <RoturaFlexoresDireito Disable={Disable} />

          <TenossinoviteFlexoresDireito Disable={Disable} />

          <LiquidoPeritendineoHexoresDireita Disable={Disable} />

          <PoliasDireita Disable={Disable} />

          <FibromatosePalmarDireito Disable={Disable} />

          <RoturaExtensoresDireito Disable={Disable} />

          <TenossinoviteExtensoresDireita Disable={Disable} />

          <MaoCistosDireito Disable={Disable} />

          <OssosDireita Disable={Disable} />

          <MaoDerrameArticularDireita Disable={Disable} />

          <AlteracaoPosCirurgiaDireito Disable={Disable} />

          <ColecaoDireito Disable={Disable} />

          <CorpoEstranhoDireito Disable={Disable} />
        </Flex>
      </Flex>

      <Flex
        gap={4}
        alignItems="start"
        justifyItems="center"
        flexWrap="wrap"
        w="98%"
      >
        {/*JOELHO ESQUERDO */}
        <Flex flex={1} flexDirection="column">
          <JoelhoLadoEsquerdo />

          <JoelhoNormalEsquerdo />

          <JoelhoDerrameArticularEsquerdo Disable={Disable} />

          <LigColTibialMedialEsquerdo Disable={Disable} />

          <LigColFibularLateralEsquerdo Disable={Disable} />

          <TendaoPataGansoEsquerdo Disable={Disable} />

          <TendaoQuadricepsFemoralEsquerdo Disable={Disable} />

          <TendaoBicepsFemoralEsquerdo Disable={Disable} />

          <TendaoPatelarEsquerdo Disable={Disable} />

          <MeniscosEsquerdo Disable={Disable} />

          <CistosEsquerdo Disable={Disable} />
        </Flex>

        {/*JOELHO DIREITO */}
        <Flex flex={1} flexDirection="column">
          <JoelhoLadoDireito />

          <JoelhoNormalDireito />

          <JoelhoDerrameArticularDireito Disable={Disable} />

          <LigColTibialMedialDireito Disable={Disable} />

          <LigColFibularLateralDireito Disable={Disable} />

          <TendaoPataGansoDireito Disable={Disable} />

          <TendaoQuadricepsFemoralDireito Disable={Disable} />

          <TendaoBicepsFemoralDireito Disable={Disable} />

          <TendaoPatelarDireito Disable={Disable} />

          <MeniscosDireito Disable={Disable} />

          <CistosDireito Disable={Disable} />
        </Flex>
      </Flex>

      <Flex
        gap={4}
        alignItems="start"
        justifyItems="center"
        flexWrap="wrap"
        w="98%"
      >
        {/*QUADRIL ESQUERDO */}
        <Flex flex={1} flexDirection="column">
          <QuadrilLadoEsquerdo />

          <QuadrilNormalEsquerdo />

          <QuadrilDerrameArticularEsquerdo Disable={Disable} />

          <TendaoGluteoMedioEsquerdo Disable={Disable} />

          <TendaoGluteoMinimoEsquerdo Disable={Disable} />

          <QuadrilBolsasEsquerdo Disable={Disable} />

          <FasciaLataEsquerdo Disable={Disable} />
        </Flex>

        {/*QUADRIL DIREITO */}
        <Flex flex={1} flexDirection="column">
          <QuadrilLadoDireito />

          <QuadrilNormalDireito />

          <QuadrilDerrameArticularDireito Disable={Disable} />

          <TendaoGluteoMedioDireito Disable={Disable} />

          <TendaoGluteoMinimoDireito Disable={Disable} />

          <QuadrilBolsasDireito Disable={Disable} />

          <FasciaLataDireito Disable={Disable} />
        </Flex>
      </Flex>

      {/*<Box
              textAlign="center" >
              <BracoLadoDireito />
            
            <Box
              mt='10px'
              textAlign="center" >
              <BracoNormalDireito />
            
            <Box
              // w='450px'
              textAlign="center" >
              <BracoDireito />
            
            <Box
              textAlign="center" >
              <AntebracoLadoDireito />
             
            <Box
              mt='10px'
              textAlign="center" >
              <AntebracoNormalDireito />
            
           
     <Box
              textAlign="center" >
              <DedoLadoDireito />
            
            <Box
              mt='10px'
              textAlign="center" >
              <DedoNormalDireito />
            
            <Box
              // w='450px'
              textAlign="center" >
            

       <Box
                            mt='10px'
                            textAlign="center" >
                            <QuadrilDireito />
                         
       <Box
              textAlign="center" >
              <CoxaLadoDireito />
            
            <Box
              mt='10px'
              textAlign="center" >
              <CoxaNormalDireito />
            
            <Box
              textAlign="center" >
              <PernaLadoDireito />
            
            <Box
              mt='10px'
              textAlign="center" >
              <PernaNormalDireito />
            
            <Box
              textAlign="center" >
              <PeLadoDireito />
            
            <Box
              mt='10px'
              textAlign="center" >
              <PeNormalDireito />
            
            <Box
              mt='10px'
              textAlign="center" >
              <PeTendaoAquilesDireito />
            
            <Box
              mt='10px'
              textAlign="center" >
              <PeExtraDireito />
             

       <Box
              textAlign="center" >
              <BracoLadoEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
              <BracoNormalEsquerdo />
            
            <Box
              // w='450px'
              textAlign="center" >
              <BracoEsquerdo />
            
            <Box
              textAlign="center" >
              <AntebracoLadoEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
              <AntebracoNormalEsquerdo />
            
      <Box
              textAlign="center" >
              <DedoLadoEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
              <DedoNormalEsquerdo />
            
            <Box
              // w='450px'
              textAlign="center" >
              <DedoEsquerdo />
             

      
            <Box
              textAlign="center" >
              <CoxaLadoEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
              <CoxaNormalEsquerdo />
            
            <Box
              textAlign="center" >
              <PernaLadoEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
              <PernaNormalEsquerdo />
            
            <Box
              textAlign="center" >
              <PeLadoEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
              <PeNormalEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
              <PeTendaoAquilesEsquerdo />
            
            <Box
              mt='10px'
              textAlign="center" >
    <PeExtraEsquerdo />*/}
    </Flex>
  );
}

export default Articulacoes;
