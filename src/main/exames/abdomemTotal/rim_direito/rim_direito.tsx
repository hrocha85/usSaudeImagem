import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useState } from "react";


function RimDireito() {
    const altura = '100%'
    const largura = '66%'

    let selectAusente = document.querySelector('#SelectAusente') as HTMLInputElement

    let inputPrimeiraMedida = document.querySelector('#InputPrimeiraMedida') as HTMLInputElement
    let inputSegundaMedida = document.querySelector('#InputSegundaMedida') as HTMLInputElement
    let inputParenquima = document.querySelector('#InputParenquima') as HTMLInputElement

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [valueInput1Medida, setValueInput1Medida] = useState('')
    const [valueInput2Medida, setValueInput2Medida] = useState('')
    const [valueFraseMedida, setValueFraseMedida] = useState('')

    const [checkValuePresente, setCheckvaluePresente] = useState({
        presente: false,
    })

    const [checkValueAusente, setCheckvalueAusente] = useState({
        ausente: false,
        SelectAusente: true,
    })
    const [checkValueMedidas, setCheckvalueMedidas] = useState({
        inputMedida: true,
    })

    const criarString = (value, valueId?, valueInput?) => {
        //console.log("Valor cria string = ", value);
        //arr => [...arr] captura os dados que já estavam e os mantem no array
        setLaudoPrin(arr => [...arr, value])
        //console.log("criaString = ", laudoPrin)

    }

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

    const CriaStringMedidas = (value) => {
        let dadoInputParenquima = value
        const valorInput = 'Rim Direito com ' + valueInput1Medida + ' x ' + valueInput2Medida + 'mm parênquima de ' + dadoInputParenquima + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setValueFraseMedida(valorInput)
    }

    const removeStringMedida = () => {
        const index = laudoPrin.indexOf(valueFraseMedida)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputPrimeiraMedida.value = ''
        inputSegundaMedida.value = ''
        inputParenquima.value = ''
    }


    const verificaChecked = (value) => {
        switch (value.id) {
            case 'Presente':
                if (value.checked === true) {
                    criarString(value.value)
                    setCheckvalueAusente({
                        ausente: true,
                        SelectAusente: true
                    })
                } else {
                    setCheckvalueAusente({
                        ausente: false,
                        SelectAusente: true
                    })
                    removeItemString(value.value)
                }
                break
            case 'Ausente':
                if (value.checked === true) {
                    setCheckvaluePresente({
                        presente: true,
                    })
                    setCheckvalueAusente({
                        ausente: false,
                        SelectAusente: false
                    })
                } else {
                    setCheckvaluePresente({
                        presente: false,
                    })
                    setCheckvalueAusente({
                        ausente: false,
                        SelectAusente: true
                    })
                    removeItemString('Ausência Cirurgica')
                    removeItemString('Interposição Gasosa')
                    selectAusente.value = ''
                }
                break
            case 'SelectAusente':
                if (value.value === 'Ausência Cirurgica') {
                    criarString(value.value)
                    removeItemString('Interposição Gasosa')
                } else {
                    criarString(value.value)
                    removeItemString('Ausência Cirurgica')

                }
                break
            case 'Medidas':
                if (value.checked === true) {
                    setCheckvalueMedidas({
                        inputMedida: false
                    })
                } else {
                    setCheckvalueMedidas({
                        inputMedida: true
                    })
                    removeStringMedida()
                }
                break
            case 'InputPrimeiraMedida':
                setValueInput1Medida(value.value)
                break
            case 'InputSegundaMedida':
                setValueInput2Medida(value.value)
                break
            case 'InputParenquima':
                CriaStringMedidas(value.value)
                break
            case 'DimensoesReduzidas':
                if (value.checked === true) {
                    criarString(value.value)
                } else {
                    removeItemString(value.value)
                }
                break
            case 'RimFerradura':
                if (value.checked === true) {
                    criarString(value.value)
                } else {
                    removeItemString(value.value)
                }
                break
            case 'NefropatiaCronica':
                if (value.checked === true) {
                    criarString(value.value)
                } else {
                    removeItemString(value.value)
                }
                break
            case 'RimPelvico':
                if (value.checked === true) {
                    criarString(value.value)
                } else {
                    removeItemString(value.value)
                }
                break

        }
    }

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
                borderBottom='1px'
                mb='20px'>
                <TituloNomeExame titulo='Rim Direito' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Box w='100px' >
                        <Checkbox
                            id='Presente'
                            value='Rim direito presente'
                            disabled={checkValuePresente.presente}
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Presente</Checkbox>
                    </Box>

                    <Box w='150px' >
                        <Checkbox
                            id='Ausente'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={checkValueAusente.ausente}
                        >Ausente
                        </Checkbox>
                        <Select
                            id='SelectAusente'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={checkValueAusente.SelectAusente}
                            w='100%'>
                            <option value='' disabled selected>Selecione</option>
                            <option value='Ausência Cirurgica'>Ausência cirúrgica</option>
                            <option value='Interposição Gasosa'>Interposição gasosa</option>
                        </Select>
                    </Box>

                    <Box w='165px'  >
                        <Checkbox
                            id='Medidas'
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Medidas</Checkbox>
                        <Box>
                            <Input
                                id='InputPrimeiraMedida'
                                onBlur={(e) => { verificaChecked(e.target) }}
                                disabled={checkValueMedidas.inputMedida}
                                w='35%' placeholder='00' />
                            x
                            <Input
                                id='InputSegundaMedida'
                                onBlur={(e) => { verificaChecked(e.target) }}
                                disabled={checkValueMedidas.inputMedida}
                                w='35%' placeholder='00' />
                            mm
                        </Box>
                        <Input
                            id='InputParenquima'
                            onBlur={(e) => { verificaChecked(e.target) }}
                            disabled={checkValueMedidas.inputMedida}
                            mt='5px' w='100%' placeholder='Parênquima(mm)' />
                    </Box>

                    <Box w='200px'  >
                        <Checkbox
                            id='DimensoesReduzidas'
                            onChange={(e) => { verificaChecked(e.target) }}
                            value='Dimensões Reduzidas'
                        >Dimensões	Reduzidas</Checkbox>
                    </Box>
                </Box>
            </Box >
            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >

                <Box w='160px' >
                    <Checkbox
                        id='RimFerradura'
                        onChange={(e) => { verificaChecked(e.target) }}
                        value='Rim em Ferradura'
                    >Rim em Ferradura</Checkbox>
                </Box>

                <Box w='160px' >
                    <Checkbox
                        id='NefropatiaCronica'
                        onChange={(e) => { verificaChecked(e.target) }}
                        value='Neofrapatia Cronica'
                    >Nefropatia Crônica</Checkbox>
                </Box>

                <Box w='160px' >
                    <Checkbox
                        id='RimPelvico'
                        onChange={(e) => { verificaChecked(e.target) }}
                        value='Rim Pélvico'
                    >Rim Pélvico</Checkbox>
                </Box>

            </Box>

        </Box >
    );
}

export default RimDireito;