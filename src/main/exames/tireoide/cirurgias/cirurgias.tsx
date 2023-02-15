/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cirurgias() {
  const altura = "100%";
  const largura = "66%";

  const [TireoidectomiaTotalCheckbox, setTireoidectomiaTotalCheckbox] = useState(false)
  const [HemitireoidectomiaCheckbox, setHemitireoidectomiaCheckbox] = useState(false)
  const [ValueHemitireoidectomiaSelect, setValueHemitireoidectomiaSelect] = useState('')
  const [DisabledHemitireoidectomiaSelect, setDisabledHemitireoidectomiaSelect] = useState(true)

  useEffect(() => {
    const string = 'Falta Tireioide total'
    TireoidectomiaTotalCheckbox ? setFrasesCirurgias((arr) => [...arr, string]) : removeItemString(string)
  }, [TireoidectomiaTotalCheckbox])

  const removeItemString = (value) => {
    var index = FrasesCirurgias.indexOf(value);
    if (index > -1) {
      FrasesCirurgias.splice(index, 1);
      setFrasesCirurgias((arr) => [...arr]);
    }
  };

  const criaStringHemitireoidectomia = () => {
    removeHemitireoidectomia()
    let string = 'FALTA Hemitireoidectomia'
    if (HemitireoidectomiaCheckbox) {
      if (ValueHemitireoidectomiaSelect != '') {
        string = `${string} ${ValueHemitireoidectomiaSelect}`
      }
      setFrasesCirurgias((arr) => [...arr, string]);
    }
  }

  const removeHemitireoidectomia = () => {
    FrasesCirurgias.map((e) => {
      if (e.includes("FALTA Hemitireoidectomia")) {
        var index = FrasesCirurgias.indexOf(e);

        if (index > -1) {
          FrasesCirurgias.splice(index, 1);
          setFrasesCirurgias((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (HemitireoidectomiaCheckbox) {
      criaStringHemitireoidectomia()
      setDisabledHemitireoidectomiaSelect(false)
    } else {
      setValueHemitireoidectomiaSelect('')
      removeHemitireoidectomia()
      setDisabledHemitireoidectomiaSelect(true)
    }
  }, [HemitireoidectomiaCheckbox, ValueHemitireoidectomiaSelect])

  const [FrasesCirurgias, setFrasesCirurgias] = useState<any>([]);

  const subExame = "Cirurgias";
  const titulo_exame = "Tireóide";

  useEffect(() => {
    if (Object.keys(FrasesCirurgias).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        FrasesCirurgias
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        FrasesCirurgias
      ).Format_Laudo_Create_Storage();
    }
  }, [FrasesCirurgias]);

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
        <TituloNomeExame titulo="Cirurgias" />

        <Box gap="30px" display="flex" flexWrap="wrap" mb="10px">
          <Box>
            <Checkbox
              onChange={(e) => {
                setTireoidectomiaTotalCheckbox(!TireoidectomiaTotalCheckbox)
              }}
            >
              Tireoidectomia Total
            </Checkbox>
          </Box>

          <Box>
            <Checkbox
              onChange={(e) => {
                setHemitireoidectomiaCheckbox(!HemitireoidectomiaCheckbox)
              }}
            >
              Hemitireoidectomia
            </Checkbox>
            <Select
              isDisabled={DisabledHemitireoidectomiaSelect}
              value={ValueHemitireoidectomiaSelect}
              onChange={(e) => {
                setValueHemitireoidectomiaSelect(e.target.value)
              }}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="Direito ">Direito</option>
              <option value="Esquerdo ">Esquerdo</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cirurgias;
