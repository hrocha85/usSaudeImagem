/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { MaoEsquerdoNormalContext } from "../../../../../context/MaoEsquerdoNormalContext"
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MaoCistosEsquerdo() {
    const altura = "100%";
    const largura = "90%";

    const [CistosEsquerdo, setCistosEsquerdo] = useState<any>([]);

    const subExame = `Cisto Esquerdo`
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(CistosEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                CistosEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                CistosEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [CistosEsquerdo]);


    let { MaoEsquerdoLaudoNormal } = useContext(MaoEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [Cistos1Input, setCistos1Input] = useState("");
    const [Cistos1Input2, setCistos1Input2] = useState("");
    const [Cistos1Input3, setCistos1Input3] = useState("");
    const [disableCistos1Input, setdisableCistos1Input] = useState(true);

    const [Cistos1Select1, setCistos1Select1] = useState("");
    const [Cistos1Select2, setCistos1Select2] = useState("");

    const [Cistos1Checkbox, setCistos1Checkbox] = useState(false);

    const [Cistos2Input, setCistos2Input] = useState("");
    const [Cistos2Input2, setCistos2Input2] = useState("");
    const [Cistos2Input3, setCistos2Input3] = useState("");
    const [disableCistos2Input, setdisableCistos2Input] = useState(true);

    const [Cistos2Select1, setCistos2Select1] = useState("");
    const [Cistos2Select2, setCistos2Select2] = useState("");

    const [Cistos2Checkbox, setCistos2Checkbox] = useState(false);

    const criaStringCistos1 = (medida1, medida2, medida3) => {
        var string = 'Cisto1 e medindo'
        var StringFinal;
        removeFraseCisto1()
        if (medida1 !== "" && medida2 !== "" && medida3 !== "" && Cistos1Select1 !== '' && Cistos1Select2 !== '') {
            StringFinal = `${string} ${medida1} x ${medida2} x ${medida3} mm, ${Cistos1Select1} ${Cistos1Select2}`;
            setCistosEsquerdo((arr) => [...arr, StringFinal]);
        }
    };

    const removeFraseCisto1 = () => {
        CistosEsquerdo.map((e) => {
            if (e.includes(`Cisto1 e medindo`)) {
                var index = CistosEsquerdo.indexOf(e);

                if (index > -1) {
                    CistosEsquerdo.splice(index, 1);
                    setCistosEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        criaStringCistos1(Cistos1Input, Cistos1Input2, Cistos1Input3);
        if (Cistos1Checkbox) {
            setdisableCistos1Input(false);
        } else {
            setdisableCistos1Input(true);
            setCistos1Input("");
            setCistos1Input2("");
            setCistos1Input3("");
            setCistos1Select1("")
            setCistos1Select2("")
        }
    }, [Cistos1Checkbox, Cistos1Input, Cistos1Input2, Cistos1Input3, Cistos1Select1, Cistos1Select2]);

    const criaStringCistos2 = (medida1, medida2, medida3) => {
        var string = 'Cisto2 e medindo'
        var StringFinal;
        removeFraseCisto2()
        if (medida1 !== "" && medida2 !== "" && medida3 !== "" && Cistos2Select1 !== '' && Cistos2Select2 !== '') {
            StringFinal = `${string} ${medida1} x ${medida2} x ${medida3} mm, ${Cistos2Select1} ${Cistos2Select2}`;
            setCistosEsquerdo((arr) => [...arr, StringFinal]);
        }
    };
    const removeFraseCisto2 = () => {
        CistosEsquerdo.map((e) => {
            if (e.includes(`Cisto2 e medindo`)) {
                var index = CistosEsquerdo.indexOf(e);

                if (index > -1) {
                    CistosEsquerdo.splice(index, 1);
                    setCistosEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        criaStringCistos2(Cistos2Input, Cistos2Input2, Cistos2Input3);
        if (Cistos2Checkbox) {
            setdisableCistos2Input(false);
        } else {
            setdisableCistos2Input(true);
            setCistos2Input("");
            setCistos2Input2("");
            setCistos2Input3("");
            setCistos2Select1("")
            setCistos2Select2("")
        }
    }, [Cistos2Checkbox, Cistos2Input, Cistos2Input2, Cistos2Input3, Cistos2Select1, Cistos2Select2]);

    useEffect(() => {
        MaoEsquerdoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [MaoEsquerdoLaudoNormal])

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
                            setCistos1Checkbox(!Cistos1Checkbox);
                        }}
                    >
                        cisto junto ao tendão flexor do
                    </Checkbox>
                    <Select
                        w='150px'
                        isDisabled={disableCistos1Input}
                        value={Cistos1Select1}
                        onChange={(e) => {
                            setCistos1Select1(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="I">I</option>
                    </Select>
                    <Select
                        w='150px'
                        isDisabled={disableCistos1Input}
                        value={Cistos1Select2}
                        onChange={(e) => {
                            setCistos1Select2(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="Da falange distal">Da falange distal</option>
                    </Select>
                    <HStack>
                        <Input
                            isDisabled={disableCistos1Input}
                            value={Cistos1Input}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistos1Input(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistos1Input}
                            value={Cistos1Input2}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistos1Input2(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistos1Input}
                            value={Cistos1Input3}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistos1Input3(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>

                </Box>
            </Stack >
            <Stack>

                <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

                    <Checkbox
                        isDisabled={disableTudo}
                        onChange={() => {
                            setCistos2Checkbox(!Cistos2Checkbox);
                        }}
                    >
                        cisto junto ao tendão flexor do
                    </Checkbox>
                    <Select
                        w='150px'
                        isDisabled={disableCistos2Input}
                        value={Cistos2Select1}
                        onChange={(e) => {
                            setCistos2Select1(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="I">I</option>
                    </Select>
                    <Select
                        w='150px'
                        isDisabled={disableCistos2Input}
                        value={Cistos2Select2}
                        onChange={(e) => {
                            setCistos2Select2(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="Da falange distal">Da falange distal</option>
                    </Select>
                    <HStack>
                        <Input
                            isDisabled={disableCistos2Input}
                            value={Cistos2Input}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistos2Input(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistos2Input}
                            value={Cistos2Input2}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistos2Input2(e.target.value) }}
                        />
                        <Text>x</Text>
                        <Input
                            isDisabled={disableCistos2Input}
                            value={Cistos2Input3}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setCistos2Input3(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>

                </Box>
            </Stack >
        </Box >

    );
}
export default MaoCistosEsquerdo;
