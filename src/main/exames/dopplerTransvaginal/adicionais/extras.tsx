import { Box, Checkbox, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Extras() {
  const altura = "100%";
  const largura = "300px";

  const [frasesExtras, setFrasesExtras] = useState<any>([]);

  const [uteroBiCheckBox, setUteroBiCheckBox] = useState(false);
  const [varizesCheckBox, setVarizesCheckBox] = useState(false);

  const criaStringVarizes = () => {
    removeStringVarizes();

    if (varizesCheckBox) {
      var string = "Varizes pélvicas ";
      setFrasesExtras((arr) => [...arr, string]);
    }
  };
  const criaStringUteroBi = () => {
    removeStringUteroBi();

    if (uteroBiCheckBox) {
      var string = "Útero bicorno ";
      setFrasesExtras((arr) => [...arr, string]);
    }
  };

  const removeStringVarizes = () => {
    frasesExtras.map((e) => {
      if (e.includes("Varizes")) {
        var index = frasesExtras.indexOf(e);

        if (index > -1) {
          frasesExtras.splice(index, 1);
          setFrasesExtras((arr) => [...arr]);
        }
      }
    });
  };
  const removeStringUteroBi = () => {
    frasesExtras.map((e) => {
      if (e.includes("Útero")) {
        var index = frasesExtras.indexOf(e);

        if (index > -1) {
          frasesExtras.splice(index, 1);
          setFrasesExtras((arr) => [...arr]);
        }
      }
    });
  };

  useEffect(() => {
    if (uteroBiCheckBox) {
      criaStringUteroBi();
    } else {
      removeStringUteroBi();
    }
  }, [uteroBiCheckBox]);

  useEffect(() => {
    if (varizesCheckBox) {
      criaStringVarizes();
    } else {
      removeStringVarizes();
    }
  }, [varizesCheckBox]);

  const subExame = "Extras";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesExtras).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesExtras
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesExtras
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesExtras]);

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
      <TituloNomeExame titulo="Adicionais" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="35px">
        <Stack>
          <Stack>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setUteroBiCheckBox(!uteroBiCheckBox);
                  }}
                >
                  Útero bicorno
                </Checkbox>
                <Checkbox
                  whiteSpace="nowrap"
                  onChange={() => {
                    setVarizesCheckBox(!varizesCheckBox);
                  }}
                >
                  Varizes pélvicas
                </Checkbox>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Extras;
