/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Birads() {
  const altura = "100%";
  const largura = "66%";

  const [frasesBirads, setFrasesBirads] = useState<any>([]);

  const [checkboxCategoria, setCheckboxCategoria] = useState(false);
  const [disableSelectCategoria, setDisableSelectCategoria] = useState(true);
  const [valueSelectCategoria, setValueSelectCategoria] = useState("");

  const criaStringCategoria = () => {
    removeFraseCategoria();
    if (checkboxCategoria) {
      setDisableSelectCategoria(false);
      if (valueSelectCategoria !== "") {
        let string = `Birads categoria ${valueSelectCategoria}`;
        setFrasesBirads((arr) => [...arr, string]);
      }
    } else {
      setDisableSelectCategoria(true);
      setValueSelectCategoria("");
    }
  };
  const removeFraseCategoria = () => {
    frasesBirads.map((e) => {
      if (e.includes("Birads")) {
        let index = frasesBirads.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesBirads.splice(index, 1);
          setFrasesBirads((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    criaStringCategoria();
  }, [valueSelectCategoria, checkboxCategoria]);

  const subExame = "Birads";
  const titulo_exame = "Mamas";

  useEffect(() => {
    if (Object.keys(frasesBirads).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesBirads
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesBirads
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesBirads]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="24px 15px 15px"
      mt="20px"
    >
      <Box mb="20px">
        <TituloNomeExame titulo="Birads" />

        <Box gap="25px" display="flex" flexWrap="wrap" mb="10px">
          <Box gap="5px" display="flex" flexWrap="wrap">
            <Checkbox
              onChange={(e) => {
                setCheckboxCategoria(!checkboxCategoria);
              }}
            >
              Categoria
            </Checkbox>
            <Select
              w="150px"
              isDisabled={disableSelectCategoria}
              onChange={(e) => {
                setValueSelectCategoria(e.target.value);
              }}
              value={valueSelectCategoria}
            >
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Birads;
