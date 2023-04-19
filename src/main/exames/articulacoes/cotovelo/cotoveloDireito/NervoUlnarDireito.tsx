/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function NervoUlnarDireito({ Disable }) {
    const altura = "100%";
    const largura = "100%";

    const [fraseNervoUlnarDireito, setFraseNervoUlnarDireito] = useState<any>([]);
    const [ConclusaoNervoUlnarDireito, setConclusaoNervoUlnarDireito] = useState<any>([]);

    const subExame = 'Nervo ulnar direito'
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(fraseNervoUlnarDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                fraseNervoUlnarDireito,
                ConclusaoNervoUlnarDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                fraseNervoUlnarDireito,
                ConclusaoNervoUlnarDireito
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
        var string = "Nervo ulnar de espessura, contornos e ecotextura normais.";
        EspessuraNormalCheckbox ? setFraseNervoUlnarDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringEspessuraNormal()
    }, [EspessuraNormalCheckbox])

    const criaStringSofreSubluxacao = () => {
        var string = "Observa-se subluxação do nervo ulnar durante a manobra de flexão do cotovelo.";
        SofreSubluxacaoCheckbox ? setFraseNervoUlnarDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringSofreSubluxacao()
    }, [SofreSubluxacaoCheckbox])

    const criaStringSofreLuxacao = () => {
        var string = "Observa-se luxação do nervo ulnar durante a manobra de flexão do cotovelo.";
        SofreLuxacaoCheckbox ? setFraseNervoUlnarDireito((arr) => [...arr, string]) : removeItemString(string);
    };

    useEffect(() => {
        criaStringSofreLuxacao()
    }, [SofreLuxacaoCheckbox])

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
        EspessuraAumentadaCheckbox ? setFraseNervoUlnarDireito((arr) => [...arr, string]) : removeFraseAreaSeccional()

    };

    useEffect(() => {
        criaStringEspessuraAumentada()
    }, [EspessuraAumentadaCheckbox, AreaSeccionalInput])

    const removeFraseAreaSeccional = () => {
        fraseNervoUlnarDireito.map((e) => {
            if (e.includes("Nervo ulnar espessado e heterogêneo")) {
                var index = fraseNervoUlnarDireito.indexOf(e);
                if (index > -1) {
                    fraseNervoUlnarDireito.splice(index, 1);
                    setFraseNervoUlnarDireito((arr) => [...arr]);
                }
            }
        });

    };
    const criaStringConclusao = () => {
        var conclusao;
        removeFraseConclusaoEspessamento()
        if (EspessuraAumentadaCheckbox && (SofreSubluxacaoCheckbox || SofreLuxacaoCheckbox)) {
            conclusao = 'Luxação do nervo ulnar, com espessamento do nervo.'
            setConclusaoNervoUlnarDireito((arr) => [...arr, conclusao]);
        } else if (EspessuraAumentadaCheckbox) {
            conclusao = 'Espessamento do nervo ulnar.'
            setConclusaoNervoUlnarDireito((arr) => [...arr, conclusao]);
        }
    }

    useEffect(() => {
        criaStringConclusao()
    }, [EspessuraAumentadaCheckbox, SofreLuxacaoCheckbox, SofreSubluxacaoCheckbox])

    const removeFraseConclusaoEspessamento = () => {
        ConclusaoNervoUlnarDireito.map((e) => {
            if (e.includes(" do nervo")) {
                var index = ConclusaoNervoUlnarDireito.indexOf(e);
                if (index > -1) {
                    ConclusaoNervoUlnarDireito.splice(index, 1);
                    setConclusaoNervoUlnarDireito((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao_Select(' do nervo')
                }
            }
        });
    };

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
                        isDisabled={Disable}
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
                        
                        textAlign="center"
                        onChange={(e) => { setAreaSeccionalInput(e.target.value) }}
                    />
                    <Text>mm²</Text>
                </HStack>
                <Checkbox
                    isDisabled={Disable || disableEspessuraNormal}
                    onChange={() => {
                        setEspessuraNormalCheckbox(!EspessuraNormalCheckbox);
                    }}
                >
                    Espessura normal
                </Checkbox>
                <Checkbox
                    isDisabled={Disable || disableEspessuraAumentada}
                    onChange={() => {
                        setEspessuraAumentadaCheckbox(!EspessuraAumentadaCheckbox);
                    }}
                >
                    Espessura aumentada
                </Checkbox>
                <Checkbox
                    isDisabled={Disable}
                    onChange={() => {
                        setSofreSubluxacaoCheckbox(!SofreSubluxacaoCheckbox);
                    }}
                >
                    Sofre subluxação durante manobra de flexão do cotovelo
                </Checkbox>
                <Checkbox
                    isDisabled={Disable}
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
