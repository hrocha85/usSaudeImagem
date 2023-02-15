/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function AlcasIntestinais({ Disable }) {
    const altura = "100%";
    const largura = "66%";

    const [CistosDireito, setCistosDireito] = useState<any>([]);
    const [ConclusoesCistosDireito, setConclusoesCistosDireito] = useState<any>([]);

    const subExame = `Alças Intestinais`
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(CistosDireito).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                CistosDireito,
                ConclusoesCistosDireito
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                CistosDireito,
                ConclusoesCistosDireito
            ).Format_Laudo_Create_Storage();
        }
    }, [CistosDireito]);



    const [ApendiciteCheckbox, setApendiciteCheckbox] = useState(false);
    const [ApendiciteInput, setApendiciteInput] = useState('');
    const [disableApendiciteInput, setdisableApendiciteInput] = useState(true);

    const [ColecaoApendiciteCheckbox, setColecaoApendiciteCheckbox] = useState(false);

    const [disableDiverticuliteInput, setdisableDiverticuliteInput] = useState(true);

    const [DiverticuliteSelect1, setDiverticuliteSelect1] = useState("");

    const [DiverticuliteCheckbox, setDiverticuliteCheckbox] = useState(false);
    const [ColecaoDiverticuliteCheckbox, setColecaoDiverticuliteCheckbox] = useState(false);



    const criaStringApendicite = (dados) => {
        var StringFinal;
        var medida1 = new Convert_Medida(dados).Convert_Medida()

        removeFraseApendicite()
        if (dados != '' && ColecaoApendiciteCheckbox) {
            StringFinal = `Imagem tubuliforme em fundo cego na fossa ilíaca direita, não compressível, com ${medida1} cm,
            de diâmetro, associada a aumento da ecogenicidade da gordura adjacente e acompanhada de pequena coleção líquida.`;
            setCistosDireito((arr) => [...arr, StringFinal]);

        } else if (dados !== '') {
            StringFinal = `Imagem tubuliforme em fundo cego na fossa ilíaca direita, não compressível, com ${medida1} cm,
            de diâmetro, associada a aumento da ecogenicidade da gordura adjacente.`;
            setCistosDireito((arr) => [...arr, StringFinal]);
        }
    };
    const removeFraseApendicite = () => {
        CistosDireito.map((e) => {
            if (e.includes(`Imagem tubuliforme em fundo cego na fossa ilíaca direita,`)) {
                var index = CistosDireito.indexOf(e);

                if (index > -1) {
                    CistosDireito.splice(index, 1);
                    setCistosDireito((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringDiverticulite = () => {
        removeFraseDiverticulite()

        var StringFinal;
        if (DiverticuliteSelect1 !== '' && ColecaoDiverticuliteCheckbox) {
            StringFinal = `Presença de imagem diverticular com espessamento parietal em topografia do
             ${DiverticuliteSelect1}, associada a aumento da ecogenicidade da gordura adjacente e acompanhada de pequena coleção líquida.`;
            setCistosDireito((arr) => [...arr, StringFinal]);
        } else if (DiverticuliteSelect1 != '') {
            StringFinal = `Presença de imagem diverticular com espessamento parietal em topografia do ${DiverticuliteSelect1}, associada a aumento da ecogenicidade da gordura adjacente.`;
            setCistosDireito((arr) => [...arr, StringFinal]);
        }
    };
    const removeFraseDiverticulite = () => {
        CistosDireito.map((e) => {
            if (e.includes(`Presença de imagem diverticular com espessamento parietal em topografia do`)) {
                var index = CistosDireito.indexOf(e);

                if (index > -1) {
                    CistosDireito.splice(index, 1);
                    setCistosDireito((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (DiverticuliteCheckbox) {
            criaStringDiverticulite()
            setdisableDiverticuliteInput(false);
        } else {
            setdisableDiverticuliteInput(true);
            removeFraseDiverticulite()
            setDiverticuliteSelect1("")
        }


    }, [DiverticuliteCheckbox, DiverticuliteSelect1, ColecaoDiverticuliteCheckbox]);

    useEffect(() => {
        if (ApendiciteCheckbox) {
            criaStringApendicite(ApendiciteInput)
            setdisableApendiciteInput(false);
        } else {
            removeFraseApendicite()
            setdisableApendiciteInput(true);
            setApendiciteInput("");

        }
    }, [ApendiciteCheckbox, ApendiciteInput, ColecaoApendiciteCheckbox]);

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
            <TituloNomeExame titulo="Alças Intestinais" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>

                <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

                    <Checkbox
                        isDisabled={Disable}
                        onChange={() => {
                            setApendiciteCheckbox(!ApendiciteCheckbox);
                        }}
                    >
                        Apendicite
                    </Checkbox>

                    <Text alignSelf='center'>calibre de</Text>

                    <Input
                        isDisabled={disableApendiciteInput}
                        value={ApendiciteInput}
                        w="45px"
                        h="30px"
                        padding="5px"
                        maxLength={2}
                        textAlign="center"
                        onChange={(e) => { setApendiciteInput(e.target.value) }}
                    />
                    <Text alignSelf='center'>mm</Text>

                    <Checkbox
                        isDisabled={disableApendiciteInput}
                        onChange={() => {
                            setColecaoApendiciteCheckbox(!ColecaoApendiciteCheckbox);
                        }}
                    >
                        coleção
                    </Checkbox>
                </Box>
            </Stack >
            <Stack>

                <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

                    <Checkbox
                        isDisabled={Disable}
                        onChange={() => {
                            setDiverticuliteCheckbox(!DiverticuliteCheckbox);
                        }}
                    >
                        Diverticulite
                    </Checkbox>
                    <Select
                        w='150px'
                        isDisabled={disableDiverticuliteInput}
                        value={DiverticuliteSelect1}
                        onChange={(e) => {
                            setDiverticuliteSelect1(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="sigmoide">Sigmoide</option>
                        <option value="cólon descendente">Cólon descendente</option>

                    </Select>

                    <Checkbox
                        isDisabled={disableDiverticuliteInput}
                        onChange={() => {
                            setColecaoDiverticuliteCheckbox(!ColecaoDiverticuliteCheckbox);
                        }}
                    >
                        Coleção
                    </Checkbox>

                </Box>
            </Stack >
        </Box >

    );
}
export default AlcasIntestinais;
