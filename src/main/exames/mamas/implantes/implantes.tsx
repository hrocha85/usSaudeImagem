/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function Implantes() {
    const altura = '100%'
    const largura = '95%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkboxPresenteSemAlteracoes, setCheckboxPresenteSemAlteracoes] = useState(true)
    const [disableCheckboxPresenteSemAlteracoes, setDisableCheckboxPresenteSemAlteracoes] = useState(false)

    const [checkboxDobradura, setCheckboxDobradura] = useState(false)
    const [disabledCheckboxDobradura, setDisabledCheckboxDobradura] = useState(false)
    const [disableSelectDobradura, setDisableSelectDobradura] = useState(true)
    const [valueSelectDobradura, setValueSelectDobradura] = useState('')

    const [checkboxRotura, setCheckboxRotura] = useState(false)
    const [disabledCheckboxRotura, setDisabledCheckboxRotura] = useState(false)
    const [disableSelectRotura, setDisableSelectRotura] = useState(true)
    const [valueSelectRotura, setValueSelectRotura] = useState('')

    const criaStringPresenteSemAlteracoes = () => {
        let string = `Presente sem alterações`
        if (checkboxPresenteSemAlteracoes) {
            setDisabledCheckboxDobradura(true)
            setDisabledCheckboxRotura(true)
            setLaudoPrin((arr) => [...arr, string]);
        } else {
            setDisabledCheckboxDobradura(false)
            setDisabledCheckboxRotura(false)
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


    const criaStringDobradura = () => {
        removeFraseDobradura()
        if (checkboxDobradura) {
            setDisableSelectDobradura(false)
            if (valueSelectDobradura !== '') {
                let string = `Dobradura ${valueSelectDobradura}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectDobradura(true)
            setValueSelectDobradura('')
        }
    }
    const removeFraseDobradura = () => {
        laudoPrin.map((e) => {
            if (e.includes("Dobradura")) {
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
        criaStringDobradura()
    }, [valueSelectDobradura, checkboxDobradura])

    const criaStringRotura = () => {
        removeFraseRotura()
        if (checkboxRotura) {
            console.log(valueSelectRotura)
            setDisableSelectRotura(false)
            if (valueSelectRotura !== '') {
                let string = `Rotura ${valueSelectRotura}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectRotura(true)
            setValueSelectRotura('')
        }
    }
    const removeFraseRotura = () => {
        laudoPrin.map((e) => {
            if (e.includes("Rotura ")) {
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
        criaStringRotura()
    }, [valueSelectRotura, checkboxRotura])

    useEffect(() => {
        if (checkboxRotura || checkboxDobradura) {
            setDisableCheckboxPresenteSemAlteracoes(true)
        } else {
            setDisableCheckboxPresenteSemAlteracoes(false)
        }
    }, [checkboxRotura, checkboxDobradura])

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
                <TituloNomeExame titulo='Implantes' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Checkbox
                        onChange={(e) => {
                            setCheckboxPresenteSemAlteracoes(!checkboxPresenteSemAlteracoes);
                            criaStringPresenteSemAlteracoes()
                        }}
                        isDisabled={disableCheckboxPresenteSemAlteracoes}
                    >Presentes sem alterações
                    </Checkbox>
                    <Box
                        display='flex'
                    >

                        <Checkbox
                            onChange={(e) => { setCheckboxDobradura(!checkboxDobradura) }}
                            isDisabled={disabledCheckboxDobradura}
                        >Dobradura
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectDobradura}
                            onChange={(e) => { setValueSelectDobradura(e.target.value) }}
                            value={valueSelectDobradura}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='mama direita'>Mama direita</option>
                            <option value='mama esquerda'>Mama esquerda</option>
                            <option value='bilateral'>bilateral</option>

                        </Select>
                    </Box>
                    <Box
                        display='flex'
                    >
                        <Checkbox
                            onChange={(e) => { setCheckboxRotura(!checkboxRotura) }}
                            isDisabled={disabledCheckboxRotura}
                        >Rotura
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectRotura}
                            onChange={(e) => { setValueSelectRotura(e.target.value) }}
                            value={valueSelectRotura}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='mama direita'>Mama direita</option>
                            <option value='mama esquerda'>Mama esquerda</option>
                            <option value='bilateral'>bilateral</option>
                        </Select>
                    </Box>

                </Box>

            </Box >
        </Box >
    );
}

export default Implantes;