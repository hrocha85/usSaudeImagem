/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, HStack, Input, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function DopplerParenquima() {
    const altura = "100%";
    const largura = "66%";

    const [value, setValue] = useState("1");
    const [FrasesDopplerParenquima, setFrasesDopplerParenquima] = useState<any>([]);
    const [DescreverDoppler, setDescreverDoppler] = useState(false);
    const [DisableDescreverDoppler, setDisableDescreverDoppler] = useState(false);

    const [CitarArteriasCheckbox, setCitarArteriasCheckbox] = useState(false);
    const [VelocNormaisCheckbox, setVelocNormaisCheckbox] = useState(false);
    const [VelocAumentadasCheckbox, setVelocAumentadasCheckbox] = useState(false);

    const [VelSistolicaSuperioreriorDirCheckbox, setVelSistolicaSuperioreriorDirCheckbox] = useState(false);
    const [VelSistolicaSuperiorDirInput, setVelSistolicaSuperiorDirInput] = useState('');
    const [DisableVelSistolicaSuperiorDirInput, setDisableVelSistolicaSuperiorDirInput] = useState(true);

    const [IRSuperiorDirCheckbox, setIRSuperiorDirCheckbox] = useState(false);
    const [IRSuperiorDirInput, setIRSuperiorDirInput] = useState('');
    const [DisableIRSuperiorDirInput, setDisableIRSuperiorDirInput] = useState(true);

    const [VelSistolicaInferiorDirCheckbox, setVelSistolicaInferiorDirCheckbox] = useState(false);
    const [VelSistolicaInferiorDirInput, setVelSistolicaInferiorDirInput] = useState('');
    const [DisableVelSistolicaInferiorDirInput, setDisableVelSistolicaInferiorDirInput] = useState(true);

    const [IRInferiorDirCheckbox, setIRInferiorDirCheckbox] = useState(false);
    const [IRInferiorDirInput, setIRInferiorDirInput] = useState('');
    const [DisableIRInferiorDirInput, setDisableIRInferiorDirInput] = useState(true);

    const [VelSistolicaSuperioreriorEsqCheckbox, setVelSistolicaSuperioreriorEsqCheckbox] = useState(false);
    const [VelSistolicaSuperiorEsqInput, setVelSistolicaSuperiorEsqInput] = useState('');
    const [DisableVelSistolicaSuperiorEsqInput, setDisableVelSistolicaSuperiorEsqInput] = useState(true);

    const [IRSuperiorEsqCheckbox, setIRSuperiorEsqCheckbox] = useState(false);
    const [IRSuperiorEsqInput, setIRSuperiorEsqInput] = useState('');
    const [DisableIRSuperiorEsqInput, setDisableIRSuperiorEsqInput] = useState(true);

    const [VelSistolicaInferiorEsqCheckbox, setVelSistolicaInferiorEsqCheckbox] = useState(false);
    const [VelSistolicaInferiorEsqInput, setVelSistolicaInferiorEsqInput] = useState('');
    const [DisableVelSistolicaInferiorEsqInput, setDisableVelSistolicaInferiorEsqInput] = useState(true);

    const [IRInferiorEsqCheckbox, setIRInferiorEsqCheckbox] = useState(false);
    const [IRInferiorEsqInput, setIRInferiorEsqInput] = useState('');
    const [DisableIRInferiorEsqInput, setDisableIRInferiorEsqInput] = useState(true);

    useEffect(() => {
        DescreverDoppler ? setDisableDescreverDoppler(true) : setDisableDescreverDoppler(false)
    }, [DescreverDoppler])

    const subExame = "Doppler Parênquima";
    const titulo_exame = "Tireóide";

    useEffect(() => {
        if (Object.keys(FrasesDopplerParenquima).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesDopplerParenquima
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesDopplerParenquima
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesDopplerParenquima]);
    useEffect(() => {
        if (value == "1") {
            setFrasesDopplerParenquima([]);
        } else {
            setFrasesDopplerParenquima([]);
            setFrasesDopplerParenquima((arr) => [...arr, value]);
        }
    }, [value]);

    const criaStringVelSistolicaSuperiorDir = () => {
        let string = 'Artéria tiredoideana Superior Direita'
        removeVelSistolicaSuperiorDir()
        if (VelSistolicaSuperiorDirInput != '' || IRSuperiorDirInput != '') {
            if (VelSistolicaSuperiorDirInput != '') {
                string = `${string} ${VelSistolicaSuperiorDirInput}.`
            }
            if (IRSuperiorDirInput != '') {
                string = `${string} ${IRSuperiorDirInput}.`
            }
            setFrasesDopplerParenquima((arr) => [...arr, string]);
        } else {

            removeVelSistolicaSuperiorDir()
        }

    }

    const removeVelSistolicaSuperiorDir = () => {
        FrasesDopplerParenquima.map((e) => {
            if (e.includes("Artéria tiredoideana Superior Direita")) {
                var index = FrasesDopplerParenquima.indexOf(e);
                if (index > -1) {
                    FrasesDopplerParenquima.splice(index, 1);
                    setFrasesDopplerParenquima((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (VelSistolicaSuperioreriorDirCheckbox) {
            criaStringVelSistolicaSuperiorDir()
            setDisableVelSistolicaSuperiorDirInput(false)
        } else {
            removeVelSistolicaSuperiorDir()
            setDisableVelSistolicaSuperiorDirInput(true)
            setVelSistolicaSuperiorDirInput('')
            setIRSuperiorDirInput('')
        }
    }, [VelSistolicaSuperioreriorDirCheckbox, VelSistolicaSuperiorDirInput, IRSuperiorDirInput])

    useEffect(() => {
        if (IRSuperiorDirCheckbox) {
            setDisableIRSuperiorDirInput(false)
        } else {
            setDisableIRSuperiorDirInput(true)
            setIRSuperiorDirInput('')
        }
    }, [IRSuperiorDirCheckbox])

    const criaStringVelSistolicaInferiorDir = () => {
        let string = 'Artéria tiredoideana Inferior Direita'
        removeVelSistolicaInferiorDir()
        if (VelSistolicaInferiorDirInput != '' || IRInferiorDirInput != '') {
            if (VelSistolicaInferiorDirInput != '') {
                string = `${string} ${VelSistolicaInferiorDirInput}.`
            }
            if (IRInferiorDirInput != '') {
                string = `${string} ${IRInferiorDirInput}.`
            }
            setFrasesDopplerParenquima((arr) => [...arr, string]);
        } else {

            removeVelSistolicaInferiorDir()
        }

    }

    const removeVelSistolicaInferiorDir = () => {
        FrasesDopplerParenquima.map((e) => {
            if (e.includes("Artéria tiredoideana Inferior Direita")) {
                var index = FrasesDopplerParenquima.indexOf(e);
                if (index > -1) {
                    FrasesDopplerParenquima.splice(index, 1);
                    setFrasesDopplerParenquima((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (VelSistolicaInferiorDirCheckbox) {
            criaStringVelSistolicaInferiorDir()
            setDisableVelSistolicaInferiorDirInput(false)
        } else {
            removeVelSistolicaInferiorDir()
            setDisableVelSistolicaInferiorDirInput(true)
            setVelSistolicaInferiorDirInput('')
            setIRInferiorDirInput('')
        }
    }, [VelSistolicaInferiorDirCheckbox, VelSistolicaInferiorDirInput, IRInferiorDirInput])

    useEffect(() => {
        if (IRInferiorDirCheckbox) {
            setDisableIRInferiorDirInput(false)
        } else {
            setDisableIRInferiorDirInput(true)
            setIRInferiorDirInput('')
        }
    }, [IRInferiorDirCheckbox])

    const criaStringVelSistolicaSuperiorEsq = () => {
        let string = 'Artéria tiredoideana Superior Esqeita'
        removeVelSistolicaSuperiorEsq()
        if (VelSistolicaSuperiorEsqInput != '' || IRSuperiorEsqInput != '') {
            if (VelSistolicaSuperiorEsqInput != '') {
                string = `${string} ${VelSistolicaSuperiorEsqInput}.`
            }
            if (IRSuperiorEsqInput != '') {
                string = `${string} ${IRSuperiorEsqInput}.`
            }
            setFrasesDopplerParenquima((arr) => [...arr, string]);
        } else {

            removeVelSistolicaSuperiorEsq()
        }

    }

    const removeVelSistolicaSuperiorEsq = () => {
        FrasesDopplerParenquima.map((e) => {
            if (e.includes("Artéria tiredoideana Superior Esqeita")) {
                var index = FrasesDopplerParenquima.indexOf(e);
                if (index > -1) {
                    FrasesDopplerParenquima.splice(index, 1);
                    setFrasesDopplerParenquima((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (VelSistolicaSuperioreriorEsqCheckbox) {
            criaStringVelSistolicaSuperiorEsq()
            setDisableVelSistolicaSuperiorEsqInput(false)
        } else {
            removeVelSistolicaSuperiorEsq()
            setDisableVelSistolicaSuperiorEsqInput(true)
            setVelSistolicaSuperiorEsqInput('')
            setIRSuperiorEsqInput('')
        }
    }, [VelSistolicaSuperioreriorEsqCheckbox, VelSistolicaSuperiorEsqInput, IRSuperiorEsqInput])

    useEffect(() => {
        if (IRSuperiorEsqCheckbox) {
            setDisableIRSuperiorEsqInput(false)
        } else {
            setDisableIRSuperiorEsqInput(true)
            setIRSuperiorEsqInput('')
        }
    }, [IRSuperiorEsqCheckbox])

    const criaStringVelSistolicaInferiorEsq = () => {
        let string = 'Artéria tiredoideana Inferior Esqeita'
        removeVelSistolicaInferiorEsq()
        if (VelSistolicaInferiorEsqInput != '' || IRInferiorEsqInput != '') {
            if (VelSistolicaInferiorEsqInput != '') {
                string = `${string} ${VelSistolicaInferiorEsqInput}.`
            }
            if (IRInferiorEsqInput != '') {
                string = `${string} ${IRInferiorEsqInput}.`
            }
            setFrasesDopplerParenquima((arr) => [...arr, string]);
        } else {

            removeVelSistolicaInferiorEsq()
        }

    }

    const removeVelSistolicaInferiorEsq = () => {
        FrasesDopplerParenquima.map((e) => {
            if (e.includes("Artéria tiredoideana Inferior Esqeita")) {
                var index = FrasesDopplerParenquima.indexOf(e);
                if (index > -1) {
                    FrasesDopplerParenquima.splice(index, 1);
                    setFrasesDopplerParenquima((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (VelSistolicaInferiorEsqCheckbox) {
            criaStringVelSistolicaInferiorEsq()
            setDisableVelSistolicaInferiorEsqInput(false)
        } else {
            removeVelSistolicaInferiorEsq()
            setDisableVelSistolicaInferiorEsqInput(true)
            setVelSistolicaInferiorEsqInput('')
            setIRInferiorEsqInput('')
        }
    }, [VelSistolicaInferiorEsqCheckbox, VelSistolicaInferiorEsqInput, IRInferiorEsqInput])

    useEffect(() => {
        if (IRInferiorEsqCheckbox) {
            setDisableIRInferiorEsqInput(false)
        } else {
            setDisableIRInferiorEsqInput(true)
            setIRInferiorEsqInput('')
        }
    }, [IRInferiorEsqCheckbox])

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="24px 15px 10px 15px"
            mt="20px"
        >
            <Checkbox
                onChange={() => setDescreverDoppler(!DescreverDoppler)}>
                <TituloNomeExame titulo="Descrever Doppler do parênquima" />
            </Checkbox>
            <RadioGroup
                isDisabled={DisableDescreverDoppler}
                w='auto' onChange={setValue} value={value} padding="10px">
                <Flex
                    gap='30px'>
                    <Radio w='auto' value="1">Não citar</Radio>
                    <Radio w='auto' value="As artérias tireoidianas apresentam curvas espectrais e velocidades sistólicas dentro da normalidade.">
                        Doppler normal
                    </Radio>
                    <Radio w='auto' value="A avaliação do parênquima tireoidiano com Doppler demonstra sinais de hiperfluxo difuso.">
                        Hiperfluxo difuso
                    </Radio>
                    <Radio value="A avaliação do parênquima tireoidiano com Doppler demonstra hipovascularização difusa.">
                        Hipofluxo difuso
                    </Radio>
                </Flex>
            </RadioGroup>
            <Flex gap='30px' >
                <Checkbox isDisabled={DisableDescreverDoppler}
                    onChange={() => setCitarArteriasCheckbox(!CitarArteriasCheckbox)}>
                    Citar as artérias tireoideanas:
                </Checkbox>
                <Checkbox isDisabled={DisableDescreverDoppler}
                    onChange={() => setVelocNormaisCheckbox(!VelocNormaisCheckbox)}>
                    Veloc. normais
                </Checkbox>
                <Checkbox isDisabled={DisableDescreverDoppler}
                    onChange={() => setVelocAumentadasCheckbox(!VelocAumentadasCheckbox)}>
                    Veloc. aumentadas
                </Checkbox>
            </Flex>
            <Box mt='5px' display="flex" flexWrap='wrap' gap='40px' >
                <Stack>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='100%'>
                        <Text alignSelf='center'>A. Tir. Superior D:</Text>
                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setVelSistolicaSuperioreriorDirCheckbox(!VelSistolicaSuperioreriorDirCheckbox)}>
                                Vel.Sistólica
                            </Checkbox>
                            <Input
                                onChange={(e) => setVelSistolicaSuperiorDirInput(e.target.value)}
                                isDisabled={DisableVelSistolicaSuperiorDirInput}
                                value={VelSistolicaSuperiorDirInput}
                                w='60px'
                                placeholder="00"
                            />
                            <Text alignSelf='center'>cm/s</Text>
                        </HStack>
                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setIRSuperiorDirCheckbox(!IRSuperiorDirCheckbox)}
                                ml='40px'>
                                I.R.
                            </Checkbox>
                            <Input
                                isDisabled={DisableIRSuperiorDirInput}
                                value={IRSuperiorDirInput}
                                onChange={(e) => setIRSuperiorDirInput(e.target.value)}
                                w='60px'
                                placeholder="00"
                            />
                        </HStack>
                    </Box>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='100%'>
                        <Text alignSelf='center'>A. Tir. Inferior D:</Text>

                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setVelSistolicaInferiorDirCheckbox(!VelSistolicaInferiorDirCheckbox)}>
                                Vel.Sistólica
                            </Checkbox>
                            <Input
                                onChange={(e) => setVelSistolicaInferiorDirInput(e.target.value)}
                                isDisabled={DisableVelSistolicaInferiorDirInput}
                                value={VelSistolicaInferiorDirInput}
                                w='60px'
                                placeholder="00"
                            />
                            <Text alignSelf='center'>cm/s</Text>
                        </HStack>
                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setIRInferiorDirCheckbox(!IRInferiorDirCheckbox)}
                                ml='40px'>
                                I.R.
                            </Checkbox>
                            <Input
                                isDisabled={DisableIRInferiorDirInput}
                                value={IRInferiorDirInput}
                                onChange={(e) => setIRInferiorDirInput(e.target.value)}
                                w='60px'
                                placeholder="00"
                            />
                        </HStack>
                    </Box>
                </Stack>
                <Stack>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='100%'>
                        <Text alignSelf='center'>A. Tir. Superior E:</Text>
                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setVelSistolicaSuperioreriorEsqCheckbox(!VelSistolicaSuperioreriorEsqCheckbox)}>
                                Vel.Sistólica
                            </Checkbox>
                            <Input
                                onChange={(e) => setVelSistolicaSuperiorEsqInput(e.target.value)}
                                isDisabled={DisableVelSistolicaSuperiorEsqInput}
                                value={VelSistolicaSuperiorEsqInput}
                                w='60px'
                                placeholder="00"
                            />
                            <Text alignSelf='center'>cm/s</Text>
                        </HStack>
                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setIRSuperiorEsqCheckbox(!IRSuperiorEsqCheckbox)}
                                ml='40px'>
                                I.R.
                            </Checkbox>
                            <Input
                                isDisabled={DisableIRSuperiorEsqInput}
                                value={IRSuperiorEsqInput}
                                onChange={(e) => setIRSuperiorEsqInput(e.target.value)}
                                w='60px'
                                placeholder="00"
                            />
                        </HStack>
                    </Box>
                    <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='100%'>
                        <Text alignSelf='center'>A. Tir. Inferior D:</Text>
                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setVelSistolicaInferiorEsqCheckbox(!VelSistolicaInferiorEsqCheckbox)}>
                                Vel.Sistólica
                            </Checkbox>
                            <Input
                                onChange={(e) => setVelSistolicaInferiorEsqInput(e.target.value)}
                                isDisabled={DisableVelSistolicaInferiorEsqInput}
                                value={VelSistolicaInferiorEsqInput}
                                w='60px'
                                placeholder="00"
                            />
                            <Text alignSelf='center'>cm/s</Text>
                        </HStack>
                        <HStack>
                            <Checkbox isDisabled={DisableDescreverDoppler}
                                onChange={() => setIRInferiorEsqCheckbox(!IRInferiorEsqCheckbox)}
                                ml='40px'>
                                I.R.
                            </Checkbox>
                            <Input
                                isDisabled={DisableIRInferiorEsqInput}
                                value={IRInferiorEsqInput}
                                onChange={(e) => setIRInferiorEsqInput(e.target.value)}
                                w='60px'
                                placeholder="00"
                            />
                        </HStack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default DopplerParenquima;