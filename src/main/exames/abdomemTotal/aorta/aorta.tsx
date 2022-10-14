import { Box, Text, Checkbox, Select, Input, RadioGroup, Radio } from "@chakra-ui/react";
import { useContext, useState } from "react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from "../../../../context/LuadosContext";


function Aorta() {
    const altura = '100%'
    const largura = '66%'

    let selectLocalizacao = document.querySelector('#SelectLocalizacao') as HTMLInputElement
    let inputCalibreMaximo = document.querySelector('#InputCalibreMaximo') as HTMLInputElement
    let inputExtensao = document.querySelector('#InputExtensao') as HTMLInputElement


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    const [valueFraseAneurisma, setValueFraseAneurisma] = useState('')

    const [valueLocalizacaoAneurmisma, setValueLocalizacaoAneurmisma] = useState('')
    const [valueInputCalibreMax, setValueInputCalibreMax] = useState('')

    const [checkValueAneurisma, setCheckvalueAneurisma] = useState({
        selectLocalizacao: true,
        inputCalibreMaximo: true,
        inputExtensao: true,
    })

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = laudoPrin.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
        // setCheckvalueAneurisma({
        //     selectLocalizacao: true,
        //     inputCalibreMaximo: true,
        //     inputExtensao: true,
        // })
        inputExtensao.value = ''
        selectLocalizacao.value = ''
        inputCalibreMaximo.value = ''
    }

    const removeStringAneurisma = () => {
        setCheckvalueAneurisma({
            selectLocalizacao: true,
            inputCalibreMaximo: true,
            inputExtensao: true,
        })
        const index = laudoPrin.indexOf(valueFraseAneurisma)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }

    }

    const criaStringInputCisto = (value) => {
        const string = 'Aneurisma Localizado no ' + valueLocalizacaoAneurmisma +
            'com calibre de ' + valueInputCalibreMax + ' mm com extensão de ' + value.value
        setValueFraseAneurisma(string)
        setLaudoPrin(arr => [...arr, string])
    }

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'AortaNormal':
                console.log('normal')
                removeItemString('Aneurisma')
                removeItemString('Ateromatosa')
                removeItemString('Nao Visibilizada')
                removeStringAneurisma()
                setLaudoPrin(arr => [...arr, value.value])
                break
            case 'NaoVisibilizada':
                console.log('nao visibilizado')
                removeItemString('Aneurisma')
                removeItemString('Ateromatosa')
                removeItemString('Aorta Normal')
                removeStringAneurisma()
                setLaudoPrin(arr => [...arr, value.value])
                break
            case 'Ateromatosa':
                console.log('Ateromatosa')
                removeItemString('Aneurisma')
                removeItemString('Aorta Normal')
                removeItemString('Nao Visibilizada')
                removeStringAneurisma()
                setLaudoPrin(arr => [...arr, value.value])
                break
            case 'Aneurisma':
                setCheckvalueAneurisma({
                    selectLocalizacao: false,
                    inputCalibreMaximo: false,
                    inputExtensao: false,
                })
                removeItemString('Ateromatosa')
                removeItemString('Aorta Normal')
                removeItemString('Nao Visibilizada')
                break

            case 'InputCalibreMaximo':
                setValueInputCalibreMax(value.value)
                break
            case 'SelectLocalizacao':
                setValueLocalizacaoAneurmisma(value.value)
                break
            case 'InputExtensao':
                criaStringInputCisto(value)
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

                <TituloNomeExame titulo='Aorta' />
                <RadioGroup>
                    <Box
                        gap='30px'
                        display='flex'
                        flexWrap='wrap'
                        mb='20px'
                    >
                        <Radio
                            value='Aorta Normal'
                            id='AortaNormal'
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Normal</Radio>
                        <Radio
                            value='Nao Visibilizada'
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='NaoVisibilizada'>Não Visibilizado</Radio>
                        <Radio value='Ateromatosa'
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Ateromatosa' >Ateromatosa</Radio>
                        <Radio value=''
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='Aneurisma' >Aneurisma</Radio>
                    </Box>
                </RadioGroup>
            </Box >
            {/* ------------------------------------------------------------------------------------------------------------ */}

            < Box
                gap='30px'
                display='flex'
                flexWrap='wrap'
                mt='20px'
            >

                <Box >
                    <Text>Localização:</Text>
                    <Select
                        disabled={checkValueAneurisma.selectLocalizacao}
                        onChange={(e) => { verificaChecked(e.target) }}
                        id='SelectLocalizacao'>
                        <option value='' disabled selected>Localização</option>
                        <option value='supra-renal'>Supra-renal</option>
                        <option value='tercoProximal'>terço proximal</option>
                        <option value='tercoMedio'>Terço médio</option>
                        <option value='tercoDistal'>Terço distal</option>
                        <option value='bifurcacao'>Bifurcação</option>
                        <option value='infraRenal'>Infra-renal</option>
                    </Select>
                </Box>

                <Box w='200px'>
                    <Text>Calire máximo:</Text>
                    <Input
                        disabled={checkValueAneurisma.inputCalibreMaximo}
                        id='InputCalibreMaximo'
                        onBlur={(e) => { verificaChecked(e.target) }}
                        w='100%' placeholder='mm' />
                </Box>

                <Box w='200px'>
                    <Text>Extensão:</Text>
                    <Input
                        disabled={checkValueAneurisma.inputExtensao}
                        id='InputExtensao'
                        onBlur={(e) => { verificaChecked(e.target) }}
                        w='100%' placeholder='mm' />
                </Box>
            </Box >
        </Box >
    );
}

export default Aorta;