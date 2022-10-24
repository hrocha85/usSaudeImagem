import { Box, Checkbox, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { useContext, useEffect, useState } from 'react';
import { LaudosContext } from '../../../../context/LuadosContext';
import { NormalContext } from "../../../../context/NormalContext";

function Bexiga() {
    const altura = '100%'
    const largura = '66%'

    let esforco = document.querySelector('#esforco') as HTMLInputElement
    let vazia = document.querySelector('#vazia') as HTMLInputElement
    let OmitirBexiga = document.querySelector('#OmitirBexiga') as HTMLInputElement
    let CalculoMede = document.querySelector('#CalculoMede') as HTMLInputElement
    let InputCalculoMede = document.querySelector('#InputCalculoMede') as HTMLInputElement
    let DiverticuloMede = document.querySelector('#DiverticuloMede') as HTMLInputElement
    let InputDiverticuloMede = document.querySelector('#InputDiverticuloMede') as HTMLInputElement
    let UretroceleMede = document.querySelector('#UretroceleMede') as HTMLInputElement
    let InputUretroceleMede = document.querySelector('#InputUretroceleMede') as HTMLInputElement

    const { laudoNormal } = useContext(NormalContext);
    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [valueInputCalculoMede, setValueInputCalculoMede] = useState('')
    const [valueInputDiverticuloMede, setValueInputDiverticuloMede] = useState('')
    const [valueInputUretroceleMede, setValueInputUretroceleMede] = useState('')

    const [defaultValueNormal, setDefaultValueNormal] = useState({
        defaultValueNormal: false,
    })

    const [checkValueNormal, setCheckvalueNormal] = useState({
        normal: false,
    })

    const [checkValueEsforco, setCheckvalueEsforco] = useState({
        esforco: false,
    })

    const [checkValueVazia, setCheckvalueVazia] = useState({
        vazia: false,
    })

    const [checkValueCalculoMede, setCheckvalueoCalculoMede] = useState({
        CalculoMede: false,
        InputCalculoMede: true
    })

    const [checkValueOmitirBexiga, setCheckvalueoOmitirBexiga] = useState({
        OmitirBexiga: false,
    })
    const [checkValueUretroceleMede, setCheckvalueoUretroceleMede] = useState({
        UretroceleMede: false,
        InputUretroceleMede: true
    })
    const [checkValueDiverticuloMede, setCheckvalueoDiverticuloMede] = useState({
        DiverticuloMede: false,
        InputDiverticuloMede: true
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

    const DeterminaCondicaoCheckNormal = () => {
        if (esforco.checked === true ||
            vazia.checked === true || OmitirBexiga.checked === true ||
            CalculoMede.checked === true || DiverticuloMede.checked === true ||
            UretroceleMede.checked === true) {
            setCheckvalueNormal({
                normal: true
            })
        } else {
            setCheckvalueNormal({
                normal: false
            })
        }
    }

    useEffect(() => {
        if (laudoNormal === true) {
            setDefaultValueNormal({ defaultValueNormal: true })
            criarString('Aorta Normal ')
            setCheckvalueEsforco({
                esforco: true
            })
            setCheckvalueVazia({
                vazia: true
            })
            setCheckvalueoOmitirBexiga({
                OmitirBexiga: true
            })
            setCheckvalueoCalculoMede({
                CalculoMede: true,
                InputCalculoMede: true
            })
            setCheckvalueoUretroceleMede({
                UretroceleMede: true,
                InputUretroceleMede: true
            })
            setCheckvalueoDiverticuloMede({
                DiverticuloMede: true,
                InputDiverticuloMede: true
            })
        } else {
            setDefaultValueNormal({ defaultValueNormal: false })
            setCheckvalueEsforco({
                esforco: false
            })
            setCheckvalueVazia({
                vazia: false
            })
            setCheckvalueoOmitirBexiga({
                OmitirBexiga: false
            })
            setCheckvalueoCalculoMede({
                CalculoMede: false,
                InputCalculoMede: true
            })
            setCheckvalueoUretroceleMede({
                UretroceleMede: false,
                InputUretroceleMede: true
            })
            setCheckvalueoDiverticuloMede({
                DiverticuloMede: false,
                InputDiverticuloMede: true
            })
        }
    }, [laudoNormal])


    const verificaChecked = (value) => {
        switch (value.id) {
            case 'normal':
                if (value.checked === true) {
                    setDefaultValueNormal({ defaultValueNormal: true })
                    criarString(value.value)
                    setCheckvalueEsforco({
                        esforco: true
                    })
                    setCheckvalueVazia({
                        vazia: true
                    })
                    setCheckvalueoOmitirBexiga({
                        OmitirBexiga: true
                    })
                    setCheckvalueoCalculoMede({
                        CalculoMede: true,
                        InputCalculoMede: true
                    })
                    setCheckvalueoUretroceleMede({
                        UretroceleMede: true,
                        InputUretroceleMede: true
                    })
                    setCheckvalueoDiverticuloMede({
                        DiverticuloMede: true,
                        InputDiverticuloMede: true
                    })
                } else {
                    setDefaultValueNormal({ defaultValueNormal: false })
                    removeItemString(value.value)
                    setCheckvalueEsforco({
                        esforco: false
                    })
                    setCheckvalueVazia({
                        vazia: false
                    })
                    setCheckvalueoOmitirBexiga({
                        OmitirBexiga: false
                    })
                    setCheckvalueoCalculoMede({
                        CalculoMede: false,
                        InputCalculoMede: true
                    })
                    setCheckvalueoUretroceleMede({
                        UretroceleMede: false,
                        InputUretroceleMede: true
                    })
                    setCheckvalueoDiverticuloMede({
                        DiverticuloMede: false,
                        InputDiverticuloMede: true
                    })
                }

                break
            case 'esforco':
                if (value.checked === true) {
                    criarString(value.value)
                } else {
                    removeItemString(value.value)
                }
                DeterminaCondicaoCheckNormal()
                break
            case 'vazia':
                if (value.checked === true) {
                    criarString(value.value)
                } else {
                    removeItemString(value.value)
                }
                DeterminaCondicaoCheckNormal()
                break
            case 'OmitirBexiga':
                if (value.checked === true) {
                    criarString(value.value)
                } else {
                    removeItemString(value.value)
                }
                DeterminaCondicaoCheckNormal()
                break
            case 'CalculoMede':
                if (value.checked === true) {
                    setCheckvalueoCalculoMede({
                        CalculoMede: false,
                        InputCalculoMede: false
                    })
                } else {
                    setCheckvalueoCalculoMede({
                        CalculoMede: false,
                        InputCalculoMede: true
                    })
                    InputCalculoMede.value = ''
                    removeItemString(valueInputCalculoMede)
                }
                DeterminaCondicaoCheckNormal()
                break
            case 'InputCalculoMede':
                const fraseCalculoMede = `Calculo mede ${value.value} mm`
                setValueInputCalculoMede(fraseCalculoMede)
                criarString(fraseCalculoMede)
                break
            case 'DiverticuloMede':
                if (value.checked === true) {
                    setCheckvalueoDiverticuloMede({
                        DiverticuloMede: false,
                        InputDiverticuloMede: false
                    })
                } else {
                    setCheckvalueoDiverticuloMede({
                        DiverticuloMede: false,
                        InputDiverticuloMede: true
                    })
                    InputDiverticuloMede.value = ''
                    removeItemString(valueInputDiverticuloMede)
                }
                DeterminaCondicaoCheckNormal()
                break
            case 'InputDiverticuloMede':
                const fraseDiverticuloMede = `Diverticulo mede ${value.value} mm`
                setValueInputDiverticuloMede(fraseDiverticuloMede)
                criarString(fraseDiverticuloMede)
                break
            case 'UretroceleMede':
                if (value.checked === true) {
                    setCheckvalueoUretroceleMede({
                        UretroceleMede: false,
                        InputUretroceleMede: false
                    })
                } else {
                    setCheckvalueoUretroceleMede({
                        UretroceleMede: false,
                        InputUretroceleMede: true
                    })
                    InputUretroceleMede.value = ''
                    removeItemString(valueInputUretroceleMede)
                }
                DeterminaCondicaoCheckNormal()
                break
            case 'InputUretroceleMede':
                const fraseUretroceleMede = `Uretrocele mede ${value.value} mm`
                setValueInputUretroceleMede(fraseUretroceleMede)
                criarString(fraseUretroceleMede)
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
            padding='24px 15px 20px 15px'
            mt='15px'
        >
            <Box
                borderBottom='1px'>

                <TituloNomeExame titulo='Bexiga' />

                <Box
                    mb='20px'
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mt='20px'>
                    <Checkbox
                        isChecked={defaultValueNormal.defaultValueNormal}
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='normal'
                        value='Bexiga normal'
                        disabled={checkValueNormal.normal}
                    >Normal</Checkbox>
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='esforco'
                        value='de esforço'
                        disabled={checkValueEsforco.esforco}
                    >De Esforço</Checkbox>
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='vazia'
                        value='Bexiga Vazia'
                        disabled={checkValueVazia.vazia}
                    >Vazia</Checkbox>
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='OmitirBexiga'
                        value='Omitir Bexiga'
                        disabled={checkValueOmitirBexiga.OmitirBexiga}
                    >Omitir Bexiga</Checkbox>
                </Box>

            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box
                gap='30px'
                display='flex'
                flexWrap='wrap'
                mt='20px'
            >
                <Box w='200px' >
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='CalculoMede'
                        disabled={checkValueCalculoMede.CalculoMede}
                    >Cálculo mede:</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputCalculoMede'
                        disabled={checkValueCalculoMede.InputCalculoMede}
                        w='150px' placeholder='mm' />
                </Box>

                <Box w='200px'  >
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='DiverticuloMede'
                        disabled={checkValueDiverticuloMede.DiverticuloMede}
                    >Diverticulo mede:</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputDiverticuloMede'
                        disabled={checkValueDiverticuloMede.InputDiverticuloMede}
                        w='150px' placeholder='mm' />
                </Box>

                <Box w='200px'>
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='UretroceleMede'
                        disabled={checkValueUretroceleMede.UretroceleMede}
                    >Uretrocele mede:</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputUretroceleMede'
                        disabled={checkValueUretroceleMede.InputUretroceleMede}
                        w='150px' placeholder='mm' />
                </Box>
            </Box>
        </Box >
    );
}

export default Bexiga;