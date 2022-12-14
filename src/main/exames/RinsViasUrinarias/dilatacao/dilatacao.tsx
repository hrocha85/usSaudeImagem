/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select, Input } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function Dilatacao() {
    const altura = '100%'
    const largura = '66%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkboxDilatacaoDireito, setCheckboxDilatacaoDireito] = useState(false)
    const [disableSelectDilatacaoDireito, setDisableSelectDilatacaoDireito] = useState(true)
    const [valueSelectDilatacaoDireito, setValueSelectDilatacaoDireito] = useState('')

    const [checkboxDilatacaoEsquerdo, setCheckboxDilatacaoEsquerdo] = useState(false)

    const [disableSelectDilatacaoEsquerdo, setDisableSelectDilatacaoEsquerdo] = useState(true)
    const [valueSelectDilatacaoEsquerdo, setValueSelectDilatacaoEsquerdo] = useState('')

    const criaStringDilatacaoDireito = () => {
        removeFraseDilatacaoDireito()
        console.log('aqui')
        if (checkboxDilatacaoDireito) {
            console.log(valueSelectDilatacaoDireito)
            setDisableSelectDilatacaoDireito(false)
            if (valueSelectDilatacaoDireito !== '') {
                let string = `Rim direito com dilatação ${valueSelectDilatacaoDireito}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectDilatacaoDireito(true)
            setValueSelectDilatacaoDireito('')
        }
    }
    const removeFraseDilatacaoDireito = () => {
        laudoPrin.map((e) => {
            if (e.includes("Rim direito com dilatação")) {
                let index = laudoPrin.indexOf(e);
                //caso o valor enviado exista no array, vai remover com splice e setar array novamente
                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    }

    useEffect(() => {
        criaStringDilatacaoDireito()
    }, [valueSelectDilatacaoDireito, checkboxDilatacaoDireito])

    const criaStringDilatacaoEsquerdo = () => {
        removeFraseDilatacaoEsquerdo()
        console.log('aqui')
        if (checkboxDilatacaoEsquerdo) {
            console.log(valueSelectDilatacaoEsquerdo)
            setDisableSelectDilatacaoEsquerdo(false)
            if (valueSelectDilatacaoEsquerdo !== '') {
                let string = `Rim esquerdo com dilatação ${valueSelectDilatacaoEsquerdo}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectDilatacaoEsquerdo(true)
            setValueSelectDilatacaoEsquerdo('')
        }
    }
    const removeFraseDilatacaoEsquerdo = () => {
        laudoPrin.map((e) => {
            if (e.includes("Rim esquerdo com dilatação")) {
                let index = laudoPrin.indexOf(e);
                //caso o valor enviado exista no array, vai remover com splice e setar array novamente
                if (index > -1) {
                    laudoPrin.splice(index, 1);
                    setLaudoPrin((arr) => [...arr]);
                }
            }
        });
    }

    useEffect(() => {
        criaStringDilatacaoEsquerdo()
    }, [valueSelectDilatacaoEsquerdo, checkboxDilatacaoEsquerdo])

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
                mb='20px'>
                <TituloNomeExame titulo='Dilatação' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Box
                        display='flex'
                    >

                        <Checkbox
                            onChange={(e) => { setCheckboxDilatacaoDireito(!checkboxDilatacaoDireito) }}
                        >Dilatação rim direito
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectDilatacaoDireito}
                            onChange={(e) => { setValueSelectDilatacaoDireito(e.target.value) }}
                            value={valueSelectDilatacaoDireito}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='leve'>leve</option>
                            <option value='moderada'>moderada</option>
                            <option value='acentuada'>acentuada</option>

                        </Select>
                    </Box>
                    <Box
                        display='flex'
                    >

                        <Checkbox
                            onChange={(e) => { setCheckboxDilatacaoEsquerdo(!checkboxDilatacaoEsquerdo) }}
                        >Dilatação rim Esquerdo
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectDilatacaoEsquerdo}
                            onChange={(e) => { setValueSelectDilatacaoEsquerdo(e.target.value) }}
                            value={valueSelectDilatacaoEsquerdo}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='leve'>leve</option>
                            <option value='moderada'>moderada</option>
                            <option value='acentuada'>acentuada</option>

                        </Select>
                    </Box>

                </Box>

            </Box >
        </Box >
    );
}

export default Dilatacao;