import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useState } from "react";

function Calculos() {
    const altura = '100%'
    const largura = '66%'

    let inputCalculo01 = document.querySelector('#InputCalculo01') as HTMLInputElement
    let selectCalculo01 = document.querySelector('#SelectCalculo01') as HTMLInputElement
    let select2Calculo01 = document.querySelector('#Select2Calculo01') as HTMLInputElement

    let inputCalculo02 = document.querySelector('#InputCalculo02') as HTMLInputElement
    let selectCalculo02 = document.querySelector('#SelectCalculo02') as HTMLInputElement
    let select2Calculo02 = document.querySelector('#Select2Calculo02') as HTMLInputElement

    let inputCalculo03 = document.querySelector('#InputCalculo03') as HTMLInputElement
    let selectCalculo03 = document.querySelector('#SelectCalculo03') as HTMLInputElement
    let select2Calculo03 = document.querySelector('#Select2Calculo03') as HTMLInputElement

    let inputCalculo04 = document.querySelector('#InputCalculo04') as HTMLInputElement
    let selectCalculo04 = document.querySelector('#SelectCalculo04') as HTMLInputElement
    let select2Calculo04 = document.querySelector('#Select2Calculo04') as HTMLInputElement

    let inputMultiplosDireito = document.querySelector('#InputMultiplosDireito') as HTMLInputElement
    let selectMultiplosDireito = document.querySelector('#SelectMultiplosDireito') as HTMLInputElement
    let select2MultiplosDireito = document.querySelector('#Select2MultiplosDireito') as HTMLInputElement

    let inputMultiplosEsquerdo = document.querySelector('#InputMultiplosEsquerdo') as HTMLInputElement
    let selectMultiplosEsquerdo = document.querySelector('#SelectMultiplosEsquerdo') as HTMLInputElement
    let select2MultiplosEsquerdo = document.querySelector('#Select2MultiplosEsquerdo') as HTMLInputElement

    let inputCalculoUreteral = document.querySelector('#InputCalculoUreteral') as HTMLInputElement
    let selectCalculoUreteral = document.querySelector('#SelectCalculoUreteral') as HTMLInputElement
    let select2CalculoUreteral = document.querySelector('#Select2CalculoUreteral') as HTMLInputElement

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [fraseCalculo01, setFraseCalculo01] = useState('')

    const [valueInputCalculo01, setValueInputCalculo01] = useState('')
    const [valueSelectCalculo01, setValueSelectCalculo01] = useState('')

    const [fraseCalculo02, setFraseCalculo02] = useState('')
    const [valueInputCalculo02, setValueInputCalculo02] = useState('')
    const [valueSelectCalculo02, setValueSelectCalculo02] = useState('')

    const [fraseCalculo03, setFraseCalculo03] = useState('')
    const [valueInputCalculo03, setValueInputCalculo03] = useState('')
    const [valueSelectCalculo03, setValueSelectCalculo03] = useState('')

    const [fraseCalculo04, setFraseCalculo04] = useState('')
    const [valueInputCalculo04, setValueInputCalculo04] = useState('')
    const [valueSelectCalculo04, setValueSelectCalculo04] = useState('')

    const [fraseMultiplosDireito, setFraseMultiplosDireito] = useState('')
    const [valueInputMultiplosDireito, setValueInputMultiplosDireito] = useState('')
    const [valueSelectMultiplosDireito, setValueSelectMultiplosDireito] = useState('')

    const [fraseMultiplosEsquerdo, setFraseMultiplosEsquerdo] = useState('')
    const [valueInputMultiplosEsquerdo, setValueInputMultiplosEsquerdo] = useState('')
    const [valueSelectMultiplosEsquerdo, setValueSelectMultiplosEsquerdo] = useState('')

    const [fraseCalculoUreteral, setFraseCalculoUreteral] = useState('')
    const [valueInputCalculoUreteral, setValueInputCalculoUreteral] = useState('')
    const [valueSelectCalculoUreteral, setValueSelectCalculoUreteral] = useState('')

    const [valueCalculo01, setValueCalculo01] = useState({
        checkboxCalculo01: false,
        inputCalculo01: true,
        selectCalculo01: true
    })
    const [valueCalculo02, setValueCalculo02] = useState({
        checkboxCalculo02: false,
        inputCalculo02: true,
        selectCalculo02: true
    })
    const [valueCalculo03, setValueCalculo03] = useState({
        checkboxCalculo03: false,
        inputCalculo03: true,
        selectCalculo03: true
    })
    const [valueCalculo04, setValueCalculo04] = useState({
        checkboxCalculo04: false,
        inputCalculo04: true,
        selectCalculo04: true
    })

    const [valueMultiplosDireito, setValueMultiplosDireito] = useState({
        checkboxMultiplosDireito: false,
        inputMultiplosDireito: true,
        selectMultiplosDireito: true
    })
    const [valueMultiplosEsquerdo, setValueMultiplosEsquerdo] = useState({
        checkboxMultiplosEsquerdo: false,
        inputMultiplosEsquerdo: true,
        selectMultiplosEsquerdo: true
    })
    const [valueCalculoUreteral, setValueCalculoUreteral] = useState({
        checkboxCalculoUreteral: false,
        inputCalculoUreteral: true,
        selectCalculoUreteral: true
    })

    const criaValorCalculo01 = (value) => {
        let dadoSelect3Calculo01 = value
        const frase = 'Cálculo 01 com ' +
            valueInputCalculo01 + ' mm Localizado no ' + valueSelectCalculo01 +
            ' do ' + dadoSelect3Calculo01
        setLaudoPrin(arr => [...arr, frase])
        setFraseCalculo01(frase)
    }

    const removeStringCalculo01 = () => {
        const index = laudoPrin.indexOf(fraseCalculo01)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCalculo01.value = ''
        selectCalculo01.value = ''
        select2Calculo01.value = ''
    }
    const criaValorCalculo02 = (value) => {
        let dadoSelect3Calculo02 = value
        const frase = 'Cálculo 02 com ' +
            valueInputCalculo02 + ' mm Localizado no ' + valueSelectCalculo02 +
            ' do ' + dadoSelect3Calculo02
        setLaudoPrin(arr => [...arr, frase])
        setFraseCalculo02(frase)
    }

    const removeStringCalculo02 = () => {
        const index = laudoPrin.indexOf(fraseCalculo02)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCalculo02.value = ''
        selectCalculo02.value = ''
        select2Calculo02.value = ''
    }
    const criaValorCalculo03 = (value) => {
        let dadoSelect3Calculo03 = value
        const frase = 'Cálculo 03 com ' +
            valueInputCalculo03 + ' mm Localizado no ' + valueSelectCalculo03 +
            ' do ' + dadoSelect3Calculo03
        setLaudoPrin(arr => [...arr, frase])
        setFraseCalculo03(frase)
    }
    const removeStringCalculo03 = () => {
        const index = laudoPrin.indexOf(fraseCalculo03)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCalculo03.value = ''
        selectCalculo03.value = ''
        select2Calculo03.value = ''
    }

    const criaValorCalculo04 = (value) => {
        let dadoSelect3Calculo04 = value
        const frase = 'Cálculo 04 com ' +
            valueInputCalculo04 + ' mm Localizado no ' + valueSelectCalculo04 +
            ' do ' + dadoSelect3Calculo04
        setLaudoPrin(arr => [...arr, frase])
        setFraseCalculo04(frase)
    }
    const removeStringCalculo04 = () => {
        const index = laudoPrin.indexOf(fraseCalculo04)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCalculo04.value = ''
        selectCalculo04.value = ''
        select2Calculo04.value = ''
    }
    const criaValorMultiplosDireito = (value) => {
        let dadoSelect3MultiplosDireito = value
        const frase = 'Multiplos Calculos com ' +
            valueInputMultiplosDireito + ' mm Localizado no ' + valueSelectMultiplosDireito +
            ' do ' + dadoSelect3MultiplosDireito
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
        select2MultiplosDireito.value = ''
    }
    const criaValorMultiplosEsquerdo = (value) => {
        let dadoSelect3MultiplosEsquerdo = value
        const frase = 'Multiplos Calculos com ' +
            valueInputMultiplosEsquerdo + ' mm Localizado no ' + valueSelectMultiplosEsquerdo +
            ' do ' + dadoSelect3MultiplosEsquerdo
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
        select2MultiplosEsquerdo.value = ''
    }
    const criaValorCalculoUreteral = (value) => {
        let dadoSelect3CalculoUreteral = value
        const frase = 'Multiplos Calculos com ' +
            valueInputCalculoUreteral + ' mm Localizado no ' + valueSelectCalculoUreteral +
            ' do ' + dadoSelect3CalculoUreteral
        setLaudoPrin(arr => [...arr, frase])
        setFraseCalculoUreteral(frase)
    }
    const removeStringCalculoUreteral = () => {
        const index = laudoPrin.indexOf(fraseCalculoUreteral)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        inputCalculoUreteral.value = ''
        selectCalculoUreteral.value = ''
        select2CalculoUreteral.value = ''
    }

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'Calculo01':
                if (value.checked === true) {
                    setValueCalculo01({
                        checkboxCalculo01: false,
                        inputCalculo01: false,
                        selectCalculo01: false
                    })
                } else {
                    setValueCalculo01({
                        checkboxCalculo01: false,
                        inputCalculo01: true,
                        selectCalculo01: true
                    })
                    removeStringCalculo01()
                }
                break
            case 'InputCalculo01':
                setValueInputCalculo01(value.value)
                break
            case 'SelectCalculo01':
                setValueSelectCalculo01(value.value)
                break
            case 'Select2Calculo01':
                criaValorCalculo01(value.value)
                break
            case 'Calculo02':
                if (value.checked === true) {
                    setValueCalculo02({
                        checkboxCalculo02: false,
                        inputCalculo02: false,
                        selectCalculo02: false
                    })
                } else {
                    setValueCalculo02({
                        checkboxCalculo02: false,
                        inputCalculo02: true,
                        selectCalculo02: true
                    })
                    removeStringCalculo02()
                }
                break
            case 'InputCalculo02':
                setValueInputCalculo02(value.value)
                break
            case 'SelectCalculo02':
                setValueSelectCalculo02(value.value)
                break
            case 'Select2Calculo02':
                criaValorCalculo02(value.value)
                break
            case 'Calculo03':
                if (value.checked === true) {
                    setValueCalculo03({
                        checkboxCalculo03: false,
                        inputCalculo03: false,
                        selectCalculo03: false
                    })
                } else {
                    setValueCalculo03({
                        checkboxCalculo03: false,
                        inputCalculo03: true,
                        selectCalculo03: true
                    })
                    removeStringCalculo03()
                }
                break
            case 'InputCalculo03':
                setValueInputCalculo03(value.value)
                break
            case 'SelectCalculo03':
                setValueSelectCalculo03(value.value)
                break
            case 'Select2Calculo03':
                criaValorCalculo03(value.value)
                break
            case 'Calculo04':
                if (value.checked === true) {
                    setValueCalculo04({
                        checkboxCalculo04: false,
                        inputCalculo04: false,
                        selectCalculo04: false
                    })
                } else {
                    setValueCalculo04({
                        checkboxCalculo04: false,
                        inputCalculo04: true,
                        selectCalculo04: true
                    })
                    removeStringCalculo04()
                }
                break
            case 'InputCalculo04':
                setValueInputCalculo04(value.value)
                break
            case 'SelectCalculo04':
                setValueSelectCalculo04(value.value)
                break
            case 'Select2Calculo04':
                criaValorCalculo04(value.value)
                break
            case 'MultiplosDireito':
                if (value.checked === true) {
                    setValueMultiplosDireito({
                        checkboxMultiplosDireito: false,
                        inputMultiplosDireito: false,
                        selectMultiplosDireito: false
                    })
                } else {
                    setValueMultiplosDireito({
                        checkboxMultiplosDireito: false,
                        inputMultiplosDireito: true,
                        selectMultiplosDireito: true
                    })
                    removeStringMultiplosDireito()
                }
                break
            case 'InputMultiplosDireito':
                setValueInputMultiplosDireito(value.value)
                break
            case 'SelectMultiplosDireito':
                setValueSelectMultiplosDireito(value.value)
                break
            case 'Select2MultiplosDireito':
                criaValorMultiplosDireito(value.value)
                break
            case 'MultiplosEsquerdo':
                if (value.checked === true) {
                    setValueMultiplosEsquerdo({
                        checkboxMultiplosEsquerdo: false,
                        inputMultiplosEsquerdo: false,
                        selectMultiplosEsquerdo: false
                    })
                } else {
                    setValueMultiplosEsquerdo({
                        checkboxMultiplosEsquerdo: false,
                        inputMultiplosEsquerdo: true,
                        selectMultiplosEsquerdo: true
                    })
                    removeStringMultiplosEsquerdo()
                }
                break
            case 'InputMultiplosEsquerdo':
                setValueInputMultiplosEsquerdo(value.value)
                break
            case 'SelectMultiplosEsquerdo':
                setValueSelectMultiplosEsquerdo(value.value)
                break
            case 'Select2MultiplosEsquerdo':
                criaValorMultiplosEsquerdo(value.value)
                break

            case 'CalculoUreteral':
                if (value.checked === true) {
                    setValueCalculoUreteral({
                        checkboxCalculoUreteral: false,
                        inputCalculoUreteral: false,
                        selectCalculoUreteral: false
                    })
                } else {
                    setValueCalculoUreteral({
                        checkboxCalculoUreteral: false,
                        inputCalculoUreteral: true,
                        selectCalculoUreteral: true
                    })
                    removeStringCalculoUreteral()
                }
                break
            case 'InputCalculoUreteral':
                setValueInputCalculoUreteral(value.value)
                break
            case 'SelectCalculoUreteral':
                setValueSelectCalculoUreteral(value.value)
                break
            case 'Select2CalculoUreteral':
                criaValorCalculoUreteral(value.value)
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
                mt='20px'
                h='100%'
                borderBottom='1px'
                mb='20px'>
                <TituloNomeExame titulo='Cálculos' />
                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'>


                    <Box w='150px'>
                        <Checkbox
                            id='Calculo01'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={valueCalculo01.checkboxCalculo01}
                        >Cálculo 01</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            id='InputCalculo01'
                            disabled={valueCalculo01.inputCalculo01}
                            placeholder='mm' />
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCalculo01'
                            disabled={valueCalculo01.selectCalculo01}
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Calculo01'
                            disabled={valueCalculo01.selectCalculo01}
                            mt='5px'>
                            <option value='' disabled selected>Do</option>
                            <option value='Calculos'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='150px' >
                        <Checkbox id='Calculo02'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={valueCalculo02.checkboxCalculo02}
                        >Cálculo 02</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            id='InputCalculo02'
                            disabled={valueCalculo02.inputCalculo02}
                            placeholder='mm' />
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCalculo02'
                            disabled={valueCalculo02.selectCalculo02}
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Calculo02'
                            disabled={valueCalculo02.selectCalculo02}
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='Calculos'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='150px' >
                        <Checkbox
                            id='Calculo03'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={valueCalculo03.checkboxCalculo03}
                        >Cálculo 03</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            id='InputCalculo03'
                            disabled={valueCalculo03.inputCalculo03}
                            placeholder='mm' />
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCalculo03'
                            disabled={valueCalculo03.selectCalculo03}
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Calculo03'
                            disabled={valueCalculo03.selectCalculo03}
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='Calculos'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>

                    <Box w='150px' >
                        <Checkbox
                            id='Calculo04'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={valueCalculo04.checkboxCalculo04}
                        >Cálculo 04</Checkbox>
                        <Input
                            onBlur={(e) => { verificaChecked(e.target) }}
                            id='InputCalculo04'
                            disabled={valueCalculo04.inputCalculo04}
                            placeholder='mm' />
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='SelectCalculo04'
                            disabled={valueCalculo04.selectCalculo04}
                            mt='5px'
                        >
                            <option value='' disabled selected>Localizado no</option>
                            <option value='tercoSuperior'>Terço superior</option>
                            <option value='tercoMedio'>Terço médio</option>
                            <option value='tercoInferior'>Terço inferior</option>
                        </Select>
                        <Select
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Select2Calculo04'
                            disabled={valueCalculo04.selectCalculo04}
                            mt='5px'
                        >
                            <option value='' disabled selected>Do</option>
                            <option value='Calculos'>Rim direito</option>
                            <option value='rimEsquerdo'>Rim esquerdo</option>
                        </Select>
                    </Box>
                </Box>

            </Box>

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >

                <Box w='250px'>
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='MultiplosDireito'
                        disabled={valueMultiplosDireito.checkboxMultiplosDireito}
                    >Mútiplos Cáculos no rim direito, o maior mede</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputMultiplosDireito'
                        disabled={valueMultiplosDireito.inputMultiplosDireito}
                        placeholder='00 mm' />
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='SelectMultiplosDireito'
                        disabled={valueMultiplosDireito.selectMultiplosDireito}
                        mt='5px'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                    </Select>
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='Select2MultiplosDireito'
                        disabled={valueMultiplosDireito.selectMultiplosDireito}
                        mt='5px'
                    >
                        <option value='' disabled selected>Do ureter</option>
                        <option value='direito'>Direito</option>
                        <option value='esquerdo'>Esquerdo</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>

                <Box w='250px' >
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='MultiplosEsquerdo'
                        disabled={valueMultiplosEsquerdo.checkboxMultiplosEsquerdo}
                    >Mútiplos Cáculos no rim esquerdo, o maior mede</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputMultiplosEsquerdo'
                        disabled={valueMultiplosEsquerdo.inputMultiplosEsquerdo}
                        placeholder='00 mm' />
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='SelectMultiplosEsquerdo'
                        disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
                        mt='5px'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                    </Select>
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='Select2MultiplosEsquerdo'
                        disabled={valueMultiplosEsquerdo.selectMultiplosEsquerdo}
                        mt='5px'
                    >
                        <option value='' disabled selected>Do ureter</option>
                        <option value='direito'>Direito</option>
                        <option value='esquerdo'>Esquerdo</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>

                <Box w='250px' >
                    <Checkbox
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='CalculoUreteral'
                        disabled={valueCalculoUreteral.checkboxCalculoUreteral}
                    >Cálculo Ureteral mede</Checkbox>
                    <Input
                        onBlur={(e) => { verificaChecked(e.target) }}
                        id='InputCalculoUreteral'
                        disabled={valueCalculoUreteral.inputCalculoUreteral}
                        mt='10px'
                        placeholder='00 mm' />
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        disabled={valueCalculoUreteral.selectCalculoUreteral}
                        mt='5px'
                        id='SelectCalculoUreteral'
                    >
                        <option value='' disabled selected>Localizado no</option>
                        <option value='tercoSuperior'>Terço superior</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoInferior'>Terço inferior</option>
                    </Select>
                    <Select
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='Select2CalculoUreteral'
                        disabled={valueCalculoUreteral.selectCalculoUreteral}
                        mt='5px'
                    >
                        <option value='' disabled selected>Do ureter</option>
                        <option value='direito'>Direito</option>
                        <option value='esquerdo'>Esquerdo</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Box>
        </Box >
    );
}

export default Calculos;