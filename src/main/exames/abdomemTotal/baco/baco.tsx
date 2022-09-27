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

    const [checkValue, setCheckvalue] = useState({
        normal: false,
        aumentadoComEcotextura: false,
        naoVisibilizado: false,
        bacoAcessorio: false,
        calcificacoes: false,
        SelectAumentadoComEcotextura: true,
        SelectNaoVisibilizado: true,
        InputBacoAcessorio: true,
        InputCalcificacoes: true,
    })

    const criarString = (value) => {
        // console.log("Valor cria string = ", value);
        setLaudoPrin(arr => [...arr, value])
        console.log("criaString = ", laudoPrin)
    }

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        laudoPrin.splice(laudoPrin.indexOf(value), 1)
        //removeValueSelectAumentadocomEcotextura()
        setLaudoPrin(arr => [...arr])
        // console.log("laudosPrin", laudoPrin)
    }

    const removeValueSelectAumentadocomEcotextura = () => {
        if (aumentadoComEcotextura.checked === true) {
            console.log('entrou')
            laudoPrin.splice(laudoPrin.indexOf('Homogênea'), 1)
            //setLaudoPrin(arr => [...arr])
            console.log(laudoPrin)
        }

    }

    // const captaValoresSelects = (value) => {
    //     if (aumentadoComEcotextura.checked === true) {
    //         console.log("Valor cria string Option = ", value);
    //         setLaudoPrin(arr => [...arr, value])
    //         console.log("criaStringOption = ", laudoPrin)
    //     } else {
    //         laudoPrin.splice(laudoPrin.indexOf(value), 1)
    //     }
    // }

    const DeterminaCondicaoCheckbox = () => {
        if (aumentadoComEcotextura.checked === true ||
            naoVisibilizado.checked === true || bacoAcessorio.checked === true ||
            calcificacoes.checked === true) {
            setCheckvalue({
                aumentadoComEcotextura: false,
                normal: true,
                naoVisibilizado: false,
                bacoAcessorio: false,
                calcificacoes: false,
                SelectAumentadoComEcotextura: false,
                SelectNaoVisibilizado: false,
                InputBacoAcessorio: false,
                InputCalcificacoes: false,
            })
        } else {
            setCheckvalue({
                aumentadoComEcotextura: false,
                normal: false,
                naoVisibilizado: false,
                bacoAcessorio: false,
                calcificacoes: false,
                SelectAumentadoComEcotextura: true,
                SelectNaoVisibilizado: true,
                InputBacoAcessorio: true,
                InputCalcificacoes: true,
            })
        }
    }

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'normal':
                if (value.checked === true) {
                    criarString(value.value)
                    setCheckvalue({
                        aumentadoComEcotextura: true,
                        normal: false,
                        naoVisibilizado: true,
                        bacoAcessorio: true,
                        calcificacoes: true,
                        SelectAumentadoComEcotextura: true,
                        SelectNaoVisibilizado: true,
                        InputBacoAcessorio: true,
                        InputCalcificacoes: true,
                    })
                } else {
                    removeItemString(value.value)
                    setCheckvalue({
                        aumentadoComEcotextura: false,
                        normal: false,
                        naoVisibilizado: false,
                        bacoAcessorio: false,
                        calcificacoes: false,
                        SelectAumentadoComEcotextura: true,
                        SelectNaoVisibilizado: true,
                        InputBacoAcessorio: true,
                        InputCalcificacoes: true,
                    })
                }
                break;
            case 'aumentadoComEcotextura':
                if (value.checked === true) {
                    criarString(value.value)
                    DeterminaCondicaoCheckbox()
                } else {
                    removeItemString(value.value)

                    DeterminaCondicaoCheckbox()
                }
                break;
            case 'naoVisibilizado':
                if (value.checked === true) {
                    criarString(value.value)
                    DeterminaCondicaoCheckbox()
                } else {
                    removeItemString(value.value)
                    DeterminaCondicaoCheckbox()
                }
                break;
            case 'calcificacoes':
                if (value.checked === true) {
                    criarString(value.value)
                    DeterminaCondicaoCheckbox()
                } else {
                    removeItemString(value.value)
                    DeterminaCondicaoCheckbox()
                }
                break;
            case 'bacoAcessorio':
                if (value.checked === true) {
                    criarString(value.value)
                    DeterminaCondicaoCheckbox()
                } else {
                    removeItemString(value.value)
                    DeterminaCondicaoCheckbox()
                }
                break;
            case 'SelectAumentadoComEcotextura':
                if (aumentadoComEcotextura.checked === true) {
                    criarString(value.value)
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
                            disabled={checkValue.normal}
                            id="normal"
                            value="paciente está normal "
                            onChange={(e) => {
                                verificaChecked(e.target)
                            }}
                        >Normal</Checkbox>
                    </Box>

                    <Box w='220px' >
                        <Checkbox disabled={checkValue.aumentadoComEcotextura}
                            id="aumentadoComEcotextura"
                            value='aumentado com ecotextura '
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Aumentado com ecotextura</Checkbox>
                        <Select
                            disabled={checkValue.SelectAumentadoComEcotextura}
                            id="SelectAumentadoComEcotextura"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Homogênea'>Homogênea</option>
                            <option value='Heterogênea'>Heterogênea</option>
                        </Select>
                    </Box>



                    <Box w='150px' >
                        <Checkbox
                            disabled={checkValue.naoVisibilizado}
                            id="naoVisibilizado"
                            value='nao visibilizado '
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Não visibilizado</Checkbox>
                        <Select
                            disabled={checkValue.SelectNaoVisibilizado}
                            id="SelectNaoVisibilizado"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='ausenciaCirurgica'>ausência cirúrgica</option>
                            <option value='interposicaoGasosa'>interposição gasosa</option>
                        </Select>
                    </Box>

                    <Box w='140px'>
                        <Checkbox
                            disabled={checkValue.bacoAcessorio}
                            id="bacoAcessorio"
                            value='Baço Acessório '
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Baço Acessório</Checkbox>
                        <Input
                            disabled={checkValue.InputBacoAcessorio}
                            id="InputBacoAcessorio"
                            onChange={(e) => { verificaChecked(e.target) }}
                            placeholder='mm' />
                    </Box>

                    <Box w='100px' >
                        <Checkbox
                            disabled={checkValue.calcificacoes}
                            id="calcificacoes"
                            value='calcificações '
                            onChange={(e) => { verificaChecked(e.target) }}>Calcificalções</Checkbox>
                        <Input
                            disabled={checkValue.InputCalcificacoes}
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