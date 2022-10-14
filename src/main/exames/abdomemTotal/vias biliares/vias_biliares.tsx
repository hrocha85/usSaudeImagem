import { Box, Checkbox, RadioGroup, Radio } from "@chakra-ui/react";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import { LaudosContext } from '../../../../context/LuadosContext';
import { useContext, useState } from "react";

function ViasBiliares() {
    const altura = '100%'
    const largura = '66%'

    let coledocoNormal = document.querySelector('#ColedocoNormal') as HTMLInputElement
    let coledocoEcasiado = document.querySelector('#ColedocoEcasiado') as HTMLInputElement
    let viasBiliaresDilatadas = document.querySelector('#ViasBiliaresDilatadas') as HTMLInputElement

    const { laudoPrin, setLaudoPrin } = useContext(LaudosContext);

    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = laudoPrin.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            laudoPrin.splice(index, 1)
            setLaudoPrin(arr => [...arr])
        }
    }

    const setValueFraseColedoco = (value) => {
        if (coledocoNormal.checked === true) {
            removeItemString('Colédoco Ectasiado')
            setLaudoPrin(arr => [...arr, value.value])
        } else if (coledocoEcasiado.checked === true) {
            removeItemString('Colédoco Normal');
            setLaudoPrin(arr => [...arr, value.value])
        }
    }

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

            <RadioGroup>
                <Box
                    gap='25px'
                    display='flex'
                    flexWrap='wrap'
                    mb='10px'
                >
                    <Radio value='Colédoco Normal' id='ColedocoNormal'
                        onChange={(e) => { setValueFraseColedoco(e.target) }}>
                        Colédoco Normal
                    </Radio>
                    <Radio value='Colédoco Ectasiado' id='ColedocoEcasiado'
                        onChange={(e) => { setValueFraseColedoco(e.target) }}>
                        Colédoco Ectasiado
                    </Radio>
                    <Checkbox value='Vias Biliares Intra-Hepáticas Dilatadas' id='ViasBiliaresDilatadas'
                        onChange={(e) => { setValueFraseViasBiliares(e.target) }}>
                        Vias Biliares Intra-Hepáticas Dilatadas
                    </Checkbox>
                </Box>
            </RadioGroup>
        </Box >
    );
}

export default ViasBiliares;