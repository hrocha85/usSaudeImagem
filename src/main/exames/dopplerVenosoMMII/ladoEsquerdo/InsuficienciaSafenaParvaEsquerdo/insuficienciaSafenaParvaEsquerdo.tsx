/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function InsuficienciaSafenaParvaEsquerdo() {
  const altura = "100%";
  const largura = "95%";

  const [frasesInsulSafenaParva, setFrasesInsulSafenaParva] = useState<any>([]);

  const [DisableSelect, setDisableSelect] = useState(true);

  const [ParcialSelect, setParcialSelect] = useState("");
  const [ParcialCheckBox, setParcialCheckBox] = useState(false);
  const [DisableParcialCheckBox, setDisableParcialCheckBox] = useState(false);

  const [DisableEmTodoTrajetoCheckBox, setDisableEmTodoTrajetoCheckBox] =
    useState(false);
  const [emTodoTrajetoCheckBox, setEmTodoTrajetoCheckBox] = useState(true);

  const removeParcial = () => {
    frasesInsulSafenaParva.map((e) => {
      if (e.includes("Parcial")) {
        var index = frasesInsulSafenaParva.indexOf(e);

        if (index > -1) {
          frasesInsulSafenaParva.splice(index, 1);
          setFrasesInsulSafenaParva((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringParcial = (ParcialSelect) => {
    removeParcial();
    var string;

    if (ParcialSelect !== "") {
      string = `Parcial ${ParcialSelect} `;
      setFrasesInsulSafenaParva((arr) => [...arr, string]);
    } else {
      removeParcial();
    }
  };

  const criaStringEmTodoTrajeto = () => {
    var string = "Em todo o trajeto ";
    if (emTodoTrajetoCheckBox) {
      setFrasesInsulSafenaParva((arr) => [...arr, string]);
      setEmTodoTrajetoCheckBox(false);
      setDisableParcialCheckBox(true);
    } else {
      setDisableParcialCheckBox(false);
      removeItemString(string);
    }
  };

  const removeItemString = (value) => {
    var index = frasesInsulSafenaParva.indexOf(value);

    if (index > -1) {
      frasesInsulSafenaParva.splice(index, 1);
      setFrasesInsulSafenaParva((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (ParcialCheckBox) {
      criaStringParcial(ParcialSelect);
      setDisableEmTodoTrajetoCheckBox(true);
      setDisableSelect(false);
    } else {
      setDisableEmTodoTrajetoCheckBox(false);
      setDisableSelect(true);
      removeParcial();
      setParcialSelect("");
    }
  }, [ParcialCheckBox, ParcialSelect]);

  const subExame = "Insuficiência Safena Parva Esquerda";
  const titulo_exame = "Doppler Venoso de MMII";

  useEffect(() => {
    if (Object.keys(frasesInsulSafenaParva).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesInsulSafenaParva
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesInsulSafenaParva
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesInsulSafenaParva]);

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
      <TituloNomeExame titulo="Insuficiência da safena parva" />
      <Stack>
        <Checkbox
          isDisabled={DisableEmTodoTrajetoCheckBox}
          onChange={() => {
            setEmTodoTrajetoCheckBox(true);
            criaStringEmTodoTrajeto();
          }}
        >
          Em todo o trajeto
        </Checkbox>
      </Stack>
      <Checkbox
        whiteSpace="nowrap"
        isDisabled={DisableParcialCheckBox}
        onChange={() => setParcialCheckBox(!ParcialCheckBox)}
      >
        Parcial
      </Checkbox>
      <Box>
        <Select
          w="200px"
          isDisabled={DisableSelect}
          onChange={(e) => {
            setParcialSelect(e.target.value);
          }}
          value={ParcialSelect}
        >
          <option value="" disabled selected>
            Posição
          </option>
          <option value="no terço superior da perna">
            no terço superior da perna
          </option>
          <option value="no terço médio da perna">
            no terço médio da perna
          </option>
          <option value="no terço inferior da perna">
            no terço inferior da perna
          </option>
          <option value="nos terços superior e médio da perna">
            nos terços superior e médio da perna
          </option>
          <option value="nos terços médio e inferior da perna">
            nos terços médio e inferior da perna
          </option>
        </Select>
      </Box>
    </Box>
  );
}
export default InsuficienciaSafenaParvaEsquerdo;
