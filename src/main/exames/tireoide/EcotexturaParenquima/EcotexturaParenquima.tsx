
import { Box, Checkbox, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function EcotexturaParenquima({ Disable }) {
  const altura = "100%";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"


  const [FrasesECO, setFrasesECO] = useState<any>([]);
  const [ConclusaoECO, setConclusaoECO] = useState<any>([]);

  const [Normal, setNormal] = useState(false)
  const [NormalCheckbox, setNormalCheckbox] = useState(false);
  const [InespecificaCheckbox, setInespecificaCheckbox] = useState(false);
  const [TireoiditeCheckbox, setTireoiditeCheckbox] = useState(false);


  useEffect(() => {
    Disable ? setNormal(true) : setNormal(false)
  }, [Disable])

  useEffect(() => {
    if (Normal) {
      setNormalCheckbox(true)
    } else {
      setNormalCheckbox(false)
    }
  }, [Normal])

  const removeItemString = (value) => {
    // console.log("valor remove = ", value);
    const index = FrasesECO.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      FrasesECO.splice(index, 1);
      setFrasesECO((arr) => [...arr]);
    }
  };

  const removeConclusao = (value) => {
    ConclusaoECO.map((e) => {
      if (e.includes(value)) {
        const index = ConclusaoECO.indexOf(e);

        if (index > -1) {
          ConclusaoECO.splice(index, 1);
          setConclusaoECO((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao(value);
        }
      }
    });
  };

  useEffect(() => {
    const string = "Ecotextura normal";

    if (NormalCheckbox) {
      setFrasesECO((arr) => [...arr, string]);
      setConclusaoECO((arr) => [...arr, string]);
    } else {
      removeItemString(string);
      removeConclusao(string);
    }
  }, [NormalCheckbox]);

  useEffect(() => {
    const string = "Ecotextura Inespecífica";

    if (InespecificaCheckbox) {
      setFrasesECO((arr) => [...arr, string]);
      setConclusaoECO((arr) => [...arr, string]);
    } else {
      removeItemString(string);
      removeConclusao(string);
    }
  }, [InespecificaCheckbox]);

  useEffect(() => {
    const string = "Ecotextura com alteração textural";

    if (TireoiditeCheckbox) {
      setFrasesECO((arr) => [...arr, string]);
      setConclusaoECO((arr) => [...arr, string]);
    } else {
      removeItemString(string);
      removeConclusao(string);
    }
  }, [TireoiditeCheckbox]);

  const subExame = "Ecotextura do Parênquima";
  const titulo_exame = "Tireóide";
  useEffect(() => {
    if (Object.keys(FrasesECO).length === 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesECO,
        ConclusaoECO
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesECO,
        ConclusaoECO
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesECO]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 24px 15px"
      mt="15px"
    >
      <TituloNomeExame titulo="Ecotextura do Parênquima" />

      <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
        <Checkbox
          isChecked={Normal}
          onChange={() => {
            setNormal(!Normal)
            setNormalCheckbox(!NormalCheckbox);
          }}
        >
          Parênquima com ecotextura normal
        </Checkbox>
        <Checkbox
          onChange={() => {
            setInespecificaCheckbox(!InespecificaCheckbox);
          }}
        >
          Alteração textural difusa inespecifica
        </Checkbox>
        <Checkbox
          onChange={() => {
            setTireoiditeCheckbox(!TireoiditeCheckbox);
          }}
        >
          Alteração textural tipo tireoidite
        </Checkbox>
      </Box>
    </Box>
  );
}

export default EcotexturaParenquima;
