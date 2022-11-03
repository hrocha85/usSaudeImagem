/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text, } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import { NormalContext } from "../../../../context/NormalContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Colecao() {
    const altura = "100%";
    const largura = "95%";

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    const { laudoNormal } = useContext(NormalContext);

    const [inputLocalColecao, setInputLocalColecao] = useState('')
    const [LocalColecaoCheckbox, setCheckboxLocalColecao] = useState(false)
    const [disableInputLocalColecao, setDisableInputLocalColecao] = useState(true)

    const [ecogenicidadeColecaoSelect, setEcogenicidadeColecaoSelect] = useState("");
    const [planoColecaoSelect, setPlanoColecaoSelect] = useState("");
    const [medida1Colecao, setMedida1Colecao] = useState('')
    const [medida2Colecao, setMedida2Colecao] = useState('')
    const [medida3Colecao, setMedida3Colecao] = useState('')
    const [MedidaDistanciaPele, setMedidaDistanciaPele] = useState('')


    const [disableColecao, setDisableColecao] = useState(false)

    useEffect(() => {
        laudoNormal ? setDisableColecao(true) : setDisableColecao(false)
    })

    const criaStringLocalColecao = (local, colecao, plano, medida1, medida2, medida3, MedidaDistanciaPele) => {
        removeLocalColecao()
        if (local !== '') {
            let string = `Nota-se na alteração palpável da região, ${local}, coleção ${colecao}, no plano ${plano},
      medindo ${medida1} x ${medida2} x ${medida3} mm, distando ${MedidaDistanciaPele} mm da pele`
            setLaudoPrin((arr) => [...arr, string])
        }
    }

    const removeLocalColecao = () => {
        laudoPrin.map((e) => {
            if (e.includes("Nota-se na alteração palpável ")) {
                let index = laudoPrin.indexOf(e);
                //caso o valor enviado exista no array, vai remover com splice e setar array novamente
                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        LocalColecaoCheckbox ? setDisableInputLocalColecao(false) :
            setDisableInputLocalColecao(true); removeLocalColecao(); setInputLocalColecao('');
        setEcogenicidadeColecaoSelect(''); setPlanoColecaoSelect(''); setMedida1Colecao(''); setMedida2Colecao(''); setMedida3Colecao('')
    }, [LocalColecaoCheckbox])


    useEffect(() => {
        criaStringLocalColecao(inputLocalColecao, ecogenicidadeColecaoSelect, planoColecaoSelect, medida1Colecao, medida2Colecao, medida3Colecao, MedidaDistanciaPele)
    }, [inputLocalColecao, ecogenicidadeColecaoSelect, planoColecaoSelect, medida1Colecao, medida2Colecao, medida3Colecao, MedidaDistanciaPele])

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="15px 15px 20px 15px"
            mt="10px"
        >
            <Text>Parede Abdominal</Text>
            <TituloNomeExame titulo="Coleção" />

            <Box gap="15px" display="flex" flexWrap="wrap">


                <Stack
                    w='100%'>
                    <HStack >
                        <Checkbox
                            isDisabled={disableColecao}
                            onChange={(e) => setCheckboxLocalColecao(!LocalColecaoCheckbox)}
                            mr='30px'
                        >Coleção</Checkbox>
                        <Text>Local</Text>
                        <Input
                            w="200px"
                            isDisabled={disableInputLocalColecao}
                            h="30px"
                            value={inputLocalColecao}
                            padding="5px"
                            textAlign="center"
                            onChange={(e) => { setInputLocalColecao(e.target.value) }}
                        />

                    </HStack>
                    <Box
                        display='flex'
                        flexWrap="wrap"
                        gap='10px'
                    >
                        <Select
                            isDisabled={disableInputLocalColecao}
                            w='200px'
                            value={ecogenicidadeColecaoSelect}
                            onChange={(e) => { setEcogenicidadeColecaoSelect(e.target.value) }}
                        >
                            <option value='' disabled selected> </option>
                            <option value="anecóica">anecóica</option>
                            <option value="cística-espessa">cística-espessa</option>
                            <option value="densa">densa</option>
                            <option value="heterogênea com traves">heterogênea com traves</option>

                        </Select>
                        <Select
                            isDisabled={disableInputLocalColecao}
                            w='200px'
                            value={planoColecaoSelect}
                            onChange={(e) => { setPlanoColecaoSelect(e.target.value) }}
                        >
                            <option value='' disabled selected>no plano</option>
                            <option value="subcutâneo">Subcutâneo</option>
                            <option value="cutâneo">Cutâneo</option>
                            <option value="muscular">Muscular</option>
                            <option value="aponeurótico">Aponeurótico</option>
                        </Select>

                        <Box
                            display='flex'>
                            <Text>Medindo</Text>
                            <Input
                                isDisabled={disableInputLocalColecao}
                                w="35px"
                                h="30px"
                                value={medida1Colecao}
                                padding="5px"
                                maxLength={2}
                                textAlign="center"
                                onChange={(e) => { setMedida1Colecao(e.target.value) }}
                            />
                            <Text>x</Text>
                            <Input
                                isDisabled={disableInputLocalColecao}
                                w="35px"
                                h="30px"
                                value={medida2Colecao}
                                padding="5px"
                                maxLength={2}
                                textAlign="center"
                                onChange={(e) => { setMedida2Colecao(e.target.value) }}
                            />
                            <Text>x</Text>
                            <Input
                                isDisabled={disableInputLocalColecao}
                                w="35px"
                                h="30px"
                                value={medida3Colecao}
                                padding="5px"
                                maxLength={2}
                                textAlign="center"
                                onChange={(e) => { setMedida3Colecao(e.target.value) }}
                            />
                            <Text>mm</Text>
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        flexWrap="wrap"
                        gap='10px'
                    >
                        <Text>Distando</Text>
                        <Input
                            isDisabled={disableInputLocalColecao}
                            w="35px"
                            h="30px"
                            value={MedidaDistanciaPele}
                            padding="5px"
                            maxLength={2}
                            textAlign="center"
                            onChange={(e) => { setMedidaDistanciaPele(e.target.value) }}
                        />
                        <Text>mm da pele</Text>
                    </Box>
                </Stack>
            </Box >

        </Box >
    );
}
export default Colecao;
