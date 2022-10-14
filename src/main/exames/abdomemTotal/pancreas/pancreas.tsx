import { Box, Input, Radio, RadioGroup } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { LaudosContext } from "../../../../context/LuadosContext";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Pancreas() {
    const altura = '100%'
    const largura = '66%'

    let inputCisto = document.querySelector('#InputCisto') as HTMLInputElement

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    const [ValueInputCisto, setValueInputCisto] = useState('')

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = laudoPrin.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const criaStringInputCisto = (value) => {
        const string = 'Pancreas com cisto de ' + value.value + 'mm '
        setValueInputCisto(string)
        setLaudoPrin(arr => [...arr, string])
    }

    const removeStringCisto = () => {
        const index = laudoPrin.indexOf(ValueInputCisto)
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const setValueFrasePancreas = (value) => {
        switch (value.id) {
            case 'PancreasNormal':
                removeItemString('Pancreas não visibilizado')
                removeItemString('Pancreas com pancreatite aguda')
                removeItemString('Pancreas com pancreatite cronica')
                removeStringCisto()
                setLaudoPrin(arr => [...arr, value.value])
                inputCisto.value = ''
                break
            case 'NaoVisibilizado':
                removeItemString('Pancreas Normal');
                removeItemString('Pancreas com pancreatite aguda');
                removeItemString('Pancreas com pancreatite cronica');
                removeStringCisto()
                setLaudoPrin(arr => [...arr, value.value])
                break
            case 'PancreatiteAguda':
                removeItemString('Pancreas Normal');
                removeItemString('Pancreas não visibilizado');
                removeItemString('Pancreas com pancreatite cronica');
                removeStringCisto()
                setLaudoPrin(arr => [...arr, value.value])
                break
            case 'PancreatiteCronica':
                removeItemString('Pancreas Normal');
                removeItemString('Pancreas não visibilizado');
                removeItemString('Pancreas com pancreatite aguda');
                removeStringCisto()
                setLaudoPrin(arr => [...arr, value.value])
                break
            case 'InputCisto':
                removeItemString('Pancreas Normal');
                removeItemString('Pancreas não visibilizado');
                removeItemString('Pancreas com pancreatite aguda');
                removeItemString('Pancreas com pancreatite cronica');
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
            >

                <TituloNomeExame titulo='Pâncreas' />

                <RadioGroup>
                    <Box
                        gap='25px'
                        display='flex'
                        flexWrap='wrap'
                        mb='10px'
                    >
                        <Box>
                            <Radio value='Pancreas Normal' id='PancreasNormal'
                                onChange={(e) => { setValueFrasePancreas(e.target) }}>
                                Pancreas Normal
                            </Radio>
                        </Box>
                        <Box w='100px'>
                            <Radio id='cisto'
                                value='Pancreas com cisto de '
                            >
                                Cisto
                            </Radio>
                            <Input w='80px'
                                id='InputCisto'
                                onBlur={(e) => { setValueFrasePancreas(e.target) }}
                                placeholder='mm' />
                        </Box>
                        <Box>
                            <Radio value='Pancreas não visibilizado' id='NaoVisibilizado'
                                onChange={(e) => { setValueFrasePancreas(e.target) }}>
                                Não visibilizado
                            </Radio>
                        </Box>
                        <Box>
                            <Radio value='Pancreas com pancreatite aguda' id='PancreatiteAguda'
                                onChange={(e) => { setValueFrasePancreas(e.target) }}>
                                Pancreatite Aguda
                            </Radio>
                        </Box>
                        <Box>
                            <Radio value='Pancreas com pancreatite cronica' id='PancreatiteCronica'
                                onChange={(e) => { setValueFrasePancreas(e.target) }}>
                                Pancreatite Crônica
                            </Radio>
                        </Box>
                    </Box>
                </RadioGroup>
            </Box >

        </Box >
    );
}

export default Pancreas;