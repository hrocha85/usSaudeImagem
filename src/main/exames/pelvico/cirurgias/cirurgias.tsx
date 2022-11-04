/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cirurgias() {
  const altura = "100%";
  const largura = "66%";

  const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

  const [medidaHisterectomia1, setmedidaHisterectomia1] = useState("");
  const [medidaHisterectomia2, setmedidaHisterectomia2] = useState("");
  const [medidaHisterectomia3, setmedidaHisterectomia3] = useState("");

  const [histerectomiaSubtotalCheckBox, setHisterectomiaSubTotalCheckBox] =
    useState(false);

  const [DisableInput, setDisableInput] = useState(true);
  const [DisableHisterectomiaTotal, setDisableHisterectomiaTotal] = useState(false);

  const [isCheckedHisterectomiaSubTotal, setisCheckedHisterectomiaSubTotal] =
    useState(false);

  const [histerectmoiaTotalCheckBox, sethisterectomiaTotalCheckBox] =
    useState(true);

  const criaStringHisterectomiaTotal = () => {
    var string = "Histerectomia Total ";
    if (histerectmoiaTotalCheckBox) {
      setLaudoPrin((arr) => [...arr, string]);
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
      medidaHisterectomia1 != "" &&
      medidaHisterectomia2 != "" &&
      medidaHisterectomia3 != ""
    ) {
      var string = `Histerectomia subtotal, colo mede ${medidaHisterectomia1} x ${medidaHisterectomia2} x ${medidaHisterectomia3} mm `;
      setLaudoPrin((arr) => [...arr, string]);
    }
  };

  const removeMedidaHisterectomiaSubtotal = () => {
    // console.log("valor remove = ", value);
    laudoPrin.map((e) => {
      if (e.includes("Histerectomia subtotal")) {
        var index = laudoPrin.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          laudoPrin.splice(index, 1);
          setLaudoPrin((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = laudoPrin.indexOf(value);

    if (index > -1) {
      laudoPrin.splice(index, 1);
      setLaudoPrin((arr) => [...arr]);
    }
  };

  useEffect(() => {
    if (histerectomiaSubtotalCheckBox) {
      setDisableHisterectomiaTotal(true)
      setDisableInput(false)
      criaStringMedidasHisterectomia();
    } else {
      setDisableHisterectomiaTotal(false)
      setDisableInput(true)
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
              isDisabled={DisableHisterectomiaTotal}
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
                  isDisabled={DisableInput}
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
                  isDisabled={DisableInput}
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
                  isDisabled={DisableInput}
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
