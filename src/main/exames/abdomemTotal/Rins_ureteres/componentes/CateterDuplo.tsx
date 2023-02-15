/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Flex, Select, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { NormalContext } from "../../../../../context/NormalContext";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function Cateter({ Disable }) {
    const [FraseRinsUreteres, setFraseRinsUreteres] = useState<any>([]);
    const [ConclusoesRinsUreteres, setConclusoesRinsUreteres] = useState<any>([]);
    const [PresenteCheckbox, setPresenteCheckbox] = useState(false)
    const [ValueSelectCateter, setValueSelectCateter] = useState('')
    const [DisableSelectCateter, setDisableSelectCateter] = useState(true)

    const subExame = 'Rins e ureteres. Cateter "Duplo J"';
    const titulo_exame = "Abdômen total";
    const criaStringPresente = () => {
        let string = 'Presença de cateter "duplo J"'
        removePresente()
        if (ValueSelectCateter != '') {
            string = `${string} ${ValueSelectCateter}, detectável na forma de ecos lineares na pelve renal e no lúmen vesical, junto ao meato ureteral.`
            setFraseRinsUreteres((arr) => [...arr, string]);
        }
    }

    const removePresente = () => {
        FraseRinsUreteres.map((e) => {
            if (e.includes('Presença de cateter "duplo J"')) {
                var index = FraseRinsUreteres.indexOf(e);

                if (index > -1) {
                    FraseRinsUreteres.splice(index, 1);
                    setFraseRinsUreteres((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (PresenteCheckbox) {
            criaStringPresente()
            setDisableSelectCateter(false)
        } else {
            removePresente()
            setDisableSelectCateter(true)
            setValueSelectCateter('')
        }
    }, [ValueSelectCateter, PresenteCheckbox])

    useEffect(() => {
        if (Object.keys(FraseRinsUreteres).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseRinsUreteres,
                ConclusoesRinsUreteres,
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseRinsUreteres,
                ConclusoesRinsUreteres
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseRinsUreteres]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Cateter "Duplo J"</Text>
            <Flex gap='10px'>
                <Checkbox isDisabled={Disable}
                    onChange={() => setPresenteCheckbox(!PresenteCheckbox)}>
                    Presente
                </Checkbox>
                <Select w='150px'
                    isDisabled={DisableSelectCateter}
                    value={ValueSelectCateter}
                    onChange={(e) => setValueSelectCateter(e.target.value)}
                >
                    <option selected disabled value="">Selecione</option>
                    <option value="à esquerda">à esquerda</option>
                    <option value="à direita">à direita</option>
                </Select>
            </Flex>
        </Box>
    )
}