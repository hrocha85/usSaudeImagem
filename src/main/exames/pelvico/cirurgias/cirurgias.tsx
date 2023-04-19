/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cirurgias({ Disable }) {
  const altura = "100%";
  const largura = "520px";

  const [frasesCirurgia, setFrasesCirurgias] = useState<any>([]);
  const [ConclusaoCirurgia, setConclusaoCirurgias] = useState<any>([]);

  const subExame = "Cirurgia";
  const titulo_exame = "Pélvico"
  useEffect(() => {
    if (Object.keys(frasesCirurgia).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCirurgia,
        ConclusaoCirurgia
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCirurgia,
        ConclusaoCirurgia
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
    const conclusao = 'Histerectomia total.'
    if (histerectmoiaTotalCheckBox) {
      setFrasesCirurgias((arr) => [...arr, string]);
      setConclusaoCirurgias((arr) => [...arr, conclusao]);
      sethisterectomiaTotalCheckBox(false);
      setisCheckedHisterectomiaSubTotal(false);
      removeMedidaHisterectomiaSubtotal();
      setmedidaHisterectomia1("");
      setmedidaHisterectomia2("");
      setmedidaHisterectomia3("");
    } else {
      removeItemString(string);
      removeItemStringConclusao(conclusao)
    }
  };

  const criaStringMedidasHisterectomia = () => {
    const conclusao = 'Histerectomia subtotal.'
    removeMedidaHisterectomiaSubtotal();
    if (medidaHisterectomia1 !== "" && medidaHisterectomia2 !== "" && medidaHisterectomia3 !== "") {
      var string = `Presença do colo uterino medindo ${medidaHisterectomia1} x ${medidaHisterectomia2} x ${medidaHisterectomia3} mm `;
      setFrasesCirurgias((arr) => [...arr, string]);
      setConclusaoCirurgias((arr) => [...arr, conclusao]);
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
    ConclusaoCirurgia.map((e) => {
      if (e.includes("Histerectomia subtotal.")) {
        var index = ConclusaoCirurgia.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoCirurgia.splice(index, 1);
          setConclusaoCirurgias((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao('Histerectomia subtotal.');
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
  const removeItemStringConclusao = (value) => {
    var index = ConclusaoCirurgia.indexOf(value);

    if (index > -1) {
      ConclusaoCirurgia.splice(index, 1);
      setConclusaoCirurgias((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value);
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
              isDisabled={Disable}
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
