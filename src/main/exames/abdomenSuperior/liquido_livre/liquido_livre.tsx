import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useState } from "react";

function LiquidoLivre() {
    const altura = '100%'
    const largura = '66%'

    let selectLiquidoLivrePresente = document.querySelector('#selectLiquidoLivrePresente') as HTMLInputElement

    const [checkValueNormal, setCheckvalueNormal] = useState({
        normal: false,
    })

    const [checkValueLiquidoLivrePresente, setCheckvalueLiquidoLivrePresente] = useState({
        LiquidoLivrePresente: false,
        selectLiquidoLivrePresente: true,
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
            case 'normal':
                if (value.checked === true) {
                    criarString(value.value)
                    console.log('aqui')
                    setCheckvalueLiquidoLivrePresente({
                        LiquidoLivrePresente: true,
                        selectLiquidoLivrePresente: true,
                    })
                } else {
                    removeItemString(value.value)
                    setCheckvalueLiquidoLivrePresente({
                        LiquidoLivrePresente: false,
                        selectLiquidoLivrePresente: true,
                    })
                }
                break;
            case 'LiquidoLivrePresente':
                if (value.checked === true) {
                    console.log(laudoPrin)
                    setCheckvalueNormal({
                        normal: true
                    })
                    setCheckvalueLiquidoLivrePresente({
                        LiquidoLivrePresente: false,
                        selectLiquidoLivrePresente: false,
                    })
                } else {
                    removeItemString('Presente com quantidade pequena ')
                    removeItemString('Presente com quantidade moderada ')
                    removeItemString('Presente com quantidade grande ')
                    setCheckvalueNormal({
                        normal: false
                    })
                    setCheckvalueLiquidoLivrePresente({
                        LiquidoLivrePresente: false,
                        selectLiquidoLivrePresente: true,
                    })
                    selectLiquidoLivrePresente.value = ''
                }
                break;
            case 'selectLiquidoLivrePresente':
                if (value.value === 'Presente com quantidade pequena ') {
                    removeItemString('Presente com quantidade moderada ')
                    removeItemString('Presente com quantidade grande ')
                    criarString(value.value)
                } else if (value.value === 'Presente com quantidade moderada ') {
                    removeItemString('Presente com quantidade pequena ')
                    removeItemString('Presente com quantidade grande ')
                    criarString(value.value)
                } else {
                    removeItemString('Presente com quantidade pequena ')
                    removeItemString('Presente com quantidade moderada ')
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

                <TituloNomeExame titulo='Líquido Livre' />

                <Box
                    gap='30px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Box >
                        <Checkbox
                            disabled={checkValueNormal.normal}
                            id="normal"
                            value="Líquido Livre Ausente"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Ausente</Checkbox>
                    </Box>

                    <Box  >
                        <Checkbox
                            disabled={checkValueLiquidoLivrePresente.LiquidoLivrePresente}
                            id='LiquidoLivrePresente'
                            onChange={(e) => { verificaChecked(e.target) }}
                        >Presente</Checkbox>
                        <Select
                            disabled={checkValueLiquidoLivrePresente.selectLiquidoLivrePresente}
                            id="selectLiquidoLivrePresente"
                            onChange={(e) => { verificaChecked(e.target) }}
                        >
                            <option value='' disabled selected>Quantidade</option>
                            <option value='Presente com quantidade pequena '>Pequena</option>
                            <option value='Presente com quantidade moderada '>Moderada</option>
                            <option value='Presente com quantidade grande '>Grande</option>
                        </Select>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default LiquidoLivre;