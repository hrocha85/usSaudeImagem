import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useState } from "react";

function Cisto() {
    const altura = '100%'
    const largura = '66%'

    let inputCisto01 = document.querySelector('#InputCisto01') as HTMLInputElement
    let selectCisto01 = document.querySelector('#SelectCisto01') as HTMLInputElement
    let select2Cisto01 = document.querySelector('#Select2Cisto01') as HTMLInputElement


    let inputCisto02 = document.querySelector('#InputCisto02') as HTMLInputElement
    let selectCisto02 = document.querySelector('#SelectCisto02') as HTMLInputElement
    let select2Cisto02 = document.querySelector('#Select2Cisto02') as HTMLInputElement

    let inputCisto03 = document.querySelector('#InputCisto03') as HTMLInputElement
    let selectCisto03 = document.querySelector('#SelectCisto03') as HTMLInputElement
    let select2Cisto03 = document.querySelector('#Select2Cisto03') as HTMLInputElement

    let inputCisto04 = document.querySelector('#InputCisto04') as HTMLInputElement
    let selectCisto04 = document.querySelector('#SelectCisto04') as HTMLInputElement
    let select2Cisto04 = document.querySelector('#Select2Cisto04') as HTMLInputElement


    let inputMultiplosEsquerdo = document.querySelector('#InputMultiplosEsquerdo') as HTMLInputElement
    let selectMultiplosEsquerdo = document.querySelector('#SelectMultiplosEsquerdo') as HTMLInputElement

    let inputMultiplosDireito = document.querySelector('#InputMultiplosDireito') as HTMLInputElement
    let selectMultiplosDireito = document.querySelector('#SelectMultiplosDireito') as HTMLInputElement

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [fraseCisto01, setFraseCisto01] = useState('')
    const [valueInputCisto01, setValueInputCisto01] = useState('')
    const [valueSelectCisto01, setValueSelectCisto01] = useState('')

    const [fraseCisto02, setFraseCisto02] = useState('')
    const [valueInputCisto02, setValueInputCisto02] = useState('')
    const [valueSelectCisto02, setValueSelectCisto02] = useState('')

    const [fraseCisto03, setFraseCisto03] = useState('')
    const [valueInputCisto03, setValueInputCisto03] = useState('')
    const [valueSelectCisto03, setValueSelectCisto03] = useState('')

    const [fraseCisto04, setFraseCisto04] = useState('')
    const [valueInputCisto04, setValueInputCisto04] = useState('')
    const [valueSelectCisto04, setValueSelectCisto04] = useState('')

    const [fraseMultiplosDireito, setFraseMultiplosDireito] = useState('')
    const [valueInputMultiplosDireito, setValueInputMultiplosDireito] = useState('')

    const [fraseMultiplosEsquerdo, setFraseMultiplosEsquerdo] = useState('')
    const [valueInputMultiplosEsquerdo, setValueInputMultiplosEsquerdo] = useState('')


    const [checkValueCisto01, setValueCisto01] = useState({
        InputCisto01: true,
        SelectCisto01: true
    })
    const [checkValueCisto02, setValueCisto02] = useState({
        InputCisto02: true,
        SelectCisto02: true
    })
    const [checkValueCisto03, setValueCisto03] = useState({
        InputCisto03: true,
        SelectCisto03: true
    })
    const [checkValueCisto04, setValueCisto04] = useState({
        InputCisto04: true,
        SelectCisto04: true
    })
    const [checkValueRimPolicistico, setValueRimPolicistico] = useState({
        SelectRimPolicistico: true
    })
    const [checkValueMultiplosDireito, setValueMultiplosDireito] = useState({
        InputMultiplosDireito: true,
        SelectMultiplosDireito: true
    })
    const [checkValueMultiplosEsquerdo, setValueMultiplosEsquerdo] = useState({
        InputMultiplosEsquerdo: true,
        SelectMultiplosEsquerdo: true
    })

    const criaValorCisto01 = (value) => {
        let dadoSelect2Cisto01 = value
        const frase = 'Cisto 01 com ' +
            valueInputCisto01 + ' mm Localizado no ' + valueSelectCisto01 +
            ' do ' + dadoSelect2Cisto01
        setLaudoPrin(arr => [...arr, frase])
        setFraseCisto01(frase)
    }

    const removeStringCisto01 = () => {
        const index = laudoPrin.indexOf(fraseCisto01)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCisto01.value = ''
        selectCisto01.value = ''
        select2Cisto01.value = ''
    }

    const criaValorCisto02 = (value) => {
        let dadoSelect2Cisto02 = value
        const frase = 'Cisto 02 com ' +
            valueInputCisto02 + ' mm Localizado no ' + valueSelectCisto02 +
            ' do ' + dadoSelect2Cisto02
        setLaudoPrin(arr => [...arr, frase])
        setFraseCisto02(frase)
    }

    const removeStringCisto02 = () => {
        const index = laudoPrin.indexOf(fraseCisto02)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCisto02.value = ''
        selectCisto02.value = ''
        select2Cisto02.value = ''
    }

    const criaValorCisto03 = (value) => {
        let dadoSelect2Cisto03 = value
        const frase = 'Cisto 03 com ' +
            valueInputCisto03 + ' mm Localizado no ' + valueSelectCisto03 +
            ' do ' + dadoSelect2Cisto03
        setLaudoPrin(arr => [...arr, frase])
        setFraseCisto03(frase)
    }

    const removeStringCisto03 = () => {
        const index = laudoPrin.indexOf(fraseCisto03)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }

    }

    const criaValorCisto04 = (value) => {
        let dadoSelect2Cisto04 = value
        const frase = 'Cisto 04 com ' +
            valueInputCisto04 + ' mm Localizado no ' + valueSelectCisto04 +
            ' do ' + dadoSelect2Cisto04
        setLaudoPrin(arr => [...arr, frase])
        setFraseCisto04(frase)
    }

    const removeStringCisto04 = () => {
        const index = laudoPrin.indexOf(fraseCisto04)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCisto04.value = ''
        selectCisto04.value = ''
        select2Cisto04.value = ''
    }
    const criaValorMultiplosDireito = (value) => {
        let dadoSelect2MultiplosDireito = value
        const frase = 'Multiplos Cistos no LOBO DIREITO com ' +
            valueInputMultiplosDireito + ' mm Localizado no ' + dadoSelect2MultiplosDireito
        setLaudoPrin(arr => [...arr, frase])
        setFraseMultiplosDireito(frase)
    }

    const removeStringMultiplosDireito = () => {
        const index = laudoPrin.indexOf(fraseMultiplosDireito)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputMultiplosDireito.value = ''
        selectMultiplosDireito.value = ''
    }
    const criaValorMultiplosEsquerdo = (value) => {
        let dadoSelect2MultiplosEsquerdo = value
        const frase = 'Multiplos Cistos no LOBO ESQUERDO com ' +
            valueInputMultiplosEsquerdo + ' mm Localizado no ' + dadoSelect2MultiplosEsquerdo
        setLaudoPrin(arr => [...arr, frase])
        setFraseMultiplosEsquerdo(frase)
    }

    const removeStringMultiplosEsquerdo = () => {
        const index = laudoPrin.indexOf(fraseMultiplosEsquerdo)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputMultiplosEsquerdo.value = ''
        selectMultiplosEsquerdo.value = ''
    }

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

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'cisto01':
                if (value.checked === true) {
                    setValueCisto01({
                        InputCisto01: false,
                        SelectCisto01: false
                    })
                } else {
                    setValueCisto01({
                        InputCisto01: true,
                        SelectCisto01: true
                    })
                    removeStringCisto01()
                }
                break
            case 'InputCisto01':
                setValueInputCisto01(value.value)
                break
            case 'SelectCisto01':
                setValueSelectCisto01(value.value)
                break
            case 'Select2Cisto01':
                criaValorCisto01(value.value)
                break
            case 'cisto02':
                if (value.checked === true) {
                    setValueCisto02({
                        InputCisto02: false,
                        SelectCisto02: false
                    })
                } else {
                    setValueCisto02({
                        InputCisto02: true,
                        SelectCisto02: true
                    })
                    removeStringCisto02()
                }
                break
            case 'InputCisto02':
                setValueInputCisto02(value.value)
                break
            case 'SelectCisto02':
                setValueSelectCisto02(value.value)
                break
            case 'Select2Cisto02':
                criaValorCisto02(value.value)
                break
            case 'cisto03':
                if (value.checked === true) {
                    setValueCisto03({
                        InputCisto03: false,
                        SelectCisto03: false
                    })
                } else {
                    setValueCisto03({
                        InputCisto03: true,
                        SelectCisto03: true
                    })
                    removeStringCisto03()
                    inputCisto03.value = ''
                    selectCisto03.value = ''
                    select2Cisto03.value = ''
                }
                break
            case 'InputCisto03':
                setValueInputCisto03(value.value)
                break
            case 'SelectCisto03':
                setValueSelectCisto03(value.value)
                break
            case 'Select2Cisto03':
                criaValorCisto03(value.value)
                break
            case 'cisto04':
                if (value.checked === true) {
                    setValueCisto04({
                        InputCisto04: false,
                        SelectCisto04: false
                    })
                } else {
                    setValueCisto04({
                        InputCisto04: true,
                        SelectCisto04: true
                    })
                    removeStringCisto04()
                }
                break
            case 'InputCisto04':
                setValueInputCisto04(value.value)
                break
            case 'SelectCisto04':
                setValueSelectCisto04(value.value)
                break
            case 'Select2Cisto04':
                criaValorCisto04(value.value)
                break
            case 'RimPolicistico':
                if (value.checked === true) {
                    setValueRimPolicistico({
                        SelectRimPolicistico: false
                    })
                } else {
                    setValueRimPolicistico({
                        SelectRimPolicistico: true
                    })
                    removeItemString('Rim Direito')
                    removeItemString('Rim Esquerdo')
                    removeItemString('Bilateral')
                }
                break
            case 'SelectRimPolicistico':
                if (value.value === 'Rim Direito') {
                    criarString(value.value)
                    removeItemString('Rim Esquerdo')
                    removeItemString('Bilateral')
                } else if (value.value === 'Rim Direito') {
                    criarString(value.value)
                    removeItemString('Rim Direito')
                    removeItemString('Bilateral')
                } else {
                    criarString(value.value)
                    removeItemString('Rim Direito')
                    removeItemString('Rim Esquerdo')
                }

                break

            case 'MultiplosRimDireito':
                if (value.checked === true) {
                    setValueMultiplosDireito({
                        InputMultiplosDireito: false,
                        SelectMultiplosDireito: false
                    })
                } else {
                    setValueMultiplosDireito({
                        InputMultiplosDireito: true,
                        SelectMultiplosDireito: true
                    })
                    removeStringMultiplosDireito()
                }
                break
            case 'InputMultiplosDireito':
                setValueInputMultiplosDireito(value.value)
                break
            case 'SelectMultiplosDireito':
                criaValorMultiplosDireito(value.value)
                break

            case 'MultiplosRimEsquerdo':
                if (value.checked === true) {
                    setValueMultiplosEsquerdo({
                        InputMultiplosEsquerdo: false,
                        SelectMultiplosEsquerdo: false
                    })
                } else {
                    setValueMultiplosEsquerdo({
                        InputMultiplosEsquerdo: true,
                        SelectMultiplosEsquerdo: true
                    })
                    removeStringMultiplosEsquerdo()
                }
                break
            case 'InputMultiplosEsquerdo':
                setValueInputMultiplosEsquerdo(value.value)
                break
            case 'SelectMultiplosEsquerdo':
                criaValorMultiplosEsquerdo(value.value)
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
                borderBottom='1px'
                mb='20px'>
                <TituloNomeExame titulo='Cisto' />
                <Box
                    mt='10px'
                    mb='30px'
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                >
                    <Box w='125px' >
                        <Checkbox
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='cisto01'
                        >Cisto 01</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            disabled={checkValueCisto01.InputCisto01}
                            id='InputCisto01'
                            placeholder='mm' />
                        <Select
                            disabled={checkValueCisto01.SelectCisto01}
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCisto01'
                            mt='5px'
                            w='125px'>
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Cisto01'
                            disabled={checkValueCisto01.SelectCisto01}
                            mt='5px'
                            w='125px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='125px' >
                        <Checkbox
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='cisto02'>Cisto 02</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            id='InputCisto02'
                            disabled={checkValueCisto02.InputCisto02}
                            placeholder='mm' />
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCisto02'
                            disabled={checkValueCisto02.SelectCisto02}
                            mt='5px'
                            w='125px'>
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Cisto02'
                            disabled={checkValueCisto02.SelectCisto02}
                            mt='5px'
                            w='125px' >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='125px' >
                        <Checkbox
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='cisto03'>
                            Cisto 03</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            id='InputCisto03'
                            disabled={checkValueCisto03.InputCisto03}
                            placeholder='mm' />
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCisto03'
                            disabled={checkValueCisto03.SelectCisto03}
                            mt='5px'
                        >
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Cisto03'
                            mt='5px'
                            disabled={checkValueCisto03.SelectCisto03}
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='125px'  >
                        <Checkbox
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='cisto04'>
                            Cisto 04</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            id='InputCisto04'
                            disabled={checkValueCisto04.InputCisto04}
                            placeholder='mm' />
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCisto04'
                            disabled={checkValueCisto04.SelectCisto04}
                            mt='5px'
                        >
                            <option value='' disabled selected>No</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                            <option value='parapielico'>Parapiélico</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Cisto04'
                            mt='5px'
                            disabled={checkValueCisto04.SelectCisto04}
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='rimDireito'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='200px' >
                        <Checkbox
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='RimPolicistico'
                        >Rim Policístico</Checkbox>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectRimPolicistico'
                            disabled={checkValueRimPolicistico.SelectRimPolicistico}
                            w='160px'>
                            <option value='' disabled selected>Selecione</option>
                            <option value='Rim Direito'>Rim direito</option>
                            <option value='Rim Esquerdo'>Rim esquerdo</option>
                            <option value='Bilateral'>Bilateral</option>
                        </Select>
                    </Box>
                </Box>
            </Box >

            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >
                <Box w='400px' >
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='MultiplosRimDireito'
                    >Múltiplos cistos no LOBO DIREITO, o maior mede</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputMultiplosDireito'
                        disabled={checkValueMultiplosDireito.InputMultiplosDireito}
                        placeholder='mm'
                        w='200px' />
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='SelectMultiplosDireito'
                        mt='5px'
                        w='200px'
                        disabled={checkValueMultiplosDireito.SelectMultiplosDireito}
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                        <option value='parapielico'>Parapiélico</option>
                    </Select>
                </Box>

                <Box w='400px' >
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='MultiplosRimEsquerdo'
                    >Múltiplos cistos no LOBO ESQUERDO, o maior mede</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputMultiplosEsquerdo'
                        disabled={checkValueMultiplosEsquerdo.InputMultiplosEsquerdo}
                        placeholder='mm'
                        w='200px' />
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='SelectMultiplosEsquerdo'
                        mt='5px'
                        w='200px'
                        disabled={checkValueMultiplosEsquerdo.SelectMultiplosEsquerdo}
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                        <option value='parapielico'>Parapiélico</option>
                    </Select>
                </Box>
            </Box>
        </Box >
    );
}

export default Cisto;