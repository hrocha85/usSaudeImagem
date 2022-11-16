/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function RimDireito() {
    const altura = '100%'
    const largura = '66%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkboxMedidas, setCheckboxMedidas] = useState(false)
    const [disableMedidas, setDisableMedidas] = useState(true)
    const [valueInput1Medida, setValueInput1Medida] = useState('')
    const [valueInput2Medida, setValueInput2Medida] = useState('')
    const [valueParenquima, setValueParenquima] = useState('')

    const [checkboxPresente, setCheckboxPresente] = useState(true)
    const [disablePresente, setDisablePresente] = useState(false)

    const [checkboxAusente, setCheckboxAusente] = useState(false)
    const [disableAusente, setDisableAusente] = useState(false)
    const [disableSelectAusente, setDisableSelectAusente] = useState(true)
    const [valueSelectAusente, setValueSelectAusente] = useState('')

    const [checkboxDimensoes, setCheckboxDimensoes] = useState(false)

    const [checkboxRimFerradura, setCheckboxRimFerradura] = useState(false)
    const [checkboxNefropatiaCronica, setCheckboxNefropatiaCronica] = useState(false)
    const [checkboxRimPelvico, setCheckboxRimPelvico] = useState(false)

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = laudoPrin.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])

        }
        // console.log('posicao', index)
        // console.log("laudosPrin", laudoPrin)
    }

    const CriaStringMedidas = () => {
        removeStringMedidas()
        if (checkboxMedidas) {
            setDisableMedidas(false)
            if (valueInput1Medida !== '' && valueInput2Medida !== '' && valueParenquima !== '') {
                const valorInput = `Rim direito medindo ${valueInput1Medida} x ${valueInput2Medida} mm parênquima de ${valueParenquima} mm `
                setLaudoPrin(arr => [...arr, valorInput])
            }
        } else {
            setDisableMedidas(true)
            removeStringMedidas()
            setValueInput1Medida('')
            setValueInput2Medida('')
            setValueParenquima('')
        }

    }

    const removeStringMedidas = () => {
        laudoPrin.map((e) => {
            if (e.includes("Rim direito medindo")) {
                let index = laudoPrin.indexOf(e);
                //caso o valor enviado exista no array, vai remover com splice e setar array novamente
                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    }

    useEffect(() => {
        CriaStringMedidas()
        removeStringMedidas()
    }, [checkboxMedidas, valueInput1Medida, valueInput2Medida, valueParenquima])

    const criaStringPresente = () => {
        let string = 'Rim Direito Presente'
        if (checkboxPresente) {
            setLaudoPrin((arr) => [...arr, string]);
            setCheckboxPresente(false)
            setDisableAusente(true)
            setDisableSelectAusente(true)
            removeFraseAusente()
        } else {
            setDisableAusente(false)
            removeItemString(string)
        }
    }
    const criaStringDimensoesReduzidas = () => {
        let string = 'Dimensões reduzidas'
        if (checkboxDimensoes) {
            setLaudoPrin((arr) => [...arr, string]);
        } else {
            removeItemString(string)
        }
    }
    useEffect(() => {
        criaStringDimensoesReduzidas()
    }, [checkboxDimensoes])

    const criaStringAusente = () => {
        removeFraseAusente()
        console.log('aqui')
        if (checkboxAusente) {
            console.log(valueSelectAusente)
            setDisableSelectAusente(false)
            setDisablePresente(true)
            if (valueSelectAusente !== '') {
                let string = `Rim direito ausente ${valueSelectAusente}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisablePresente(false)
            setDisableSelectAusente(true)
            setValueSelectAusente('')
        }
    }
    const removeFraseAusente = () => {
        laudoPrin.map((e) => {
            if (e.includes("Rim direito ausente")) {
                let index = laudoPrin.indexOf(e);
                //caso o valor enviado exista no array, vai remover com splice e setar array novamente
                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    }

    useEffect(() => {
        criaStringAusente()
    }, [valueSelectAusente, checkboxAusente])

    const criaStringRimFerradura = () => {
        let string = 'Rim Direito em Ferradura'
        if (checkboxRimFerradura) {
            setLaudoPrin((arr) => [...arr, string]);
        } else {
            removeItemString(string)
        }
    }
    useEffect(() => {
        criaStringRimFerradura()
    }, [checkboxRimFerradura])

    const criaStringNefropatiaCronica = () => {
        let string = 'Rim Direito com nefropatia crônica'
        if (checkboxNefropatiaCronica) {
            setLaudoPrin((arr) => [...arr, string]);
        } else {
            removeItemString(string)
        }
    }
    useEffect(() => {
        criaStringNefropatiaCronica()
    }, [checkboxNefropatiaCronica])

    const criaStringRimPelvico = () => {
        let string = 'Rim Direito pélvico'
        if (checkboxRimPelvico) {
            setLaudoPrin((arr) => [...arr, string]);
        } else {
            removeItemString(string)
        }
    }
    useEffect(() => {
        criaStringRimPelvico()
    }, [checkboxRimPelvico])

    return (

        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding='24px 15px 10px 15px'
            mt='20px'
        >
            <Box
                mb='20px'>
                <TituloNomeExame titulo='Rim Direito' />

                <Box
                    borderBottom='1px'
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Box w='100px' >
                        <Checkbox
                            value='Rim direito presente'
                            disabled={disablePresente}
                            onChange={() => {
                                setCheckboxPresente(true);
                                criaStringPresente()
                            }}
                        >Presente</Checkbox>
                    </Box>

                    <Box w='150px' >
                        <Checkbox
                            isDisabled={disableAusente}
                            onChange={(e) => { setCheckboxAusente(!checkboxAusente) }}
                        >Ausente
                        </Checkbox>
                        <Select
                            isDisabled={disableSelectAusente}
                            onChange={(e) => { setValueSelectAusente(e.target.value) }}
                            value={valueSelectAusente}
                            w='100%'>
                            <option value='' disabled selected>Selecione</option>
                            <option value='Ausência Cirurgica'>Ausência cirúrgica</option>
                            <option value='Interposição Gasosa'>Interposição gasosa</option>
                        </Select>
                    </Box>

                    <Box w='165px'  >
                        <Checkbox
                            id='Medidas'
                            onChange={(e) => { setCheckboxMedidas(!checkboxMedidas) }}
                        >Medidas</Checkbox>
                        <Box>
                            <Input
                                value={valueInput1Medida}
                                onChange={(e) => { setValueInput1Medida(e.target.value) }}
                                isDisabled={disableMedidas}
                                w='35%' placeholder='00' />
                            x
                            <Input
                                value={valueInput2Medida}
                                onChange={(e) => { setValueInput2Medida(e.target.value) }}
                                isDisabled={disableMedidas}
                                w='35%' placeholder='00' />
                            mm
                        </Box>
                        <Input
                            value={valueParenquima}
                            onChange={(e) => { setValueParenquima(e.target.value) }}
                            isDisabled={disableMedidas}
                            mt='5px' w='100%' placeholder='Parênquima(mm)' />
                    </Box>

                    <Box w='200px'  >
                        <Checkbox
                            onChange={(e) => { setCheckboxDimensoes(!checkboxDimensoes) }}
                        >Dimensões	Reduzidas</Checkbox>
                    </Box>
                </Box>
                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Box w='160px' >
                        <Checkbox
                            onChange={(e) => { setCheckboxRimFerradura(!checkboxRimFerradura) }}
                        >Rim em Ferradura</Checkbox>
                    </Box>

                    <Box w='160px' >
                        <Checkbox
                            onChange={(e) => { setCheckboxNefropatiaCronica(!checkboxNefropatiaCronica) }}
                        >Nefropatia Crônica</Checkbox>
                    </Box>

                    <Box w='160px' >
                        <Checkbox
                            onChange={(e) => { setCheckboxRimPelvico(!checkboxRimPelvico) }}
                        >Rim Pélvico</Checkbox>
                    </Box>

                </Box>
            </Box >
        </Box >
    );
}

export default RimDireito;