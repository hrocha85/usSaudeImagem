/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { MaoDireitoNormalContext } from "../../../../../context/MaoDireitoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function AlteracaoPosCirurgiaDireito() {
  const altura = "100%";
  const largura = "95%";


  const [AlteracaoPosCirurgiaDireito, setAlteracaoPosCirurgiaDireito] = useState<any>([]);

  const subExame = `Alteração pós cirúrgia na mão direita`
  const titulo_exame = 'Articulações'

  useEffect(() => {
    if (Object.keys(AlteracaoPosCirurgiaDireito).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        AlteracaoPosCirurgiaDireito
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        AlteracaoPosCirurgiaDireito
      ).Format_Laudo_Create_Storage();
    }
  }, [AlteracaoPosCirurgiaDireito]);

  let { MaoDireitoLaudoNormal } = useContext(MaoDireitoNormalContext)
  const [disableTudo, setDisableTudo] = useState(false)

  const [disableArtefatoCirurgicoTransfixandoInput, setdisableArtefatoCirurgicoTransfixandoInput] = useState(true);
  const [ArtefatoCirurgicoTransfixandoCheckbox, setArtefatoCirurgicoTransfixandoCheckbox] = useState(false);
  const [ArtefatoCirurgicoTransfixandoSelect, setArtefatoCirurgicoTransfixandoSelect] = useState("");

  const [ArtefatoCirurgicoCheckbox, setArtefatoCirurgicoCheckbox] = useState(false);

  //Funcoes Padrao Micropolicistico - Inicio
  const criaStringArtefatoCirurgico = () => {
    var string = "FALTA";
    if (ArtefatoCirurgicoCheckbox) {
      setAlteracaoPosCirurgiaDireito((arr) => [...arr, string]);
    } else {
      removeItemString(string);
    }
  };
  useEffect(() => {
    criaStringArtefatoCirurgico()
  }, [ArtefatoCirurgicoCheckbox])

  const criaStringArtefatoCirurgicoTransfixando = (ArtefatoCirurgicoTransfixando) => {
    removeArtefatoCirurgicoTransfixando();
    var string;
    if (ArtefatoCirurgicoTransfixando !== "") {
      string = `FALTA ${ArtefatoCirurgicoTransfixando}. `;
      setAlteracaoPosCirurgiaDireito((arr) => [...arr, string]);
    }
  };

  const removeArtefatoCirurgicoTransfixando = () => {
    AlteracaoPosCirurgiaDireito.map((e) => {
      if (e.includes("FALTA")) {
        var index = AlteracaoPosCirurgiaDireito.indexOf(e);

        if (index > -1) {
          AlteracaoPosCirurgiaDireito.splice(index, 1);
          setAlteracaoPosCirurgiaDireito((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = AlteracaoPosCirurgiaDireito.indexOf(value);

    if (index > -1) {
      AlteracaoPosCirurgiaDireito.splice(index, 1);
      setAlteracaoPosCirurgiaDireito((arr) => [...arr]);
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
    MaoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)
  }, [MaoDireitoLaudoNormal])

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
            setArtefatoCirurgicoCheckbox(!ArtefatoCirurgicoCheckbox);
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
export default AlteracaoPosCirurgiaDireito;
