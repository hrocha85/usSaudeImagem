import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { useContext, useState } from 'react';
import { LaudosContext } from '../../../../context/LuadosContext';
import { InputsContext } from '../../../../context/InputsContext';

function Baco() {
    const altura = '100%'
    const largura = '66%'


    let aumentadoComEcotextura = document.querySelector('#aumentadoComEcotextura') as HTMLInputElement
    let naoVisibilizado = document.querySelector('#naoVisibilizado') as HTMLInputElement
    let bacoAcessorio = document.querySelector('#bacoAcessorio') as HTMLInputElement
    let calcificacoes = document.querySelector('#calcificacoes') as HTMLInputElement
    let cisto = document.querySelector('#cisto') as HTMLInputElement

    let SelectAumentadoComEcotextura = document.querySelector('#SelectAumentadoComEcotextura') as HTMLInputElement
    let SelectNaoVisibilizado = document.querySelector('#SelectNaoVisibilizado') as HTMLInputElement
    let Input1BacoAcessorio = document.querySelector('#Input1BacoAcessorio') as HTMLInputElement
    let Input2BacoAcessorio = document.querySelector('#Input2BacoAcessorio') as HTMLInputElement
    let InputCalcificacoes = document.querySelector('#InputCalcificacoes') as HTMLInputElement
    let InputCisto = document.querySelector('#InputCisto') as HTMLInputElement

    const { laudoPrin, signIn, setLaudoPrin } = useContext(LaudosContext);
    const { inputBacoAcessorio, setinputBacoAcessorio } = useContext(InputsContext);
    const [inputBaco, setInputBaco] = useState('')
    const [inputCalcificacoes, setInputCalcificacoes] = useState('')
    const [inputCisto, setInputCisto] = useState('')

    const [checkValueNormal, setCheckvalueNormal] = useState({
        normal: false,
    })

    const [checkValueAumentadoEcotextura, setCheckvalueAumentadoEcotextura] = useState({
        aumentadoComEcotextura: false,
        SelectAumentadoComEcotextura: true,
    })

    const [checkValueNaoVisibilizado, setCheckvalueNaoVisibilizado] = useState({
        naoVisibilizado: false,
        SelectNaoVisibilizado: true,
    })

    const [checkValueBacoAcessorio, setCheckvalueBacoAcessorio] = useState({
        bacoAcessorio: false,
        InputBacoAcessorio: true,
    })
    const [checkValueCalcificacoes, setCheckvalueCalcificacoes] = useState({
        calcificacoes: false,
        InputCalcificacoes: true,
    })
    const [checkValueCisto, setCheckvalueCisto] = useState({
        cisto: false,
        InputCisto: true,
    })

    const criarString = (value, valueId?, valueInput?) => {
        //console.log("Valor cria string = ", value);

        setLaudoPrin(arr => [...arr, value])
        //console.log("criaString = ", laudoPrin)
    }

    const removeItemString = (value) => {
        console.log("valor remove = ", value);
        var index = laudoPrin.indexOf(value);
        if (index > -1) {
            const teste = laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
            console.log('aqui teste', teste)
        }
        console.log('posicao', index)
        console.log("laudosPrin", laudoPrin)
    }


    const capturaTamanhoBaco = (value) => {
        //console.log(value)
        setinputBacoAcessorio([value])
        //console.log(inputBacoAcessorio)
    }

    const pegaValorInputBaco = (value) => {
        let dadoInputBaco2 = value.value
        const valorInput = 'Baço acessório com ' + inputBacoAcessorio[0] + ' x ' + dadoInputBaco2 + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputBaco(valorInput)
    }

    const removeStringBaco = () => {
        const index = laudoPrin.indexOf(inputBaco)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const pegaValorInputCalcificacao = (value) => {
        let dadoInputCalcificacao = value.value
        const valorInput = 'Calcificações com ' + dadoInputCalcificacao + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputCalcificacoes(valorInput)
    }


    const removeStringCalcificacoes = () => {
        const index = laudoPrin.indexOf(inputCalcificacoes)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const pegaValorInputCisto = (value) => {
        let dadoInputCisto = value.value
        const valorInput = 'Cisto com ' + dadoInputCisto + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputCisto(valorInput)
    }

    const removeStringCisto = () => {
        const index = laudoPrin.indexOf(inputCisto)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const DeterminaCondicaoCheckNormal = () => {
        if (aumentadoComEcotextura.checked === true ||
            naoVisibilizado.checked === true || bacoAcessorio.checked === true ||
            calcificacoes.checked === true || cisto.checked === true) {
            setCheckvalueNormal({
                normal: true
            })
        } else {
            setCheckvalueNormal({
                normal: false
            })
        }
    }

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'normal':
                if (value.checked === true) {
                    criarString(value.value)
                    setCheckvalueAumentadoEcotextura({
                        aumentadoComEcotextura: true,
                        SelectAumentadoComEcotextura: true,
                    })
                    setCheckvalueNaoVisibilizado({
                        naoVisibilizado: true,
                        SelectNaoVisibilizado: true,
                    })
                    setCheckvalueBacoAcessorio({
                        bacoAcessorio: true,
                        InputBacoAcessorio: true,
                    })
                    setCheckvalueCalcificacoes({
                        calcificacoes: true,
                        InputCalcificacoes: true,
                    })
                    setCheckvalueCisto({
                        cisto: true,
                        InputCisto: true,
                    })

                } else {
                    removeItemString(value.value)
                    setCheckvalueAumentadoEcotextura({
                        aumentadoComEcotextura: false,
                        SelectAumentadoComEcotextura: true,
                    })
                    setCheckvalueNaoVisibilizado({
                        naoVisibilizado: false,
                        SelectNaoVisibilizado: true,
                    })
                    setCheckvalueBacoAcessorio({
                        bacoAcessorio: false,
                        InputBacoAcessorio: true,
                    })
                    setCheckvalueCalcificacoes({
                        calcificacoes: false,
                        InputCalcificacoes: true,
                    })
                    setCheckvalueCisto({
                        cisto: false,
                        InputCisto: true,
                    })
                }
                break;
            case 'aumentadoComEcotextura':
                if (value.checked === true) {
                    setCheckvalueAumentadoEcotextura({
                        aumentadoComEcotextura: false,
                        SelectAumentadoComEcotextura: false,
                    })
                    console.log(laudoPrin)
                    DeterminaCondicaoCheckNormal()
                } else {
                    setCheckvalueAumentadoEcotextura({
                        aumentadoComEcotextura: false,
                        SelectAumentadoComEcotextura: true,
                    })
                    console.log(laudoPrin)
                    DeterminaCondicaoCheckNormal()
                    removeItemString('Aumentado com ecotextura heterogênea ')
                    removeItemString('Aumentado com ecotextura homogênea ')
                    SelectAumentadoComEcotextura.value = ("")
                }
                break;
            case 'SelectAumentadoComEcotextura':
                if (value.value === 'Aumentado com ecotextura homogênea ') {
                    removeItemString('Aumentado com ecotextura heterogênea ')
                    criarString(value.value)
                } else {
                    removeItemString('Aumentado com ecotextura homogênea ')
                    criarString(value.value)
                }
                break;
            case 'naoVisibilizado':
                if (value.checked === true) {
                    setCheckvalueNaoVisibilizado({
                        naoVisibilizado: false,
                        SelectNaoVisibilizado: false,
                    })
                    console.log(laudoPrin)
                    DeterminaCondicaoCheckNormal()
                } else {
                    setCheckvalueNaoVisibilizado({
                        naoVisibilizado: false,
                        SelectNaoVisibilizado: true,
                    })
                    console.log(laudoPrin)
                    DeterminaCondicaoCheckNormal()
                    removeItemString('Não visibilizado com interposição gasosa ')
                    removeItemString('Não visibilizado com Ausênsia cirurgica ')
                    SelectNaoVisibilizado.value = ("")
                }
                break;
            case 'SelectNaoVisibilizado':
                console.log(laudoPrin)
                if (value.value === 'Não visibilizado com interposição gasosa ') {
                    removeItemString('Não visibilizado com Ausênsia cirurgica ')
                    criarString(value.value)
                } else {
                    removeItemString('Não visibilizado com interposição gasosa ')
                    criarString(value.value)
                }

                break;
            case 'bacoAcessorio':
                if (value.checked === true) {
                    setCheckvalueBacoAcessorio({
                        bacoAcessorio: false,
                        InputBacoAcessorio: false,
                    })
                    DeterminaCondicaoCheckNormal()
                } else {
                    setCheckvalueBacoAcessorio({
                        bacoAcessorio: false,
                        InputBacoAcessorio: true,
                    })

                    removeStringBaco()
                    DeterminaCondicaoCheckNormal()
                    Input1BacoAcessorio.value = ''
                    Input2BacoAcessorio.value = ''
                }
                break;
            case 'Input1BacoAcessorio':
                capturaTamanhoBaco(value.value)
                break;
            case 'Input2BacoAcessorio':
                pegaValorInputBaco(value)
                break;
            case 'calcificacoes':
                if (value.checked === true) {
                    setCheckvalueCalcificacoes({
                        calcificacoes: false,
                        InputCalcificacoes: false,
                    })
                    DeterminaCondicaoCheckNormal()

                } else {
                    setCheckvalueCalcificacoes({
                        calcificacoes: false,
                        InputCalcificacoes: true,
                    })
                    removeStringCalcificacoes()
                    DeterminaCondicaoCheckNormal()
                    InputCalcificacoes.value = ''

                }
                break;
            case 'InputCalcificacoes':
                pegaValorInputCalcificacao(value)
                break;
            case 'cisto':
                if (value.checked === true) {
                    setCheckvalueCisto({
                        cisto: false,
                        InputCisto: false,
                    })
                    DeterminaCondicaoCheckNormal()

                } else {
                    setCheckvalueCisto({
                        cisto: false,
                        InputCisto: true,
                    })
                    DeterminaCondicaoCheckNormal()
                    removeStringCisto()
                    InputCisto.value = ''
                }
                break;
            case 'InputCisto':
                pegaValorInputCisto(value)
                break
            default:
                console.log("esta aqui", value.id)
                console.log("nao achou o id");
                break;
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
            padding='24px 15px 20px 15px'
            mt='15px'
        >
            <Box
                borderBottom='1px'>

                <TituloNomeExame titulo='Baço' />

                <Box
                    mb='20px'
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mt='20px'
                >

                    <Box w='100px' >
                        <Checkbox
                            disabled={checkValueNormal.normal}
                            id="normal"
                            value="paciente está normal "
                            onChange={(e) => {
                                verificaChecked(e.target)
                            }}
                        >Normal</Checkbox>
                    </Box>

                    <Box w='220px' >
                        <Checkbox disabled={checkValueAumentadoEcotextura.aumentadoComEcotextura}
                            id="aumentadoComEcotextura"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Aumentado com ecotextura</Checkbox>
                        <Select
                            disabled={checkValueAumentadoEcotextura.SelectAumentadoComEcotextura}
                            id='SelectAumentadoComEcotextura'
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Aumentado com ecotextura homogênea '>Homogênea</option>
                            <option value='Aumentado com ecotextura heterogênea '>Heterogênea</option>
                        </Select>
                    </Box>



                    <Box w='150px' >
                        <Checkbox
                            disabled={checkValueNaoVisibilizado.naoVisibilizado}
                            id="naoVisibilizado"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Não visibilizado</Checkbox>
                        <Select
                            disabled={checkValueNaoVisibilizado.SelectNaoVisibilizado}
                            id="SelectNaoVisibilizado"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Não visibilizado com Ausênsia cirurgica '>ausência cirúrgica</option>
                            <option value='Não visibilizado com interposição gasosa '>interposição gasosa</option>
                        </Select>
                    </Box>

                    <Box w='140px'>
                        <Checkbox
                            disabled={checkValueBacoAcessorio.bacoAcessorio}
                            id="bacoAcessorio"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Baço Acessório</Checkbox>
                        <Input w='50px'
                            disabled={checkValueBacoAcessorio.InputBacoAcessorio}
                            id="Input1BacoAcessorio"
                            onBlur={(e) => { verificaChecked(e.target) }}
                            placeholder='0' />
                        x
                        <Input w='50px'
                            disabled={checkValueBacoAcessorio.InputBacoAcessorio}
                            id="Input2BacoAcessorio"
                            onBlur={(e) => { verificaChecked(e.target) }}
                            placeholder='0' />
                        mm
                    </Box>

                    <Box w='100px' >
                        <Checkbox
                            disabled={checkValueCalcificacoes.calcificacoes}
                            id="calcificacoes"
                            onChange={(e) => { verificaChecked(e.target) }}>Calcificações</Checkbox>
                        <Input
                            disabled={checkValueCalcificacoes.InputCalcificacoes}
                            id="InputCalcificacoes"
                            onBlur={(e) => { verificaChecked(e.target) }} placeholder='mm' />
                    </Box>
                </Box>
            </Box >


            <Box w='100px'
                mt='20px'>
                <Checkbox
                    disabled={checkValueCisto.cisto}
                    id="cisto"
                    onChange={(e) => { verificaChecked(e.target) }}
                >Cisto</Checkbox>
                <Input
                    disabled={checkValueCisto.InputCisto}
                    id="InputCisto"
                    onBlur={(e) => { verificaChecked(e.target) }} placeholder='mm' />
            </Box>

        </Box >
    );
}

export default Baco;