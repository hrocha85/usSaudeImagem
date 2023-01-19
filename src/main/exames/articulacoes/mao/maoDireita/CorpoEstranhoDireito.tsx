/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../../context/LuadosContext";
import { MaoDireitoNormalContext } from "../../../../../context/MaoDireitoNormalContext"
import TituloNomeExame from "../../../../component/titulo_nome_exame";

function CorpoEstranhoDireito() {
    const altura = "100%";
    const largura = "90%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    let { MaoDireitoLaudoNormal } = useContext(MaoDireitoNormalContext)
    const [disableTudo, setDisableTudo] = useState(false)

    const [CorpoInput, setCorpoInput] = useState("");
    const [disableCorpoInput, setdisableCorpoInput] = useState(true);

    const [CorpoSelect1, setCorpoSelect1] = useState("");
    const [CorpoSelect2, setCorpoSelect2] = useState("");
    const [CorpoSelect3, setCorpoSelect3] = useState("");

    const [CorpoCheckbox, setCorpoCheckbox] = useState(false);

    const removeItemString = (value) => {
        var index = laudoPrin.indexOf(value);
        if (index > -1) {
            laudoPrin.splice(index, 1);
            setLaudoPrin((arr) => [...arr]);
        }
    };

    const criaStringCorpo = (medida1) => {
        var string = 'Cisto e  medindo'
        var StringFinal;
        removeItemString(string)
        if (CorpoCheckbox) {
            if (medida1 !== "" && CorpoSelect1 !== '' && CorpoSelect2 !== '' && CorpoSelect3 !== '') {
                StringFinal = `${string} ${medida1} mm, ${CorpoSelect1} ${CorpoSelect2} ${CorpoSelect3}`;
                setLaudoPrin((arr) => [...arr, StringFinal]);
            } else {
                removeItemString(string)
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


    useEffect(() => {
        MaoDireitoLaudoNormal ? setDisableTudo(true) : setDisableTudo(false)

    }, [MaoDireitoLaudoNormal])

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
                        isDisabled={disableTudo}
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
                        <option value="I">I</option>
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
                        <option value="Da falange distal">Da falange distal</option>
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
                        <option value="Da falange distal">Da falange distal</option>
                    </Select>
                    <Text alignSelf='center'>da mão</Text>
                    <Text alignSelf='center'>medindo</Text>
                    <HStack>
                        <Input
                            isDisabled={disableCorpoInput}
                            value={CorpoInput}
                            w="45px"
                            h="30px"
                            padding="5px"
                            maxLength={2}
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
