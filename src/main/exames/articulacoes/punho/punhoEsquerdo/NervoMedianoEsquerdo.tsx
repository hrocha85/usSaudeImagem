/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function NervoMedianoEsquerdo() {
    const altura = "100%";
    const largura = "100%";

    let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseNervoMedianoEsquerdo, setFraseNervoMedianoEsquerdo] = useState<any>([]);

    const subExame = 'Nervo ulnar Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseNervoMedianoEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseNervoMedianoEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseNervoMedianoEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseNervoMedianoEsquerdo]);

    const [AreaSeccionalInput, setAreaSeccionalInput] = useState("");

    const [disableAreaSeccionalInput, setdisableAreaSeccionalInput] = useState(false);
    const [disableEspessuraNormal, setdisableEspessuraNormal] = useState(false);
    const [disableEspessuraAumentada, setdisableEspessuraAumentada] = useState(false);

    const [EspessuraNormalCheckbox, setEspessuraNormalCheckbox] = useState(false);
    const [EspessuraAumentadaCheckbox, setEspessuraAumentadaCheckbox] = useState(false);
    const [AreaSeccionalCheckbox, setAreaSeccionalCheckbox] = useState(false);
    const [NervoMedianoBifidoCheckbox, setNervoMedianoBifidoCheckbox] = useState(false);

    const [DisableSelectNervoMedianoBifido, setDisableSelectNervoMedianoBifido] = useState(false);
    const [SelectNervoMedianoBifido, setSelectNervoMedianoBifido] = useState("");



    const criaStringEspessuraNormal = () => {
        var string = "Nervo mediano de espessura, contornos e ecotextura normais";
        removeFraseEspessuraNormal()
        if (EspessuraNormalCheckbox && AreaSeccionalInput !== '') {
            string = `${string}, com área seccional de ${AreaSeccionalInput} mm² (normal até 10 mm²). `
        } else {
            string = `${string}.`
        }
        EspessuraNormalCheckbox ? setFraseNervoMedianoEsquerdo((arr) => [...arr, string]) : removeFraseEspessuraNormal();
    };
    const removeFraseEspessuraNormal = () => {
        fraseNervoMedianoEsquerdo.map((e) => {
            if (e.includes("Nervo mediano de espessura, contornos e ecotextura normais")) {
                var index = fraseNervoMedianoEsquerdo.indexOf(e);
                if (index > -1) {
                    fraseNervoMedianoEsquerdo.splice(index, 1);
                    setFraseNervoMedianoEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        criaStringEspessuraNormal()
    }, [EspessuraNormalCheckbox])

    const criaStringNervoMedianoBifido = (select) => {
        var string = `Nota-se bifidez do nervo mediano (variação anatômica)`
        removeFraseNervoMedianoBifino()
        if (NervoMedianoBifidoCheckbox) {
            if (select !== '') {
                string = `${string}, ${select}.`
            } else {
                string = `${string}.`
            }
            setFraseNervoMedianoEsquerdo((arr) => [...arr, string]);
        } else {
            removeFraseNervoMedianoBifino()
        }
    };

    const removeFraseNervoMedianoBifino = () => {
        fraseNervoMedianoEsquerdo.map((e) => {
            if (e.includes("Nota-se bifidez do nervo mediano (variação anatômica)")) {
                var index = fraseNervoMedianoEsquerdo.indexOf(e);
                if (index > -1) {
                    fraseNervoMedianoEsquerdo.splice(index, 1);
                    setFraseNervoMedianoEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        NervoMedianoBifidoCheckbox ? setDisableSelectNervoMedianoBifido(false) : setDisableSelectNervoMedianoBifido(true)
    }, [NervoMedianoBifidoCheckbox])

    useEffect(() => {
        criaStringNervoMedianoBifido(SelectNervoMedianoBifido)
    }, [SelectNervoMedianoBifido, NervoMedianoBifidoCheckbox])

    const criaStringEspessuraAumentada = () => {
        var string = "Nervo mediano espessado e heterogêneo";
        removeFraseEspessuraAumentada()
        if (EspessuraAumentadaCheckbox && AreaSeccionalInput !== '') {
            string = `${string}, com área seccional de ${AreaSeccionalInput} mm² (normal até 10 mm²). `
        } else {
            string = `${string}.`
        }
        EspessuraAumentadaCheckbox ? setFraseNervoMedianoEsquerdo((arr) => [...arr, string]) : removeFraseEspessuraAumentada();
    };

    const removeFraseEspessuraAumentada = () => {
        fraseNervoMedianoEsquerdo.map((e) => {
            if (e.includes("Nervo mediano espessado e heterogêneo")) {
                var index = fraseNervoMedianoEsquerdo.indexOf(e);
                if (index > -1) {
                    fraseNervoMedianoEsquerdo.splice(index, 1);
                    setFraseNervoMedianoEsquerdo((arr) => [...arr]);
                }
            }
        });
    };
    useEffect(() => {
        criaStringEspessuraAumentada()
    }, [EspessuraAumentadaCheckbox, AreaSeccionalInput])

    useEffect(() => {
        if (EspessuraNormalCheckbox) {
            setdisableEspessuraAumentada(true)
        } else {
            setdisableEspessuraAumentada(false)
        }
    }, [EspessuraNormalCheckbox])
    useEffect(() => {
        if (EspessuraAumentadaCheckbox) {
            setdisableEspessuraNormal(true)
        } else {
            setdisableEspessuraNormal(false)
        }
    }, [EspessuraAumentadaCheckbox])



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
            <TituloNomeExame titulo="Nervo Mediano Esquerdo" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>
                <HStack>
                    <Checkbox
                        isDisabled={disableTudo}
                        onChange={() => {
                            setAreaSeccionalCheckbox(!AreaSeccionalCheckbox);
                        }}
                    >
                        Citar área seccional
                    </Checkbox>
                    <Input
                        isDisabled={disableAreaSeccionalInput}
                        value={AreaSeccionalInput}
                        w="45px"
                        h="30px"
                        padding="5px"
                        maxLength={2}
                        textAlign="center"
                        onChange={(e) => { setAreaSeccionalInput(e.target.value) }}
                    />
                    <Text>mm²</Text>
                </HStack>
                <Checkbox
                    isDisabled={disableTudo || disableEspessuraNormal}
                    onChange={() => {
                        setEspessuraNormalCheckbox(!EspessuraNormalCheckbox);
                    }}
                >
                    Espessura normal
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo || disableEspessuraAumentada}
                    onChange={() => {
                        setEspessuraAumentadaCheckbox(!EspessuraAumentadaCheckbox);
                    }}
                >
                    Espessura aumentada
                </Checkbox>
                <Box display='flex' flexWrap='wrap' gap='5px'>
                    <Checkbox
                        isDisabled={disableTudo}
                        onChange={() => {
                            setNervoMedianoBifidoCheckbox(!NervoMedianoBifidoCheckbox);
                        }}
                    >
                        Nervo mediano bifido
                    </Checkbox>

                    <Select
                        w='150px'
                        isDisabled={DisableSelectNervoMedianoBifido}
                        value={SelectNervoMedianoBifido}
                        onChange={(e) => {
                            setSelectNervoMedianoBifido(e.target.value);
                        }}
                    >
                        <option value="">Não citar interposição de artéria mediana persistente</option>
                        <option value="sem interposição da artéria mediana persistente">Sem interposição da artéria mediana persistente</option>
                        <option value="com interposição da artéria mediana persistente">Com interposição da artéria mediana persistente</option>
                    </Select>
                </Box>
            </Stack >
        </Box >

    );
}
export default NervoMedianoEsquerdo;
