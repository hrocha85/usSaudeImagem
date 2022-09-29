import { Box, Checkbox, Select, Grid, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { useContext, useState } from 'react';
import { LaudosContext } from '../../../../context/LuadosContext';


function Baco() {
    const altura = '100%'
    const largura = '66%'

    let aumentadoComEcotextura = document.querySelector('#aumentadoComEcotextura') as HTMLInputElement
    let naoVisibilizado = document.querySelector('#naoVisibilizado') as HTMLInputElement
    let bacoAcessorio = document.querySelector('#bacoAcessorio') as HTMLInputElement
    let calcificacoes = document.querySelector('#calcificacoes') as HTMLInputElement

    const { laudoPrin, signIn, setLaudoPrin } = useContext(LaudosContext);

    const [baco, setBaco] = useState({
        normal: false,
        aumentadoComEcotextura: "",
        naoVisibilizado: "",
        bacoAcessorio: "",
        calcificacoes: ""

    })

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

    const criarString = (value) => {
        // console.log("Valor cria string = ", value);
        setLaudoPrin(arr => [...arr, value])
        console.log("criaString = ", laudoPrin)
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

    const DeterminaCondicaoCheckNormal = () => {
        if (aumentadoComEcotextura.checked === true ||
            naoVisibilizado.checked === true || bacoAcessorio.checked === true ||
            calcificacoes.checked === true) {
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
                    criarString(value.value)
                    DeterminaCondicaoCheckNormal()
                } else {
                    removeItemString(value.value)
                    setCheckvalueBacoAcessorio({
                        bacoAcessorio: false,
                        InputBacoAcessorio: true,
                    })
                    DeterminaCondicaoCheckNormal()
                }
                break;
            case 'InputBacoAcessorio':
                console.log(laudoPrin)

                criarString(value.value)

                break;
            case 'calcificacoes':
                console.log(laudoPrin)
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
                    //   removeItemString(value.value)
                    DeterminaCondicaoCheckNormal()
                }
                break;
            default:
                console.log("esta aqui", value.id)
                console.log("nao achou o id");
                break;
        }

    }
    // const verificaChecked = (value) => {
    //     switch (value.id) {
    //         case 'normal':
    //             if (value.checked === true) {
    //                 criarString('paciente está normal ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: true,
    //                     normal: false,
    //                     naoVisibilizado: true,
    //                     bacoAcessorio: true,
    //                     calcificacoes: true,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             } else {
    //                 removeItemString('paciente está normal ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: false,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             }

    //             break;
    //         case 'aumentadoComEcotextura':
    //             if (value.checked === true) {
    //                 criarString('aumentado com ecotextura ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: true,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: false,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             } else if (liberarNormal === true) {
    //                 removeItemString('aumentado com ecotextura ')
    //                 DeterminaCondicaoCheckbox()
    //             } else {
    //                 removeItemString('aumentado com ecotextura ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: false,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             }
    //             break;
    //         case 'naoVisibilizado':
    //             if (value.checked === true) {
    //                 criarString('nao visibilizado ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: true,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: false,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             } else if (liberarNormal === true) {
    //                 removeItemString('aumentado com ecotextura ')
    //                 DeterminaCondicaoCheckbox()
    //             } else {
    //                 removeItemString('nao visibilizado ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: false,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             }
    //             break;
    //         case 'calcificacoes':
    //             if (value.checked === true) {
    //                 criarString('calcificações ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: true,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: false,
    //                 })
    //             } else if (liberarNormal === true) {
    //                 removeItemString('aumentado com ecotextura ')
    //                 DeterminaCondicaoCheckbox()
    //             } else {
    //                 removeItemString('calcificações ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: false,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             }
    //             break;
    //         case 'bacoAcessorio':
    //             if (value.checked === true) {
    //                 criarString('Baço Acessório ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: true,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: false,
    //                     InputCalcificacoes: true,
    //                 })
    //             } else if (liberarNormal === true) {
    //                 removeItemString('aumentado com ecotextura ')
    //                 DeterminaCondicaoCheckbox()
    //             } else {
    //                 removeItemString('Baço Acessório ')
    //                 setCheckvalue({
    //                     aumentadoComEcotextura: false,
    //                     normal: false,
    //                     naoVisibilizado: false,
    //                     bacoAcessorio: false,
    //                     calcificacoes: false,
    //                     SelectAumentadoComEcotextura: true,
    //                     SelectNaoVisibilizado: true,
    //                     InputBacoAcessorio: true,
    //                     InputCalcificacoes: true,
    //                 })
    //             }
    //             break;
    //         default:
    //             console.log("nao achou o id");
    //             break;
    //     }

    // }

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
                            value='nao visibilizado '
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
                            value='Baço Acessório com'
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Baço Acessório</Checkbox>
                        <Input
                            disabled={checkValueBacoAcessorio.InputBacoAcessorio}
                            id="InputBacoAcessorio"
                            onChange={(e) => { verificaChecked(e.target) }}
                            placeholder='mm' />
                    </Box>

                    <Box w='100px' >
                        <Checkbox
                            disabled={checkValueCalcificacoes.calcificacoes}
                            id="calcificacoes"
                            value='calcificações '
                            onChange={(e) => { verificaChecked(e.target) }}>Calcificalções</Checkbox>
                        <Input
                            disabled={checkValueCalcificacoes.InputCalcificacoes}
                            id="InputCalcificacoes"
                            onChange={(e) => { verificaChecked(e.target) }} placeholder='mm' />
                    </Box>
                </Box>
            </Box >


            <Box w='100px'
                mt='20px'>
                <Checkbox>Cisto</Checkbox>
                <Input placeholder='mm' />
            </Box>

        </Box >
    );
}

export default Baco;