/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function NervoMedianoEsquerdo() {
    const altura = "100%";
    const largura = "95%";

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
        var string = "FALTA";
        if (EspessuraNormalCheckbox) {
            setFraseNervoMedianoEsquerdo((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringEspessuraNormal()
    }, [EspessuraNormalCheckbox])

    const criaStringNervoMedianoBifido = (select) => {
        var string;
        removeFraseNervoMedianoBifino()
        if (NervoMedianoBifidoCheckbox) {
            if (select !== '') {
                string = `FALTA ${select}`
                setFraseNervoMedianoEsquerdo((arr) => [...arr, string]);
            }
        } else {
            removeFraseNervoMedianoBifino()
        }
    };

    const removeFraseNervoMedianoBifino = () => {
        fraseNervoMedianoEsquerdo.map((e) => {
            if (e.includes("FALTA")) {
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


    const criaStringAreaSeccional = (medida) => {
        removeFraseAreaSeccional();
        var string;
        if (medida !== '') {
            string = `frase ${medida} mm`
            setFraseNervoMedianoEsquerdo((arr) => [...arr, string]);
        } else {
            removeFraseAreaSeccional();
        }
    };

    const removeFraseAreaSeccional = () => {
        fraseNervoMedianoEsquerdo.map((e) => {
            if (e.includes("frase ")) {
                var index = fraseNervoMedianoEsquerdo.indexOf(e);
                if (index > -1) {
                    fraseNervoMedianoEsquerdo.splice(index, 1);
                    setFraseNervoMedianoEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (AreaSeccionalCheckbox) {
            setdisableAreaSeccionalInput(false)
        } else {
            setAreaSeccionalInput("")
            setdisableAreaSeccionalInput(true)
        }
    }, [AreaSeccionalCheckbox])

    useEffect(() => {
        criaStringAreaSeccional(AreaSeccionalInput)
    }, [AreaSeccionalInput])

    const criaStringEspessuraAumentada = () => {
        var string = "FALTA";
        if (EspessuraAumentadaCheckbox) {
            setFraseNervoMedianoEsquerdo((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringEspessuraAumentada()
    }, [EspessuraAumentadaCheckbox])

    const removeItemString = (value) => {
        var index = fraseNervoMedianoEsquerdo.indexOf(value);
        if (index > -1) {
            fraseNervoMedianoEsquerdo.splice(index, 1);
            setFraseNervoMedianoEsquerdo((arr) => [...arr]);
        }
    };

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
                        <option value="Tendinopatia sem rotura 1">corno anterior</option>
                        <option value="Tendinopatia sem rotura 2">corno posterior</option>
                    </Select>
                </Box>
            </Stack >
        </Box >

    );
}
export default NervoMedianoEsquerdo;
