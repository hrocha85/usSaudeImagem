import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { NormalContext } from "../../../../context/NormalContext";

function Figado() {
    const altura = '100%'
    const largura = '66%'

    let HepatiteAguda = document.querySelector('#HepatiteAguda') as HTMLInputElement
    let HepatiteCronica = document.querySelector('#HepatiteCronica') as HTMLInputElement
    let dimensoes = document.querySelector('#dimensoes') as HTMLInputElement
    let esteatose = document.querySelector('#esteatose') as HTMLInputElement

    let calcificacao = document.querySelector('#calcificacao') as HTMLInputElement
    let cisto01 = document.querySelector('#cisto01') as HTMLInputElement
    let cisto02 = document.querySelector('#cisto02') as HTMLInputElement
    let cisto03 = document.querySelector('#cisto03') as HTMLInputElement
    let MultiplosCistos = document.querySelector('#MultiplosCistos') as HTMLInputElement

    let SelectDimensoes = document.querySelector('#SelectDimensoes') as HTMLInputElement
    let SelectEsteatose = document.querySelector('#SelectEsteatose') as HTMLInputElement

    let SelectCalcificacao = document.querySelector('#SelectCalcificacao') as HTMLInputElement
    let InputCalcificacao = document.querySelector('#InputCalcificacao') as HTMLInputElement

    let SelectCisto01 = document.querySelector('#SelectCisto01') as HTMLInputElement
    let InputCisto01 = document.querySelector('#InputCisto01') as HTMLInputElement

    let SelectCisto02 = document.querySelector('#SelectCisto02') as HTMLInputElement
    let InputCisto02 = document.querySelector('#InputCisto02') as HTMLInputElement

    let SelectCisto03 = document.querySelector('#SelectCisto03') as HTMLInputElement
    let InputCisto03 = document.querySelector('#InputCisto03') as HTMLInputElement

    let SelectMultiplosCistos = document.querySelector('#SelectMultiplosCistos') as HTMLInputElement
    let InputMultiplosCistos = document.querySelector('#InputMultiplosCistos') as HTMLInputElement



    let nodulo01 = document.querySelector('#nodulo01') as HTMLInputElement
    let SelectNodulo01 = document.querySelector('#SelectNodulo01') as HTMLInputElement
    let Select2Nodulo01 = document.querySelector('#Select2Nodulo01') as HTMLInputElement
    let Select3Nodulo01 = document.querySelector('#Select3Nodulo01') as HTMLInputElement
    let InputNodulo01 = document.querySelector('#InputNodulo01') as HTMLInputElement

    let nodulo02 = document.querySelector('#nodulo02') as HTMLInputElement
    let SelectNodulo02 = document.querySelector('#SelectNodulo02') as HTMLInputElement
    let Select2Nodulo02 = document.querySelector('#Select2Nodulo02') as HTMLInputElement
    let Select3Nodulo02 = document.querySelector('#Select3Nodulo02') as HTMLInputElement
    let InputNodulo02 = document.querySelector('#InputNodulo02') as HTMLInputElement

    let nodulo03 = document.querySelector('#nodulo03') as HTMLInputElement
    let SelectNodulo03 = document.querySelector('#SelectNodulo03') as HTMLInputElement
    let Select2Nodulo03 = document.querySelector('#Select2Nodulo03') as HTMLInputElement
    let Select3Nodulo03 = document.querySelector('#SelectN3odulo03') as HTMLInputElement

    let multiplosNodulos = document.querySelector('#multiplosNodulos') as HTMLInputElement
    let SelectMultiplosNodulos = document.querySelector('#SelectMultiplosNodulos') as HTMLInputElement
    let Select2MultiplosNodulos = document.querySelector('#Select2MultiplosNodulos') as HTMLInputElement
    let Select3MultiplosNodulos = document.querySelector('#Select3MultiplosNodulos') as HTMLInputElement
    let InputMultiplosNodulos = document.querySelector('#InputMultiplosNodulos') as HTMLInputElement

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    const { laudoNormal } = useContext(NormalContext);

    const [selectCalcificacao, setSelectCalcificacao] = useState('')
    const [inputCalcificacao, setInputCalcificacao] = useState('')

    const [selectCisto01, setSelectCisto01] = useState('')
    const [inputCisto01, setInputCisto01] = useState('')

    const [selectCisto02, setSelectCisto02] = useState('')
    const [inputCisto02, setInputCisto02] = useState('')

    const [selectCisto03, setSelectCisto03] = useState('')
    const [inputCisto03, setInputCisto03] = useState('')

    const [selectMultiplosCistos, setSelectMultiplosCistos] = useState('')
    const [inputMultiplosCistos, setInputMultiplosCistos] = useState('')

    const [selectNodulo01, setSelectNodulo01] = useState('')
    const [select2Nodulo01, setSelect2Nodulo01] = useState('')
    const [inputNodulo01, setInputNodulo01] = useState('')
    const [fraseNodulo01, setFraseNodulo01] = useState('')

    const [selectNodulo02, setSelectNodulo02] = useState('')
    const [select2Nodulo02, setSelect2Nodulo02] = useState('')
    const [inputNodulo02, setInputNodulo02] = useState('')
    const [fraseNodulo02, setFraseNodulo02] = useState('')

    const [selectNodulo03, setSelectNodulo03] = useState('')
    const [select2Nodulo03, setSelect2Nodulo03] = useState('')
    const [inputNodulo03, setInputNodulo03] = useState('')
    const [fraseNodulo03, setFraseNodulo03] = useState('')

    const [selectMultiplosNodulos, setSelectMultiplosNodulos] = useState('')
    const [select2MultiplosNodulos, setSelect2MultiplosNodulos] = useState('')
    const [inputMultiplosNodulos, setInputMultiplosNodulos] = useState('')
    const [fraseMultiplosNodulos, setFraseMultiplosNodulos] = useState('')


    const [corBordaEsteatose, setCorBordaEsteatose] = useState('#E0E0E0')
    const [corBordaDimensoes, setCorBordaDimensoes] = useState('#E0E0E0')

    const [defaultValueNormal, setDefaultValueNormal] = useState({
        defaultValueNormal: false,
    })
    const [checkValueNormal, setCheckValueNormal] = useState({
        normal: false,
    })
    const [checkValueHepatiteAguda, setCheckValueHepatiteAguda] = useState({
        HepatiteAguda: false,

    })
    const [checkValueHepatiteCronica, setCheckValueHepatiteCronica] = useState({
        HepatiteCronica: false,

    })
    const [checkValueDimensoes, setCheckValueDimensoes] = useState({
        dimensoes: false,
        SelectDimensoes: true,
    })
    const [checkValueEsteatose, setCheckValueEsteatose] = useState({
        esteatose: false,
        SelectEsteatose: true
    })

    const [checkValueCalcificacao, setCheckValueCalcificacao] = useState({
        calcificacao: false,
        SelectCalcificacao: true,
        InputCalcificacao: true
    })
    const [checkValueCisto01, setCheckValueCisto01] = useState({
        cisto01: false,
        SelectCisto01: true,
        InputCisto01: true
    })
    const [checkValueCisto02, setCheckValueCisto02] = useState({
        cisto02: false,
        SelectCisto02: true,
        InputCisto02: true
    })
    const [checkValueCisto03, setCheckValueCisto03] = useState({
        cisto03: false,
        SelectCisto03: true,
        InputCisto03: true
    })
    const [checkValueMultiplosCistos, setCheckValueMultiplosCistos] = useState({
        MultiplosCistos: false,
        SelectMultiplosCistos: true,
        InputMultiplosCistos: true
    })

    const [checkValueNodulo01, setCheckValueNodulo01] = useState({
        nodulo01: false,
        SelectNodulo01: true,
        InputNodulo01: true,

    })
    const [checkValueNodulo02, setCheckValueNodulo02] = useState({
        nodulo02: false,
        SelectNodulo02: true,
        InputNodulo02: true,

    })
    const [checkValueNodulo03, setCheckValueNodulo03] = useState({
        nodulo03: false,
        SelectNodulo03: true,
        InputNodulo03: true,

    })

    const [checkValueMultiplosNodulos, setCheckValueMultiplosNodulos] = useState({
        MultiplosNodulos: false,
        SelectMultiplosNodulos: true,
        InputMultiplosNodulos: true,

    })

    const TrocaCorBorda = (value) => {
        (value.id === 'dimensoes' && dimensoes.checked === true) ?
            setCorBordaDimensoes('#0000FF') : setCorBordaDimensoes('#E0E0E0');

        (value.id === 'esteatose' && esteatose.checked === true) ?
            setCorBordaEsteatose('#0000FF') : setCorBordaEsteatose('#E0E0E0');
    }


    const criarString = (value, valueId?, valueInput?) => {
        //arr => [...arr] captura os dados que já estavam e os mantem no array
        setLaudoPrin(arr => [...arr, value])
    }

    const removeItemString = (value) => {
        var index = laudoPrin.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const DeterminaCondicaoCheckNormal = () => {
        if (HepatiteAguda.checked === true ||
            HepatiteCronica.checked === true ||
            dimensoes.checked === true ||
            esteatose.checked === true ||
            calcificacao.checked === true ||
            cisto01.checked === true ||
            cisto02.checked === true ||
            cisto03.checked === true ||
            MultiplosCistos.checked === true ||
            nodulo01.checked === true ||
            nodulo02.checked === true ||
            nodulo03.checked === true ||
            multiplosNodulos.checked === true
        ) {
            setCheckValueNormal({
                normal: true
            })
        } else {
            setCheckValueNormal({
                normal: false
            })
        }
    }

    const criaValorCalcificacao = (value) => {
        let dadoInputCalcificacao = value.value
        const valorInput = 'Calcificação no ' + selectCalcificacao + ' com ' + dadoInputCalcificacao + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputCalcificacao(valorInput)
    }

    const removeStringCalcificacao = () => {
        const index = laudoPrin.indexOf(inputCalcificacao)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaValorCisto01 = (value) => {
        let dadoInputCisto01 = value.value
        const valorInput = 'Cisto 01 no ' + selectCisto01 + ' com ' + dadoInputCisto01 + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputCisto01(valorInput)
    }
    const removeStringCisto01 = () => {
        const index = laudoPrin.indexOf(inputCisto01)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaValorCisto02 = (value) => {
        let dadoInputCisto02 = value.value
        const valorInput = 'Cisto 02 no ' + selectCisto02 + ' com ' + dadoInputCisto02 + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputCisto02(valorInput)
    }
    const removeStringCisto02 = () => {
        const index = laudoPrin.indexOf(inputCisto02)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaValorCisto03 = (value) => {
        let dadoInputCisto03 = value.value
        const valorInput = 'Cisto 03 no ' + selectCisto03 + ' com ' + dadoInputCisto03 + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputCisto03(valorInput)
    }
    const removeStringCisto03 = () => {
        const index = laudoPrin.indexOf(inputCisto03)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaValorMultiplosCistos = (value) => {
        let dadoInputMultiplosCistos = value.value
        const valorInput = 'Múltiplos Cistos no ' + selectMultiplosCistos + ' com ' + dadoInputMultiplosCistos + 'mm '
        setLaudoPrin(arr => [...arr, valorInput])
        setInputMultiplosCistos(valorInput)
    }
    const removeStringMultiplosCistos = () => {
        const index = laudoPrin.indexOf(inputMultiplosCistos)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaValorNodulo01 = (value) => {
        let dadoSelect3Nodulo01 = value
        const frase01 = 'Nódulo 01 localizado no ' +
            selectNodulo01 + ' com ' + inputNodulo01 +
            'mm com contornos ' + select2Nodulo01 + dadoSelect3Nodulo01
        setLaudoPrin(arr => [...arr, frase01])
        setFraseNodulo01(frase01)
    }

    const removeStringNodulo01 = () => {
        const index = laudoPrin.indexOf(fraseNodulo01)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaValorNodulo02 = (value) => {
        let dadoSelect3Nodulo02 = value
        const frase02 = 'Nódulo 02 localizado no ' +
            selectNodulo02 + ' com ' + inputNodulo02 +
            'mm com contornos ' + select2Nodulo02 + dadoSelect3Nodulo02
        setLaudoPrin(arr => [...arr, frase02])
        setFraseNodulo02(frase02)
    }

    const removeStringNodulo02 = () => {
        const index = laudoPrin.indexOf(fraseNodulo02)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaValorNodulo03 = (value) => {
        let dadoSelect3Nodulo03 = value
        const frase03 = 'Nódulo 03 localizado no ' +
            selectNodulo03 + ' com ' + inputNodulo03 +
            'mm com contornos ' + select2Nodulo03 + dadoSelect3Nodulo03
        setLaudoPrin(arr => [...arr, frase03])
        setFraseNodulo03(frase03)
    }

    const removeStringNodulo03 = () => {
        const index = laudoPrin.indexOf(fraseNodulo03)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }
    const criaValorMultiplosNodulos = (value) => {
        let dadoSelect3MultiplosNodulos = value
        const frase03 = 'Nódulo 03 localizado no ' +
            selectMultiplosNodulos + ' com ' + inputMultiplosNodulos +
            'mm com contornos ' + select2MultiplosNodulos + dadoSelect3MultiplosNodulos
        setLaudoPrin(arr => [...arr, frase03])
        setFraseMultiplosNodulos(frase03)
    }

    const removeStringMultiplosNodulos = () => {
        const index = laudoPrin.indexOf(fraseMultiplosNodulos)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const removeNormal = () => {
        setLaudoPrin(arr => [])
    }

    useEffect(() => {
        if (laudoNormal === true) {
            setDefaultValueNormal({ defaultValueNormal: true })
            criarString('Figado está normal ')
            console.log(laudoPrin)
            setCheckValueHepatiteAguda({
                HepatiteAguda: true,
            })
            setCheckValueHepatiteCronica({
                HepatiteCronica: true,

            })
            setCheckValueDimensoes({
                dimensoes: true,
                SelectDimensoes: true,
            })
            setCheckValueEsteatose({
                esteatose: true,
                SelectEsteatose: true
            })

            //----------------------------------------------------

            setCheckValueCalcificacao({
                calcificacao: true,
                SelectCalcificacao: true,
                InputCalcificacao: true
            })
            setCheckValueCisto01({
                cisto01: true,
                SelectCisto01: true,
                InputCisto01: true
            })
            setCheckValueCisto02({
                cisto02: true,
                SelectCisto02: true,
                InputCisto02: true
            })
            setCheckValueCisto03({
                cisto03: true,
                SelectCisto03: true,
                InputCisto03: true
            })
            setCheckValueMultiplosCistos({
                MultiplosCistos: true,
                SelectMultiplosCistos: true,
                InputMultiplosCistos: true
            })
            //-------------------------------------------------------------------
            setCheckValueNodulo01({
                nodulo01: true,
                SelectNodulo01: true,
                InputNodulo01: true,
            })
            setCheckValueNodulo02({
                nodulo02: true,
                SelectNodulo02: true,
                InputNodulo02: true,
            })
            setCheckValueNodulo03({
                nodulo03: true,
                SelectNodulo03: true,
                InputNodulo03: true,
            })
            setCheckValueMultiplosNodulos({
                MultiplosNodulos: true,
                SelectMultiplosNodulos: true,
                InputMultiplosNodulos: true,
            })
        } else {
            setDefaultValueNormal({ defaultValueNormal: false })
            removeNormal()
            setCheckValueHepatiteAguda({
                HepatiteAguda: false,
            })
            setCheckValueHepatiteCronica({
                HepatiteCronica: false,

            })
            setCheckValueDimensoes({
                dimensoes: false,
                SelectDimensoes: true,
            })
            setCheckValueEsteatose({
                esteatose: false,
                SelectEsteatose: true
            })

            //-----------------------------------------------------------------
            setCheckValueCalcificacao({
                calcificacao: false,
                SelectCalcificacao: true,
                InputCalcificacao: true
            })
            setCheckValueCisto01({
                cisto01: false,
                SelectCisto01: true,
                InputCisto01: true
            })
            setCheckValueCisto02({
                cisto02: false,
                SelectCisto02: true,
                InputCisto02: true
            })
            setCheckValueCisto03({
                cisto03: false,
                SelectCisto03: true,
                InputCisto03: true
            })
            setCheckValueMultiplosCistos({
                MultiplosCistos: false,
                SelectMultiplosCistos: true,
                InputMultiplosCistos: true
            })
            //--------------------------------------
            setCheckValueNodulo01({
                nodulo01: false,
                SelectNodulo01: true,
                InputNodulo01: true,
            })
            setCheckValueNodulo02({
                nodulo02: false,
                SelectNodulo02: true,
                InputNodulo02: true,
            })
            setCheckValueNodulo03({
                nodulo03: false,
                SelectNodulo03: true,
                InputNodulo03: true,
            })
            setCheckValueMultiplosNodulos({
                MultiplosNodulos: false,
                SelectMultiplosNodulos: true,
                InputMultiplosNodulos: true,
            })
        }
    }, [laudoNormal])

    const verificaChecked = (value) => {
        switch (value.id) {
            case ('normal'):
                //console.log(value)
                if (value.checked === true) {
                    criarString(value.value)
                    setDefaultValueNormal({ defaultValueNormal: true })
                    setCheckValueHepatiteAguda({
                        HepatiteAguda: true,
                    })
                    setCheckValueHepatiteCronica({
                        HepatiteCronica: true,

                    })
                    setCheckValueDimensoes({
                        dimensoes: true,
                        SelectDimensoes: true,
                    })
                    setCheckValueEsteatose({
                        esteatose: true,
                        SelectEsteatose: true
                    })

                    //----------------------------------------------------

                    setCheckValueCalcificacao({
                        calcificacao: true,
                        SelectCalcificacao: true,
                        InputCalcificacao: true
                    })
                    setCheckValueCisto01({
                        cisto01: true,
                        SelectCisto01: true,
                        InputCisto01: true
                    })
                    setCheckValueCisto02({
                        cisto02: true,
                        SelectCisto02: true,
                        InputCisto02: true
                    })
                    setCheckValueCisto03({
                        cisto03: true,
                        SelectCisto03: true,
                        InputCisto03: true
                    })
                    setCheckValueMultiplosCistos({
                        MultiplosCistos: true,
                        SelectMultiplosCistos: true,
                        InputMultiplosCistos: true
                    })
                    //-------------------------------------------------------------------
                    setCheckValueNodulo01({
                        nodulo01: true,
                        SelectNodulo01: true,
                        InputNodulo01: true,
                    })
                    setCheckValueNodulo02({
                        nodulo02: true,
                        SelectNodulo02: true,
                        InputNodulo02: true,
                    })
                    setCheckValueNodulo03({
                        nodulo03: true,
                        SelectNodulo03: true,
                        InputNodulo03: true,
                    })
                    setCheckValueMultiplosNodulos({
                        MultiplosNodulos: true,
                        SelectMultiplosNodulos: true,
                        InputMultiplosNodulos: true,
                    })

                } else {
                    removeItemString(value.value)
                    setDefaultValueNormal({ defaultValueNormal: false })
                    setCheckValueHepatiteAguda({
                        HepatiteAguda: false,
                    })
                    setCheckValueHepatiteCronica({
                        HepatiteCronica: false,

                    })
                    setCheckValueDimensoes({
                        dimensoes: false,
                        SelectDimensoes: true,
                    })
                    setCheckValueEsteatose({
                        esteatose: false,
                        SelectEsteatose: true
                    })

                    //-----------------------------------------------------------------
                    setCheckValueCalcificacao({
                        calcificacao: false,
                        SelectCalcificacao: true,
                        InputCalcificacao: true
                    })
                    setCheckValueCisto01({
                        cisto01: false,
                        SelectCisto01: true,
                        InputCisto01: true
                    })
                    setCheckValueCisto02({
                        cisto02: false,
                        SelectCisto02: true,
                        InputCisto02: true
                    })
                    setCheckValueCisto03({
                        cisto03: false,
                        SelectCisto03: true,
                        InputCisto03: true
                    })
                    setCheckValueMultiplosCistos({
                        MultiplosCistos: false,
                        SelectMultiplosCistos: true,
                        InputMultiplosCistos: true
                    })
                    //--------------------------------------
                    setCheckValueNodulo01({
                        nodulo01: false,
                        SelectNodulo01: true,
                        InputNodulo01: true,
                    })
                    setCheckValueNodulo02({
                        nodulo02: false,
                        SelectNodulo02: true,
                        InputNodulo02: true,
                    })
                    setCheckValueNodulo03({
                        nodulo03: false,
                        SelectNodulo03: true,
                        InputNodulo03: true,
                    })
                    setCheckValueMultiplosNodulos({
                        MultiplosNodulos: false,
                        SelectMultiplosNodulos: true,
                        InputMultiplosNodulos: true,
                    })
                    console.log('caiu bem aqui')
                }
                break;
            case 'HepatiteAguda':
                if (value.checked === true) {
                    criarString(value.value)
                    setCheckValueHepatiteAguda({
                        HepatiteAguda: false,
                    })
                } else {
                    removeItemString(value.value)
                    setCheckValueHepatiteAguda({
                        HepatiteAguda: false,
                    })
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'HepatiteCronica':
                if (value.checked === true) {
                    criarString(value.value)
                    setCheckValueHepatiteCronica({
                        HepatiteCronica: false,

                    })
                } else {
                    removeItemString(value.value)
                    setCheckValueHepatiteCronica({
                        HepatiteCronica: false,
                    })
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'dimensoes':
                if (value.checked === true) {
                    setCheckValueDimensoes({
                        dimensoes: false,
                        SelectDimensoes: false,
                    })
                    TrocaCorBorda(value)
                } else {
                    setCheckValueDimensoes({
                        dimensoes: false,
                        SelectDimensoes: true,
                    })
                    TrocaCorBorda(value)
                    removeItemString('Dimesão Aumentadas')
                    removeItemString('Dimensão Reduzidas')

                    SelectDimensoes.value = ('')
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectDimensoes':
                if (value.value === 'Dimensão Reduzidas') {
                    removeItemString('Dimesão Aumentadas')
                    criarString(value.value)
                } else {
                    removeItemString('Dimensão Reduzidas')
                    criarString(value.value)
                }

                break;
            case 'esteatose':
                if (value.checked === true) {
                    setCheckValueEsteatose({
                        esteatose: false,
                        SelectEsteatose: false
                    })
                    TrocaCorBorda(value)
                } else {
                    setCheckValueEsteatose({
                        esteatose: false,
                        SelectEsteatose: true
                    })
                    TrocaCorBorda(value)
                    removeItemString('Esteatose Moderada')
                    removeItemString('Esteatose Acentuada')
                    removeItemString('Esteatose Leve')

                    SelectEsteatose.value = ('')
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectEsteatose':
                if (value.value === 'Esteatose Leve') {
                    removeItemString('Esteatose Moderada')
                    removeItemString('Esteatose Acentuada')
                    criarString(value.value)
                } else if (value.value === 'Esteatose Moderada') {
                    removeItemString('Esteatose Leve')
                    removeItemString('Esteatose Acentuada')
                    criarString(value.value)
                } else {
                    removeItemString('Esteatose Leve')
                    removeItemString('Esteatose Moderada')
                    criarString(value.value)

                }

                break;
            default:
                console.log("nao achou o id");
                break;
        }
    }

    const verificaCheckedCistos = (value) => {
        switch (value.id) {
            case 'calcificacao':
                if (value.checked === true) {
                    setCheckValueCalcificacao({
                        calcificacao: false,
                        SelectCalcificacao: false,
                        InputCalcificacao: false
                    })
                } else {
                    setCheckValueCalcificacao({
                        calcificacao: false,
                        SelectCalcificacao: true,
                        InputCalcificacao: true
                    })
                    removeStringCalcificacao()

                    InputCalcificacao.value = ''
                    SelectCalcificacao.value = ''
                }
                DeterminaCondicaoCheckNormal()

                break;
            case 'SelectCalcificacao':
                setSelectCalcificacao(value.value)

                break;
            case 'InputCalcificacao':
                criaValorCalcificacao(value)

                break;
            case 'cisto01':
                if (value.checked === true) {
                    setCheckValueCisto01({
                        cisto01: false,
                        SelectCisto01: false,
                        InputCisto01: false
                    })
                } else {
                    setCheckValueCisto01({
                        cisto01: false,
                        SelectCisto01: true,
                        InputCisto01: true
                    })
                    removeStringCisto01()
                    SelectCisto01.value = ''
                    InputCisto01.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectCisto01':
                setSelectCisto01(value.value)
                break;
            case 'InputCisto01':
                criaValorCisto01(value)
                break;
            case 'cisto02':
                if (value.checked === true) {
                    setCheckValueCisto02({
                        cisto02: false,
                        SelectCisto02: false,
                        InputCisto02: false
                    })
                } else {
                    setCheckValueCisto02({
                        cisto02: false,
                        SelectCisto02: true,
                        InputCisto02: true
                    })
                    removeStringCisto02()
                    SelectCisto02.value = ''
                    InputCisto02.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectCisto02':
                setSelectCisto02(value.value)
                break;
            case 'InputCisto02':
                criaValorCisto02(value)
                break;
            case 'cisto03':
                if (value.checked === true) {
                    setCheckValueCisto03({
                        cisto03: false,
                        SelectCisto03: false,
                        InputCisto03: false
                    })
                } else {
                    setCheckValueCisto03({
                        cisto03: false,
                        SelectCisto03: true,
                        InputCisto03: true
                    })
                    removeStringCisto03()
                    SelectCisto03.value = ''
                    InputCisto03.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectCisto03':
                setSelectCisto03(value.value)
                break;
            case 'InputCisto03':
                criaValorCisto03(value)
                break;
            case 'MultiplosCistos':
                if (value.checked === true) {
                    setCheckValueMultiplosCistos({
                        MultiplosCistos: false,
                        SelectMultiplosCistos: false,
                        InputMultiplosCistos: false
                    })
                } else {
                    setCheckValueMultiplosCistos({
                        MultiplosCistos: false,
                        SelectMultiplosCistos: true,
                        InputMultiplosCistos: true
                    })
                    removeStringMultiplosCistos()
                    SelectMultiplosCistos.value = ''
                    InputMultiplosCistos.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectMultiplosCistos':
                setSelectMultiplosCistos(value.value)
                break;
            case 'InputMultiplosCistos':
                criaValorMultiplosCistos(value)
                break;
            default:
                console.log("nao achou o id");
                break;
        }
    }

    const verificaCheckedNodulos = (value) => {

        switch (value.id) {
            case 'nodulo01':
                if (value.checked === true) {
                    setCheckValueNodulo01({
                        nodulo01: false,
                        SelectNodulo01: false,
                        InputNodulo01: false,

                    })
                } else {
                    setCheckValueNodulo01({
                        nodulo01: false,
                        SelectNodulo01: true,
                        InputNodulo01: true,

                    })
                    removeStringNodulo01()
                    SelectNodulo01.value = ''
                    Select2Nodulo01.value = ''
                    Select3Nodulo01.value = ''
                    InputNodulo01.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectNodulo01':
                setSelectNodulo01(value.value)
                break;
            case 'Select2Nodulo01':
                setSelect2Nodulo01(value.value)
                break;
            case 'Select3Nodulo01':
                criaValorNodulo01(value.value)
                break;
            case 'InputNodulo01':
                setInputNodulo01(value.value)
                break;
            case 'nodulo02':
                if (value.checked === true) {
                    setCheckValueNodulo02({
                        nodulo02: false,
                        SelectNodulo02: false,
                        InputNodulo02: false,

                    })
                } else {
                    setCheckValueNodulo02({
                        nodulo02: false,
                        SelectNodulo02: true,
                        InputNodulo02: true,

                    })
                    removeStringNodulo02()
                    SelectNodulo02.value = ''
                    Select2Nodulo02.value = ''
                    Select3Nodulo02.value = ''
                    InputNodulo02.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectNodulo02':
                setSelectNodulo02(value.value)
                break;
            case 'Select2Nodulo02':
                setSelect2Nodulo02(value.value)
                break;
            case 'Select3Nodulo02':
                console.log('aqui')
                criaValorNodulo02(value.value)
                break;
            case 'InputNodulo02':
                setInputNodulo02(value.value)
                break;
            case 'nodulo03':
                if (value.checked === true) {
                    setCheckValueNodulo03({
                        nodulo03: false,
                        SelectNodulo03: false,
                        InputNodulo03: false,

                    })
                } else {
                    setCheckValueNodulo03({
                        nodulo03: false,
                        SelectNodulo03: true,
                        InputNodulo03: true,

                    })
                    removeStringNodulo03()
                    SelectNodulo03.value = ''
                    Select2Nodulo03.value = ''
                    Select3Nodulo03.value = ''
                    InputNodulo02.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectNodulo03':
                setSelectNodulo03(value.value)
                break;
            case 'Select2Nodulo03':
                setSelect2Nodulo03(value.value)
                break;
            case 'Select3Nodulo03':
                criaValorNodulo03(value.value)
                break;
            case 'InputNodulo03':
                setInputNodulo03(value.value)
                break;
            case 'multiplosNodulos':
                if (value.checked === true) {
                    setCheckValueMultiplosNodulos({
                        MultiplosNodulos: false,
                        SelectMultiplosNodulos: false,
                        InputMultiplosNodulos: false,

                    })
                } else {
                    setCheckValueMultiplosNodulos({
                        MultiplosNodulos: false,
                        SelectMultiplosNodulos: true,
                        InputMultiplosNodulos: true,

                    })
                    removeStringMultiplosNodulos()
                    SelectMultiplosNodulos.value = ''
                    Select2MultiplosNodulos.value = ''
                    Select3MultiplosNodulos.value = ''
                    InputMultiplosNodulos.value = ''
                }
                DeterminaCondicaoCheckNormal()
                break;
            case 'SelectMultiplosNodulos':
                setSelectMultiplosNodulos(value.value)
                break;
            case 'Select2MultiplosNodulos':
                setSelect2MultiplosNodulos(value.value)
                break;
            case 'Select3MultiplosNodulos':
                criaValorMultiplosNodulos(value.value)
                break;
            case 'InputMultiplosNodulos':
                setInputMultiplosNodulos(value.value)
                break;
            default:
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
            padding='24px 15px 15px 15px'
        >

            <Box
                borderBottom='1px'
            >
                <TituloNomeExame titulo='Fígado' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Box>
                        <Checkbox
                            isChecked={defaultValueNormal.defaultValueNormal}
                            disabled={checkValueNormal.normal}
                            id="normal"
                            value="Figado está normal "
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Normal</Checkbox>
                    </Box>
                    <Box>
                        <Checkbox
                            disabled={checkValueHepatiteAguda.HepatiteAguda}
                            id="HepatiteAguda"
                            value="Hepatite Aguda "
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Hepatite Aguda
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox
                            disabled={checkValueHepatiteCronica.HepatiteCronica}
                            id="HepatiteCronica"
                            value="Hepatite Cronica"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Hepatopatia Crônica
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox
                            disabled={checkValueDimensoes.dimensoes}
                            id="dimensoes"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Dimensões
                        </Checkbox>
                        <Select
                            w='100%'
                            borderColor={corBordaDimensoes}
                            disabled={checkValueDimensoes.SelectDimensoes}
                            id="SelectDimensoes"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Dimesão Aumentadas'>Aumentadas</option>
                            <option value='Dimensão Reduzidas'>Reduzidas</option>
                        </Select>
                    </Box>
                    <Box>
                        <Checkbox
                            disabled={checkValueEsteatose.esteatose}
                            id="esteatose"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Esteatose
                        </Checkbox>
                        <Select
                            w='100%'
                            borderColor={corBordaEsteatose}
                            disabled={checkValueEsteatose.SelectEsteatose}
                            id="SelectEsteatose"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Esteatose Leve'>Leve</option>
                            <option value='Esteatose Moderada'>Moderada</option>
                            <option value='Esteatose Acentuada'>Acentuada</option>
                        </Select>
                    </Box>
                </Box>

            </Box>

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                borderBottom='1px'
                mt='20px'
                gap='25px'
                display='flex'
                flexWrap='wrap'
            >
                <Box
                    w='120px'>
                    <Checkbox
                        disabled={checkValueCalcificacao.calcificacao}
                        id="calcificacao"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Calcificação</Checkbox>
                    <Select
                        disabled={checkValueCalcificacao.SelectCalcificacao}
                        id="SelectCalcificacao"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >
                        <option value='' disabled selected>Selecione</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueCalcificacao.InputCalcificacao}
                        id="InputCalcificacao"
                        onBlur={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    w='120px'>
                    <Checkbox
                        disabled={checkValueCisto01.cisto01}
                        id="cisto01"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Cisto 01</Checkbox>
                    <Select
                        disabled={checkValueCisto01.SelectCisto01}
                        id="SelectCisto01"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}>
                        <option value='' disabled selected>Selecione</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueCisto01.InputCisto01}
                        id="InputCisto01"
                        onBlur={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    w='120px'>
                    <Checkbox
                        disabled={checkValueCisto02.cisto02}
                        id="cisto02"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Cisto 02</Checkbox>
                    <Select
                        disabled={checkValueCisto02.SelectCisto02}
                        id="SelectCisto02"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >
                        <option value='' disabled selected>Selecione</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueCisto02.InputCisto02}
                        id="InputCisto02"
                        onBlur={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    w='120px'>
                    <Checkbox
                        disabled={checkValueCisto03.cisto03}
                        id="cisto03"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Cisto 03</Checkbox>
                    <Select

                        disabled={checkValueCisto03.SelectCisto03}
                        id="SelectCisto03"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >
                        <option value='' disabled selected>Selecione</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueCisto03.InputCisto03}
                        id="InputCisto03"
                        onBlur={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    mb='10px'>
                    <Checkbox
                        disabled={checkValueMultiplosCistos.MultiplosCistos}
                        id="MultiplosCistos"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Múltiplos cistos, o maior:</Checkbox>
                    <Select
                        disabled={checkValueMultiplosCistos.SelectMultiplosCistos}
                        id="SelectMultiplosCistos"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >
                        <option value='' disabled selected>Selecione</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueMultiplosCistos.InputMultiplosCistos}
                        id="InputMultiplosCistos"
                        onBlur={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

            </Box>

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                mt='20px'
                gap='25px'
                display='flex'
                flexWrap='wrap'
            >

                <Box
                    w='150px'>
                    <Checkbox
                        disabled={checkValueNodulo01.nodulo01}
                        id="nodulo01"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Nódulo 01</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo01.SelectNodulo01}
                        id="SelectNodulo01"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Localizado</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueNodulo01.InputNodulo01}
                        id="InputNodulo01"
                        onBlur={(e) => { verificaCheckedNodulos(e.target) }}
                        placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo01.SelectNodulo01}
                        id="Select2Nodulo01"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo01.SelectNodulo01}
                        id="Select3Nodulo01"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Ecogenicidade</option>
                        <option value='Hippoecogenico'>Hipoecogênico</option>
                        <option value='Hiperecogênico'>Hiperecogênico</option>
                        <option value='Isoecogênico'>Isoecogênico</option>
                    </Select>
                </Box>

                <Box
                    w='150px'>
                    <Checkbox
                        disabled={checkValueNodulo02.nodulo02}
                        id="nodulo02"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Nódulo 02</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo02.SelectNodulo02}
                        id="SelectNodulo02"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Localizado</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueNodulo02.InputNodulo02}
                        id="InputNodulo02"
                        onBlur={(e) => { verificaCheckedNodulos(e.target) }}
                        placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo02.SelectNodulo02}
                        id="Select2Nodulo02"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo02.SelectNodulo02}
                        id="Select3Nodulo02"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Ecogenicidade</option>
                        <option value='Hippoecogenico'>Hipoecogênico</option>
                        <option value='Hiperecogênico'>Hiperecogênico</option>
                        <option value='Isoecogênico'>Isoecogênico</option>
                    </Select>
                </Box>

                <Box
                    w='150px'>
                    <Checkbox
                        disabled={checkValueNodulo03.nodulo03}
                        id="nodulo03"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Nódulo 03</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo03.SelectNodulo03}
                        id="SelectNodulo03"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Localizado</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueNodulo03.InputNodulo03}
                        id="InputNodulo03"
                        onBlur={(e) => { verificaCheckedNodulos(e.target) }}
                        placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo03.SelectNodulo03}
                        id="Select2Nodulo03"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulo03.SelectNodulo03}
                        id="Select3Nodulo03"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Ecogenicidade</option>
                        <option value='Hippoecogenico'>Hipoecogênico</option>
                        <option value='Hiperecogênico'>Hiperecogênico</option>
                        <option value='Isoecogênico'>Isoecogênico</option>
                    </Select>
                </Box>

                <Box >
                    <Checkbox
                        disabled={checkValueMultiplosNodulos.MultiplosNodulos}
                        id="multiplosNodulos"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Múltiplos Nódulos, o maior:</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueMultiplosNodulos.SelectMultiplosNodulos}
                        id="SelectMultiplosNodulos"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Localizado</option>
                        <option value='Segmento I'>Segmento I</option>
                        <option value='Segmento II'>Segmento II</option>
                        <option value='Segmento III'>Segmento III</option>
                        <option value='Segmento IV'>Segmento IV</option>
                        <option value='Segmento V'>Segmento V</option>
                        <option value='Segmento VI'>Segmento VI</option>
                        <option value='Segmento VII'>Segmento VII</option>
                        <option value='Segmento VIII'>Segmento VIII</option>
                    </Select>
                    <Input
                        mt='5px'
                        disabled={checkValueMultiplosNodulos.InputMultiplosNodulos}
                        id="InputMultiplosNodulos"
                        onBlur={(e) => { verificaCheckedNodulos(e.target) }} placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueMultiplosNodulos.SelectMultiplosNodulos}
                        id="Select2MultiplosNodulos"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueMultiplosNodulos.SelectMultiplosNodulos}
                        id="Select3MultiplosNodulos"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Ecogenicidade</option>
                        <option value='Hippoecogenico'>Hipoecogênico</option>
                        <option value='Hiperecogênico'>Hiperecogênico</option>
                        <option value='Isoecogênico'>Isoecogênico</option>
                    </Select>
                </Box>

            </Box>
        </Box >
    );
}

export default Figado;