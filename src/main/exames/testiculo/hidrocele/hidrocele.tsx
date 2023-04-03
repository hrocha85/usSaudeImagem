import { Box, Checkbox, HStack, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Hidrocele() {
  const altura = "100%";
  const largura = "27%";

  const [FrasesHidrocelete, setFrasesHidrocelete] = useState<any>([]);
  const [ConclusaoHidrocelete, setConclusaoHidrocelete] = useState<any>([]);

  const [posicaoHidroceleSelect, setPosicaoHidroceleSelect] = useState("");
  const [HidroceleCheckBox, setHidroceleCheckBox] = useState(false);

  const criaStringHidroceleLivre = () => {
    var conclusao = 'Sinais ecográficos de hidrocele'
    removeItemConclusao(conclusao)
    var string = 'Observa-se presença de líquido aumentado entre as túnicas vaginais em cavidades escrotais'
    removeStringHidroceleLivre(string);
    if (HidroceleCheckBox) {
      if (posicaoHidroceleSelect !== "") {
        string = `${string} ${posicaoHidroceleSelect}.`;
        conclusao = `${conclusao} ${posicaoHidroceleSelect}.`;
        setFrasesHidrocelete((arr) => [...arr, string]);
        setConclusaoHidrocelete((arr) => [...arr, conclusao]);
      }
    } else {
      setPosicaoHidroceleSelect("");
    }
  };

  const removeStringHidroceleLivre = (value) => {
    FrasesHidrocelete.map((e) => {
      if (e.includes(value)) {
        var index = FrasesHidrocelete.indexOf(e);

        if (index > -1) {
          FrasesHidrocelete.splice(index, 1);
          setFrasesHidrocelete((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemConclusao = (value) => {
    ConclusaoHidrocelete.map((e) => {
      if (e.includes(value)) {
        var index = ConclusaoHidrocelete.indexOf(e);

        if (index > -1) {
          ConclusaoHidrocelete.splice(index, 1);
          setConclusaoHidrocelete((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value)
        }
      }
    });
  };

  useEffect(() => {

    criaStringHidroceleLivre();
  }, [HidroceleCheckBox, posicaoHidroceleSelect]);

  const subExame = "Hidrocelete";
  const titulo_exame = "Testículo";


  useEffect(() => {
    if (Object.keys(FrasesHidrocelete).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesHidrocelete,
        ConclusaoHidrocelete
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesHidrocelete,
        ConclusaoHidrocelete
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesHidrocelete]);

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
      mt="30px"
    >
      <TituloNomeExame titulo="Hidrocele" />

      <HStack>
        <Checkbox
          whiteSpace="nowrap"
          onChange={() => {
            setHidroceleCheckBox(!HidroceleCheckBox);
          }}
        >
          Hidrocele no local
        </Checkbox>
        <Select
          isDisabled={!HidroceleCheckBox}
          w="auto"
          onChange={(e) => {
            setPosicaoHidroceleSelect(e.target.value);
          }}
          value={posicaoHidroceleSelect}
        >
          <option value="" disabled selected>
            Posição
          </option>
          <option value="">
            ausente
          </option>
          <option value="à direita">
            testículo direito
          </option>
          <option value="à esquerda">
            testículo esquerdo
          </option>
          <option value="bilateralmente">
            bilateral
          </option>
        </Select>
      </HStack>
    </Box>
  );
}
export default Hidrocele;
