import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useState } from "react";

function Dilatacao() {
    const altura = '100%'
    const largura = '66%'

    let selectRimEsquerdo = document.querySelector('#SelectRimEsquerdo') as HTMLInputElement
    let selectRimDireito = document.querySelector('#SelectRimDireito') as HTMLInputElement

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkValueDilatacaoRimDireito, setCheckValueDilatacaoRimDireito] = useState({
        selectRimDireito: true
    })

    const [checkValueDilatacaoRimEsquerdo, setCheckValueDilatacaoRimEsquerdo] = useState({
        selectRimEsquerdo: true
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

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'CheckboxRimDireito':
                if (value.checked === true) {

                    setCheckValueDilatacaoRimDireito({
                        selectRimDireito: false
                    })
                } else {
                    setCheckValueDilatacaoRimDireito({
                        selectRimDireito: true
                    })
                    removeItemString('Dilatação do rim direito moderada')
                    removeItemString('Dilatação do rim direito acentuada')
                    removeItemString('Dilatação do rim direito leve')
                    selectRimDireito.value = ''

                }
                break
            case 'SelectRimDireito':
                if (value.value === 'Dilatação do rim direito leve') {
                    criarString(value.value)
                    removeItemString('Dilatação do rim direito moderada')
                    removeItemString('Dilatação do rim direito acentuada')
                } else if (value.value === 'Dilatação do rim direito moderada') {
                    criarString(value.value)
                    removeItemString('Dilatação do rim direito leve')
                    removeItemString('Dilatação do rim direito acentuada')
                } else {
                    criarString(value.value)
                    removeItemString('Dilatação do rim direito leve')
                    removeItemString('Dilatação do rim direito moderada')
                }
                break
            case 'CheckboxRimEsquerdo':
                if (value.checked === true) {
                    setCheckValueDilatacaoRimEsquerdo({
                        selectRimEsquerdo: false
                    })
                } else {
                    setCheckValueDilatacaoRimEsquerdo({
                        selectRimEsquerdo: true
                    })
                    removeItemString('Dilatação do rim esquerdo moderada')
                    removeItemString('Dilatação do rim esquerdo acentuada')
                    removeItemString('Dilatação do rim esquerdo leve')
                    selectRimEsquerdo.value = ''

                }
                break
            case 'SelectRimEsquerdo':
                if (value.value === 'Dilatação do rim esquerdo leve') {
                    criarString(value.value)
                    removeItemString('Dilatação do rim esquerdo moderada')
                    removeItemString('Dilatação do rim esquerdo acentuada')
                } else if (value.value === 'Dilatação do rim esquerdo moderada') {
                    criarString(value.value)
                    removeItemString('Dilatação do rim esquerdo leve')
                    removeItemString('Dilatação do rim esquerdo acentuada')
                } else {
                    criarString(value.value)
                    removeItemString('Dilatação do rim esquerdo leve')
                    removeItemString('Dilatação do rim esquerdo moderada')
                }
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
            padding='24px 15px 24px 15px'
            mt='20px'
        >
            <Box>
                <TituloNomeExame titulo='Dilatação' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mt='20px'
                    mb='10px'
                >

                    <Box w='200px' >
                        <Checkbox
                            id='CheckboxRimDireito'
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Dilatação no rim direito</Checkbox>
                        <Select
                            id='SelectRimDireito'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={checkValueDilatacaoRimDireito.selectRimDireito}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Dilatação do rim direito leve'>Leve</option>
                            <option value='Dilatação do rim direito moderada'>Moderada</option>
                            <option value='Dilatação do rim direito acentuada'>Acentuada</option>
                        </Select>
                    </Box>

                    <Box w='250px'>
                        <Checkbox
                            onChange={(e) => { verificaChecked(e.target) }}
                            id='CheckboxRimEsquerdo'
                        >Dilatação no rim esquerdo</Checkbox>
                        <Select
                            id='SelectRimEsquerdo'
                            onChange={(e) => { verificaChecked(e.target) }}
                            disabled={checkValueDilatacaoRimEsquerdo.selectRimEsquerdo}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='Dilatação do rim esquerdo leve'>Leve</option>
                            <option value='Dilatação do rim esquerdo moderada'>Moderada</option>
                            <option value='Dilatação do rim esquerdo acentuada'>Acentuada</option>
                        </Select>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default Dilatacao;