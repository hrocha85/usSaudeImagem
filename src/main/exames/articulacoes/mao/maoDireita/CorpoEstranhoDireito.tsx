/* eslint-disable array-callback-return */

import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function CorpoEstranhoDireito({ Disable }) {
    const altura = "100%";
    const largura = "90%";


    const [CorpoEstranhoMaoDireita, setCorpoEstranhoMaoDireita] = useState<any>([]);

    const subExame = `Corpo estranho mão direita`
    const titulo_exame = 'Articulações'

    useEffect(() => {
        if (Object.keys(CorpoEstranhoMaoDireita).length === 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                CorpoEstranhoMaoDireita
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                CorpoEstranhoMaoDireita
            ).Format_Laudo_Create_Storage();
        }
    }, [CorpoEstranhoMaoDireita]);


    const [CorpoInput, setCorpoInput] = useState("");
    const [disableCorpoInput, setdisableCorpoInput] = useState(true);

    const [CorpoSelect1, setCorpoSelect1] = useState("");
    const [CorpoSelect2, setCorpoSelect2] = useState("");
    const [CorpoSelect3, setCorpoSelect3] = useState("");

    const [CorpoCheckbox, setCorpoCheckbox] = useState(false);

    const removeFraseCorpoEstranho = () => {
        CorpoEstranhoMaoDireita.map((e) => {
            if (e.includes("Imagem linear hiperecogênica situada")) {
                const index = CorpoEstranhoMaoDireita.indexOf(e);

                if (index > -1) {
                    CorpoEstranhoMaoDireita.splice(index, 1);
                    setCorpoEstranhoMaoDireita((arr) => [...arr]);
                }
            }
        });
    };

    const criaStringCorpo = (medida1) => {
        const string = 'Imagem linear hiperecogênica situada'
        let StringFinal;
        removeFraseCorpoEstranho()
        if (CorpoCheckbox) {
            if (medida1 !== "" && CorpoSelect1 !== '' && CorpoSelect2 !== '' && CorpoSelect3 !== '') {
                StringFinal = `${string}  ${CorpoSelect1} na face ${CorpoSelect2} ${CorpoSelect3}, medindo ${medida1} mm.`;
                setCorpoEstranhoMaoDireita((arr) => [...arr, StringFinal]);
            } else {
                removeFraseCorpoEstranho()
            }
        }
    };

    useEffect(() => {
        criaStringCorpo(CorpoInput);
        if (CorpoCheckbox) {
            setdisableCorpoInput(false);
        } else {
            setdisableCorpoInput(true);
            setCorpoInput("");
            setCorpoSelect1("")
            setCorpoSelect2("")
            setCorpoSelect3("")
        }
    }, [CorpoCheckbox, CorpoInput, CorpoSelect1, CorpoSelect2, CorpoSelect3]);

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
            <TituloNomeExame titulo="Corpo estranho" />

            <Box display="flex" flexWrap="wrap">

            </Box>

            <Stack>

                <Box mt='5px' display="flex" flexWrap="wrap" rowGap='5px' columnGap='10px'>

                    <Checkbox
                        onChange={() => {
                            setCorpoCheckbox(!CorpoCheckbox);
                        }}
                    >
                        Corpo estranho
                    </Checkbox>
                    <Select
                        w='150px'
                        isDisabled={disableCorpoInput}
                        value={CorpoSelect1}
                        onChange={(e) => {
                            setCorpoSelect1(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="no subcutâneo">no subcutâneo</option>
                        <option value="na pele">na pele</option>
                    </Select>
                    <Text alignSelf='center'>na face</Text>
                    <Select
                        w='150px'
                        isDisabled={disableCorpoInput}
                        value={CorpoSelect2}
                        onChange={(e) => {
                            setCorpoSelect2(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="dorsal">dorsal</option>
                        <option value="ventral">ventral</option>
                    </Select>
                    <Select
                        w='150px'
                        isDisabled={disableCorpoInput}
                        value={CorpoSelect3}
                        onChange={(e) => {
                            setCorpoSelect3(e.target.value);
                        }}
                    >
                        <option value='' disabled selected>Select</option>
                        <option value="da mão">da mão</option>
                        <option value="do I dedo">do I dedo</option>
                        <option value="do II dedo">do II dedo</option>
                        <option value="do III dedo">do III dedo</option>
                        <option value="do IV dedo">do IV dedo</option>
                        <option value="do V dedo">do V dedo</option>
                    </Select>
                    <Text alignSelf='center'>medindo</Text>
                    <HStack>
                        <Input
                            isDisabled={disableCorpoInput}
                            value={CorpoInput}
                            w="45px"
                            h="30px"
                            padding="5px"

                            textAlign="center"
                            onChange={(e) => { setCorpoInput(e.target.value) }}
                        />
                        <Text>mm</Text>
                    </HStack>
                </Box>
            </Stack >
        </Box >

    );
}
export default CorpoEstranhoDireito;
