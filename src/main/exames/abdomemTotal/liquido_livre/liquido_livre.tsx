
import { Box, Checkbox, Select, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function LiquidoLivre({ Disable }) {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [frasesLiquidoLivre, setFrasesLiquidoLivre] = useState<any>([]);
  const [ConclusoesLiquidoLivre, setConclusoesLiquidoLivre] = useState<any>([]);

  const [LiquidoLivreCheckbox, setLiquidoLivreCheckbox] = useState(false)
  const [DisableSelect, setDisableSelect] = useState(true)
  const [Select1, setSelect1] = useState('')
  const [Select2, setSelect2] = useState('')

  const criaStringLiquidoLivre = () => {
    let string = "quantidade de líquido livre "
    let conclusao = 'Presença de líquido em'
    removeFraseLiquidoLivre()
    if (Select1 != '' && Select2 != '') {
      string = `Nota-se ${Select2} ${string} ${Select1} `
      conclusao = `${conclusao} ${Select2} quantidade ${Select1}`
      setFrasesLiquidoLivre((arr) => [...arr, string]);
      setConclusoesLiquidoLivre((arr) => [...arr, conclusao]);
    }
  }

  const removeFraseLiquidoLivre = () => {
    frasesLiquidoLivre.map((e) => {
      if (e.includes("quantidade de líquido livre ")) {
        const index = frasesLiquidoLivre.indexOf(e);
        if (index > -1) {
          frasesLiquidoLivre.splice(index, 1);
          setFrasesLiquidoLivre((arr) => [...arr]);
        }
      }
    });
    ConclusoesLiquidoLivre.map((e) => {
      if (e.includes('Presença de líquido em')) {
        const index = ConclusoesLiquidoLivre.indexOf(e);
        if (index > -1) {
          ConclusoesLiquidoLivre.splice(index, 1);
          setConclusoesLiquidoLivre((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Presença de líquido em');
        }
      }
    });

  };

  useEffect(() => {
    if (LiquidoLivreCheckbox) {
      criaStringLiquidoLivre()
      setDisableSelect(false)
    } else {
      setDisableSelect(true)
      removeFraseLiquidoLivre()
      setSelect1('')
      setSelect2('')
    }
  }, [LiquidoLivreCheckbox, Select1, Select2])

  const subExame = "Líquido Livre";
  const titulo_exame = "Abdômen total";

  useEffect(() => {
    if (Object.keys(frasesLiquidoLivre).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesLiquidoLivre,
        ConclusoesLiquidoLivre
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesLiquidoLivre,
        ConclusoesLiquidoLivre
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesLiquidoLivre]);

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
      <Box>
        <TituloNomeExame titulo="Líquido Livre" />

        <Box gap="10px" display="flex" flexWrap="wrap" mb="10px">

          <Checkbox
            onChange={() => {
              setLiquidoLivreCheckbox(!LiquidoLivreCheckbox);
            }}
          >
            Líquido livre
          </Checkbox>
          <Select
            w='auto'
            isDisabled={DisableSelect}
            value={Select1}
            onChange={(e) => {
              setSelect1(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Local
            </option>
            <option value="no abdome">no abdômen</option>
            <option value="na pelve">na pelve</option>
            <option value="na fossa hepatorrenal">na fossa hepatorrenal</option>
            <option value="no flanco direito">no flanco direito</option>
            <option value="no flanco esquerdo">no flanco esquerdo</option>
            <option value="na fossa ilíaca direita">na fossa ilíaca direita</option>
            <option value="na fossa ilíaca esquerda">na fossa ilíaca esquerda</option>
          </Select>
          <Select
            isDisabled={DisableSelect}
            w='auto'
            value={Select2}
            onChange={(e) => {
              setSelect2(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Quantidade
            </option>
            <option value="pequena">Pequena</option>
            <option value="moderada">
              Moderada
            </option>
            <option value="grande">Grande</option>
          </Select>

        </Box>
      </Box>
    </Box>
  );
}

export default LiquidoLivre;
