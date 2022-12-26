import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cirurgias() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
  const [frasesCirurgia, setFrasesCirurgias] = useState<any>([]);

  const subExameUtero = "Cirurgia";

  useEffect(() => {
    if (Object.keys(frasesCirurgia).length == 0) {
      new Format_Laudo(
        false,
        subExameUtero,
        true,
        frasesCirurgia
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        true,
        subExameUtero,
        false,
        frasesCirurgia
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCirurgia]);


  const [medidaHisterectomia1, setmedidaHisterectomia1] = useState("");
  const [medidaHisterectomia2, setmedidaHisterectomia2] = useState("");
  const [medidaHisterectomia3, setmedidaHisterectomia3] = useState("");

  const [histerectomiaSubtotalCheckBox, setHisterectomiaSubTotalCheckBox] =
    useState(false);

  const [isCheckedHisterectomiaSubTotal, setisCheckedHisterectomiaSubTotal] =
    useState(false);

  const [histerectmoiaTotalCheckBox, sethisterectomiaTotalCheckBox] =
    useState(true);

  const criaStringHisterectomiaTotal = () => {
    var string = "Histerectomia Total.";
    if (histerectmoiaTotalCheckBox) {
      setFrasesCirurgias((arr) => [...arr, string]);
      sethisterectomiaTotalCheckBox(false);
      setisCheckedHisterectomiaSubTotal(false);
      removeMedidaHisterectomiaSubtotal();
      setmedidaHisterectomia1("");
      setmedidaHisterectomia2("");
      setmedidaHisterectomia3("");
    } else {
      removeItemString(string);
    }
  };

  const criaStringMedidasHisterectomia = () => {
    removeMedidaHisterectomiaSubtotal();

    if (
      medidaHisterectomia1 !== "" &&
      medidaHisterectomia2 !== "" &&
      medidaHisterectomia3 !== ""
    ) {
      var string = `Presença do colo uterino medindo ${medidaHisterectomia1} x ${medidaHisterectomia2} x ${medidaHisterectomia3} mm `;
      setFrasesCirurgias((arr) => [...arr, string]);
    }
  };

  const removeMedidaHisterectomiaSubtotal = () => {
    // console.log("valor remove = ", value);
    frasesCirurgia.map((e) => {
      if (e.includes("Presença do colo uterino medindo")) {
        var index = frasesCirurgia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCirurgia.splice(index, 1);
          setFrasesCirurgias((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = frasesCirurgia.indexOf(value);

    if (index > -1) {
      frasesCirurgia.splice(index, 1);
      setFrasesCirurgias((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (histerectomiaSubtotalCheckBox) {
      criaStringMedidasHisterectomia();
    } else {
      removeMedidaHisterectomiaSubtotal();
      setmedidaHisterectomia1("");
      setmedidaHisterectomia2("");
      setmedidaHisterectomia3("");
    }
  }, [
    medidaHisterectomia1,
    medidaHisterectomia2,
    medidaHisterectomia3,
    histerectomiaSubtotalCheckBox,
  ]);

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
      <TituloNomeExame titulo="Cirurgias" />

      <Box gap="30px" display="flex" flexWrap="wrap" mt="20px">
        <Stack>
          <Stack>
            <Checkbox
              onChange={() => {
                sethisterectomiaTotalCheckBox(true);
                criaStringHisterectomiaTotal();
              }}
            >
              Histerectomia Total
            </Checkbox>
            <Box>
              <HStack>
                <Checkbox
                  whiteSpace="nowrap"
                  isDisabled={!histerectmoiaTotalCheckBox}
                  isChecked={isCheckedHisterectomiaSubTotal}
                  onChange={() => {
                    setHisterectomiaSubTotalCheckBox(
                      !histerectomiaSubtotalCheckBox
                    );
                    setisCheckedHisterectomiaSubTotal(!isCheckedHisterectomiaSubTotal);
                  }}
                >
                  Histerectomia Subtotal
                </Checkbox>

                <Input
                  isDisabled={!histerectmoiaTotalCheckBox}
                  value={medidaHisterectomia1}
                  w="35px"
                  h="30px"
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  onChange={(e) => setmedidaHisterectomia1(e.target.value)}
                />
                <Text>x</Text>
                <Input
                  isDisabled={!histerectmoiaTotalCheckBox}
                  value={medidaHisterectomia2}
                  w="35px"
                  h="30px"
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  onChange={(e) => setmedidaHisterectomia2(e.target.value)}
                />
                <Text>x</Text>
                <Input
                  isDisabled={!histerectmoiaTotalCheckBox}
                  value={medidaHisterectomia3}
                  w="35px"
                  h="30px"
                  padding="5px"
                  maxLength={2}
                  textAlign="center"
                  onChange={(e) => setmedidaHisterectomia3(e.target.value)}
                />
                <Text>mm</Text>
              </HStack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
export default Cirurgias;
