/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../../context/LuadosContext";
import TituloNomeExame from "../../../../../component/titulo_nome_exame";
import IndividualizarPolias from "./individualizarPolias"

function Polias() {

  const altura = "100%";
  const largura = "95%";

  const [DisableCheckbox, setDisableCheckbox] = useState(true);
  const [AspectoNormal, setAspectoNormal] = useState(false);
  const [disableDescontinuidade, setdisableDescontinuidade] = useState(false);
  const [disableApectNormal, setdisableApectNormal] = useState(false);
  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);


  var numberArray = [1, 2, 3, 4];

  const criaStringAspectNormal = () => {
  }
  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    var string = "Aspecto normal"
    AspectoNormal ? setdisableDescontinuidade(true) : setdisableDescontinuidade(false)
    AspectoNormal ? setLaudoPrin((arr) => [...arr, string]) : removeItemString(string)

    //criaStringAspectNormal()
  }, [AspectoNormal])

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
      <TituloNomeExame titulo="Polias" />
      <Box gap="10px" display="flex" flexWrap="wrap" mt="20px">
        <Checkbox
          isDisabled={disableApectNormal}
          onChange={() => setAspectoNormal(!AspectoNormal)}
        >
          Aspecto normal
        </Checkbox>
        <Checkbox
          isDisabled={disableDescontinuidade}
          onChange={() => setDisableCheckbox(!DisableCheckbox)}
        >
          Descontinuidade das seguintes polias
        </Checkbox>
      </Box>
      <Stack>
        <>
          {numberArray.map((num, key) => {
            return (
              <IndividualizarPolias
                key={key}
                numCalculo={num}
                desabilita={DisableCheckbox}
              />
            );
          })}
        </>
      </Stack>
    </Box>
  );
}
export default Polias;
