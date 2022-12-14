/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CalculoVolume() {
  const altura = "100%";
  const largura = "40%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [CalcVolumePosCheckbox, setCalcVolumePosCheckbox] = useState(false)
  const [disableVolumePosInput1, setDisableVolumePosInput1] = useState(true)
  const [medida1CalcVolumePos, setMedida1CalcVolumePos] = useState('')
  const [medida2CalcVolumePos, setMedida2CalcVolumePos] = useState('')
  const [medida3CalcVolumePos, setMedida3CalcVolumePos] = useState('')

  const [CalcVolumePreCheckbox, setCalcVolumePreCheckbox] = useState(false)
  const [disableVolumePreInput1, setDisableVolumePreInput1] = useState(true)
  const [medida1CalcVolumePre, setMedida1CalcVolumePre] = useState('')
  const [medida2CalcVolumePre, setMedida2CalcVolumePre] = useState('')
  const [medida3CalcVolumePre, setMedida3CalcVolumePre] = useState('')


  useEffect(() => {
    CalcVolumePosCheckbox ? setDisableVolumePosInput1(false) :
      setDisableVolumePosInput1(true); removeCalcVolumePos(); setMedida1CalcVolumePos(''); setMedida2CalcVolumePos(''); setMedida3CalcVolumePos('')
  }, [CalcVolumePosCheckbox])

  const criaStringCalcVolumePos = (medida1CalcVolumePos, medida2CalcVolumePos, medida3CalcVolumePos) => {
    removeCalcVolumePos()
    const medida1 = parseInt(medida1CalcVolumePos)
    const medida2 = parseInt(medida2CalcVolumePos)
    const medida3 = parseInt(medida3CalcVolumePos)
    if (medida1 > 0 && medida2 > 0 && medida3 > 0) {
      let conta = (medida1 * medida2 * medida3 * 0.52) / 1000
      let string = `Volume pós-miccional: ${conta.toFixed(1)} cm³`
      setLaudoPrin((arr) => [...arr, string])
    }
  }

  const removeCalcVolumePos = () => {
    laudoPrin.map((e) => {
      if (e.includes("Volume pós-miccional:")) {
        let index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringCalcVolumePos(medida1CalcVolumePos, medida2CalcVolumePos, medida3CalcVolumePos)
  }, [medida1CalcVolumePos, medida2CalcVolumePos, medida3CalcVolumePos])

  useEffect(() => {
    CalcVolumePreCheckbox ? setDisableVolumePreInput1(false) :
      setDisableVolumePreInput1(true); removeCalcVolumePre(); setMedida1CalcVolumePre(''); setMedida2CalcVolumePre(''); setMedida3CalcVolumePre('')
  }, [CalcVolumePreCheckbox])

  const criaStringCalcVolumePre = (medida1CalcVolumePre, medida2CalcVolumePre, medida3CalcVolumePre) => {
    removeCalcVolumePre()
    const medida1 = parseInt(medida1CalcVolumePre)
    const medida2 = parseInt(medida2CalcVolumePre)
    const medida3 = parseInt(medida3CalcVolumePre)
    if (medida1 > 0 && medida2 > 0 && medida3 > 0) {
      let conta = (medida1 * medida2 * medida3 * 0.52) / 1000
      let string = `Volume pré-miccional: ${conta.toFixed(1)} cm³`
      setLaudoPrin((arr) => [...arr, string])
    }
  }

  const removeCalcVolumePre = () => {
    laudoPrin.map((e) => {
      if (e.includes("Volume pré-miccional:")) {
        let index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringCalcVolumePre(medida1CalcVolumePre, medida2CalcVolumePre, medida3CalcVolumePre)
  }, [medida1CalcVolumePre, medida2CalcVolumePre, medida3CalcVolumePre])

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <TituloNomeExame titulo="Cálculo Próstata" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <HStack>
          <Checkbox onChange={(e) => setCalcVolumePreCheckbox(!CalcVolumePreCheckbox)}>
            <Text fontSize='13px'>Volume pré-miccional</Text>
          </Checkbox>
          <Input
            isDisabled={disableVolumePreInput1}
            w="35px"
            h="30px"
            value={medida1CalcVolumePre}
            padding="5px"
            textAlign="center"
            onChange={(e) => { setMedida1CalcVolumePre(e.target.value) }}
          />
          <Text>x</Text>
          <Input
            isDisabled={disableVolumePreInput1}
            w="35px"
            h="30px"
            value={medida2CalcVolumePre}
            padding="5px"
            textAlign="center"
            onChange={(e) => { setMedida2CalcVolumePre(e.target.value) }}
          />
          <Text>x</Text>
          <Input
            isDisabled={disableVolumePreInput1}
            w="35px"
            h="30px"
            value={medida3CalcVolumePre}
            padding="5px"
            textAlign="center"
            onChange={(e) => { setMedida3CalcVolumePre(e.target.value) }}
          />
        </HStack>
        <Text>cm³</Text>
      </Box >

      <Box gap="15px" display="flex" flexWrap="wrap" mt='10px'>
        <HStack>
          <Checkbox onChange={(e) => setCalcVolumePosCheckbox(!CalcVolumePosCheckbox)}>
            Volume pós-miccional
          </Checkbox>
          <Input
            isDisabled={disableVolumePosInput1}
            w="35px"
            h="30px"
            value={medida1CalcVolumePos}
            padding="5px"
            textAlign="center"
            onChange={(e) => { setMedida1CalcVolumePos(e.target.value) }}
          />
          <Text>x</Text>
          <Input
            isDisabled={disableVolumePosInput1}
            w="35px"
            h="30px"
            value={medida2CalcVolumePos}
            padding="5px"
            textAlign="center"
            onChange={(e) => { setMedida2CalcVolumePos(e.target.value) }}
          />
          <Text>x</Text>
          <Input
            isDisabled={disableVolumePosInput1}
            w="35px"
            h="30px"
            value={medida3CalcVolumePos}
            padding="5px"
            textAlign="center"
            onChange={(e) => { setMedida3CalcVolumePos(e.target.value) }}
          />
        </HStack>
        <Text>cm³</Text>
      </Box >
    </Box >
  );
}
export default CalculoVolume;
