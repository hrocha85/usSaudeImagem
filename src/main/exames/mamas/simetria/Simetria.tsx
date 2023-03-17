/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Simetria() {
  const altura = "100%";
  const largura = "300px";

  const [FraseSimetria, setFraseSimetria] = useState<any>([]);

  const [SimetricoCheckbox, setSimetricoCheckbox] = useState(false);

  const [AssimetricoCheckbox, setAssimetricoCheckbox] = useState(false);
  const removeItemString = (value) => {
    var index = FraseSimetria.indexOf(value);
    if (index > -1) {
      FraseSimetria.splice(index, 1);
      setFraseSimetria((arr) => [...arr]);
    }
  };

  useEffect(() => {
    const string = 'Mamas simétricas'
    SimetricoCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [SimetricoCheckbox]);
  useEffect(() => {
    const string = 'Mamas assimétricas'
    AssimetricoCheckbox ? setFraseSimetria((arr) => [...arr, string]) : removeItemString(string)
  }, [AssimetricoCheckbox]);

  const subExame = "Simetria";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(FraseSimetria).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FraseSimetria
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FraseSimetria
      ).Format_Laudo_Create_Storage();
    }
  }, [FraseSimetria]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 10px 15px"
      mt="20px"
    >
      <Box >
        <TituloNomeExame titulo="Simetria" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">

          <Checkbox
            disabled={AssimetricoCheckbox}
            onChange={(e) => {
              setSimetricoCheckbox(!SimetricoCheckbox);
            }}
          >
            Simétrico
          </Checkbox>
          <Checkbox
            disabled={SimetricoCheckbox}
            onChange={(e) => {
              setAssimetricoCheckbox(
                !AssimetricoCheckbox
              );
            }}
          >
            Assimétrico
          </Checkbox>
        </Box>
      </Box>
    </Box>
  );
}

export default Simetria;
