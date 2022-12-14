import { Box, Checkbox } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";

function EcotexturaParenquima() {
    const altura = '100%'
    const largura = '66%'

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);
    const { laudoNormal } = useContext(NormalContext);

    const [defaultValueNormal, setDefaultValueNormal] = useState({
        defaultValueNormal: false,
    })

    const [checkValueNormal, setCheckvalueNormal] = useState({
        normal: false,
    })
    const [checkValueHeterogenea, setCheckvalueHeterogenea] = useState({
        Heterogenea: false,
    })

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = laudoPrin.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const removeNormal = () => {
        setLaudoPrin(arr => [])
    }

    useEffect(() => {
        if (laudoNormal === true) {
            setDefaultValueNormal({ defaultValueNormal: true })
            setLaudoPrin(arr => [...arr, 'Tireoide Normal '])
            console.log(laudoPrin)

        } else {
            setDefaultValueNormal({ defaultValueNormal: false })
            removeNormal()

        }
    }, [laudoNormal])


    const verificaChecked = (value) => {
        switch (value.id) {
            case 'Normal':
                if (value.checked === true) {
                    setDefaultValueNormal({ defaultValueNormal: true })
                    setLaudoPrin(arr => [...arr, value.value])
                    setCheckvalueHeterogenea({
                        Heterogenea: true
                    })
                } else {
                    setDefaultValueNormal({ defaultValueNormal: false })
                    removeItemString(value.value);
                    setCheckvalueHeterogenea({
                        Heterogenea: false
                    })
                }
                break
            case 'Heterogenea':
                if (value.checked === true) {
                    setLaudoPrin(arr => [...arr, value.value])
                    setCheckvalueNormal({
                        normal: true
                    })
                } else {
                    removeItemString(value.value);
                    setCheckvalueNormal({
                        normal: false
                    })
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
            mt='15px'
        >
            <TituloNomeExame titulo='Ecotextura do Parênquima' />

            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >
                <Checkbox
                    isChecked={defaultValueNormal.defaultValueNormal}
                    disabled={checkValueNormal.normal}
                    value='Normal ' id='Normal'
                    onChange={(e) => { verificaChecked(e.target) }}>
                    Normal
                </Checkbox>
                <Checkbox
                    disabled={checkValueHeterogenea.Heterogenea}
                    value='Heterogênea ' id='Heterogenea'
                    onChange={(e) => { verificaChecked(e.target) }}>
                    Heterogênea
                </Checkbox>
            </Box>

        </Box >
    );
}

export default EcotexturaParenquima;