import { Box, Checkbox, Input, Select, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function Figado() {
    const altura = '100%'
    const largura = '890px'

    const [checkValue, setCheckvalue] = useState({
        normal: false,
        HepatiteAguda: false,
        HepatiteCronica: false,
        dimensoes: false,
        esteatose: false
    })

    const verificaChecked = (value) => {
        console.log(value, value.checked, "value recebido")

        switch (value.id) {
            case 'normal':
                if (value.checked == true) {
                    setCheckvalue({
                        HepatiteAguda: true,
                        normal: false,
                        HepatiteCronica: true,
                        esteatose: true,
                        dimensoes: true
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                }
                break;
            case 'HepatiteAguda':
                if (value.checked == true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                }
                break;
            case 'HepatiteCronica':
                if (value.checked == true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                }
                break;
            case 'dimensoes':
                if (value.checked == true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                }
                break;
            case 'esteatose':
                if (value.checked == true) {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: true,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
                    })
                } else {
                    setCheckvalue({
                        HepatiteAguda: false,
                        normal: false,
                        HepatiteCronica: false,
                        esteatose: false,
                        dimensoes: false
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
                if (value.checked == true) {
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
            padding='24px 15px 130px 15px'
        >
            <Box
                borderBottom='1px'>
                <TituloNomeExame titulo='Figado' />
                <Box >
                    <Checkbox
                        disabled={checkValue.normal}
                        id="normal"
                        onChange={(e) => { verificaChecked(e.target) }}
                        mr='25px'
                    >Normal</Checkbox>
                    <Checkbox
                        mr='25px'
                        disabled={checkValue.HepatiteAguda}
                        id="HepatiteAguda"
                        onChange={(e) => { verificaChecked(e.target) }}
                    >Hepatite Aguda
                    </Checkbox>
                    <Checkbox
                        mr='25px'
                        disabled={checkValue.HepatiteCronica}
                        id="HepatiteCronica"
                        onChange={(e) => { verificaChecked(e.target) }}
                    >Hepatopatia Crônica
                    </Checkbox>
                    <Checkbox
                        mr='53px'
                        disabled={checkValue.dimensoes}
                        id="dimensoes"
                        onChange={(e) => { verificaChecked(e.target) }}
                    >Dimensões
                    </Checkbox>
                    <Checkbox
                        disabled={checkValue.esteatose}
                        id="esteatose"
                        onChange={(e) => { verificaChecked(e.target) }}
                    >Esteatose
                    </Checkbox>
                </Box>

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Select
                        ml='450px'
                        w='150px'
                        disabled={checkValue.dimensoes}
                        id="dimensoes"
                        onChange={(e) => { verificaChecked(e.target) }}
                    >
                        <option value='' disabled selected>Selecione</option>
                        <option value='Aumentadas'>Aumentadas</option>
                        <option value='Reduzidas'>Reduzidas</option>
                    </Select>
                    <Select
                        ml='10px'
                        w='150px'
                        disabled={checkValue.esteatose}
                        id="esteatose"
                        onChange={(e) => { verificaChecked(e.target) }}
                    >
                        <option value='' disabled selected>Selecione</option>
                        <option value='Leve'>Leve</option>
                        <option value='Moderada'>Moderada</option>
                        <option value='Acentuada'>Acentuada</option>
                    </Select>
                </Box>
            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box
                borderBottom='1px'
                mt='20px'
                h='130px'
            >
                <Grid
                    templateColumns='repeat(5, 1fr)'
                    templateRows='repeat(3, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox
                            disabled={checkValueCistos.calcificacao}
                            id="calcificacao"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                        >Calcificação</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Checkbox
                            disabled={checkValueCistos.cisto01}
                            id="cisto01"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                        >Cisto 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Checkbox
                            disabled={checkValueCistos.cisto02}
                            id="cisto02"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                        >Cisto 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Checkbox
                            disabled={checkValueCistos.cisto03}
                            id="cisto03"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                        >Cisto 03</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox ml='-40px'
                            disabled={checkValueCistos.MultiplosCistos}
                            id="MultiplosCistos"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                        >Múltiplos cistos, o maior:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select w='150px'
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
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-5px'>
                        <Select
                            w='150px'
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

                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-10px'>
                        <Select
                            disabled={checkValueCistos.cisto02}
                            id="cisto02"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='150px'>
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
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-15px'>
                        <Select
                            disabled={checkValueCistos.cisto03}
                            id="cisto03"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='130px' >
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
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-40px'>
                        <Select
                            disabled={checkValueCistos.MultiplosCistos}
                            id="MultiplosCistos"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='160px' >
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

                    </GridItem>

                    <GridItem w='100%' h='28px' >
                        <Input
                            disabled={checkValueCistos.calcificacao}
                            id="calcificacao"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Input
                            disabled={checkValueCistos.cisto01}
                            id="cisto01"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Input
                            disabled={checkValueCistos.cisto02}
                            id="cisto02"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Input
                            disabled={checkValueCistos.cisto03}
                            id="cisto03"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='130px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Input
                            disabled={checkValueCistos.MultiplosCistos}
                            id="MultiplosCistos"
                            onChange={(e) => { verificaCheckedCistos(e.target) }}
                            w='150px' placeholder='mm' />
                    </GridItem>

                </Grid>

            </Box>

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <Box
                mt='20px'
                h='130px'
            >
                <Grid
                    templateColumns='repeat(4, 1fr)'
                    templateRows='repeat(5, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox
                            // disabled={checkValueNodulos.nodulo01}
                            id="nodulo01"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                        >Nódulo 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Checkbox
                            // disabled={checkValueNodulos.nodulo02}
                            id="nodulo02"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                        >Nódulo 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Checkbox
                            // disabled={checkValueNodulos.nodulo03}
                            id="nodulo03"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                        >Nódulo 03</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox
                            // disabled={checkValueNodulos.multiplosNodulos}
                            id="multiplosNodulos"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            ml='-55px'>Múltiplos Nódulos, o maior:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select
                            disabled={checkValueNodulos.nodulo01}
                            id="nodulo01"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px'>
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
                    </GridItem>
                    <GridItem w='100%' h='28px' mt='-8px' ml='-5px'>

                        <Select
                            disabled={checkValueNodulos.nodulo02}
                            id="nodulo02"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px'>
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

                    </GridItem>
                    <GridItem w='100%' h='28px' mt='-8px' ml='-10px'>

                        <Select
                            disabled={checkValueNodulos.nodulo03}
                            id="nodulo03"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px'>
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
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px' ml='-40px'>

                        <Select
                            disabled={checkValueNodulos.multiplosNodulos}
                            id="multiplosNodulos"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='160px' >
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

                    </GridItem>

                    <GridItem w='100%' h='28px'                    >
                        <Input
                            disabled={checkValueNodulos.nodulo01}
                            id="nodulo01"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Input
                            disabled={checkValueNodulos.nodulo02}
                            id="nodulo02"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Input
                            disabled={checkValueNodulos.nodulo03}
                            id="nodulo03"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Input disabled={checkValueNodulos.multiplosNodulos}
                            id="multiplosNodulos"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }} w='160px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Select
                            disabled={checkValueNodulos.nodulo01}
                            id="nodulo01"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select
                            disabled={checkValueNodulos.nodulo02}
                            id="nodulo02"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select
                            disabled={checkValueNodulos.nodulo03}
                            id="nodulo03"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>


                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select
                            disabled={checkValueNodulos.multiplosNodulos}
                            id="multiplosNodulos"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='160px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Select
                            disabled={checkValueNodulos.nodulo01}
                            id="nodulo01"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select
                            disabled={checkValueNodulos.nodulo02}
                            id="nodulo02"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select
                            disabled={checkValueNodulos.nodulo03}
                            id="nodulo03"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='150px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select
                            disabled={checkValueNodulos.multiplosNodulos}
                            id="multiplosNodulos"
                            onChange={(e) => { verificaCheckedNodulos(e.target) }}
                            w='160px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                </Grid>
            </Box>
        </Box>
    );
}

export default Figado;