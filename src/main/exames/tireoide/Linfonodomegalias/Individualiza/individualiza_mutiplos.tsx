/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Spacer, Stack, Wrap, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";


export default function Individualiza_MultiplosLinfonodos() {
    const [FrasesMultiplosLinfonodos, setFrasesMultiplosLinfonodos] = useState<any>([]);

    const [valueInput01LinfonodomegaliaDireita, setValueInput01LinfonodomegaliaDireita] = useState("");
    const [valueInput02LinfonodomegaliaDireita, setValueInput02LinfonodomegaliaDireita] = useState("");
    const [valueInput03Linfonodomegalia, setValueInput03Linfonodomegalia] = useState("");

    const [valueInput01LinfonodomegaliaEsquerda, setValueInput01LinfonodomegaliaEsquerda] = useState("");
    const [valueInput02LinfonodomegaliaEsquerda, setValueInput02LinfonodomegaliaEsquerda] = useState("");
    const [valueSelect01LinfonodomegaliaEsquerda, setValueSelect01LinfonodomegaliaEsquerda] = useState("");

    const [valueSelect01LinfonodomegaliaDireita, setValueSelect01LinfonodomegaliaDireita] = useState("");
    const [valueSelect02Linfonodomegalia, setValueSelect02Linfonodomegalia] = useState("");
    const [valueSelect03Linfonodomegalia, setValueSelect03Linfonodomegalia] = useState("");
    const [valueSelect04Linfonodomegalia, setValueSelect04Linfonodomegalia] = useState("");

    const [DisableInputResistividade, setDisableInputResistividade] = useState(true)
    const [DisableInputVascularizacao, setDisableInputVascularizacao] = useState(true)

    const [Vascularizacao, setVascularizacao] = useState(false);
    const [VascularizacaoSelect, setVascularizacaoSelect] = useState("");
    const [InputResistividade, setInputResistividade] = useState("");

    const [CalcificacoesSelect, setCalcificacoesSelect] = useState("");

    const [DisableOptionsLinfonodomegalia, setDisableOptionsLinfonodomegalia] = useState(true);

    const [IndiceResistividade, setIndiceResistividade] = useState(false);

    useEffect(() => {
        if (!DisableOptionsLinfonodomegalia) {
            criaStringLinfonodomegalia()

        } else {
            removeStringLinfonodomegalia()
            setCalcificacoesSelect('')
            setValueSelect01LinfonodomegaliaDireita('')
            setValueSelect02Linfonodomegalia('')
            setValueSelect03Linfonodomegalia('')
            setValueSelect04Linfonodomegalia('')
            setValueInput01LinfonodomegaliaDireita('')
            setValueInput02LinfonodomegaliaDireita('')
            setValueInput01LinfonodomegaliaEsquerda('')
            setValueInput02LinfonodomegaliaEsquerda('')
            setValueInput03Linfonodomegalia('')
        }

    }, [DisableOptionsLinfonodomegalia, valueInput01LinfonodomegaliaDireita, valueInput02LinfonodomegaliaDireita, valueInput03Linfonodomegalia,
        valueSelect01LinfonodomegaliaDireita, valueSelect02Linfonodomegalia, valueSelect03Linfonodomegalia, valueSelect04Linfonodomegalia])

    const criaStringLinfonodomegalia = () => {
        let string = 'Lindonodomegalias falta'
        removeStringLinfonodomegalia()
        let medida1cm = new Convert_Medida(valueInput01LinfonodomegaliaDireita).Convert_Medida()
        let medida2cm = new Convert_Medida(valueInput02LinfonodomegaliaDireita).Convert_Medida()
        let medida3cm = new Convert_Medida(valueInput03Linfonodomegalia).Convert_Medida()
        if (valueInput01LinfonodomegaliaDireita != '' && valueInput02LinfonodomegaliaDireita != '' && valueInput03Linfonodomegalia != '' &&
            valueSelect01LinfonodomegaliaDireita != '' && valueSelect02Linfonodomegalia != '' && valueSelect03Linfonodomegalia != '' && valueSelect04Linfonodomegalia != '') {
            string = `${string} mede ${medida1cm}x${medida2cm}x${medida3cm} ${valueSelect01LinfonodomegaliaDireita} ${valueSelect02Linfonodomegalia} ${valueSelect03Linfonodomegalia} ${valueSelect04Linfonodomegalia}`
            setFrasesMultiplosLinfonodos((arr) => [...arr, string]);
        }
    };

    const removeStringLinfonodomegalia = () => {
        FrasesMultiplosLinfonodos.map((e) => {
            if (e.includes("Lindonodomegalias falta")) {
                var index = FrasesMultiplosLinfonodos.indexOf(e);
                if (index > -1) {
                    FrasesMultiplosLinfonodos.splice(index, 1);
                    setFrasesMultiplosLinfonodos((arr) => [...arr]);
                }
            }
        });
    };

    const removeStringVascularizacao = () => {
        FrasesMultiplosLinfonodos.map((e) => {
            if (e.includes("Vascularização falta")) {
                var index = FrasesMultiplosLinfonodos.indexOf(e);
                if (index > -1) {
                    FrasesMultiplosLinfonodos.splice(index, 1);
                    setFrasesMultiplosLinfonodos((arr) => [...arr]);
                }
            }
        });
    };
    const criaStringVascularizacao = () => {
        var string = 'Vascularização falta'
        removeStringVascularizacao()
        if (VascularizacaoSelect != '') {
            string = `${string} ${VascularizacaoSelect}`
            setFrasesMultiplosLinfonodos((arr) => [...arr, string]);
        }
    }

    useEffect(() => {
        if (Vascularizacao) {
            criaStringVascularizacao()
            setDisableInputVascularizacao(false)
        } else {
            setVascularizacaoSelect('')
            setDisableInputVascularizacao(true)
            removeStringVascularizacao()
        }
    }, [Vascularizacao, VascularizacaoSelect])

    const removeStringResistividade = () => {
        FrasesMultiplosLinfonodos.map((e) => {
            if (e.includes("Vascularização falta")) {
                var index = FrasesMultiplosLinfonodos.indexOf(e);
                if (index > -1) {
                    FrasesMultiplosLinfonodos.splice(index, 1);
                    setFrasesMultiplosLinfonodos((arr) => [...arr]);
                }
            }
        });
    };
    const criaStringResistividade = () => {
        var string = 'Vascularização falta'
        removeStringResistividade()
        if (InputResistividade != '') {
            string = `${string} ${InputResistividade}`
            setFrasesMultiplosLinfonodos((arr) => [...arr, string]);
        }
    }

    useEffect(() => {
        if (IndiceResistividade) {
            criaStringResistividade()
            setDisableInputResistividade(false)
        } else {
            setInputResistividade('')
            setDisableInputResistividade(true)
            removeStringResistividade()
        }
    }, [IndiceResistividade, InputResistividade])

    useEffect(() => {
        var string = 'Calcificações falta'
        if (CalcificacoesSelect != '') {
            removeStringCalcificacoes()
            string = `${string} ${CalcificacoesSelect}.`
            setFrasesMultiplosLinfonodos((arr) => [...arr, string]);
        } else {
            removeStringCalcificacoes()
        }
    }, [CalcificacoesSelect])
    const removeStringCalcificacoes = () => {
        FrasesMultiplosLinfonodos.map((e) => {
            if (e.includes("Calcificações falta")) {
                var index = FrasesMultiplosLinfonodos.indexOf(e);
                if (index > -1) {
                    FrasesMultiplosLinfonodos.splice(index, 1);
                    setFrasesMultiplosLinfonodos((arr) => [...arr]);
                }
            }
        });
    };

    const subExame = "MultiplosLinfonodos isolada";
    const titulo_exame = "Tireóide";

    useEffect(() => {
        if (Object.keys(FrasesMultiplosLinfonodos).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesMultiplosLinfonodos
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesMultiplosLinfonodos
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesMultiplosLinfonodos]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
            <Checkbox
                onChange={(e) => {
                    setDisableOptionsLinfonodomegalia(!DisableOptionsLinfonodomegalia)
                }}
            >
                Descrever múltiplos linfonodomegalia
            </Checkbox>
            <Wrap>
                <Wrap>
                    <Text alignSelf='center'>Medindo até: </Text>
                    <Input
                        isDisabled={DisableOptionsLinfonodomegalia}
                        value={valueInput01LinfonodomegaliaDireita}
                        onChange={(e) => {
                            setValueInput01LinfonodomegaliaDireita(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        isDisabled={DisableOptionsLinfonodomegalia}
                        value={valueInput02LinfonodomegaliaDireita}
                        onChange={(e) => {
                            setValueInput02LinfonodomegaliaDireita(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>mm á direita</Text>
                    <Select
                        w='auto'
                        mt="5px"
                        value={valueSelect01LinfonodomegaliaDireita}
                        onChange={(e) => {
                            setValueSelect01LinfonodomegaliaDireita(e.target.value)
                        }}
                        isDisabled={DisableOptionsLinfonodomegalia}
                    >
                        <option value="" disabled selected>
                            Localizado no
                        </option>
                        <option value="sítio nodal IA">sítio nodal IA</option>
                        <option value="sítio nodal IB">sítio nodal IB</option>
                        <option value="sítio nodal IIA">sítio nodal IIA</option>
                        <option value="sítio nodal IIB">sítio nodal IIB</option>
                        <option value="sítio nodal III">sítio nodal III</option>
                        <option value="sítio nodal IV">sítio nodal IV</option>
                        <option value="sítio nodal VA">sítio nodal VA</option>
                        <option value="sítio nodal VB">sítio nodal VB</option>
                        <option value="sítio nodal VI">sítio nodal VI</option>
                        <option value="sítio nodal VII">sítio nodal VII</option>
                    </Select>
                </Wrap>
                <Wrap>
                    <Text alignSelf='center'>Medindo até: </Text>
                    <Input
                        isDisabled={DisableOptionsLinfonodomegalia}
                        value={valueInput01LinfonodomegaliaEsquerda}
                        onChange={(e) => {
                            setValueInput01LinfonodomegaliaEsquerda(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        isDisabled={DisableOptionsLinfonodomegalia}
                        value={valueInput02LinfonodomegaliaEsquerda}
                        onChange={(e) => {
                            setValueInput02LinfonodomegaliaEsquerda(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>mm á Esquerda</Text>
                    <Select
                        w='auto'
                        mt="5px"
                        value={valueSelect01LinfonodomegaliaEsquerda}
                        onChange={(e) => {
                            setValueSelect01LinfonodomegaliaEsquerda(e.target.value)
                        }}
                        isDisabled={DisableOptionsLinfonodomegalia}
                    >
                        <option value="" disabled selected>
                            Localizado no
                        </option>
                        <option value="sítio nodal IA">sítio nodal IA</option>
                        <option value="sítio nodal IB">sítio nodal IB</option>
                        <option value="sítio nodal IIA">sítio nodal IIA</option>
                        <option value="sítio nodal IIB">sítio nodal IIB</option>
                        <option value="sítio nodal III">sítio nodal III</option>
                        <option value="sítio nodal IV">sítio nodal IV</option>
                        <option value="sítio nodal VA">sítio nodal VA</option>
                        <option value="sítio nodal VB">sítio nodal VB</option>
                        <option value="sítio nodal VI">sítio nodal VI</option>
                        <option value="sítio nodal VII">sítio nodal VII</option>
                    </Select>
                </Wrap>
            </Wrap>
            <Wrap>

                <Select
                    w='auto'
                    mt="5px"
                    value={valueSelect02Linfonodomegalia}
                    onChange={(e) => {
                        setValueSelect02Linfonodomegalia(e.target.value)
                    }}
                    isDisabled={DisableOptionsLinfonodomegalia}
                >
                    <option value="" disabled selected>
                        Selecione
                    </option>
                    <option value="à esquerda">à esquerda</option>
                    <option value="à direita">à direita</option>
                </Select>
                <Select
                    w='auto'
                    mt="5px"
                    value={valueSelect03Linfonodomegalia}
                    onChange={(e) => {
                        setValueSelect03Linfonodomegalia(e.target.value)
                    }}
                    isDisabled={DisableOptionsLinfonodomegalia}
                >
                    <option value="" disabled selected>
                        Selecione
                    </option>
                    <option value="hipoecogênico">hipoecogênico</option>
                    <option value="hiperecogênico">hiperecogênico</option>
                </Select>
            </Wrap>
            <Wrap>
                <Stack>
                    <HStack>
                        <Checkbox
                            isDisabled={DisableOptionsLinfonodomegalia}
                            onChange={() => setVascularizacao(!Vascularizacao)}
                        >
                            Vascularização
                        </Checkbox>
                        <Select
                            w='auto'
                            mt="5px"
                            value={VascularizacaoSelect}
                            onChange={(e) => {
                                setVascularizacaoSelect(e.target.value)
                            }}
                            isDisabled={DisableInputVascularizacao}
                        >
                            <option value="" disabled selected>
                                Selecione
                            </option>
                            <option value="Exclusivamente periférica">Exclusivamente periférica</option>
                            <option value="predominante periférica">predominante periférica</option>
                            <option value="periférica e central">periférica e central</option>
                            <option value="predomenantemente central">predomenantemente central</option>
                            <option value="indetectável">indetectável</option>
                        </Select>
                    </HStack>
                    <HStack>
                        <Checkbox
                            isDisabled={DisableOptionsLinfonodomegalia}
                            onChange={() => setIndiceResistividade(!IndiceResistividade)}
                        >
                            índice de resistividade:
                        </Checkbox>
                        <Input
                            isDisabled={DisableInputResistividade}
                            onChange={(e) => setInputResistividade(e.target.value)}
                            value={InputResistividade}
                            w='60px'
                            placeholder="00"
                        />
                    </HStack>
                </Stack>

                <Spacer />

                <Stack>
                    <Text alignItems='center'>Calcificações:</Text>
                    <Select
                        w='auto'
                        mt="5px"
                        value={CalcificacoesSelect}
                        onChange={(e) => {
                            setCalcificacoesSelect(e.target.value)
                        }}
                        isDisabled={DisableOptionsLinfonodomegalia}
                    >
                        <option value="" disabled selected>
                            Localizado no
                        </option>
                        <option value="">Não citar</option>
                        <option value="Sem calcificações">Sem calcificações</option>
                        <option value="com calcificações puntiformes centrais">com calcificações puntiformes centrais</option>
                        <option value="com calcificações grosseira">com calcificações grosseira</option>
                        <option value="com calcificação periférica em 'casca de ovo'">com calcificação periférica em 'casca de ovo'</option>
                        <option value="com calcificação periférica incompleta">com calcificação periférica incompleta</option>
                    </Select>
                </Stack>
            </Wrap>
        </Box>

    )
}