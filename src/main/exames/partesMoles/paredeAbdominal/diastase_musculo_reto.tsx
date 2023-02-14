/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Diastase_Musculo_Reto(Disable) {
  const altura = "auto";
  const largura = "100%";

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [frasesDiastase, setFrasesDiastase] = useState<any>([]);

  const [afastamentoCheckBox, setAfastamentoCheckBox] = useState(false);


  const [disableInputs, setDisableInputs] = useState(true);



  const [medidaAfastamento, setMedidaAfastamento] = useState("");
  const [defaultSelect, setDefaultSelect] = useState("Selecione Opção");

  const [presenteCheckbox, setPresenteCheckbox] = useState(false);

  const [selectNivel, setSelectNivel] = useState("");

  const criaStringDiastase_SEM_Medida = () => {
    removeDiastase_SEM_Medida();

    let string = `Nota-se afastamento patológico dos ventres do músculo reto abdominal ao nível do ${selectNivel}`;
    setFrasesDiastase((arr) => [...arr, string]);
  };

  const removeDiastase_SEM_Medida = () => {
    frasesDiastase.map((e) => {
      if (
        e.includes(
          "Nota-se afastamento patológico dos ventres do músculo reto abdominal "
        )
      ) {
        let index = frasesDiastase.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesDiastase.splice(index, 1);
          setFrasesDiastase((arr) => [...arr]);
        }
      }
    });
  };

  const criaStringDiastase_COM_Medida = () => {
    removeDiastase_COM_Medida();
    if (selectNivel != "") {
      let string = `Com distância transversa máxima de ${medidaAfastamento} cm entre as bordas mediais.`;
      setFrasesDiastase((arr) => [...arr, string]);
    }
  };

  const removeDiastase_COM_Medida = () => {
    frasesDiastase.map((e) => {
      if (e.includes(`Com distância transversa máxima de `)) {
        let index = frasesDiastase.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesDiastase.splice(index, 1);
          setFrasesDiastase((arr) => [...arr]);
        }
      }
    });
  };

  const removeAll = () => {
    while (Object.keys(frasesDiastase).length != 0) {
      frasesDiastase.map((e) => {
        let index = frasesDiastase.indexOf(e);
        frasesDiastase.splice(index, 1);
      });
    }
    setFrasesDiastase((arr) => []);
  };


  useEffect(() => {
    if (presenteCheckbox) {
      setDisableInputs(false);
      setPresenteCheckbox(true);
    } else {
      removeAll();
      setPresenteCheckbox(false);
      setAfastamentoCheckBox(false);
      setDisableInputs(true);
      setMedidaAfastamento("");
      setDefaultSelect("Selecione Opção");
    }
  }, [presenteCheckbox]);

  useEffect(() => {
    if (!afastamentoCheckBox) {
      removeDiastase_COM_Medida();
      setMedidaAfastamento("");
      setDisableInputs(true);
    } else {
      setDisableInputs(false);
    }
  }, [afastamentoCheckBox]);

  useEffect(() => {
    if (selectNivel != "" && selectNivel != defaultSelect) {
      if (medidaAfastamento == "" || medidaAfastamento == null) {
        criaStringDiastase_SEM_Medida();
      } else {
        criaStringDiastase_COM_Medida();
      }
    }
  }, [selectNivel, medidaAfastamento]);

  const subExame = "Parede Abdominal - Diástase do Músculo Reto Abdominal";
  const titulo_exame = "Partes Moles";

  useEffect(() => {
    if (Object.keys(frasesDiastase).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesDiastase
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesDiastase
      ).Format_Laudo_Create_Storage();
    }
  }, [frasesDiastase]);

  return (
    <Box
      bg="#FAFAFA"
      w={largura}
      h={altura}
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="10.85px"
      boxShadow="md"
      padding="15px 15px 20px 15px"
      mt="10px"
    >
      <Text>Parede Abdominal</Text>
      <TituloNomeExame titulo="Diástase do Músculo Reto Abdominal" />

      <Box gap="15px" display="flex" flexWrap="wrap">
        <Stack>
          <HStack>
            <Checkbox
              isDisabled={Disable}
              isChecked={presenteCheckbox}
              onChange={(e) => setPresenteCheckbox(!presenteCheckbox)}
            >
              Presente, ao nível do
            </Checkbox>
            <Select
              isDisabled={!presenteCheckbox}
              w="40%"
              defaultValue={defaultSelect}
              onChange={(e) => setSelectNivel(e.target.value)}
              placeholder={defaultSelect}
            >
              <option value="epigástrio">epigástrio</option>
              <option value="mesogástrio">mesogástrio</option>
              <option value="hipogástrio">hipogástrio</option>
              <option value="epigástrio e hipogástrio">
                epigástrio e hipogástrio
              </option>
            </Select>
          </HStack>
          <HStack>
            <Checkbox
              isDisabled={Disable}
              isChecked={afastamentoCheckBox}
              onChange={(e) => setAfastamentoCheckBox(!afastamentoCheckBox)}
            >
              citar distância máxima de afastamento das bordas mediais
            </Checkbox>

            <Input
              isDisabled={disableInputs}
              value={medidaAfastamento}
              w="35px"
              h="30px"
              marginEnd="10px"
              padding="5px"
              maxLength={2}
              textAlign="center"
              onChange={(e) => {
                setMedidaAfastamento(e.target.value);
              }}
            />
            <Text>mm</Text>
          </HStack>
        </Stack>
        <Button
          color="#394BEE"
          fontSize="16px"
          fontWeight="semibold"
          alignItems="center"
          padding="5px"
          backgroundColor="#E3E5F8"
          onClick={onOpen}
          _hover={{ backgroundColor: "#47AEFC8E" }}
        >
          Sugestão de Referência
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            whiteSpace="nowrap"
            textColor="#394BEEB4"
            marginTop="10px"
            textAlign="center"
          >
            REFERÊNCIA SUGERIDA PARA DIÁSTASE DO MÚSCULO RETO ABDOMINAL
          </ModalHeader>
          <ModalCloseButton marginTop="10px" />
          <ModalBody>
            <Text fontSize="20px" textAlign="center">
              Distância em mm entre as bordas mediais do reto abdominal para
              definir diástase
            </Text>
            <TableContainer marginTop="20px">
              <Table variant="simple">
                <TableCaption whiteSpace="pre-wrap" fontSize="17px">
                  <Text as="i">
                    Fonte: Rath, A., Attali, P., Dumas, J. et al. The abdominal
                    linea alba: an anatomo-radiologic and biomechanical study.
                    Surg Radiol Anat 18, 281-288 (1996).
                  </Text>
                </TableCaption>
                <Thead>
                  <Tr backgroundColor="#FFFF8F">
                    <Th fontSize="19px">Idade do Paciênte</Th>
                    <Th fontSize="19px" textAlign="center">
                      {" "}
                      {"<"} 45 Anos
                    </Th>
                    <Th fontSize="19px" textAlign="center">
                      {">"} 45 Anos
                    </Th>
                  </Tr>
                </Thead>
                <Tbody fontSize="18px">
                  <Tr backgroundColor="#F5F5DC">
                    <Td fontWeight="semibold">Região Supra Umbilical</Td>
                    <Td textAlign="center" fontWeight="semibold">
                      {">"} 10mm
                    </Td>
                    <Td textAlign="center" fontWeight="semibold">
                      {">"} 15mm
                    </Td>
                  </Tr>
                  <Tr backgroundColor="#F5F5DC">
                    <Td fontWeight="semibold">Região Umbilical</Td>
                    <Td textAlign="center" fontWeight="semibold">
                      {">"} 27mm
                    </Td>
                    <Td textAlign="center" fontWeight="semibold">
                      {">"} 27mm
                    </Td>
                  </Tr>
                  <Tr backgroundColor="#F5F5DC">
                    <Td fontWeight="semibold">Região Infra Umbilical</Td>
                    <Td textAlign="center" fontWeight="semibold">
                      {">"} 9mm
                    </Td>
                    <Td textAlign="center" fontWeight="semibold">
                      {">"} 14mm
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default Diastase_Musculo_Reto;
