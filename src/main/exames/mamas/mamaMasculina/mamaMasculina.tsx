/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function MamaMasculina() {
    const altura = '100%'
    const largura = '95%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkboxNormal, setCheckboxNormal] = useState(true)
    const [disableCheckboxNormal, setDisableCheckboxNormal] = useState(false)

    const [checkboxGinecomastia, setCheckboxGinecomastia] = useState(false)
    const [disabledCheckboxGinecomastia, setDisabledCheckboxGinecomastia] = useState(false)
    const [disableSelectGinecomastia, setDisableSelectGinecomastia] = useState(true)
    const [valueSelectGinecomastia, setValueSelectGinecomastia] = useState('')

    const criaStringNormal = () => {
        let string = `Mama masculina normal`
        if (checkboxNormal) {
            setDisabledCheckboxGinecomastia(true)
            setLaudoPrin((arr) => [...arr, string]);
        } else {
            setDisabledCheckboxGinecomastia(false)
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


    const criaStringGinecomastia = () => {
        removeFraseGinecomastia()
        if (checkboxGinecomastia) {
            setDisableCheckboxNormal(true)
            setDisableSelectGinecomastia(false)
            if (valueSelectGinecomastia !== '') {
                let string = `Ginecomastia na ${valueSelectGinecomastia}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableCheckboxNormal(false)
            setDisableSelectGinecomastia(true)
            setValueSelectGinecomastia('')
        }
    }
    const removeFraseGinecomastia = () => {
        laudoPrin.map((e) => {
            if (e.includes("Ginecomastia")) {
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
        criaStringGinecomastia()
    }, [valueSelectGinecomastia, checkboxGinecomastia])

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
                <TituloNomeExame titulo='Mama Masculina' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Checkbox
                        onChange={(e) => {
                            setCheckboxNormal(!checkboxNormal);
                            criaStringNormal()
                        }}
                        isDisabled={disableCheckboxNormal}
                    >Normal
                    </Checkbox>
                    <Box
                        display='flex'
                    >

                        <Checkbox
                            onChange={(e) => { setCheckboxGinecomastia(!checkboxGinecomastia) }}
                            isDisabled={disabledCheckboxGinecomastia}
                        >Ginecomastia
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectGinecomastia}
                            onChange={(e) => { setValueSelectGinecomastia(e.target.value) }}
                            value={valueSelectGinecomastia}
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

export default MamaMasculina;