/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function Observacoes() {
    const altura = '100%'
    const largura = '95%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [semExameAnterior, setSemExameAnterior] = useState(true)

    const [checkboxNaoObservado, setCheckboxNaoObservado] = useState(false)
    const [disableSelectNaoObservado, setDisableSelectNaoObservado] = useState(true)
    const [valueSelectNaoObservado, setValueSelectNaoObservado] = useState('')

    const criaStringPresenteSemAlteracoes = () => {
        let string = `Sem exame anterior para comparação`
        if (semExameAnterior) {
            setLaudoPrin((arr) => [...arr, string]);
        } else {
            removeItemString(string)
        }
    }

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = laudoPrin.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }


    const criaStringNaoObservado = () => {
        removeFraseNaoObservado()
        if (checkboxNaoObservado) {
            setDisableSelectNaoObservado(false)
            if (valueSelectNaoObservado !== '') {
                let string = `Não foi visibilizado o nódulo na ${valueSelectNaoObservado} descrito no exame anterior. Sugerimos controle ultra-sonográfico.`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectNaoObservado(true)
            setValueSelectNaoObservado('')
        }
    }
    const removeFraseNaoObservado = () => {
        laudoPrin.map((e) => {
            if (e.includes("Não foi visibilizado o nódulo")) {
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
        criaStringNaoObservado()
    }, [valueSelectNaoObservado, checkboxNaoObservado])



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
                <TituloNomeExame titulo='Observacoes' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Checkbox
                        onChange={(e) => {
                            setSemExameAnterior(!semExameAnterior);
                            criaStringPresenteSemAlteracoes()
                        }}

                    >Sem exame anterior para comparação
                    </Checkbox>
                    <Box
                        display='flex'
                        flexWrap='wrap'
                    >
                        <Checkbox
                            onChange={(e) => { setCheckboxNaoObservado(!checkboxNaoObservado) }}
                        >Não observado nódulo descrito em exame anterior.
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectNaoObservado}
                            onChange={(e) => { setValueSelectNaoObservado(e.target.value) }}
                            value={valueSelectNaoObservado}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='mama direita'>Mama direita</option>
                            <option value='mama esquerda'>Mama esquerda</option>
                        </Select>
                    </Box>
                </Box>

            </Box >
        </Box >
    );
}

export default Observacoes;