import { Box, Checkbox } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../../../context/NormalContext";

function ViasBiliares() {
    const altura = '100%'
    const largura = '66%'

    let viasBiliaresDilatadas = document.querySelector('#ViasBiliaresDilatadas') as HTMLInputElement

    const { laudoNormal } = useContext(NormalContext);
    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const [defaultValueNormal, setDefaultValueNormal] = useState({
        defaultValueNormal: false,
    })
    const [checkValueNormal, setCheckvalueNormal] = useState({
        normal: false,
    })
    const [checkValueColedocoEcstasiado, setCheckvalueColedocoEcstasiado] = useState({
        ColedocoEcstasiado: false,
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
    }

    const verificaChecked = (value) => {
        switch (value.id) {
            case 'ColedocoNormal':
                if (value.checked === true) {
                    setDefaultValueNormal({ defaultValueNormal: true })
                    setLaudoPrin(arr => [...arr, value.value])
                    setCheckvalueColedocoEcstasiado({
                        ColedocoEcstasiado: true
                    })
                } else {
                    setDefaultValueNormal({ defaultValueNormal: false })
                    removeItemString(value.value);
                    setCheckvalueColedocoEcstasiado({
                        ColedocoEcstasiado: false
                    })
                }
                break
            case 'ColedocoEcasiado':
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

    useEffect(() => {
        if (laudoNormal === true) {
            criarString('Colédoco Normal ')
            setDefaultValueNormal({ defaultValueNormal: true })
            setCheckvalueColedocoEcstasiado({
                ColedocoEcstasiado: true
            })
        } else {
            setDefaultValueNormal({ defaultValueNormal: false })
            //removeNormal()
            //removeItemString('Colédoco Normal ');
            setCheckvalueColedocoEcstasiado({
                ColedocoEcstasiado: false
            })
        }
    }, [laudoNormal])

    const setValueFraseViasBiliares = (value) => {
        (viasBiliaresDilatadas.checked === true) ? setLaudoPrin(arr => [...arr, value.value]) : removeItemString(value.value)
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
            <TituloNomeExame titulo='Vias Biliares' />


            <Box
                gap='25px'
                display='flex'
                flexWrap='wrap'
                mb='10px'
            >
                <Checkbox
                    isChecked={defaultValueNormal.defaultValueNormal}
                    disabled={checkValueNormal.normal}
                    value='Colédoco Normal ' id='ColedocoNormal'
                    onChange={(e) => { verificaChecked(e.target) }}>
                    Colédoco Normal
                </Checkbox>
                <Checkbox
                    disabled={checkValueColedocoEcstasiado.ColedocoEcstasiado}
                    value='Colédoco Ectasiado ' id='ColedocoEcasiado'
                    onChange={(e) => { verificaChecked(e.target) }}>
                    Colédoco Ectasiado
                </Checkbox>
                <Checkbox value='Vias Biliares Intra-Hepáticas Dilatadas' id='ViasBiliaresDilatadas'
                    onChange={(e) => { setValueFraseViasBiliares(e.target) }}>
                    Vias Biliares Intra-Hepáticas Dilatadas
                </Checkbox>
            </Box>

        </Box >
    );
}

export default ViasBiliares;