import { Box, Checkbox, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function Figado() {
    const altura = '100%'
    const largura = '66%'

    const [checkValue, setCheckvalue] = useState({
        normal: false,
        HepatiteAguda: false,
        HepatiteCronica: false,
        dimensoes: false,
        esteatose: false,
        SelectDimensoes: true,
        SelectEsteatose: true
    })

    const verificaChecked = (value) => {
        console.log(value, value.checked, "value recebido")

        switch (value.id) {
            case 'normal':
                if (value.checked === true) {
                    setCheckvalue({
                        HepatiteAguda: true,
                        normal: false,
                        HepatiteCronica: true,
                        esteatose: true,
                        dimensoes: true,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                }
                break;
            case 'HepatiteAguda':
                if (value.checked === true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                }
                break;
            case 'HepatiteCronica':
                if (value.checked === true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                }
                break;
            case 'dimensoes':
                if (value.checked === true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: false,
                        SelectEsteatose: true
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                }
                break;
            case 'esteatose':
                if (value.checked === true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: false
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false,
                        SelectDimensoes: true,
                        SelectEsteatose: true
                    })
                }
                break;
            default:
                console.log("nao achou o id");
                break;
        }
    }

    const [checkValueCistos, setCheckvalueCistos] = useState({
        calcificacao: false,
        cisto01: false,
        cisto02: false,
        cisto03: false,
        MultiplosCistos: false
    })


    const verificaCheckedCistos = (value) => {
        console.log(value, value.checked, "value recebido")

        switch (value.id) {
            case 'calcificacao':
                if (value.checked === true) {
                    setCheckvalueCistos({
                        calcificacao: false,
                        cisto01: true,
                        cisto03: true,
                        cisto02: true,
                        MultiplosCistos: true
                    })
                } else {
                    setCheckvalueCistos({
                        calcificacao: false,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                }
                break;
            case 'cisto01':
                if (value.checked === true) {
                    setCheckvalueCistos({
                        calcificacao: true,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                } else {
                    setCheckvalueCistos({
                        calcificacao: false,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                }
                break;
            case 'cisto02':
                if (value.checked === true) {
                    setCheckvalueCistos({
                        calcificacao: true,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                } else {
                    setCheckvalueCistos({
                        calcificacao: false,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                }
                break;
            case 'cisto03':
                if (value.checked === true) {
                    setCheckvalueCistos({
                        calcificacao: true,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                } else {
                    setCheckvalueCistos({
                        calcificacao: false,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                }
                break;
            case 'MultiplosCistos':
                if (value.checked === true) {
                    setCheckvalueCistos({
                        calcificacao: true,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                } else {
                    setCheckvalueCistos({
                        calcificacao: false,
                        cisto01: false,
                        cisto03: false,
                        cisto02: false,
                        MultiplosCistos: false
                    })
                }
                break;
            default:
                console.log("nao achou o id");
                break;
        }
    }

    const [checkValueNodulos, setCheckvalueNodulus] = useState({
        nodulo01: true,
        nodulo02: true,
        nodulo03: true,
        multiplosNodulos: true
    })


    const verificaCheckedNodulos = (value) => {
        console.log(value, value.checked, "value recebido")

        switch (value.id) {
            case 'nodulo01':
                if (value.checked === true) {
                    setCheckvalueNodulus({
                        nodulo01: false,
                        nodulo02: true,
                        nodulo03: true,
                        multiplosNodulos: true
                    })
                } else {
                    setCheckvalueNodulus({
                        nodulo01: true,
                        nodulo02: true,
                        nodulo03: true,
                        multiplosNodulos: true
                    })
                }
                break;
            case 'nodulo02':
                if (value.checked === true) {
                    setCheckvalueNodulus({
                        nodulo01: true,
                        nodulo02: false,
                        nodulo03: true,
                        multiplosNodulos: true
                    })
                } else {
                    setCheckvalueNodulus({
                        nodulo01: true,
                        nodulo02: true,
                        nodulo03: true,
                        multiplosNodulos: true
                    })
                }
                break;
            case 'nodulo03':
                if (value.checked === true) {
                    setCheckvalueNodulus({
                        nodulo01: true,
                        nodulo02: true,
                        nodulo03: false,
                        multiplosNodulos: true
                    })
                } else {
                    setCheckvalueNodulus({
                        nodulo01: true,
                        nodulo02: true,
                        nodulo03: true,
                        multiplosNodulos: true
                    })
                }
                break;
            case 'multiplosNodulos':
                if (value.checked === true) {
                    setCheckvalueNodulus({
                        nodulo01: true,
                        nodulo02: true,
                        nodulo03: true,
                        multiplosNodulos: false
                    })
                } else {
                    setCheckvalueNodulus({
                        nodulo01: true,
                        nodulo02: true,
                        nodulo03: true,
                        multiplosNodulos: true
                    })
                }
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
                <TituloNomeExame titulo='Figado' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Box>
                        <Checkbox
                            disabled={checkValue.normal}
                            id="normal"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Normal</Checkbox>
                    </Box>
                    <Box>
                        <Checkbox

                            disabled={checkValue.HepatiteAguda}
                            id="HepatiteAguda"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Hepatite Aguda
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox
                            disabled={checkValue.HepatiteCronica}
                            id="HepatiteCronica"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Hepatopatia Crônica
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox

                            disabled={checkValue.dimensoes}
                            id="dimensoes"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Dimensões
                        </Checkbox>
                        <Select
                            w='100%'
                            disabled={checkValue.SelectDimensoes}
                            id="SelectDimensoes"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Aumentadas'>Aumentadas</option>
                            <option value='Reduzidas'>Reduzidas</option>
                        </Select>
                    </Box>
                    <Box>
                        <Checkbox
                            disabled={checkValue.esteatose}
                            id="esteatose"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Esteatose
                        </Checkbox>
                        <Select
                            w='100%'
                            disabled={checkValue.SelectEsteatose}
                            id="SelectEsteatose"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Leve'>Leve</option>
                            <option value='Moderada'>Moderada</option>
                            <option value='Acentuada'>Acentuada</option>
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
                        disabled={checkValueCistos.calcificacao}
                        id="calcificacao"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Calcificação</Checkbox>
                    <Select
                        disabled={checkValueCistos.calcificacao}
                        id="calcificacao"
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
                        disabled={checkValueCistos.calcificacao}
                        id="calcificacao"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    w='120px'>
                    <Checkbox
                        disabled={checkValueCistos.cisto01}
                        id="cisto01"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Cisto 01</Checkbox>
                    <Select
                        disabled={checkValueCistos.cisto01}
                        id="cisto01"
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
                        disabled={checkValueCistos.cisto01}
                        id="cisto01"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    w='120px'>
                    <Checkbox
                        disabled={checkValueCistos.cisto02}
                        id="cisto02"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Cisto 02</Checkbox>
                    <Select
                        disabled={checkValueCistos.cisto02}
                        id="cisto02"
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
                        disabled={checkValueCistos.cisto02}
                        id="cisto02"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    w='120px'>
                    <Checkbox
                        disabled={checkValueCistos.cisto03}
                        id="cisto03"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Cisto 03</Checkbox>
                    <Select

                        disabled={checkValueCistos.cisto03}
                        id="cisto03"
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
                        disabled={checkValueCistos.cisto03}
                        id="cisto03"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                        placeholder='mm' />
                </Box>

                <Box
                    mb='10px'>
                    <Checkbox
                        disabled={checkValueCistos.MultiplosCistos}
                        id="MultiplosCistos"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
                    >Múltiplos cistos, o maior:</Checkbox>
                    <Select
                        disabled={checkValueCistos.MultiplosCistos}
                        id="MultiplosCistos"
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
                        disabled={checkValueCistos.MultiplosCistos}
                        id="MultiplosCistos"
                        onChange={(e) => { verificaCheckedCistos(e.target) }}
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
                        // disabled={checkValueNodulos.nodulo01}
                        id="nodulo01"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Nódulo 01</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo01}
                        id="nodulo01"
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
                        disabled={checkValueNodulos.nodulo01}
                        id="nodulo01"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                        placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo01}
                        id="nodulo01"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo01}
                        id="nodulo01"
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
                        // disabled={checkValueNodulos.nodulo02}
                        id="nodulo02"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Nódulo 02</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo02}
                        id="nodulo02"
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
                        disabled={checkValueNodulos.nodulo02}
                        id="nodulo02"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                        placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo02}
                        id="nodulo02"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo02}
                        id="nodulo02"
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
                        // disabled={checkValueNodulos.nodulo03}
                        id="nodulo03"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Nódulo 03</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo03}
                        id="nodulo03"
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
                        disabled={checkValueNodulos.nodulo03}
                        id="nodulo03"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                        placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo03}
                        id="nodulo03"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.nodulo03}
                        id="nodulo03"
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
                        // disabled={checkValueNodulos.multiplosNodulos}
                        id="multiplosNodulos"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >Múltiplos Nódulos, o maior:</Checkbox>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.multiplosNodulos}
                        id="multiplosNodulos"
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
                        disabled={checkValueNodulos.multiplosNodulos}
                        id="multiplosNodulos"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }} placeholder='mm' />
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.multiplosNodulos}
                        id="multiplosNodulos"
                        onChange={(e) => { verificaCheckedNodulos(e.target) }}
                    >
                        <option value='' disabled selected>Contornos</option>
                        <option value='Regulares'>Regulares</option>
                        <option value='Irregulares'>Irregulares</option>
                        <option value='Lobulados'>Lobulados</option>
                    </Select>
                    <Select
                        mt='5px'
                        disabled={checkValueNodulos.multiplosNodulos}
                        id="multiplosNodulos"
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