/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function CalculoProstata() {
  const altura = "100%";
  const largura = "40%";

  const [frasesCalcPros, setFrasesCalcPros] = useState<any>([]);

  const [CalcProstataCheckbox, setCalcProstataCheckbox] = useState(false);
  const [disableProstataInput1, setDisableProstataInput1] = useState(true);
  const [medida1CalcProstata, setMedida1CalcProstata] = useState("");
  const [medida2CalcProstata, setMedida2CalcProstata] = useState("");
  const [medida3CalcProstata, setMedida3CalcProstata] = useState("");

  useEffect(() => {
    CalcProstataCheckbox
      ? setDisableProstataInput1(false)
      : setDisableProstataInput1(true);
    removeCalcProstata();
    setMedida1CalcProstata("");
    setMedida2CalcProstata("");
    setMedida3CalcProstata("");
  }, [CalcProstataCheckbox]);

  const criaStringCalcProstata = (
    medida1CalcProstata,
    medida2CalcProstata,
    medida3CalcProstata
  ) => {
    removeCalcProstata();
    const medida1 = parseInt(medida1CalcProstata);
    const medida2 = parseInt(medida2CalcProstata);
    const medida3 = parseInt(medida3CalcProstata);
    if (medida1 > 0 && medida2 > 0 && medida3 > 0) {
      let conta = (medida1 * medida2 * medida3 * 0.52) / 1000;
      let string = `Peso próstata: ${conta.toFixed(1)} gramas`;
      setFrasesCalcPros((arr) => [...arr, string]);
    }
  };

  const removeCalcProstata = () => {
    frasesCalcPros.map((e) => {
      if (e.includes("Peso próstata:")) {
        let index = frasesCalcPros.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCalcPros.splice(index, 1);
          setFrasesCalcPros((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringCalcProstata(
      medida1CalcProstata,
      medida2CalcProstata,
      medida3CalcProstata
    );
  }, [medida1CalcProstata, medida2CalcProstata, medida3CalcProstata]);

  const subExame = "Cálculo Próstata";
  const titulo_exame = "Próstata";

  useEffect(() => {
    if (Object.keys(frasesCalcPros).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCalcPros
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCalcPros
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCalcPros]);

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
          <Checkbox
            onChange={(e) => setCalcProstataCheckbox(!CalcProstataCheckbox)}
          >
            Cálculo Prostata
          </Checkbox>
          <Input
            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={medida1CalcProstata}
            padding="5px"
            textAlign="center"
            onChange={(e) => {
              setMedida1CalcProstata(e.target.value);
            }}
          />
          <Text>x</Text>
          <Input
            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={medida2CalcProstata}
            padding="5px"
            textAlign="center"
            onChange={(e) => {
              setMedida2CalcProstata(e.target.value);
            }}
          />
          <Text>x</Text>
          <Input
            isDisabled={disableProstataInput1}
            w="35px"
            h="30px"
            value={medida3CalcProstata}
            padding="5px"
            textAlign="center"
            onChange={(e) => {
              setMedida3CalcProstata(e.target.value);
            }}
          />
          <Text>gramas</Text>
        </HStack>
      </Box>
    </Box>
  );
}
export default CalculoProstata;
