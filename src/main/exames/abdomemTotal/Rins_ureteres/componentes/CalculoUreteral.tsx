/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Convert_Medida } from "../../../../component/function_convert_medidas";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function CalculoUreteral() {
    const [FraseCalculoUreteral, setFraseCalculoUreteral] = useState<any>([]);
    const [CalculoCheckbox, setCalculoCheckbox] = useState(false)
    const [ValueSelectCalculo1, setValueSelectCalculo1] = useState('')
    const [ValueSelectCalculo2, setValueSelectCalculo2] = useState('')

    const [DisableSelectCalculo, setDisableSelectCalculo] = useState(true)
    const [ValueInput1, setValueInput1] = useState('')

    const subExame = "Rins e ureteres. Cálculo";
    const titulo_exame = "Abdomen total";

    const criaStringCalculo = () => {
        let string = 'Cálculo de '
        removeCalculo()
        var ValueInput1cm = new Convert_Medida(ValueInput1).Convert_Medida()
        if (ValueSelectCalculo1 != '' && ValueSelectCalculo2 != '' && ValueInput1 != '') {
            string = `${string} ${ValueInput1cm} cm ${ValueSelectCalculo1} ${ValueSelectCalculo2}`
            setFraseCalculoUreteral((arr) => [...arr, string]);
        }
    }

    const removeCalculo = () => {
        FraseCalculoUreteral.map((e) => {
            if (e.includes("Cálculo de ")) {
                var index = FraseCalculoUreteral.indexOf(e);

                if (index > -1) {
                    FraseCalculoUreteral.splice(index, 1);
                    setFraseCalculoUreteral((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (CalculoCheckbox) {
            criaStringCalculo()
            setDisableSelectCalculo(false)
        } else {
            removeCalculo()
            setDisableSelectCalculo(true)
            setValueSelectCalculo1('')
            setValueSelectCalculo2('')
            setValueInput1('')
        }
    }, [CalculoCheckbox, ValueInput1, ValueSelectCalculo1, ValueSelectCalculo2])

    useEffect(() => {
        if (Object.keys(FraseCalculoUreteral).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseCalculoUreteral
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseCalculoUreteral
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseCalculoUreteral]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Cálculo uretal</Text>
            <Box display='flex' flexWrap='wrap' gap='10px'>
                <Checkbox
                    onChange={() => setCalculoCheckbox(!CalculoCheckbox)}>
                    Cálculo
                </Checkbox>
                <Input w='60px'
                    isDisabled={DisableSelectCalculo}
                    value={ValueInput1}
                    placeholder="00"
                    onChange={(e) => setValueInput1(e.target.value)}
                />
                <Text alignSelf='center'>mm</Text>
                <Select w='150px'
                    isDisabled={DisableSelectCalculo}
                    value={ValueSelectCalculo1}
                    onChange={(e) => setValueSelectCalculo1(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="na junção pieloureteral">na junção pieloureteral</option>
                    <option value="no terço proximal do ureter">no terço proximal do ureter</option>
                    <option value="no terço médio do ureter">no terço médio do ureter</option>
                    <option value="no terço distal do ureter">no terço distal do ureter</option>
                    <option value="no meato ureteral">no meato ureteral</option>
                </Select>
                <Select w='150px'
                    isDisabled={DisableSelectCalculo}
                    value={ValueSelectCalculo2}
                    onChange={(e) => setValueSelectCalculo2(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="à esquerda">à esquerda</option>
                    <option value="à direita">à direita</option>
                </Select>


            </Box >
        </Box>
    )
}