/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, Select, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Nefropatia({ Disable }) {
    const [FraseRinsUreteres, setFraseRinsUreteres] = useState<any>([]);
    const [AfilamentoParenquimatosoCheckbox, setAfilamentoParenquimatosoCheckbox] = useState(false)
    const [ValueSelectAfilamento, setValueSelectAfilamento] = useState('')
    const [DisableSelectAfilamento, setDisableSelectAfilamento] = useState(true)

    const subExame = "Rins e ureteres. Nefropatia parenquimatosa crônica";
    const titulo_exame = "Abdômen total";


    const criaStringAfilamentoParenquimatoso = () => {
        let string = 'Rins tópicos,'
        removeAfilamentoParenquimatoso()
        if (ValueSelectAfilamento != '') {
            if (ValueSelectAfilamento === 'bilateral') {
                string = `${string} com dimensões normais e contornos regulares, notando-se redução da espessura e aumento da ecogenicidade do parênquima bilateralmente.`
                setFraseRinsUreteres((arr) => [...arr, string]);
            } else {
                string = `${string} notando-se redução da espessura e aumento da ecogenicidade do parênquima. O rim ${ValueSelectAfilamento} conserva dimensões, espessura e ecogenicidade parenquimatosa normais.`
                setFraseRinsUreteres((arr) => [...arr, string]);
            }
        }
    }

    const removeAfilamentoParenquimatoso = () => {
        FraseRinsUreteres.map((e) => {
            if (e.includes("Rins tópicos,")) {
                var index = FraseRinsUreteres.indexOf(e);

                if (index > -1) {
                    FraseRinsUreteres.splice(index, 1);
                    setFraseRinsUreteres((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (AfilamentoParenquimatosoCheckbox) {
            criaStringAfilamentoParenquimatoso()
            setDisableSelectAfilamento(false)
        } else {
            removeAfilamentoParenquimatoso()
            setDisableSelectAfilamento(true)
            setValueSelectAfilamento('')
        }
    }, [ValueSelectAfilamento, AfilamentoParenquimatosoCheckbox])

    useEffect(() => {
        if (Object.keys(FraseRinsUreteres).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseRinsUreteres
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseRinsUreteres
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseRinsUreteres]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Nefropatia parenquimatosa crônica</Text>
            <Flex gap='10px'>
                <Checkbox
                    isDisabled={Disable}
                    onChange={() => setAfilamentoParenquimatosoCheckbox(!AfilamentoParenquimatosoCheckbox)}>
                    Afilamento parenquimatoso e alteração ecotextural
                </Checkbox>
                <Select w='150px'
                    isDisabled={DisableSelectAfilamento}
                    value={ValueSelectAfilamento}
                    onChange={(e) => setValueSelectAfilamento(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="bilateral">bilateral</option>
                    <option value="direito">do rim direito</option>
                    <option value="esquerdo">do rim esquerdo</option>
                </Select>
            </Flex>
        </Box>
    )
}