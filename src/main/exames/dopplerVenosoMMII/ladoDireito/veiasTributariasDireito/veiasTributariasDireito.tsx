/* eslint-disable array-callback-return */

import { Box, Checkbox, Stack, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

import TituloNomeExame from "../../../../component/titulo_nome_exame";
import IndividualizarNodulos from "./individualizar_veiasTributarias";
import { DisableTributariasContext } from "../../../../../context/disableTributariasContext";

function VeiasTributariasDireito() {
  const altura = "100%";
  const largura = "95%";

  const numberArray = [1, 2, 3, 4];

  const [DisableVeiasTributariasCheckBox, setDisableVeiasTributariasCheckBox] = useState(false);
  const [DifusasCheckBox, setDifusasCheckBox] = useState(false);
  const { DisableTributaria } = useContext(DisableTributariasContext)

  useEffect(() => {
    if (DifusasCheckBox) {
      setDisableVeiasTributariasCheckBox(true)
    } else {
      setDisableVeiasTributariasCheckBox(false)
    }
  }, [DifusasCheckBox])

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
      <TituloNomeExame titulo="Veias Tributárias" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <>
            {numberArray.map((num, key) => {
              return (
                <IndividualizarNodulos
                  key={key}
                  numVeia={num}
                  disable={DisableVeiasTributariasCheckBox}
                />
              );
            })}
          </>
        </Stack >
        <Checkbox
          isDisabled={DisableTributaria}
          onChange={() => setDifusasCheckBox(!DifusasCheckBox)}
        >
          Difusas
        </Checkbox>
      </Box >
    </Box >
  );
}
export default VeiasTributariasDireito;
