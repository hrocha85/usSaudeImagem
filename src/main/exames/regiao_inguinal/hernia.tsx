
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Format_Laudo } from "../../component/function_format_laudo";
import TituloNomeExame from "../../component/titulo_nome_exame";

function Hernia({ Disable }) {
  const altura = 'auto';
  const largura = "66%";


  const [frasesHerniaUmb, setFrasesHerniaUmb] = useState<any>([]);
  const [ConclusaoHerniaUmb, setConclusaoHerniaUmb] = useState<any>([]);

  const [medidaColo, setMedidaColo] = useState("");

  const [HerniacaoCheckbox, setHerniacaoCheckbox] = useState(false);
  const [medida1SacoHerniaco, setMedida1SacoHerniaco] = useState("");
  const [HerniacaoSelect, setHerniacaoSelect] = useState("");

  const criaStringHernia = () => {
    removeHernia();
    removeHerniaConclusao();
    if (HerniacaoCheckbox) {
      if (medida1SacoHerniaco !== "" && HerniacaoSelect) {
        const string = `Herniação de conteúdo omental do canal inguinal ${HerniacaoSelect} medindo ${medida1SacoHerniaco} cm de espessura, observado à manobra de valsalva.`;
        const conclusao = `Imagem sugestiva de ${HerniacaoSelect} sem sinais de encarceramento.`
        setFrasesHerniaUmb((arr) => [...arr, string]);
        setConclusaoHerniaUmb((arr) => [...arr, conclusao]);
      }
    } else {
      setMedida1SacoHerniaco("");
      setMedidaColo("");
      setHerniacaoSelect('')
    }
  };

  const removeHernia = () => {
    frasesHerniaUmb.map((e) => {
      if (e.includes("Herniação de conteúdo omental do canal inguinal")) {
        const index = frasesHerniaUmb.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesHerniaUmb.splice(index, 1);
          setFrasesHerniaUmb((arr) => [...arr]);
        }
      }
    });
  };
  const removeHerniaConclusao = () => {
    ConclusaoHerniaUmb.map((e) => {
      if (e.includes("Imagem sugestiva de")) {
        const index = ConclusaoHerniaUmb.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoHerniaUmb.splice(index, 1);
          setConclusaoHerniaUmb((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Imagem sugestiva de');
        }
      }
    });
  };



  useEffect(() => {
    criaStringHernia();
  }, [medidaColo, HerniacaoSelect, medida1SacoHerniaco]);

  const subExame = "Hérnia";
  const titulo_exame = "Região Inguinal";

  useEffect(() => {
    if (Object.keys(frasesHerniaUmb).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHerniaUmb,
        ConclusaoHerniaUmb
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHerniaUmb,
        ConclusaoHerniaUmb
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHerniaUmb]);

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
      <TituloNomeExame titulo="Hérnia" />

      <Box gap='5px' display="flex" flexWrap="wrap">

        <Checkbox
          onChange={(e) => setHerniacaoCheckbox(!HerniacaoCheckbox)}
        >
          Herniação
        </Checkbox>
        <Select
          w='auto'
          isDisabled={!HerniacaoCheckbox}
          value={HerniacaoSelect}
          onChange={(e) => {
            setHerniacaoSelect(e.target.value);
          }}
        >
          <option value="" disabled selected>
            lado
          </option>
          <option value="direito">
            direito
          </option>
          <option value="esquerdo">
            esquerdo
          </option>
        </Select>
        <Input

          isDisabled={!HerniacaoCheckbox}
          w="55px"

          value={medida1SacoHerniaco}
          padding="0px"

          textAlign="center"
          onChange={(e) => {
            setMedida1SacoHerniaco(e.target.value);
          }}
        />

        <Text alignSelf='center'>cm</Text>

      </Box>
    </Box>
  );
}
export default Hernia;
