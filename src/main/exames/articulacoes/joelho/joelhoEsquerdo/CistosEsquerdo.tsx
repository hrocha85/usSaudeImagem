/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Stack, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function CistosEsquerdo() {
    const altura = "100%";
    const largura = "90%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [CistosBakerInput, setCistosBakerInput] = useState("");
    const [CistosBakerInput2, setCistosBakerInput2] = useState("");
    const [CistosBakerInput3, setCistosBakerInput3] = useState("");
    const [disableCistosBakerInput, setdisableCistosBakerInput] = useState(true);

    const [CistosBakerSelect1, setCistosBakerSelect1] = useState("");
    const [CistosBakerSelect2, setCistosBakerSelect2] = useState("");
    const [CistosBakerSelect3, setCistosBakerSelect3] = useState("");

    const [CistosBakerCheckbox, setCistosBakerCheckbox] = useState(false);

    const [CistosParameniscalInput, setCistosParameniscalInput] = useState("");
    const [CistosParameniscalInput2, setCistosParameniscalInput2] = useState("");
    const [CistosParameniscalInput3, setCistosParameniscalInput3] = useState("");
    const [disableCistosParameniscalInput, setdisableCistosParameniscalInput] = useState(true);

    const [CistosParameniscalSelect1, setCistosParameniscalSelect1] = useState("");
    const [CistosParameniscalSelect2, setCistosParameniscalSelect2] = useState("");
    const [CistosParameniscalSelect3, setCistosParameniscalSelect3] = useState("");

    const [CistosParameniscalCheckbox, setCistosParameniscalCheckbox] = useState(false);



    const removeItemString = (value) => {
        var index = laudoPrin.indexOf(value);
        if (index > -1) {
            laudoPrin.splice(index, 1);
            setLaudoPrin((arr) => [...arr]);
        }
    };


    const criaStringCistosBaker = (medida1, medida2, medida3) => {
        var string = 'Cisto e Baker medindo'
        var StringFinal;
        removeItemString(string)
        if (medida1 !== "" && medida2 !== "" && medida3 !== "" && CistosBakerSelect1 !== '' && CistosBakerSelect2 !== '' && CistosBakerSelect3 !== '') {
            StringFinal = `${string} ${medida1} x ${medida2} x ${medida3} mm, ${CistosBakerSelect1} ${CistosBakerSelect2} ${CistosBakerSelect3}`;
            setLaudoPrin((arr) => [...arr, StringFinal]);
        }
    };



    useEffect(() => {
        criaStringCistosBaker(CistosBakerInput, CistosBakerInput2, CistosBakerInput3);
        if (CistosBakerCheckbox) {
            setdisableCistosBakerInput(false);
        } else {
            setdisableCistosBakerInput(true);
            setCistosBakerInput("");
            setCistosBakerInput2("");
            setCistosBakerInput3("");
            setCistosBakerSelect1("")
            setCistosBakerSelect2("")
            setCistosBakerSelect3("")
        }
    }, [CistosBakerCheckbox, CistosBakerInput, CistosBakerInput2, CistosBakerInput3, CistosBakerSelect1, CistosBakerSelect2, CistosBakerSelect3]);

    const criaStringCistosParameniscal = (medida1, medida2, medida3) => {
        var string = 'Cisto e Parameniscal medindo'
        var StringFinal;
        removeItemString(string)
        if (medida1 !== "" && medida2 !== "" && medida3 !== "" && CistosParameniscalSelect1 !== '' && CistosParameniscalSelect2 !== '' && CistosParameniscalSelect3 !== '') {
            StringFinal = `${string} ${medida1} x ${medida2} x ${medida3} mm, ${CistosParameniscalSelect1} ${CistosParameniscalSelect2} ${CistosParameniscalSelect3}`;
            setLaudoPrin((arr) => [...arr, StringFinal]);
        }
    };



    useEffect(() => {
        criaStringCistosParameniscal(CistosParameniscalInput, CistosParameniscalInput2, CistosParameniscalInput3);
        if (CistosParameniscalCheckbox) {
            setdisableCistosParameniscalInput(false);
        } else {
            setdisableCistosParameniscalInput(true);
            setCistosParameniscalInput("");
            setCistosParameniscalInput2("");
            setCistosParameniscalInput3("");
            setCistosParameniscalSelect1("")
            setCistosParameniscalSelect2("")
            setCistosParameniscalSelect3("")
        }
    }, [CistosParameniscalCheckbox, CistosParameniscalInput, CistosParameniscalInput2, CistosParameniscalInput3, CistosParameniscalSelect1, CistosParameniscalSelect2, CistosParameniscalSelect3]);

    useEffect(() => {
        CotoveloEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloEsquerdoLaudoNormal])

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="15px"
            mt="15px"
        >
            <TituloNomeExame titulo="Cistos" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>

                <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

                    <Checkbox
                        isDisabled={disableTudo}
                        onChange={() => {
                            setCistosBakerCheckbox(!CistosBakerCheckbox);
                        }}
                    >
                        De Baker. medindo
                    </Checkbox>

                    <HStack>
                        <Input
                            isDisabled={disableCistosBakerInput}
                            value={CistosBakerInput}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistosBakerInput(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistosBakerInput}
                            value={CistosBakerInput2}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistosBakerInput2(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistosBakerInput}
                            value={CistosBakerInput3}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistosBakerInput3(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>
                    <Select
                        w='150px'
                        isDisabled={disableCistosBakerInput}
                        value={CistosBakerSelect1}
                        onChange={(e) => {
                            setCistosBakerSelect1(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="corno anterior">corno anterior</option>
                        <option value="corno posterior">corno posterior</option>
                    </Select>
                    <Select
                        w='150px'
                        isDisabled={disableCistosBakerInput}
                        value={CistosBakerSelect2}
                        onChange={(e) => {
                            setCistosBakerSelect2(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="corno anterior">corno anterior</option>
                        <option value="corno posterior">corno posterior</option>
                    </Select>
                    <Select
                        w='150px'
                        isDisabled={disableCistosBakerInput}
                        value={CistosBakerSelect3}
                        onChange={(e) => {
                            setCistosBakerSelect3(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="corno anterior">corno anterior</option>
                        <option value="corno posterior">corno posterior</option>
                    </Select>
                </Box>

                <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

                    <Checkbox
                        isDisabled={disableTudo}
                        onChange={() => {
                            setCistosParameniscalCheckbox(!CistosParameniscalCheckbox);
                        }}
                    >
                        Parameniscal medindo
                    </Checkbox>

                    <HStack>
                        <Input
                            isDisabled={disableCistosParameniscalInput}
                            value={CistosParameniscalInput}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistosParameniscalInput(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistosParameniscalInput}
                            value={CistosParameniscalInput2}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistosParameniscalInput2(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistosParameniscalInput}
                            value={CistosParameniscalInput3}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistosParameniscalInput3(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>
                    <Select
                        w='150px'
                        isDisabled={disableCistosParameniscalInput}
                        value={CistosParameniscalSelect1}
                        onChange={(e) => {
                            setCistosParameniscalSelect1(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="corno anterior">corno anterior</option>
                        <option value="corno posterior">corno posterior</option>
                    </Select>
                    <Select
                        w='150px'
                        isDisabled={disableCistosParameniscalInput}
                        value={CistosParameniscalSelect2}
                        onChange={(e) => {
                            setCistosParameniscalSelect2(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="corno anterior">corno anterior</option>
                        <option value="corno posterior">corno posterior</option>
                    </Select>
                    <Select
                        w='150px'
                        isDisabled={disableCistosParameniscalInput}
                        value={CistosParameniscalSelect3}
                        onChange={(e) => {
                            setCistosParameniscalSelect3(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="corno anterior">corno anterior</option>
                        <option value="corno posterior">corno posterior</option>
                    </Select>
                </Box>
            </Stack >
        </Box >

    );
}
export default CistosEsquerdo;
