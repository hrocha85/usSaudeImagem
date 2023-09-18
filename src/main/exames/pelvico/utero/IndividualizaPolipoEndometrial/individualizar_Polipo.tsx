
import { Box, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function IndividualizarPolipo({ numCisto }) {
  const [FrasesPolipo, setFrasesPolipo] = useState<any>([]);
  const [ConclusaoPolipo, setConclusaoPolipo] = useState<any>([]);

  const [medidaPolipo1, setmedidaPolipo1] = useState("");

  const [polipoCheckBox, setPolipoCheckBox] = useState(false);

  const handleChangeMedidaPolipo1 = (event) =>
    setmedidaPolipo1(event.target.value);


  //Funcoes Polipo endometrial - Inicio
  const criaStringPolipoEndometrial = (medida1) => {
    const conclusao = 'Imagem nodular sugestiva de pólipo endometrial.'
    let string = `${numCisto}º Pólipo: Nota-se no interior da cavidade, imagem ovalada hiperecóica , de limites precisos e contornos regulares, medindo:`
    removeMultiplosPolipo()
    removeItemConclusao(conclusao);
    if (polipoCheckBox) {
      if (medidaPolipo1 != "") {
        string = `${string} ${medida1} mm `;
        setFrasesPolipo((arr) => [...arr, string]);
        setConclusaoPolipo((arr) => [...arr, conclusao]);
      }
    } else {
      setmedidaPolipo1("");
    }
  };

  useEffect(() => {
    criaStringPolipoEndometrial(medidaPolipo1);
  }, [polipoCheckBox, medidaPolipo1]);


  const removeItemConclusao = (value) => {
    const index = ConclusaoPolipo.indexOf(value);

    if (index > -1) {
      ConclusaoPolipo.splice(index, 1);
      setConclusaoPolipo((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
    }
  };
  const removeMultiplosPolipo = () => {
    FrasesPolipo.map((e) => {
      if (e.includes(`${numCisto}º Pólipo:`)) {
        const index = FrasesPolipo.indexOf(e);

        if (index > -1) {
          FrasesPolipo.splice(index, 1);
          setFrasesPolipo((arr) => [...arr]);
        }
      }
    });
  };


  const subExame = `Pólipo Testiculares ${numCisto}`;
  const titulo_exame = "Pélvico";


  useEffect(() => {
    if (Object.keys(FrasesPolipo).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesPolipo,
        ConclusaoPolipo
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesPolipo,
        ConclusaoPolipo
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesPolipo]);

  return (
    <Box gap="15px" display="flex" flexWrap="wrap">
      <HStack>
        <Checkbox onChange={() => setPolipoCheckBox(!polipoCheckBox)}>
          Pólipo endometrial {numCisto}
        </Checkbox>
        <Input
          isDisabled={!polipoCheckBox}
          w="35px"
          h="30px"
          value={medidaPolipo1}
          padding="5px"
          textAlign="center"
          onChange={handleChangeMedidaPolipo1}
        />

        <Text>mm</Text>
      </HStack>
    </Box>
  );
}
