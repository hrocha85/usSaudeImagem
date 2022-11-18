/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Select } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";


function Extra() {
    const altura = '100%'
    const largura = '95%'


    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [checkboxAlteracoes, setCheckboxAlteracoes] = useState(true)

    const [checkboxEcstasia, setCheckboxEcstasia] = useState(false)
    const [disableSelectEcstasia, setDisableSelectEcstasia] = useState(true)
    const [valueSelectEcstasia, setValueSelectEcstasia] = useState('')

    const criaStringAlteracoes = () => {
        let string = `Alterações funcionais benignas`
        if (checkboxAlteracoes) {
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


    const criaStringEcstasia = () => {
        removeFraseEcstasia()
        if (checkboxEcstasia) {
            setDisableSelectEcstasia(false)
            if (valueSelectEcstasia !== '') {
                let string = `Ecstasia Ductal na ${valueSelectEcstasia}`
                setLaudoPrin((arr) => [...arr, string]);
            }
        } else {
            setDisableSelectEcstasia(true)
            setValueSelectEcstasia('')
        }
    }
    const removeFraseEcstasia = () => {
        laudoPrin.map((e) => {
            if (e.includes("Ecstasia")) {
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
        criaStringEcstasia()
    }, [valueSelectEcstasia, checkboxEcstasia])

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
            <Checkbox
                onChange={(e) => {
                    setCheckboxAlteracoes(!checkboxAlteracoes);
                    criaStringAlteracoes()
                }}
            >Alterações funcionais benignas
            </Checkbox>
            <Box
                display='flex'
                mt='20px'
            >

                <Checkbox
                    onChange={(e) => { setCheckboxEcstasia(!checkboxEcstasia) }}
                >Ecstasia Ductal
                </Checkbox>
                <Select
                    w='150px'
                    isDisabled={disableSelectEcstasia}
                    onChange={(e) => { setValueSelectEcstasia(e.target.value) }}
                    value={valueSelectEcstasia}
                >
                    <option value='' disabled selected>Selecione</option>
                    <option value='mama direita'>Mama direita</option>
                    <option value='mama esquerda'>Mama esquerda</option>
                    <option value='bilateral'>bilateral</option>

                </Select>
            </Box>
        </Box >
    );
}

export default Extra;