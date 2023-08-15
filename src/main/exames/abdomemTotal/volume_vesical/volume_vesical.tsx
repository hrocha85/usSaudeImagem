/* eslint-disable eqeqeq */

import { Box, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Convert_Medida } from "../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Volume_vesical({ Disable }) {
    const altura = "100%";
    const largura = "66%";

    const [VolumeVesical, setVolumeVesical] = useState<any>([]);
    const [ConclusoesVolumeVesical, setConclusoesVolumeVesical] = useState<any>([]);

    const [VolumePreMiccionalInput1, setVolumePreMiccionalInput1] = useState('')
    const [VolumePreMiccionalInput2, setVolumePreMiccionalInput2] = useState('')
    const [VolumePreMiccionalInput3, setVolumePreMiccionalInput3] = useState('')
    const [VolumePreMiccionalInput4, setVolumePreMiccionalInput4] = useState<any>(0)
    const [NaoCitarVolume, setNaoCitarVolume] = useState(false)

    const [ResiduoInput1, setResiduoInput1] = useState('')
    const [ResiduoInput2, setResiduoInput2] = useState('')
    const [ResiduoInput3, setResiduoInput3] = useState('')
    const [ResiduoInput4, setResiduoInput4] = useState<any>(0)
    const [NaoCitarResiduo, setNaoCitarResiduo] = useState(false)

    const criaStringVolumePreMiccional = (dados1, dados2, dados3) => {
        let string = 'Volume vesical pré-miccional estimado em'
        removeFraseVolumePreMiccional()
        const volume = (parseInt(dados1) + parseInt(dados2) + parseInt(dados3)) / 1000
        setVolumePreMiccionalInput4(volume)
        if (!NaoCitarVolume) {
            if (dados1 != '' && dados2 != '' && dados3 != '' && VolumePreMiccionalInput4 != '') {
                string = `${string} ${VolumePreMiccionalInput4} ml`
                setVolumeVesical((arr) => [...arr, string])
            } else if (dados1 != '' && dados2 != '' && dados3 != '') {
                string = `${string} ${dados1}x${dados2}x${dados3} cm`
                setVolumeVesical((arr) => [...arr, string])
            }
        } else {
            removeFraseVolumePreMiccional()
        }
    }

    const removeFraseVolumePreMiccional = () => {
        VolumeVesical.map((e) => {
            if (e.includes("Volume vesical pré-miccional estimado em")) {
                const index = VolumeVesical.indexOf(e);
                if (index > -1) {
                    VolumeVesical.splice(index, 1);
                    setVolumeVesical((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (VolumePreMiccionalInput1 != '' && VolumePreMiccionalInput2 != '' && VolumePreMiccionalInput3 != '') {
            criaStringVolumePreMiccional(VolumePreMiccionalInput1, VolumePreMiccionalInput2, VolumePreMiccionalInput3)
        } else {
            removeFraseVolumePreMiccional()
        }

    }, [VolumePreMiccionalInput1, VolumePreMiccionalInput2, VolumePreMiccionalInput3, VolumePreMiccionalInput4, NaoCitarVolume])

    const criaStringResiduo = (dados1, dados2, dados3) => {
        let string = 'Volume residuo estimado em'
        removeFraseResiduo()
        const volume = (parseInt(dados1) + parseInt(dados2) + parseInt(dados3)) / 1000
        setResiduoInput4(volume)
        if (!NaoCitarResiduo) {
            if (dados1 != '' && dados2 != '' && dados3 != '' && ResiduoInput4 != '') {
                string = `${string} ${ResiduoInput4} ml`
                setVolumeVesical((arr) => [...arr, string])
            } else if (dados1 != '' && dados2 != '' && dados3 != '') {
                string = `${string}`
                setVolumeVesical((arr) => [...arr, string])
            }
        } else {
            removeFraseResiduo()
        }
    }

    const removeFraseResiduo = () => {
        VolumeVesical.map((e) => {
            if (e.includes("Volume residuo estimado em")) {
                const index = VolumeVesical.indexOf(e);
                if (index > -1) {
                    VolumeVesical.splice(index, 1);
                    setVolumeVesical((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (ResiduoInput1 != '' && ResiduoInput2 != '' && ResiduoInput3 != '') {
            criaStringResiduo(ResiduoInput1, ResiduoInput2, ResiduoInput3)
        } else {
            removeFraseResiduo()
        }

    }, [ResiduoInput1, ResiduoInput2, ResiduoInput3, ResiduoInput4, NaoCitarResiduo])


    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        const index = VolumeVesical.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            VolumeVesical.splice(index, 1);
            setVolumeVesical((arr) => [...arr]);
        }
        // console.log('posicao', index)
        // console.log("laudosPrin", laudoPrin)
    };

    const subExame = "Volume vesical pré e pós miccional (Resíduo)";
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(VolumeVesical).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                VolumeVesical,
                ConclusoesVolumeVesical
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                VolumeVesical,
                ConclusoesVolumeVesical
            ).Format_Laudo_Create_Storage();
        }
    }, [VolumeVesical]);
    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="24px 15px 20px 15px"
            mt="15px"
        >

            <TituloNomeExame titulo="Volume vesical pré e pós miccional (Resíduo)" />

            <Box mb="20px" gap="10px" display="flex" flexWrap="wrap" mt="20px">


                <Box display='flex' flexWrap='wrap' gap='10px'>
                    <Box>
                        <Text>Vol. pré-miccional:</Text>
                        <HStack>
                            <Input
                                p='0'
                                textAlign='center'
                                isDisabled={Disable}
                                w="60px"
                                value={VolumePreMiccionalInput1}
                                onChange={(e) => {
                                    setVolumePreMiccionalInput1(e.target.value);
                                }}
                                placeholder="0"
                            />
                            <Text>x</Text>
                            <Input
                                p='0'
                                textAlign='center'
                                isDisabled={Disable}
                                w="60px"
                                value={VolumePreMiccionalInput2}
                                onChange={(e) => {
                                    setVolumePreMiccionalInput2(e.target.value);
                                }}
                                placeholder="0"
                            />
                            <Text>x</Text>
                            <Input
                                p='0'
                                textAlign='center'
                                isDisabled={Disable}
                                w="60px"
                                value={VolumePreMiccionalInput3}
                                onChange={(e) => {
                                    setVolumePreMiccionalInput3(e.target.value);
                                }}
                                placeholder="0"
                            />
                            <Text>cm = </Text>
                            <Input
                                p='0'
                                textAlign='center'
                                isDisabled={Disable}
                                w="60px"
                                value={VolumePreMiccionalInput4}
                                onChange={(e) => {
                                    setVolumePreMiccionalInput4(e.target.value);
                                }}
                                placeholder="0"
                            />
                            <Text>ml</Text>
                            <Checkbox
                                isDisabled={Disable}
                                onChange={() => setNaoCitarVolume(!NaoCitarVolume)}>
                                Não citar
                            </Checkbox>
                        </HStack>
                    </Box>
                </Box>
                <Box>
                    <Text>Resíduo:</Text>
                    <HStack>
                        <Input
                            p='0'
                            textAlign='center'
                            isDisabled={Disable}
                            w="60px"
                            value={ResiduoInput1}
                            onChange={(e) => {
                                setResiduoInput1(e.target.value);
                            }}
                            placeholder="0"
                        />
                        <Text>x</Text>
                        <Input
                            p='0'
                            textAlign='center'
                            isDisabled={Disable}
                            w="60px"
                            value={ResiduoInput2}
                            onChange={(e) => {
                                setResiduoInput2(e.target.value);
                            }}
                            placeholder="0"
                        />
                        <Text>x</Text>
                        <Input
                            p='0'
                            textAlign='center'
                            isDisabled={Disable}
                            w="60px"
                            value={ResiduoInput3}
                            onChange={(e) => {
                                setResiduoInput3(e.target.value);
                            }}
                            placeholder="0"
                        />
                        <Text>cm = </Text>
                        <Input
                            p='0'
                            textAlign='center'
                            isDisabled={Disable}
                            w="60px"
                            value={ResiduoInput4}
                            onChange={(e) => {
                                setResiduoInput4(e.target.value);
                            }}
                            placeholder="0"
                        />
                        <Text>ml</Text>
                        <Checkbox
                            isDisabled={Disable}
                            onChange={() => setNaoCitarResiduo(!NaoCitarResiduo)}>
                            Não citar
                        </Checkbox>
                    </HStack>
                </Box>
            </Box>

        </Box >
    );
}

export default Volume_vesical;
