/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Input, Select, Wrap, Text, Stack, HStack, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function Cisto({ numCalculo }) {
    const [FrasesNodulos, setFrasesNodulos] = useState<any>([]);

    const [CistoColoideCheckbox, setCistoColoideCheckbox] = useState(false)
    const [ValueCistoColoideSelect, setValueCistoColoideSelect] = useState('')
    const [ValueCistoColoideInput, setValueCistoColoideInput] = useState('')

    const criaStringNodulo = () => {
        let string = `Cisto coloide ${numCalculo}`
        removeStringNodulo()
        if (CistoColoideCheckbox) {
            if (ValueCistoColoideSelect && ValueCistoColoideInput) {
                string = `${string} ${ValueCistoColoideSelect} ${ValueCistoColoideInput}.`
                setFrasesNodulos((arr) => [...arr, string]);
            }
        } else {
            setValueCistoColoideInput('')
            setValueCistoColoideSelect('')
        }
    };

    useEffect(() => {
        criaStringNodulo()
    }, [CistoColoideCheckbox, ValueCistoColoideSelect, ValueCistoColoideInput])

    const removeStringNodulo = () => {
        FrasesNodulos.map((e) => {
            if (e.includes(`Cisto coloide ${numCalculo}`)) {
                var index = FrasesNodulos.indexOf(e);
                if (index > -1) {
                    FrasesNodulos.splice(index, 1);
                    setFrasesNodulos((arr) => [...arr]);
                }
            }
        });
    };

    const subExame = `Cisto coloide ${numCalculo}`;
    const titulo_exame = "Tireóide";

    useEffect(() => {
        if (Object.keys(FrasesNodulos).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesNodulos
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesNodulos
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesNodulos]);

    return (

        <Wrap>
            <Checkbox
                onChange={(e) => {
                    setCistoColoideCheckbox(!CistoColoideCheckbox)
                }}
            >
                Cisto Coloide {numCalculo}
            </Checkbox>
            <Input
                onChange={(e) => setValueCistoColoideInput(e.target.value)}
                isDisabled={!CistoColoideCheckbox}
                value={ValueCistoColoideInput}
                w='60px'
                placeholder="00"
            />
            <Text alignSelf='center'>mm no</Text>
            <Select
                w='auto'
                isDisabled={!CistoColoideCheckbox}
                value={ValueCistoColoideSelect}
                onChange={(e) => {
                    setValueCistoColoideSelect(e.target.value)
                }}
            >
                <option value="" disabled selected>
                    Select
                </option>
                <option value="terço superior do lobo esquerdo ">terço superior do lobo esquerdo</option>
                <option value="terço médio do lobo esquerdo ">terço médio do lobo esquerdo</option>
                <option value="terço inferior do lobo esquerdo ">terço inferior do lobo esquerdo</option>
                <option value="terço superior do lobo direito ">terço superior do lobo direito</option>
                <option value="terço médio do lobo direito ">terço médio do lobo direito</option>
                <option value="terço inferior do lobo direito ">terço inferior do lobo direito</option>
                <option value="istmo ">istmo</option>
                <option value="istmo à direita ">istmo à direita</option>
                <option value="istmo à esquerda ">istmo à esquerda</option>
            </Select>
        </Wrap>

    )
}