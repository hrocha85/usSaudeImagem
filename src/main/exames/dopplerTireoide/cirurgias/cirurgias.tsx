import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useState } from "react";

function LiquidoLivre() {
    const altura = '100%'
    const largura = '66%'

    let selectTireoidectomiaParcial = document.querySelector('#selectTireoidectomiaParcial') as HTMLInputElement

    const [checkValueTireoidectomiaTotal, setCheckvalueTireoidectomiaTotal] = useState({
        TireoidectomiaTotal: false,
    })

    const [checkValueTireoidectomiaParcial, setCheckvalueTireoidectomiaParcial] = useState({
        TireoidectomiaParcial: false,
        selectTireoidectomiaParcial: true,
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

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'TireoidectomiaTotal':
                if (value.checked === true) {
                    criarString(value.value)
                    setCheckvalueTireoidectomiaParcial({
                        TireoidectomiaParcial: true,
                        selectTireoidectomiaParcial: true,
                    })
                } else {
                    removeItemString(value.value)
                    setCheckvalueTireoidectomiaParcial({
                        TireoidectomiaParcial: false,
                        selectTireoidectomiaParcial: true,
                    })
                }
                break;
            case 'TireoidectomiaParcial':
                if (value.checked === true) {
                    console.log(laudoPrin)
                    setCheckvalueTireoidectomiaTotal({
                        TireoidectomiaTotal: true
                    })
                    setCheckvalueTireoidectomiaParcial({
                        TireoidectomiaParcial: false,
                        selectTireoidectomiaParcial: false,
                    })
                } else {
                    removeItemString('Lobo Direito ')
                    removeItemString('Lobo Esquerdo ')
                    removeItemString('Lobo Direito e istmo')
                    removeItemString('Lobo Esquerdo e istmo')
                    setCheckvalueTireoidectomiaTotal({
                        TireoidectomiaTotal: false
                    })
                    setCheckvalueTireoidectomiaParcial({
                        TireoidectomiaParcial: false,
                        selectTireoidectomiaParcial: true,
                    })
                    selectTireoidectomiaParcial.value = ''
                }
                break;
            case 'selectTireoidectomiaParcial':
                if (value.value === 'Lobo Direito ') {
                    removeItemString('Lobo Esquerdo ')
                    removeItemString('Lobo Direito e istmo')
                    criarString(value.value)
                } else if (value.value === 'Lobo Esquerdo ') {
                    removeItemString('Lobo Direito ')
                    removeItemString('Lobo Direito e istmo')
                    criarString(value.value)
                } else if (value.value === 'Lobo Direito e istmo') {
                    removeItemString('Lobo Direito ')
                    removeItemString('Lobo Esquerdo ')
                    criarString(value.value)
                } else {
                    removeItemString('Lobo Direito e istmo')
                    removeItemString('Lobo Direito ')
                    removeItemString('Lobo Esquerdo ')
                    criarString(value.value)

                }
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
            padding='24px 15px 20px 15px'
            mt='15px'
        >
            <Box
            >

                <TituloNomeExame titulo='Cirurgias' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Box >
                        <Checkbox
                            disabled={checkValueTireoidectomiaTotal.TireoidectomiaTotal}
                            id="TireoidectomiaTotal"
                            value="Tireoidectomia Total "
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Tireoidectomia Total</Checkbox>
                    </Box>

                    <Box  >
                        <Checkbox
                            disabled={checkValueTireoidectomiaParcial.TireoidectomiaParcial}
                            id='TireoidectomiaParcial'
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Tireoidectomia parcial</Checkbox>
                        <Select
                            disabled={checkValueTireoidectomiaParcial.selectTireoidectomiaParcial}
                            id="selectTireoidectomiaParcial"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Select</option>
                            <option value='Lobo Direito '>Lobo Direito</option>
                            <option value='Lobo Esquerdo '>Lobo Esquerdo</option>
                            <option value='Lobo Direito e istmo'>Lobo Direito e istmo</option>
                            <option value='Lobo Esquerdo e istmo'>Lobo Esquerdo e istmo</option>
                        </Select>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default LiquidoLivre;