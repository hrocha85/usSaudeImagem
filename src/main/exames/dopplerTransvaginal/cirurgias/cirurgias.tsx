/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Cirurgias() {
  const altura = "100%";
  const largura = "430px";

  const [frasesCirurgias, setFrasesCirurgias] = useState<any>([]);
  const [ConclusaoCirurgias, setConclusaoCirurgias] = useState<any>([]);

  const [medidaHisterectomia1, setmedidaHisterectomia1] = useState("");
  const [medidaHisterectomia2, setmedidaHisterectomia2] = useState("");
  const [medidaHisterectomia3, setmedidaHisterectomia3] = useState("");

  const [histerectomiaSubtotalCheckBox, setHisterectomiaSubTotalCheckBox] = useState(false);

  const [HisterectmoiaTotalCheckBox, setHisterectmoiaTotalCheckBox] = useState(false);

  const criaStringHisterectomiaTotal = () => {
    var string = "Histerectomia Total ";
    const conclusao = "Histerectomia Total ";
    removeItemConclusao(conclusao)
    removeItemString(string);
    if (HisterectmoiaTotalCheckBox) {
      setFrasesCirurgias((arr) => [...arr, string]);
      setConclusaoCirurgias((arr) => [...arr, conclusao]);
    }
  };

  useEffect(() => {
    criaStringHisterectomiaTotal()
  }, [HisterectmoiaTotalCheckBox])

  const criaStringMedidasHisterectomia = () => {
    removeMedidaHisterectomiaSubtotal();
    const conclusao = 'Histerectomia subtotal.'
    removeItemConclusao(conclusao)
    if (histerectomiaSubtotalCheckBox) {
      if (medidaHisterectomia1 != "" && medidaHisterectomia2 != "" && medidaHisterectomia3 != "") {
        var string = `Histerectomia subtotal, colo mede ${medidaHisterectomia1} x ${medidaHisterectomia2} x ${medidaHisterectomia3} mm `;
        setFrasesCirurgias((arr) => [...arr, string]);
        setConclusaoCirurgias((arr) => [...arr, conclusao]);
      }
    }
  };

  const removeMedidaHisterectomiaSubtotal = () => {
    // console.log("valor remove = ", value);
    frasesCirurgias.map((e) => {
      if (e.includes("Histerectomia subtotal")) {
        var index = frasesCirurgias.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesCirurgias.splice(index, 1);
          setFrasesCirurgias((arr) => [...arr]);
        }
      }
    });
  };

  const removeItemString = (value) => {
    var index = frasesCirurgias.indexOf(value);

    if (index > -1) {
      frasesCirurgias.splice(index, 1);
      setFrasesCirurgias((arr) => [...arr]);
    }
  };
  const removeItemConclusao = (value) => {
    // console.log("valor remove = ", value);
    var index = ConclusaoCirurgias.indexOf(value);
    //caso o valor enviado exista no array, vai remover com splice e setar array novamente
    if (index > -1) {
      ConclusaoCirurgias.splice(index, 1);
      setConclusaoCirurgias((arr) => [...arr]);
      new Format_Laudo(titulo_exame).Remove_Conclusao(value)
    }
  };


  useEffect(() => {
    criaStringMedidasHisterectomia();
  }, [medidaHisterectomia1,
    medidaHisterectomia2,
    medidaHisterectomia3,
    histerectomiaSubtotalCheckBox,
  ]);
  const subExame = "Cirurgias";
  const titulo_exame = "Doppler Transvaginal";

  useEffect(() => {
    if (Object.keys(frasesCirurgias).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesCirurgias,
        ConclusaoCirurgias
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesCirurgias,
        ConclusaoCirurgias
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesCirurgias]);

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
          <Box>
            <Checkbox
              isDisabled={histerectomiaSubtotalCheckBox}
              onChange={() => {
                setHisterectmoiaTotalCheckBox(!HisterectmoiaTotalCheckBox);
              }}
            >
              Histerectomia Total
            </Checkbox>

            <Box gap='5px' display="flex" flexWrap="wrap">
              <Checkbox
                isDisabled={HisterectmoiaTotalCheckBox}
                onChange={() => {
                  setHisterectomiaSubTotalCheckBox(
                    !histerectomiaSubtotalCheckBox
                  );
                }}
              >
                Histerectomia Subtotal
              </Checkbox>

              <Box display="flex">
                <Input
                  isDisabled={!histerectomiaSubtotalCheckBox}
                  value={medidaHisterectomia1}
                  w="35px"
                  h="30px"
                  padding="0px"
                  textAlign="center"
                  onChange={(e) => setmedidaHisterectomia1(e.target.value)}
                />
                <Text>x</Text>
                <Input
                  isDisabled={!histerectomiaSubtotalCheckBox}
                  value={medidaHisterectomia2}
                  w="35px"
                  h="30px"
                  padding="0px"
                  textAlign="center"
                  onChange={(e) => setmedidaHisterectomia2(e.target.value)}
                />
                <Text>x</Text>
                <Input
                  isDisabled={!histerectomiaSubtotalCheckBox}
                  value={medidaHisterectomia3}
                  w="35px"
                  h="30px"
                  padding="0px"
                  textAlign="center"
                  onChange={(e) => setmedidaHisterectomia3(e.target.value)}
                />
                <Text>mm</Text>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
export default Cirurgias;
