/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Spacer, Stack, Wrap, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";


export default function Individualiza_Linfonodomegalias() {
    const [FrasesLinfonodomegalias, setFrasesLinfonodomegalias] = useState<any>([]);

    const [valueInput01Linfonodomegalia, setValueInput01Linfonodomegalia] = useState("");
    const [valueInput02Linfonodomegalia, setValueInput02Linfonodomegalia] = useState("");
    const [valueInput03Linfonodomegalia, setValueInput03Linfonodomegalia] = useState("");


    const [valueSelect01Linfonodomegalia, setValueSelect01Linfonodomegalia] = useState("");
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

    const removeItemString = (value) => {
        var index = FrasesLinfonodomegalias.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            FrasesLinfonodomegalias.splice(index, 1);
            setFrasesLinfonodomegalias((arr) => [...arr]);
        }
    };

    useEffect(() => {
        if (!DisableOptionsLinfonodomegalia) {
            criaStringLinfonodomegalia()

        } else {
            removeStringLinfonodomegalia()
            setCalcificacoesSelect('')
            setValueSelect01Linfonodomegalia('')
            setValueSelect02Linfonodomegalia('')
            setValueSelect03Linfonodomegalia('')
            setValueSelect04Linfonodomegalia('')
            setValueInput01Linfonodomegalia('')
            setValueInput02Linfonodomegalia('')
            setValueInput03Linfonodomegalia('')
        }

    }, [DisableOptionsLinfonodomegalia, valueInput01Linfonodomegalia, valueInput02Linfonodomegalia, valueInput03Linfonodomegalia,
        valueSelect01Linfonodomegalia, valueSelect02Linfonodomegalia, valueSelect03Linfonodomegalia, valueSelect04Linfonodomegalia])


    const criaStringLinfonodomegalia = () => {
        let string = 'Lindonodomegalias falta'
        removeStringLinfonodomegalia()
        let medida1cm = new Convert_Medida(valueInput01Linfonodomegalia).Convert_Medida()
        let medida2cm = new Convert_Medida(valueInput02Linfonodomegalia).Convert_Medida()
        let medida3cm = new Convert_Medida(valueInput03Linfonodomegalia).Convert_Medida()
        if (valueInput01Linfonodomegalia != '' && valueInput02Linfonodomegalia != '' && valueInput03Linfonodomegalia != '' &&
            valueSelect01Linfonodomegalia != '' && valueSelect02Linfonodomegalia != '' && valueSelect03Linfonodomegalia != '' && valueSelect04Linfonodomegalia != '') {

            string = `${string} mede ${medida1cm}x${medida2cm}x${medida3cm} ${valueSelect01Linfonodomegalia} ${valueSelect02Linfonodomegalia} ${valueSelect03Linfonodomegalia} ${valueSelect04Linfonodomegalia}`
            setFrasesLinfonodomegalias((arr) => [...arr, string]);
        }
    };



    const removeStringLinfonodomegalia = () => {
        FrasesLinfonodomegalias.map((e) => {
            if (e.includes("Lindonodomegalias falta")) {
                var index = FrasesLinfonodomegalias.indexOf(e);
                if (index > -1) {
                    FrasesLinfonodomegalias.splice(index, 1);
                    setFrasesLinfonodomegalias((arr) => [...arr]);
                }
            }
        });
    };

    const removeStringVascularizacao = () => {
        FrasesLinfonodomegalias.map((e) => {
            if (e.includes("Vascularização falta")) {
                var index = FrasesLinfonodomegalias.indexOf(e);
                if (index > -1) {
                    FrasesLinfonodomegalias.splice(index, 1);
                    setFrasesLinfonodomegalias((arr) => [...arr]);
                }
            }
        });
    };
    const criaStringVascularizacao = () => {
        var string = 'Vascularização falta'
        removeStringVascularizacao()
        if (VascularizacaoSelect != '') {
            string = `${string} ${VascularizacaoSelect}`
            setFrasesLinfonodomegalias((arr) => [...arr, string]);
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
        FrasesLinfonodomegalias.map((e) => {
            if (e.includes("Vascularização falta")) {
                var index = FrasesLinfonodomegalias.indexOf(e);
                if (index > -1) {
                    FrasesLinfonodomegalias.splice(index, 1);
                    setFrasesLinfonodomegalias((arr) => [...arr]);
                }
            }
        });
    };
    const criaStringResistividade = () => {
        var string = 'Vascularização falta'
        removeStringResistividade()
        if (InputResistividade != '') {
            string = `${string} ${InputResistividade}`
            setFrasesLinfonodomegalias((arr) => [...arr, string]);
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
            setFrasesLinfonodomegalias((arr) => [...arr, string]);
        } else {
            removeStringCalcificacoes()
        }
    }, [CalcificacoesSelect])
    const removeStringCalcificacoes = () => {
        FrasesLinfonodomegalias.map((e) => {
            if (e.includes("Calcificações falta")) {
                var index = FrasesLinfonodomegalias.indexOf(e);
                if (index > -1) {
                    FrasesLinfonodomegalias.splice(index, 1);
                    setFrasesLinfonodomegalias((arr) => [...arr]);
                }
            }
        });
    };

    const subExame = "Linfonodomegalias isolada";
    const titulo_exame = "Tireóide";

    useEffect(() => {
        if (Object.keys(FrasesLinfonodomegalias).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesLinfonodomegalias
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesLinfonodomegalias
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesLinfonodomegalias]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" padding='5px' h='100%' w='auto'>
            <Checkbox
                onChange={(e) => {
                    setDisableOptionsLinfonodomegalia(!DisableOptionsLinfonodomegalia)
                }}
            >
                Descrever Linfonodomegalia isolada
            </Checkbox>
            <Wrap>
                <HStack>
                    <Text alignSelf='center'>Mede: </Text>
                    <Input
                        p='0'
                        textAlign='center'
                        isDisabled={DisableOptionsLinfonodomegalia}
                        value={valueInput01Linfonodomegalia}
                        onChange={(e) => {
                            setValueInput01Linfonodomegalia(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        p='0'
                        textAlign='center'
                        isDisabled={DisableOptionsLinfonodomegalia}
                        value={valueInput02Linfonodomegalia}
                        onChange={(e) => {
                            setValueInput02Linfonodomegalia(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>x</Text>
                    <Input
                        p='0'
                        textAlign='center'
                        isDisabled={DisableOptionsLinfonodomegalia}
                        value={valueInput03Linfonodomegalia}
                        onChange={(e) => {
                            setValueInput03Linfonodomegalia(e.target.value)
                        }}
                        w="55px"
                        placeholder="00"
                    />
                    <Text alignSelf='center'>cm</Text>
                </HStack>
                <Spacer />
            </Wrap>
            <Wrap>
                <Select
                    w='auto'
                    mt="5px"
                    value={valueSelect01Linfonodomegalia}
                    onChange={(e) => {
                        setValueSelect01Linfonodomegalia(e.target.value)
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
                <Select
                    w='auto'
                    value={valueSelect04Linfonodomegalia}
                    mt="5px"
                    onChange={(e) => {
                        setValueSelect04Linfonodomegalia(e.target.value)
                    }}
                    isDisabled={DisableOptionsLinfonodomegalia}
                >
                    <option value="" disabled selected>
                        Selecione
                    </option>
                    <option value="Contornos regulares">Contornos regulares</option>
                    <option value="Contornos lobulados">Contornos lobulados</option>
                    <option value="Contornos irregulares">Contornos irregulares</option>

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
                            p='0'
                            textAlign='center'
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