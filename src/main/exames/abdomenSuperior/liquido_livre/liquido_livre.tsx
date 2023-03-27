import { Box, Checkbox, Select } from "@chakra-ui/react";
import { PresenceContext } from "framer-motion";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function LiquidoLivre() {
  const altura = "100%";
  const largura = "66%";

  const removeItemString = (value) => {
    var index = FrasesLiquidoLivre.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FrasesLiquidoLivre.splice(index, 1);
      setFrasesLiquidoLivre((arr) => [...arr]);
    }
  };

  const [FrasesLiquidoLivre, setFrasesLiquidoLivre] = useState<any>([]);
  const [ConclusaoLiquidoLivre, setConclusaoLiquidoLivre] = useState<any>([]);

  const [AusenteCheckbox, setAusenteCheckbox] = useState(false)
  const [PresenteCheckbox, setPresenteCheckbox] = useState(false)
  const [PresenteSelect, setPresenteSelect] = useState('')

  const removeStringConclusao = (value) => {
    var index;
    ConclusaoLiquidoLivre.map((e) => {
      if (e.includes(value)) {
        index = ConclusaoLiquidoLivre.indexOf(e);
        if (index > -1) {
          ConclusaoLiquidoLivre.splice(index, 1);
          setConclusaoLiquidoLivre((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select(value);
        }
      }
    });
  };
  const removeItemSelect = (value) => {
    FrasesLiquidoLivre.map((e) => {
      if (e.includes(value)) {
        var index = FrasesLiquidoLivre.indexOf(e);
        if (index > -1) {
          FrasesLiquidoLivre.splice(index, 1);
          setFrasesLiquidoLivre((arr) => [...arr]);
        }
      }
    });
  }
  const criaStringPresente = () => {
    var string = "quantidade de líquido livre intraperitoneal com aspecto anecóide, sem septações ou debris, se estendendo do fundo de saco posterior e goteiras parietocólicas bilateralmente até espaços hepato e espleno-renais."
    var conclusao = 'Ascite'
    removeItemSelect(string)
    removeStringConclusao(conclusao)
    if (PresenteCheckbox) {
      if (PresenteSelect != '') {
        string = `Visibilizada ${PresenteSelect} ${string}.`
        conclusao = `${conclusao} ${PresenteSelect}.`
        setFrasesLiquidoLivre((arr) => [...arr, string])
        setConclusaoLiquidoLivre((arr) => [...arr, conclusao])
      }
    } else {
      setPresenteSelect('')
    }
  }
  useEffect(() => {
    criaStringPresente()
  }, [PresenteSelect, PresenteCheckbox])

  useEffect(() => {
    const string = 'Não se evidência ascite.'
    AusenteCheckbox ? setFrasesLiquidoLivre((arr) => [...arr, string]) : removeItemString(string)
  }, [AusenteCheckbox])

  const subExame = "Líquido Livre";
  const titulo_exame = "Abdomen Superior";

  useEffect(() => {
    if (Object.keys(FrasesLiquidoLivre).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesLiquidoLivre,
        ConclusaoLiquidoLivre
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesLiquidoLivre,
        ConclusaoLiquidoLivre
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesLiquidoLivre]);

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
      mt="15px"
    >

      <TituloNomeExame titulo="Líquido Livre" />

      <Box gap="30px" display="flex" flexWrap="wrap" mb="10px">
        <Box>
          <Checkbox
            isDisabled={PresenteCheckbox}
            onChange={(e) => setAusenteCheckbox(!AusenteCheckbox)}
          >
            Ausente
          </Checkbox>
        </Box>

        <Box>
          <Checkbox
            onChange={(e) => setPresenteCheckbox(!PresenteCheckbox)}
            isDisabled={AusenteCheckbox}
          >
            Presente
          </Checkbox>
          <Select
            isDisabled={!PresenteCheckbox}
            value={PresenteSelect}
            onChange={(e) => setPresenteSelect(e.target.value)}
          >
            <option value="" disabled selected>
              Quantidade
            </option>
            <option value="pequena ">Pequena</option>
            <option value="moderada ">Moderada</option>
            <option value="grande ">Grande</option>
          </Select>
        </Box>
      </Box>
    </Box>
  );
}

export default LiquidoLivre;
