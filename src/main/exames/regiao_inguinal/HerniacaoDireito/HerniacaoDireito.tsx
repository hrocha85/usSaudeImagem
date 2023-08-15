
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function HerniacaoDireito({ Disable }) {
  const altura = "100%";
  const largura = "380px";

  const [frasesHernia, setFrasesHerniacaoDireito] = useState<any>([]);
  const [ConclusaoHernia, setConclusaoHerniacaoDireito] = useState<any>([]);

  const subExame = "Herniação Direita";
  const titulo_exame = 'Região Inguinal'

  useEffect(() => {
    if (Object.keys(frasesHernia).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesHernia,
        ConclusaoHernia
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesHernia,
        ConclusaoHernia
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesHernia]);

  const [medidaHernia, setmedidaHernia] = useState("");
  const [HerniaCheckBox, setHerniaCheckBox] = useState(false);

  const [medidaHerniaIntestinal, setmedidaHerniaIntestinal] = useState("");
  const [HerniaIntestinalCheckBox, setHerniaIntestinalCheckBox] = useState(false);

  const criaStringMedidasHernia = () => {
    const conclusao = 'Herniação.'
    removeMedidaHernia();
    if (medidaHernia !== "") {
      const string = `Herniação de conteúdo omental através do canal inguinal direito medindo ${medidaHernia} cm de espessura, observado à manobra de valsalva`;
      setFrasesHerniacaoDireito((arr) => [...arr, string]);
      setConclusaoHerniacaoDireito((arr) => [...arr, conclusao]);
    }
  };

  const removeMedidaHernia = () => {
    // console.log("valor remove = ", value);
    frasesHernia.map((e) => {
      if (e.includes("Herniação de conteúdo omental através do canal inguinal direito medindo")) {
        const index = frasesHernia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesHernia.splice(index, 1);
          setFrasesHerniacaoDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoHernia.map((e) => {
      if (e.includes("Herniação.")) {
        const index = ConclusaoHernia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoHernia.splice(index, 1);
          setConclusaoHerniacaoDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Herniação.');
        }
      }
    });
  };

  useEffect(() => {
    if (HerniaCheckBox) {
      criaStringMedidasHernia();
    } else {
      removeMedidaHernia();
      setmedidaHernia("");
    }
  }, [
    medidaHernia,
    HerniaCheckBox,
  ]);

  const criaStringMedidasHerniaIntestinal = () => {
    const conclusao = 'Herniação.'
    removeMedidaHerniaIntestinal();
    if (medidaHerniaIntestinal !== "") {
      const string = `Herniação de conteúdo omental e intestinal através do canal inguinal direito até a bolsa escrotal, com pouca mobilidade às manobras de compressão e Valsalva. 
      Conteúdo herniário intra-escrotal medindo cerca de ${medidaHerniaIntestinal} cm.  `;
      setFrasesHerniacaoDireito((arr) => [...arr, string]);
      setConclusaoHerniacaoDireito((arr) => [...arr, conclusao]);
    }
  };

  const removeMedidaHerniaIntestinal = () => {
    // console.log("valor remove = ", value);
    frasesHernia.map((e) => {
      if (e.includes("Herniação de conteúdo omental e intestinal através do canal inguinal direito até a bolsa escrotal, com pouca mobilidade às manobras de compressão e Valsalva.")) {
        const index = frasesHernia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesHernia.splice(index, 1);
          setFrasesHerniacaoDireito((arr) => [...arr]);
        }
      }
    });
    ConclusaoHernia.map((e) => {
      if (e.includes("Herniação.")) {
        const index = ConclusaoHernia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoHernia.splice(index, 1);
          setConclusaoHerniacaoDireito((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Herniação.');
        }
      }
    });
  };

  useEffect(() => {
    if (HerniaIntestinalCheckBox) {
      criaStringMedidasHerniaIntestinal();
    } else {
      removeMedidaHerniaIntestinal();
      setmedidaHerniaIntestinal("");
    }
  }, [
    medidaHerniaIntestinal,
    HerniaIntestinalCheckBox,
  ]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 20px 15px"

    >
      <TituloNomeExame titulo="Herniação Direita" />

      <Box gap="10px" display="flex" flexWrap="wrap">

        <Box>
          <HStack>
            <Checkbox
              onChange={() => setHerniaCheckBox(!HerniaCheckBox)}
            >
              Herniação de conteúdo omental
            </Checkbox>
            <Input
              isDisabled={!HerniaCheckBox}
              value={medidaHernia}
              w="35px"
              h="30px"
              padding="5px"
              textAlign="center"
              onChange={(e) => setmedidaHernia(e.target.value)}
            />
            <Text>cm</Text>
          </HStack>
        </Box>

        <Box>
          <HStack>
            <Checkbox
              onChange={() => setHerniaIntestinalCheckBox(!HerniaIntestinalCheckBox)}
            >
              Herniação de conteúdo omental e intestinal
            </Checkbox>
            <Input
              isDisabled={!HerniaIntestinalCheckBox}
              value={medidaHerniaIntestinal}
              w="35px"
              h="30px"
              padding="5px"
              textAlign="center"
              onChange={(e) => setmedidaHerniaIntestinal(e.target.value)}
            />
            <Text>cm</Text>
          </HStack>
        </Box>
      </Box>
    </Box >
  );
}
export default HerniacaoDireito;
