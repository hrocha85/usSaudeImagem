/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CotoveloEsquerdoNormalContext } from "../../../../../context/CotoveloEsquerdoNormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function NervoUlnarEsquerdo() {
    const altura = "100%";
    const largura = "95%";

    let { CotoveloEsquerdoLaudoNormal } = useContext(CotoveloEsquerdoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [fraseNervoUlnarEsquerdo, setFraseNervoUlnarEsquerdo] = useState<any>([]);

    const subExame = 'Nervo ulnar Esquerdo'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseNervoUlnarEsquerdo).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseNervoUlnarEsquerdo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseNervoUlnarEsquerdo
            ).Format_Laudo_Create_Storage();
        }
    }, [fraseNervoUlnarEsquerdo]);

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
        var string = "Nervo ulnar de espessura, contornos e ecotextura normais.";
        EspessuraNormalCheckbox ? setFraseNervoUlnarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringEspessuraNormal()
    }, [EspessuraNormalCheckbox])

    const criaStringSofreSubluxacao = () => {
        var string = "Observa-se subluxação do nervo ulnar durante a manobra de flexão do cotovelo.";
        SofreSubluxacaoCheckbox ? setFraseNervoUlnarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringSofreSubluxacao()
    }, [SofreSubluxacaoCheckbox])

    const criaStringSofreLuxacao = () => {
        var string = "Observa-se luxação do nervo ulnar durante a manobra de flexão do cotovelo.";
        SofreLuxacaoCheckbox ? setFraseNervoUlnarEsquerdo((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringSofreLuxacao()
    }, [SofreLuxacaoCheckbox])

        ;



    useEffect(() => {
        if (AreaSeccionalCheckbox) {
            setdisableAreaSeccionalInput(false)
        } else {
            setAreaSeccionalInput("")
            setdisableAreaSeccionalInput(true)
        }
    }, [AreaSeccionalCheckbox])


    const criaStringEspessuraAumentada = () => {
        var string = "Nervo ulnar espessado e heterogêneo";
        removeFraseAreaSeccional()
        if (AreaSeccionalInput !== '') {
            string = `${string}, com área seccional de ${AreaSeccionalInput} mm²`
        } else {
            string = `${string}.`
        }
        EspessuraAumentadaCheckbox ? setFraseNervoUlnarEsquerdo((arr) => [...arr, string]) : removeFraseAreaSeccional()
    };

    useEffect(() => {
        criaStringEspessuraAumentada()
    }, [EspessuraAumentadaCheckbox, AreaSeccionalInput])

    const removeFraseAreaSeccional = () => {
        fraseNervoUlnarEsquerdo.map((e) => {
            if (e.includes("Nervo ulnar espessado e heterogêneo")) {
                var index = fraseNervoUlnarEsquerdo.indexOf(e);
                if (index > -1) {
                    fraseNervoUlnarEsquerdo.splice(index, 1);
                    setFraseNervoUlnarEsquerdo((arr) => [...arr]);
                }
            }
        });
    };

    const removeItemString = (value) => {
        var index = fraseNervoUlnarEsquerdo.indexOf(value);
        if (index > -1) {
            fraseNervoUlnarEsquerdo.splice(index, 1);
            setFraseNervoUlnarEsquerdo((arr) => [...arr]);
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
            <TituloNomeExame titulo="Nervo Ulnar Esquerdo" />

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
export default NervoUlnarEsquerdo;
