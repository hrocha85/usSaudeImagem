import { Box, Checkbox, Stack, Input, Select, Grid, GridItem } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";


function Figado() {

    var CheckNormal = document.querySelector('#CheckboxNormal') as HTMLInputElement
    var CheckHepatite = document.querySelector('#CheckboxHepatite') as HTMLInputElement
    var CheckHepatopatia = document.querySelector('#CheckboxHepatopatia') as HTMLInputElement
    var CheckDimensoes = document.querySelector('#CheckboxDimensoes') as HTMLInputElement
    var CheckEsteatose = document.querySelector('#CheckboxEsteatose') as HTMLInputElement

    var selectEsteatose = document.querySelector('#SelectEsteatose') as HTMLInputElement
    var selectDimensoes = document.querySelector('#SelectDimensoes') as HTMLInputElement

    var CheckCalcificacao = document.querySelector('#CheckboxCalcificacao') as HTMLInputElement
    var CheckCisto01 = document.querySelector('#CheckboxCisto01') as HTMLInputElement
    var CheckCisto02 = document.querySelector('#CheckboxCisto02') as HTMLInputElement
    var CheckCisto03 = document.querySelector('#CheckboxCisto03') as HTMLInputElement
    var CheckMultiplosCistos = document.querySelector('#CheckboxMultiplosCistos') as HTMLInputElement

    var selectCalcificacao = document.querySelector('#SelectCalcificacao') as HTMLInputElement
    var selectCisto01 = document.querySelector('#SelectCisto01') as HTMLInputElement
    var selectCisto02 = document.querySelector('#SelectCisto02') as HTMLInputElement
    var selectCisto03 = document.querySelector('#SelectCisto03') as HTMLInputElement
    var selectMultiplosCistos = document.querySelector('#SelectMultiplosCistos') as HTMLInputElement
    var inputMultiplosCistos = document.querySelector('#InputMultiplosCistos') as HTMLInputElement

    const normal = (e) => {
        console.log(e)
        if (CheckEsteatose.checked === true) {
            CheckNormal.checked = false
            console.log('esteatose', CheckNormal.checked)
            console.log('aqui')
            selectEsteatose.disabled = false
        } else {
            console.log('la')
            selectEsteatose.disabled = true
        }
        CheckDimensoes.checked === true ? selectDimensoes.disabled = false : selectDimensoes.disabled = true

        CheckCalcificacao.checked === true ? selectCalcificacao.disabled = false : selectCalcificacao.disabled = true
        CheckCisto01.checked === true ? selectCisto01.disabled = false : selectCisto01.disabled = true
        CheckCisto02.checked === true ? selectCisto02.disabled = false : selectCisto02.disabled = true
        CheckCisto03.checked === true ? selectCisto03.disabled = false : selectCisto03.disabled = true
        CheckMultiplosCistos.checked === true ? selectMultiplosCistos.disabled = false : selectMultiplosCistos.disabled = true
    }

    const altura = '100%'
    const largura = '890px'

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
                    <Checkbox onChange={(e) => normal(e.target.value)}
                        id='CheckboxNormal'
                        mr='25px'
                        value='normal'>Normal</Checkbox>
                    <Checkbox onChange={(e) => normal(e.target.value)}
                        mr='25px'
                        id="CheckboxHepatite"
                        value='Hepatite Aguda'>Hepatite Aguda</Checkbox>
                    <Checkbox
                        onChange={(e) => normal(e.target.value)}
                        mr='25px'
                        id="CheckboxHepatopatia"
                        value="Hepatopatia Crônica">Hepatopatia Crônica</Checkbox>
                    <Checkbox
                        onChange={(e) => normal(e.target.value)}
                        mr='53px'
                        id="CheckboxDimensoes"
                        value="Dimensões">Dimensões</Checkbox>
                    <Checkbox
                        onChange={(e) => normal(e.target.value)}
                        id='CheckboxEsteatose'
                        value="Esteatose">Esteatose</Checkbox>
                </Box>

                <Box
                    mt='10px'
                    mb='20px'
                    display='flex'
                >
                    <Select
                        ml='450px'
                        w='150px'
                        id='SelectDimensoes'>
                        <option value='' disabled selected>Selecione</option>
                        <option value='Aumentadas'>Aumentadas</option>
                        <option value='Reduzidas'>Reduzidas</option>
                    </Select>
                    <Select
                        ml='10px'
                        w='150px'
                        id='SelectEsteatose'>
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
                            id='CheckboxCalcificacao'
                            onChange={(e) => normal(e.target.value)}
                        >Calcificação</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Checkbox
                            id='CheckboxCisto01'
                            onChange={(e) => normal(e.target.value)}
                        >Cisto 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Checkbox
                            onChange={(e) => normal(e.target.value)}
                            id='CheckboxCisto02'>Cisto 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Checkbox
                            onChange={(e) => normal(e.target.value)}
                            id='CheckboxCisto03'>Cisto 03</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox ml='-40px'
                            onChange={(e) => normal(e.target.value)}
                            id='CheckboxMultiplosCistos'>Múltiplos cistos, o maior:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select w='150px'
                            id='SelectCalcificacao'>
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
                            id='SelectCisto01'>
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
                            id='SelectCisto02'
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
                            id='SelectCisto03'
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
                            id='SelectMultiplosCistos'
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
                            id='SelectCalcificacao' w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Input w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Input w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Input w='130px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Input
                            id='InputMultiplosCistos'
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
                    templateColumns='repeat(5, 1fr)'
                    templateRows='repeat(5, 1fr)'
                    gap={3}
                >
                    <GridItem w='100%' h='28px'>
                        <Checkbox>Nódulo 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Checkbox>Nódulo 02</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Checkbox>Nódulo 03</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Checkbox>Nódulo 01</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Checkbox ml='-55px'>Múltiplos Nódulos, o maior:</Checkbox>
                    </GridItem>

                    <GridItem w='100%' h='28px' mt='-8px'>
                        <Select
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

                    <GridItem w='100%' h='28px' mt='-8px' ml='-15px'>
                        <Select
                            w='130px' >
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

                    <GridItem w='100%' h='28px' >
                        <Input w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Input w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Input w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Input w='130px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Input w='150px' placeholder='mm' />
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Select
                            w='150px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select
                            w='150px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select
                            w='150px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Select
                            w='130px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select
                            w='160px' mt='10px'>
                            <option value='' disabled selected>Contornos</option>
                            <option value='Regulares'>Regulares</option>
                            <option value='Irregulares'>Irregulares</option>
                            <option value='Lobulados'>Lobulados</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px'>
                        <Select
                            w='150px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-5px'>
                        <Select
                            w='150px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-10px'>
                        <Select
                            w='150px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-15px'>
                        <Select
                            w='130px' mt='20px'>
                            <option value='' disabled selected>Ecogenicidade</option>
                            <option value='Hippoecogenico'>Hipoecogênico</option>
                            <option value='Hiperecogênico'>Hiperecogênico</option>
                            <option value='Isoecogênico'>Isoecogênico</option>
                        </Select>
                    </GridItem>

                    <GridItem w='100%' h='28px' ml='-40px'>
                        <Select
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