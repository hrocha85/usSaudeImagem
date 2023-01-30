/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { MaoDireitoNormalContext } from "../../../../../context/MaoDireitoNormalContext"
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function MaoCistosDireito() {
    const altura = "100%";
    const largura = "90%";

    const [CistosDireito, setCistosDireito] = useState<any>([]);

    const subExame = `Cisto direito`
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(CistosDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                CistosDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                CistosDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [CistosDireito]);


    let { MaoDireitoLaudoNormal } = useContext(MaoDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [Cistos1Input, setCistos1Input] = useState<any>(0);
    const [Cistos1Input2, setCistos1Input2] = useState<any>(0);
    const [disableCistos1Input, setdisableCistos1Input] = useState(true);

    const [Cistos1Select1, setCistos1Select1] = useState("");
    const [Cistos1Select2, setCistos1Select2] = useState("");

    const [Cistos1Checkbox, setCistos1Checkbox] = useState(false);

    const [Cistos2Input, setCistos2Input] = useState<any>(0);
    const [Cistos2Input2, setCistos2Input2] = useState<any>(0);
    const [disableCistos2Input, setdisableCistos2Input] = useState(true);

    const [Cistos2Select1, setCistos2Select1] = useState("");
    const [Cistos2Select2, setCistos2Select2] = useState("");

    const [Cistos2Checkbox, setCistos2Checkbox] = useState(false);


    const criaStringCistos1_Cisto2 = () => {
        removeFraseCisto1()
        removeFraseCisto2()
        removeFraseCisto1_Cisto2()
        if (Cistos1Checkbox && Cistos2Checkbox && Cistos1Select1 === Cistos2Select1) {

            var string = 'Cistos de paredes finas e regulares e conteúdo anecogênico situados superficialmente ao tendão flexor do '
            var StringFinal;
            var medida1cisto1 = Cistos1Input / 10
            var medida2cisto1 = Cistos1Input2 / 10
            var medida1cisto2 = Cistos2Input / 10
            var medida2cisto2 = Cistos2Input2 / 10
            removeFraseCisto1_Cisto2()
            if (medida1cisto1 !== 0 && medida2cisto1 !== 0 && medida1cisto2 !== 0 && medida2cisto2 !== 0 && Cistos1Select1 !== '' && Cistos1Select2 !== '') {
                StringFinal = `${string} ${Cistos1Select1}, medindo ${medida1cisto1} x ${medida2cisto1} cm (ao nível ${Cistos1Select2}) e ${medida1cisto2} x ${medida2cisto2} cm (ao nível ${Cistos2Select2}).`;
                setCistosDireito((arr) => [...arr, StringFinal]);
            }
        } else {
            criaStringCistos1()
            criaStringCistos2()
        }
    };

    const removeFraseCisto1_Cisto2 = () => {
        CistosDireito.map((e) => {
            if (e.includes(`Cistos de paredes finas e regulares e conteúdo anecogênico situados superficialmente ao tendão flexor do `)) {
                var index = CistosDireito.indexOf(e);

                if (index > -1) {
                    CistosDireito.splice(index, 1);
                    setCistosDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringCistos1 = () => {
        removeFraseCisto1()

        var string = 'Cisto anecogênico de paredes finas e regulares situado superficialmente ao tendão flexor do '
        var StringFinal;
        var medida1 = Cistos1Input / 10
        var medida2 = Cistos1Input2 / 10
        removeFraseCisto1()
        if (medida1 !== 0 && medida2 !== 0 && Cistos1Select1 !== '' && Cistos1Select2 !== '') {
            StringFinal = `${string} ${Cistos1Select1}, ao nível ${Cistos1Select2}, medindo ${medida1} x ${medida2} cm, `;
            setCistosDireito((arr) => [...arr, StringFinal]);

        }
    };
    const removeFraseCisto1 = () => {
        CistosDireito.map((e) => {
            if (e.includes(`Cisto anecogênico de paredes finas e regulares situado superficialmente ao tendão flexor do `)) {
                var index = CistosDireito.indexOf(e);

                if (index > -1) {
                    CistosDireito.splice(index, 1);
                    setCistosDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringCistos2 = () => {
        removeFraseCisto2()
        var string = '2º Cisto anecogênico de paredes finas e regulares situado superficialmente ao tendão flexor do '
        var StringFinal;
        var medida1 = Cistos2Input / 10
        var medida2 = Cistos2Input2 / 10
        removeFraseCisto2()
        if (medida1 !== 0 && medida2 !== 0 && Cistos2Select1 !== '' && Cistos2Select2 !== '') {
            StringFinal = `${string} ${Cistos2Select1}, ao nível ${Cistos2Select2}, medindo ${medida1} x ${medida2} cm, `;
            setCistosDireito((arr) => [...arr, StringFinal]);

        }
    };
    const removeFraseCisto2 = () => {
        CistosDireito.map((e) => {
            if (e.includes(`2º Cisto anecogênico de paredes finas e regulares situado superficialmente ao tendão flexor do`)) {
                var index = CistosDireito.indexOf(e);

                if (index > -1) {
                    CistosDireito.splice(index, 1);
                    setCistosDireito((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (Cistos1Checkbox) {
            setdisableCistos1Input(false);
        } else {
            setdisableCistos1Input(true);
            setCistos1Input("");
            setCistos1Input2("");
            setCistos1Select1("")
            setCistos1Select2("")
        }
        if (Cistos2Checkbox) {
            setdisableCistos2Input(false);
        } else {
            setdisableCistos2Input(true);
            setCistos2Input("");
            setCistos2Input2("");
            setCistos2Select1("")
            setCistos2Select2("")
        }
        criaStringCistos1_Cisto2();

    }, [Cistos1Checkbox, Cistos1Input, Cistos1Input2, Cistos1Select1, Cistos1Select2,
        Cistos2Checkbox, Cistos2Input, Cistos2Input2, Cistos2Select1, Cistos2Select2]);

    useEffect(() => {
        MaoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [MaoDireitoLaudoNormal])

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
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
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
                        <option value="Da falange média">Da falange média</option>
                        <option value="Da falange proximal">Da falange proximal</option>
                        <option value="do metacarpo">do metacarpo</option>
                        <option value="da polia A1">da polia A1</option>
                        <option value="da polia A2">da polia A2</option>
                        <option value="da polia A3">da polia A3</option>
                        <option value="da polia A4">da polia A4</option>
                        <option value="da polia A5">da polia A5</option>
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
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
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
                        <option value="Da falange média">Da falange média</option>
                        <option value="Da falange proximal">Da falange proximal</option>
                        <option value="do metacarpo">do metacarpo</option>
                        <option value="da polia A1">da polia A1</option>
                        <option value="da polia A2">da polia A2</option>
                        <option value="da polia A3">da polia A3</option>
                        <option value="da polia A4">da polia A4</option>
                        <option value="da polia A5">da polia A5</option>
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

                        <Text>mm</Text>
                    </HStack>

                </Box>
            </Stack >
        </Box >

    );
}
export default MaoCistosDireito;
