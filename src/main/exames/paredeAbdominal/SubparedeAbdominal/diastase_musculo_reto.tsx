
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
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import SugestaoRef from "../../../images/ref_partes_moles.png";

function Diastase_Musculo_Reto({ Disable }) {
  const altura = "auto";
  let largura = "60%";
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? largura = "60%": largura = "100%"

  const [imageAdded, setImageAdded] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [frasesDiastase, setFrasesDiastase] = useState<any>([]);
  const [ConclusaoDiastase, setConclusaoDiastase] = useState<any>([]);

  const [afastamentoCheckBox, setAfastamentoCheckBox] = useState(false);

  const [disableInputs, setDisableInputs] = useState(true);

  const [medidaAfastamento, setMedidaAfastamento] = useState("");

  const [presenteCheckbox, setPresenteCheckbox] = useState(false);
  const [DisableCitarDistancia, setDisableCitarDistancia] = useState(true);

  const [selectNivel, setSelectNivel] = useState("");

  const criaStringDiastase_SEM_Medida = () => {
    removeDiastase_SEM_Medida();
    const string = `Nota-se afastamento patológico dos ventres do músculo reto abdominal ao nível do ${selectNivel}`;
    setFrasesDiastase((arr) => [...arr, string]);
  };

  const removeDiastase_SEM_Medida = () => {
    frasesDiastase.map((e) => {
      if (
        e.includes(
          "Nota-se afastamento patológico dos ventres do músculo reto abdominal "
        )
      ) {
        const index = frasesDiastase.indexOf(e);
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
      const string = `Com distância transversa máxima de ${medidaAfastamento} cm entre as bordas mediais.`;
      setFrasesDiastase((arr) => [...arr, string]);
    }
  };

  const removeDiastase_COM_Medida = () => {
    frasesDiastase.map((e) => {
      if (e.includes(`Com distância transversa máxima de `)) {
        const index = frasesDiastase.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          frasesDiastase.splice(index, 1);
          setFrasesDiastase((arr) => [...arr]);
        }
      }
    });
  };

  const removeConclusao = () => {
    ConclusaoDiastase.map((e) => {
      if (e.includes(`Diástase do músculo reto abdominal.`)) {
        const index = ConclusaoDiastase.indexOf(e);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
          ConclusaoDiastase.splice(index, 1);
          setConclusaoDiastase((arr) => [...arr]);
          new Format_Laudo(titulo_exame).Remove_Conclusao(
            "Diástase do músculo reto abdominal."
          );
        }
      }
    });
  };

  const removeAll = () => {
    while (Object.keys(frasesDiastase).length != 0) {
      frasesDiastase.map((e) => {
        const index = frasesDiastase.indexOf(e);
        frasesDiastase.splice(index, 1);
      });
    }
    setFrasesDiastase((arr) => []);
  };

  const AddImageFormatLaudo = (sugest) => {
    new Format_Laudo(
      titulo_exame,
      sugest,
      undefined,
      undefined,
      undefined,
      SugestaoRef
    ).Format_Laudo_Create_Storage();
    setImageAdded(true);
    onClose()
  };

  const RemoveImageFormatLaudo = (sugest) => {
    new Format_Laudo(
      titulo_exame,
      sugest,
      undefined,
      undefined,
      undefined,
      SugestaoRef
    ).Remove_Image();
    setImageAdded(false);
    onClose()
  };

  useEffect(() => {
    if (presenteCheckbox) {
      setPresenteCheckbox(true);
      setDisableCitarDistancia(false);
    } else {
      removeConclusao();
      setDisableCitarDistancia(true);
      removeAll();
      setPresenteCheckbox(false);
      setAfastamentoCheckBox(false);
      setMedidaAfastamento("");
      setSelectNivel("");
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
    const conclusao = "Diástase do músculo reto abdominal.";
    removeConclusao();
    removeAll();
    if (selectNivel != "") {
      criaStringDiastase_SEM_Medida();
      if (medidaAfastamento !== "") {
        criaStringDiastase_COM_Medida();
      }
      setConclusaoDiastase((arr) => [...arr, conclusao]);
    }
  }, [selectNivel, medidaAfastamento]);

  const subExame = "Diástase do Músculo Reto Abdominal";
  const titulo_exame = "Parede Abdominal";

  useEffect(() => {
    if (Object.keys(frasesDiastase).length == 0) {
      new Format_Laudo(
        titulo_exame,
        subExame,
        true,
        frasesDiastase,
        ConclusaoDiastase
      ).Format_Laudo_Create_Storage();
    } else {
      new Format_Laudo(
        titulo_exame,
        subExame,
        false,
        frasesDiastase,
        ConclusaoDiastase
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
              value={selectNivel}
              onChange={(e) => setSelectNivel(e.target.value)}
            >
              <option value="" disabled selected>
                Selecione
              </option>
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
              isDisabled={Disable || DisableCitarDistancia}
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
              padding="5px"
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
            <HStack>
              <Button
                marginTop="10px"
                color={imageAdded ? "red" : "#394BEE"}
                fontSize="16px"
                fontWeight="semibold"
                alignItems="center"
                padding="5px"
                backgroundColor="#E3E5F8"
                onClick={() =>
                  imageAdded
                    ? RemoveImageFormatLaudo("Sugestão de Referência")
                    : AddImageFormatLaudo("Sugestão de Referência")
                }
                _hover={{ backgroundColor: "#47AEFC8E" }}
              >
                {imageAdded
                  ? "Remover Imagem do Laudo"
                  : "Adicionar Imagem ao Laudo"}
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Fechar
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default Diastase_Musculo_Reto;
