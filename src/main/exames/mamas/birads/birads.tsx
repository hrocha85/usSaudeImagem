/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function Birads() {
    const altura = '100%'
    const largura = '95%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkboxCategoria, setCheckboxCategoria] = useState(false)
    const [disableSelectCategoria, setDisableSelectCategoria] = useState(true)
    const [valueSelectCategoria, setValueSelectCategoria] = useState('')

    const criaStringCategoria = () => {
        removeFraseCategoria()
        if (checkboxCategoria) {
            setDisableSelectCategoria(false)
            if (valueSelectCategoria !== '') {
                let string = `Birads categoria ${valueSelectCategoria}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectCategoria(true)
            setValueSelectCategoria('')
        }
    }
    const removeFraseCategoria = () => {
        laudoPrin.map((e) => {
            if (e.includes("Birads")) {
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
        criaStringCategoria()
    }, [valueSelectCategoria, checkboxCategoria])



    return (

        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding='24px 15px 15px'
            mt='20px'
        >
            <Box
                mb='20px'>
                <TituloNomeExame titulo='Birads' />

                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >

                    <Box
                        gap='5px'
                        display='flex'
                        flexWrap='wrap'
                    >
                        <Checkbox
                            onChange={(e) => { setCheckboxCategoria(!checkboxCategoria) }}
                        >Categoria
                        </Checkbox>
                        <Select
                            w='150px'
                            isDisabled={disableSelectCategoria}
                            onChange={(e) => { setValueSelectCategoria(e.target.value) }}
                            value={valueSelectCategoria}
                        >
                            <option value='' disabled selected>Selecione</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>

                        </Select>
                    </Box>
                </Box>

            </Box >
        </Box >
    );
}

export default Birads;