/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Radio, RadioGroup, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { CotoveloDireitoNormalContext } from "../../../../../context/CotoveloDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";
import { Format_Laudo } from "../../../../component/function_format_laudo";

function NervoUlnarDireito() {
    const altura = "100%";
    const largura = "95%";

    let { CotoveloDireitoLaudoNormal } = useContext(CotoveloDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseNervoUlnarDireito, setFraseNervoUlnarDireito] = useState<any>([]);

    const subExame = 'Nervo ulnar direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseNervoUlnarDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseNervoUlnarDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseNervoUlnarDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseNervoUlnarDireito]);

    const [AreaSeccionalInput, setAreaSeccionalInput] = useState("");

    const [disableAreaSeccionalInput, setdisableAreaSeccionalInput] = useState(false);
    const [disableEspessuraNormal, setdisableEspessuraNormal] = useState(false);
    const [disableEspessuraAumentada, setdisableEspessuraAumentada] = useState(false);

    const [EspessuraNormalCheckbox, setEspessuraNormalCheckbox] = useState(false);
    const [EspessuraAumentadaCheckbox, setEspessuraAumentadaCheckbox] = useState(false);
    const [AreaSeccionalCheckbox, setAreaSeccionalCheckbox] = useState(false);
    const [SofreSubluxacaoCheckbox, setSofreSubluxacaoCheckbox] = useState(false);
    const [SofreLuxacaoCheckbox, setSofreLuxacaoCheckbox] = useState(false);

    const criaStringEspessuraNormal = () => {
        var string = "FALTA";
        if (EspessuraNormalCheckbox) {
            setFraseNervoUlnarDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringEspessuraNormal()
    }, [EspessuraNormalCheckbox])

    const criaStringSofreSubluxacao = () => {
        var string = "FALTA";
        if (SofreSubluxacaoCheckbox) {
            setFraseNervoUlnarDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringSofreSubluxacao()
    }, [SofreSubluxacaoCheckbox])

    const criaStringSofreLuxacao = () => {
        var string = "FALTA";
        if (SofreLuxacaoCheckbox) {
            setFraseNervoUlnarDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringSofreLuxacao()
    }, [SofreLuxacaoCheckbox])

    const criaStringAreaSeccional = (medida) => {
        removeFraseAreaSeccional();
        var string;
        if (medida !== '') {
            string = `frase ${medida} mm`
            setFraseNervoUlnarDireito((arr) => [...arr, string]);
        } else {
            removeFraseAreaSeccional();
        }
    };

    const removeFraseAreaSeccional = () => {
        fraseNervoUlnarDireito.map((e) => {
            if (e.includes("frase ")) {
                var index = fraseNervoUlnarDireito.indexOf(e);
                if (index > -1) {
                    fraseNervoUlnarDireito.splice(index, 1);
                    setFraseNervoUlnarDireito((arr) => [...arr]);
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
            setFraseNervoUlnarDireito((arr) => [...arr, string]);
        } else {
            removeItemString(string);
        }
    };

    useEffect(() => {
        criaStringEspessuraAumentada()
    }, [EspessuraAumentadaCheckbox])

    const removeItemString = (value) => {
        var index = fraseNervoUlnarDireito.indexOf(value);
        if (index > -1) {
            fraseNervoUlnarDireito.splice(index, 1);
            setFraseNervoUlnarDireito((arr) => [...arr]);
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
        CotoveloDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [CotoveloDireitoLaudoNormal])

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
            <TituloNomeExame titulo="Nervo Ulnar direito" />

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
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setSofreSubluxacaoCheckbox(!SofreSubluxacaoCheckbox);
                    }}
                >
                    Sofre subluxação durante manobra de flexão do cotovelo
                </Checkbox>
                <Checkbox
                    isDisabled={disableTudo}
                    onChange={() => {
                        setSofreLuxacaoCheckbox(!SofreLuxacaoCheckbox);
                    }}
                >
                    Sofre luxação durante manobra de flexão do cotovelo
                </Checkbox>
            </Stack >
        </Box >

    );
}
export default NervoUlnarDireito;
