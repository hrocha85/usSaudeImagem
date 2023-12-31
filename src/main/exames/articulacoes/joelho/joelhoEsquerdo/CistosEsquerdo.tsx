/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function CistosEsquerdo({ Disable }) {
    const altura = "100%";
    const largura = "90%";

    const [CistosEsquerdo, setCistosEsquerdo] = useState<any>([]);
    const [ConclusaoCistosEsquerdo, setConclusaoCistosEsquerdo] = useState<any>([]);

    const subExame = `Cistos joelho Esquerdo`
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(CistosEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                CistosEsquerdo,
                ConclusaoCistosEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                CistosEsquerdo,
                ConclusaoCistosEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [CistosEsquerdo]);

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
        const index = CistosEsquerdo.indexOf(value);
        if (index > -1) {
            CistosEsquerdo.splice(index, 1);
            setCistosEsquerdo((arr) => [...arr]);
        }
    };


    const criaStringCistosBaker = (medida1, medida2, medida3) => {
        const string = 'Cisto e Baker medindo'
        let StringFinal;
        const conclusao = 'Cisto de Baker.'
        removeCistoBaker()
        if (medida1 !== "" && medida2 !== "" && medida3 !== "" && CistosBakerSelect1 !== '' && CistosBakerSelect2 !== '' && CistosBakerSelect3 !== '') {
            StringFinal = `${string} ${medida1} x ${medida2} x ${medida3} mm, ${CistosBakerSelect1} ${CistosBakerSelect2} ${CistosBakerSelect3}`;
            setCistosEsquerdo((arr) => [...arr, StringFinal]);
            setConclusaoCistosEsquerdo((arr) => [...arr, conclusao]);
        }
    };

    const removeCistoBaker = () => {
        CistosEsquerdo.map((e) => {
            if (e.includes("Cisto e Baker medindo")) {
                const index = CistosEsquerdo.indexOf(e);

                if (index > -1) {
                    CistosEsquerdo.splice(index, 1);
                    setCistosEsquerdo((arr) => [...arr]);
                }
            }
        });
        ConclusaoCistosEsquerdo.map((e) => {
            if (e.includes("Cisto de Baker.")) {
                const index = ConclusaoCistosEsquerdo.indexOf(e);

                if (index > -1) {
                    ConclusaoCistosEsquerdo.splice(index, 1);
                    setConclusaoCistosEsquerdo((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao(`Cisto de Baker.`)
                }
            }
        });
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

    const criaStringCistosParameniscal = (medida1cm, medida2cm, medida3cm) => {
        const string = 'Presença de cisto parameniscal com '
        let StringFinal;
        const medida1 = new Convert_Medida(medida1cm).Convert_Medida()
        const medida2 = new Convert_Medida(medida2cm).Convert_Medida()
        const medida3 = new Convert_Medida(medida3cm).Convert_Medida()
        removeCistoParameniscal()
        if (medida1cm !== "" && medida2cm !== "" && medida3cm !== "" && CistosParameniscalSelect1 !== '' && CistosParameniscalSelect2 !== '' && CistosParameniscalSelect3 !== '') {
            StringFinal = `${string} ${CistosParameniscalSelect1}, situado junto ao ${CistosParameniscalSelect2} do ${CistosParameniscalSelect3}, medindo ${medida1} x ${medida2} x ${medida3} cm`;
            setCistosEsquerdo((arr) => [...arr, StringFinal]);
        }
    };
    const removeCistoParameniscal = () => {
        CistosEsquerdo.map((e) => {
            if (e.includes('Presença de cisto parameniscal com ')) {
                const index = CistosEsquerdo.indexOf(e);

                if (index > -1) {
                    CistosEsquerdo.splice(index, 1);
                    setCistosEsquerdo((arr) => [...arr]);
                }
            }
        });
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
                        <option value="paredes final">paredes</option>
                        <option value="paredes espessadas">paredes espessadas</option>
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
                        <option value="conteúdo anecogênico">conteúdo anecogênico</option>
                        <option value="contúdo líquidodo com debris">contúdo líquidodo com debris</option>
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
                        <option value="contornos regulares">contornos regulares</option>
                        <option value="contornos lobulados">contornos lobulados</option>
                    </Select>
                </Box>

                <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

                    <Checkbox

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
                        <option value="paredes finas">paredes finas</option>
                        <option value="paredes espessadas">paredes espessadas</option>
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
                        <option value="menisco lateral">menisco lateral</option>
                        <option value="menisco medial">menisco medial</option>
                    </Select>
                </Box>
            </Stack >
        </Box >

    );
}
export default CistosEsquerdo;
