/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { MaoEsquerdoNormalContext } from "../../../../../context/MaoEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function AlteracaoPosCirurgiaEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  let { MaoEsquerdoLaudoNormal } = useContext(MaoEsquerdoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [disableArtefatoCirurgicoTransfixandoInput, setdisableArtefatoCirurgicoTransfixandoInput] = useState(true);
  const [ArtefatoCirurgicoTransfixandoCheckbox, setArtefatoCirurgicoTransfixandoCheckbox] = useState(false);
  const [ArtefatoCirurgicoTransfixandoSelect, setArtefatoCirurgicoTransfixandoSelect] = useState("");

  const [ArtefatoCirurgicoCheckbox, setArtefatoCirurgicoCheckbox] = useState(true);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringArtefatoCirurgico = () => {
    var string = "FALTA";
    if (ArtefatoCirurgicoCheckbox) {
      setLaudoPrin((arr) => [...arr, string]);
      setArtefatoCirurgicoCheckbox(false);
    } else {
      removeItemString(string);
    }
  };

  const criaStringArtefatoCirurgicoTransfixando = (ArtefatoCirurgicoTransfixando) => {
    removeArtefatoCirurgicoTransfixando();
    var string;
    if (ArtefatoCirurgicoTransfixando !== "") {
      string = `FALTA ${ArtefatoCirurgicoTransfixando}. `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeArtefatoCirurgicoTransfixando = () => {
    laudoPrin.map((e) => {
      if (e.includes("FALTA")) {
        var index = laudoPrin.indexOf(e);

        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (ArtefatoCirurgicoTransfixandoCheckbox) {
      setdisableArtefatoCirurgicoTransfixandoInput(false);
    } else {
      removeArtefatoCirurgicoTransfixando();
      setdisableArtefatoCirurgicoTransfixandoInput(true);
    }
  }, [ArtefatoCirurgicoTransfixandoCheckbox]);


  useEffect(() => {
    criaStringArtefatoCirurgicoTransfixando(ArtefatoCirurgicoTransfixandoSelect);
  }, [ArtefatoCirurgicoTransfixandoSelect]);


  useEffect(() => {
    MaoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)
  }, [MaoEsquerdoLaudoNormal])

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Alteração pós cirúrgica" />

      <Box display="flex" flexWrap="wrap">

      </Box>

      <Stack>

        <Checkbox
          isDisabled={disableTudo}
          onChange={() => {
            setArtefatoCirurgicoCheckbox(true);
            criaStringArtefatoCirurgico();
          }}
        >
          Artefato cirúrgico (fixação) no metacarpo
        </Checkbox>
        <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

          <Checkbox
            isDisabled={disableTudo}
            onChange={() => setArtefatoCirurgicoTransfixandoCheckbox(!ArtefatoCirurgicoTransfixandoCheckbox)}>
            Artefato cirúrgico (fixação) no metacarpo. transfixando
          </Checkbox>
          <Text alignSelf='center'>o tendão extensor do</Text>
          <Select
            w='110px'
            isDisabled={disableArtefatoCirurgicoTransfixandoInput}
            onChange={(e) => {
              setArtefatoCirurgicoTransfixandoSelect(e.target.value);
            }}
          >
            <option value="leve">leve</option>
            <option value="leve">leve</option>
            <option value="acentuada">acentuada</option>
          </Select>
          <Text alignSelf='center'>dedo</Text>
        </Box>
      </Stack>
    </Box>

  );
}
export default AlteracaoPosCirurgiaEsquerdo;
