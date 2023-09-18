/* eslint-disable eqeqeq */

import { Box, Checkbox, Input, Select, Wrap, Text, Stack, HStack, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function Cisto({ numCalculo }) {
    const [FrasesCistos, setFrasesCistos] = useState<any>([]);
    const [ConclusaoCistos, setConclusaoCistos] = useState<any>([]);

    const [CistoColoideCheckbox, setCistoColoideCheckbox] = useState(false)
    const [ValueCistoColoideSelect, setValueCistoColoideSelect] = useState('')
    const [ValueCistoColoideInput, setValueCistoColoideInput] = useState('')

    const criaStringNodulo = () => {
        let string = `Cisto coloide ${numCalculo}`
        const conclusao = 'Imagem sugestiva de cisto coloide.'
        removeStringNodulo()
        removeConclusaoString(conclusao)
        if (CistoColoideCheckbox) {
            if (ValueCistoColoideSelect && ValueCistoColoideInput) {
                string = `${string} ${ValueCistoColoideSelect} ${ValueCistoColoideInput}.`
                setFrasesCistos((arr) => [...arr, string]);
                setConclusaoCistos((arr) => [...arr, conclusao])
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
        FrasesCistos.map((e) => {
            if (e.includes(`Cisto coloide ${numCalculo}`)) {
                const index = FrasesCistos.indexOf(e);
                if (index > -1) {
                    FrasesCistos.splice(index, 1);
                    setFrasesCistos((arr) => [...arr]);
                }
            }
        });
    };
    const removeConclusaoString = (value) => {
        let index;
        ConclusaoCistos.map((e) => {
            if (e.includes(value)) {
                index = ConclusaoCistos.indexOf(e);

                if (index > -1) {
                    ConclusaoCistos.splice(index, 1);
                    setConclusaoCistos((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao(value);
                }
            }
        });
    };

    const subExame = `Cisto coloide ${numCalculo}`;
    const titulo_exame = "Tireóide";

    useEffect(() => {
        if (Object.keys(FrasesCistos).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesCistos,
                ConclusaoCistos
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesCistos,
                ConclusaoCistos
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesCistos]);

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
                p='0'
                textAlign='center'
                onChange={(e) => setValueCistoColoideInput(e.target.value)}
                isDisabled={!CistoColoideCheckbox}
                value={ValueCistoColoideInput}
                w='60px'
                placeholder="00"
            />
            <Text alignSelf='center'>cm no</Text>
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