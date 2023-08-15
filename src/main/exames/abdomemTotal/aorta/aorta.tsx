/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Aorta({ Disable }) {
    const altura = "100%";
    let largura = "60%";
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    isLargerThan600 ? largura = "60%": largura = "100%"

    const [value, setValue] = useState("1");
    const [FraseAorta, setFraseAorta] = useState<any>([]);
    const [ConclusoesAorta, setConclusoesAorta] = useState<any>([]);

    const [valueSelect1, setValueSelect1] = useState("");
    const [valueSelect2, setValueSelect2] = useState("");
    const [valueInput1, setValueInput1] = useState("");
    const [valueInput2, setValueInput2] = useState("");
    const [TromboPerietalCheckbox, setTromboPerietalCheckbox] = useState(false)

    const [enableSelects, setEnableSelects] = useState<boolean>(false);

    const [CitarCalibreCheckbox, setCitarCalibreCheckbox] = useState(false)
    const [DisableCitarCalibreCheckbox, setDisableCitarCalibreCheckbox] = useState(true);
    const [valueInputCitarCalibre, setValueInputCitarCalibre] = useState("");
    const [DisableInputCitarCalibre, setDisableInputCitarCalibre] = useState(true);

    const [CitarFluxoCheckbox, setCitarFluxoCheckbox] = useState(false)
    const [CitarVPSCheckbox, setCitarVPSCheckbox] = useState(false)
    const [valueInputVPS, setValueInputVPS] = useState("");
    const [DisableInputCitarVPS, setDisableInputCitarVPS] = useState(true);
    const [DisableCitarVPSCheckbox, setDisableCitarVPSCheckbox] = useState(true);

    const removeSelectString = () => {
        var index;
        FraseAorta.map((e) => {
            if (e.includes("Aneurisma")) {
                index = FraseAorta.indexOf(e);

                if (index > -1) {
                    FraseAorta.splice(index, 1);
                    setFraseAorta((arr) => [...arr]);
                }
            } else if (e.includes("Aorta")) {
                index = FraseAorta.indexOf(e);

                if (index > -1) {
                    FraseAorta.splice(index, 1);
                    setFraseAorta((arr) => [...arr]);
                }
            }
        });
    };
    const removeConclusaoString = () => {
        var index;
        ConclusoesAorta.map((e) => {
            if (e.includes("Aneurisma aórtico.")) {
                index = ConclusoesAorta.indexOf(e);

                if (index > -1) {
                    ConclusoesAorta.splice(index, 1);
                    setConclusoesAorta((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao('Aneurisma aórtico.');
                }
            }
        });
    };



    useEffect(() => {
        if (value.includes("Aneurisma")) {
            setEnableSelects(true);
        } else if (value.includes("Aorta ateromatosa e ectasiada")) {
            setDisableCitarCalibreCheckbox(false)
            var string;
            if (valueInputCitarCalibre != '') {
                var medida = new Convert_Medida(valueInputCitarCalibre).Convert_Medida()
                string = `Aorta com paredes hiperecogênicas e irregulares, com calibre transverso máximo ${medida} cm nos segmentos acessíveis.`
                setFraseAorta([]);
                setFraseAorta((arr) => [...arr, string]);
            } else {
                setFraseAorta([]);
                string = `Aorta com paredes hiperecogênicas e irregulares`
                setFraseAorta((arr) => [...arr, string]);
            }
        } else {
            setValueInput1('')
            setValueInput2('')
            setValueSelect1('')
            setValueSelect2('')
            if (value != "1") {
                setFraseAorta([]);
                setEnableSelects(false);
                setFraseAorta((arr) => [...arr, value]);
            } else {
                setEnableSelects(false);
                setFraseAorta([]);
            }
        }
    }, [value, valueInputCitarCalibre]);

    useEffect(() => {
        const conclusao = 'Aneurisma aórtico.'
        removeSelectString()
        removeConclusaoString()
        var select;
        if (valueInput1 != '' && valueInput2 != '' && valueInput1 != '' && valueInput2 != '' && TromboPerietalCheckbox) {
            select = `Aorta com paredes irregulares, apresentando dilatação aneurismática ${valueSelect1} ${valueSelect2} com calibre máximo de  ${valueInput1} cm e extensão de ${valueInput2} cm, com trombo parietal.`;
            setFraseAorta((arr) => [...arr, select]);
            setConclusoesAorta((arr) => [...arr, conclusao]);
        } else if (valueInput1 != '' && valueInput2 != '' && valueInput1 != '' && valueInput2 != '') {
            select = `Aorta com paredes irregulares, apresentando dilatação aneurismática ${valueSelect1} ${valueSelect2} com calibre máximo de  ${valueInput1} cm e extensão de ${valueInput2} cm `;
            setFraseAorta((arr) => [...arr, select]);
            setConclusoesAorta((arr) => [...arr, conclusao]);
        }
    }, [valueSelect1, valueSelect2, valueInput1, valueInput2, TromboPerietalCheckbox]);

    useEffect(() => {
        if (CitarCalibreCheckbox) {
            setDisableInputCitarCalibre(false)
        } else {
            setValueInputCitarCalibre('')
            setDisableInputCitarCalibre(true)
        }
    }, [CitarCalibreCheckbox])

    const criaStringCitarFluxo = () => {
        var string = 'A avaliação da aorta com Doppler demonstra fluxo de padrão trifásico normal e velocidades preservadas'
        removeFraseCitarFluxo()
        const medida = new Convert_Medida(valueInputVPS).Convert_Medida()
        if (valueInputVPS != '' && CitarFluxoCheckbox) {
            string = `${string} (VPS= ${medida} cm/s).`
            setFraseAorta((arr) => [...arr, string])
        } else if (CitarFluxoCheckbox) {
            string = `${string}.`
            setFraseAorta((arr) => [...arr, string])
        }
    }

    const removeFraseCitarFluxo = () => {
        FraseAorta.map((e) => {
            if (e.includes("A avaliação da aorta com Doppler demonstra fluxo de padrão trifásico normal e velocidades preservadas")) {
                var index = FraseAorta.indexOf(e);
                if (index > -1) {
                    FraseAorta.splice(index, 1);
                    setFraseAorta((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (CitarFluxoCheckbox) {
            criaStringCitarFluxo()
            setDisableCitarVPSCheckbox(false)
        } else {
            removeFraseCitarFluxo()
            setDisableCitarVPSCheckbox(true)
            setValueInputVPS('')
        }
    }, [CitarFluxoCheckbox, valueInputVPS])

    useEffect(() => {
        if (CitarVPSCheckbox) {
            setDisableInputCitarVPS(false)
        } else {
            setDisableInputCitarVPS(true)
            setValueInputVPS('')
        }
    }, [CitarVPSCheckbox])

    useEffect(() => {
        Disable ? setValue('De diâmetro preservado. \n Paredes aórticas com espessura e a ecogenicidade normais, regulares.') : setValue('1')
    }, [Disable])

    const subExame = "Aorta";
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(FraseAorta).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseAorta,
                ConclusoesAorta
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseAorta,
                ConclusoesAorta
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseAorta]);

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
            <TituloNomeExame titulo="Aorta" />


            <RadioGroup onChange={setValue} value={value} >
                <Stack direction="column">
                    <Flex>
                        <Stack>
                            <Radio value="1">Não citar</Radio>
                            <Radio value={'De diâmetro preservado. \n Paredes aórticas com espessura e a ecogenicidade normais, regulares.'}>
                                Aorta Normal
                            </Radio>
                            <Radio  value="Presença de adenopatia para aórtica ou ao redor dos demais grandes vasos abdominais.">
                                Aorta Alterada
                            </Radio>
                            <Radio value="Aorta com paredes hiperecogênicas e discretamente irregulares, conservando calibre normal.">
                                Aorta ateromatosa
                            </Radio>
                            <Stack>
                                <Radio value="Aorta ateromatosa e ectasiada">
                                    Aorta ateromatosa e ectasiada
                                </Radio>
                                <HStack>
                                    <Checkbox
                                        isDisabled={DisableCitarCalibreCheckbox}
                                        onChange={() => setCitarCalibreCheckbox(!CitarCalibreCheckbox)}>
                                        citar calibre
                                    </Checkbox>
                                    <Input
                                        p='0'
                                        textAlign='center'
                                        value={valueInputCitarCalibre}
                                        isDisabled={DisableInputCitarCalibre}
                                        w='20%'
                                        placeholder="00"
                                        onChange={(e) => setValueInputCitarCalibre(e.target.value)}
                                    />
                                    <Text alignSelf='center'>cm</Text>
                                </HStack>
                            </Stack>
                        </Stack>
                        <Spacer />
                        <Stack>
                            <Flex flexWrap={'wrap'}>
                                <Checkbox
                                    onChange={() => setCitarFluxoCheckbox(!CitarFluxoCheckbox)}>
                                    Citar Fluxo normal ao Doppler
                                </Checkbox>
                                <HStack alignSelf='center'>
                                    <Checkbox
                                        isDisabled={DisableCitarVPSCheckbox}
                                        onChange={() => setCitarVPSCheckbox(!CitarVPSCheckbox)}>
                                        Citar VPS
                                    </Checkbox>
                                    <Input
                                        p='0'
                                        textAlign='center'
                                        isDisabled={DisableInputCitarVPS}
                                        value={valueInputVPS}
                                        onChange={(e) => setValueInputVPS(e.target.value)}
                                        w='30px'
                                        placeholder="00"
                                    />
                                    <Text alignSelf='center'>cm/s</Text>
                                </HStack>
                            </Flex>
                        </Stack>
                    </Flex>
                    <Box w='auto'>
                        <HStack >
                            <Radio value="Aneurisma">Aneurisma</Radio>
                            <Select w='150px'
                                isDisabled={!enableSelects}
                                onChange={(e) => setValueSelect1(e.target.value)}
                            >
                                <option selected disabled value="">Selecione</option>
                                <option value="fusifome">Fusifome</option>
                                <option value="sacular">Sacular</option>
                            </Select>
                            <Select w='150px'
                                isDisabled={!enableSelects}
                                onChange={(e) => setValueSelect2(e.target.value)}
                            >
                                <option selected disabled value="">Selecione</option>
                                <option value="infrarrenal">infrarrenal</option>
                                <option value="no terço médio">no terço médio</option>
                                <option value="no terço proximal">no terço proximal</option>
                                <option value="no terço distal">no terço distal</option>
                                <option value="junto à bifurcação">junto à bifurcação</option>
                            </Select>
                        </HStack>
                        <Box display='flex' flexWrap='wrap' marginTop="10px">
                            <Text alignSelf='center'>com calibre máximo de </Text>
                            <Input
                                p='0'
                                textAlign='center' w='20%'
                                value={valueInput1}
                                placeholder="00"
                                isDisabled={!enableSelects}
                                onChange={(e) => setValueInput1(e.target.value)}
                            />
                            <Text alignSelf='center'>cm e</Text>
                            <Input
                                p='0'
                                textAlign='center' w='60px'
                                value={valueInput2}
                                placeholder="00"
                                isDisabled={!enableSelects}
                                onChange={(e) => setValueInput2(e.target.value)}
                            />
                            <Text alignSelf='center'>cm de extensão</Text>
                            <Checkbox
                                isDisabled={!enableSelects}
                                onChange={(e) => setTromboPerietalCheckbox(!TromboPerietalCheckbox)}
                            >
                                com trombo perietal
                            </Checkbox>
                        </Box >
                    </Box>
                    <Radio value="Aorta inacessível por interposição gasosa de alças intestinais.">
                        Inacessível (não citar linfonodos retroperitoneais)
                    </Radio>
                </Stack>
            </RadioGroup>

        </Box >
    );
}

export default Aorta