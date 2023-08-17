
/* eslint-disable array-callback-return */
import { Box, Button, Checkbox, HStack, Select, Stack, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizar_nodulos";

function Nodulos({ Disable }) {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"
  const [numberArray, setNumberArray] = useState([1]);


  const [UpdateNodulos, setUpdateNodulos] = useState(false);

  const [noduloSelect, setNoduloSelect] = useState("");
  const [noduloSelect2, setNoduloSelect2] = useState("");
  const [disableNoduloSelect, setDisableNodulosSelect] = useState(true);

  const [noduloSubcutaneoCheckbox, setNoduloSubcutaneoCheckbox] =
    useState(false);

  function Nodulos() {
    return (
      <>
        {numberArray.map((num, key) => {
          return <IndividualizarNodulos
            key={key}
            selectNodulo1={noduloSelect}
            selectNodulo2={noduloSelect2}
            numNodulo={num}
            disable={!noduloSubcutaneoCheckbox}
          />
        })}
      </>
    );
  }
  useEffect(() => {
    if (UpdateNodulos) {
      setUpdateNodulos(false);
      setNumberArray([...numberArray, numberArray.length + 1]);
      Nodulos();
    }
  })
  useEffect(() => {
    if (noduloSubcutaneoCheckbox) {
      setDisableNodulosSelect(false);
    } else {
      setDisableNodulosSelect(true);
      setNoduloSelect("");
      setNoduloSelect2("");
    }
  }, [noduloSubcutaneoCheckbox]);

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
      <TituloNomeExame titulo="Partes Moles - Nódulos" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Box w="100%">
          <Stack mb="10px">
            <Checkbox

              onChange={(e) =>
                setNoduloSubcutaneoCheckbox(!noduloSubcutaneoCheckbox)
              }
              mr="30px"
            >
              Nódulo{"(s)"} na gordura subcutânea, de
            </Checkbox>
            <Select
              w={'80%'}
              isDisabled={disableNoduloSelect}
              value={noduloSelect}
              onChange={(e) => {
                setNoduloSelect(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="contornos regulares">contornos regulares</option>
              <option value="contornos irregulares">
                contornos irregulares
              </option>
            </Select>
            <Select
              w="80%"
              isDisabled={disableNoduloSelect}
              value={noduloSelect2}
              onChange={(e) => {
                setNoduloSelect2(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="isoecogênico(s) em relação ao tecido adiposo ( lipoma(s) )">
                isoecogênico(s) em relação ao tecido adiposo (lipoma(s))
              </option>
              <option value="hipoecogênico(s)">hipoecogênico(s)</option>
              <option value="hiperecogênico(s)">hiperecogênico(s)</option>
              <option value="calcificado(s)">calcificado(s)</option>
            </Select>
          </Stack>
          <Stack w="100%">
            <Box gap="10px" display="flex" flexWrap="wrap">
              {Nodulos()}
              <Button
                colorScheme="blue"
                onClick={() => {
                  setUpdateNodulos(true);
                }}
              >
                +1 Nódulo
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
export default Nodulos;
