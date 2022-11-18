/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function Cirurgia() {
    const altura = '100%'
    const largura = '95%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkboxCirurgiaMastectomia, setCheckboxCirurgiaMastectomia] = useState(false)
    const [disableSelectCirurgiaMastectomia, setDisableSelectCirurgiaMastectomia] = useState(true)
    const [valueSelectCirurgiaMastectomia, setValueSelectCirurgiaMastectomia] = useState('')

    const [checkboxCirurgiaQuadrantectomia, setCheckboxCirurgiaQuadrantectomia] = useState(false)

    const [disableSelectCirurgiaQuadrantectomia, setDisableSelectCirurgiaQuadrantectomia] = useState(true)
    const [valueSelectCirurgiaQuadrantectomia, setValueSelectCirurgiaQuadrantectomia] = useState('')

    const criaStringCirurgiaMastectomia = () => {
        removeFraseCirurgiaMastectomia()
        console.log('aqui')
        if (checkboxCirurgiaMastectomia) {
            console.log(valueSelectCirurgiaMastectomia)
            setDisableSelectCirurgiaMastectomia(false)
            if (valueSelectCirurgiaMastectomia !== '') {
                let string = `Mastectomia ${valueSelectCirurgiaMastectomia}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectCirurgiaMastectomia(true)
            setValueSelectCirurgiaMastectomia('')
        }
    }
    const removeFraseCirurgiaMastectomia = () => {
        laudoPrin.map((e) => {
            if (e.includes("Mastectomia")) {
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
        criaStringCirurgiaMastectomia()
    }, [valueSelectCirurgiaMastectomia, checkboxCirurgiaMastectomia])

    const criaStringCirurgiaQuadrantectomia = () => {
        removeFraseCirurgiaQuadrantectomia()
        console.log('aqui')
        if (checkboxCirurgiaQuadrantectomia) {
            console.log(valueSelectCirurgiaQuadrantectomia)
            setDisableSelectCirurgiaQuadrantectomia(false)
            if (valueSelectCirurgiaQuadrantectomia !== '') {
                let string = `Quadrantectomia  ${valueSelectCirurgiaQuadrantectomia}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectCirurgiaQuadrantectomia(true)
            setValueSelectCirurgiaQuadrantectomia('')
        }
    }
    const removeFraseCirurgiaQuadrantectomia = () => {
        laudoPrin.map((e) => {
            if (e.includes("Quadrantectomia ")) {
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
        criaStringCirurgiaQuadrantectomia()
    }, [valueSelectCirurgiaQuadrantectomia, checkboxCirurgiaQuadrantectomia])

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
                <TituloNomeExame titulo='Cirurgia' />

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
                            onChange={(e) => { setCheckboxCirurgiaMastectomia(!checkboxCirurgiaMastectomia) }}
                        >Mastectomia
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectCirurgiaMastectomia}
                            onChange={(e) => { setValueSelectCirurgiaMastectomia(e.target.value) }}
                            value={valueSelectCirurgiaMastectomia}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='mama direita'>mama direita</option>
                            <option value='mama esquerda'>mama esquerda</option>
                            <option value='bilateral'>bilateral</option>

                        </Select>
                    </Box>
                    <Box
                        display='flex'
                    >
                        <Checkbox
                            onChange={(e) => { setCheckboxCirurgiaQuadrantectomia(!checkboxCirurgiaQuadrantectomia) }}
                        >Quadrantectomia
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectCirurgiaQuadrantectomia}
                            onChange={(e) => { setValueSelectCirurgiaQuadrantectomia(e.target.value) }}
                            value={valueSelectCirurgiaQuadrantectomia}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='mama direita'>mama direita</option>
                            <option value='mama esquerda'>mama esquerda</option>
                            <option value='bilateral'>bilateral</option>
                        </Select>
                    </Box>

                </Box>

            </Box >
        </Box >
    );
}

export default Cirurgia;