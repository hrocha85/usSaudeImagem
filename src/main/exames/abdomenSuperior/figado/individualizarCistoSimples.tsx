/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCistos({ numCalculo }) {

    const [FrasesFigado, setFrasesFigado] = useState<any>([]);
    const [ConclusoesCalculo, setConclusoesCalculo] = useState<any>([]);

    const [CistoSimplesCheckbox, setCistoSimplesCheckbox] = useState(false)
    const [CistoSimplesSelect, setCistoSimplesSelect] = useState('')
    const [CistoSimplesInput, setCistoSimplesInput] = useState('')
    const criaStringCistoSimples = (select, input) => {
        var string = `${numCalculo}º Cisto de conteúdo anecogênico, com paredes finas e contornos regulares`
        removeFraseCistoSimples()
        if (select !== '' && input !== '') {
            string = `${string}, medindo ${input} cm, localizado no ${select}. Veia porta e veias hepáticas sem alterações `;
            setFrasesFigado((arr) => [...arr, string]);
        }
    };
    const removeFraseCistoSimples = () => {
        FrasesFigado.map((e) => {
            if (e.includes(`${numCalculo}º Cisto de conteúdo anecogênico, com paredes finas e contornos regulares`)) {
                var index = FrasesFigado.indexOf(e);

                if (index > -1) {
                    FrasesFigado.splice(index, 1);
                    setFrasesFigado((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (CistoSimplesCheckbox) {
            criaStringCistoSimples(CistoSimplesSelect, CistoSimplesInput)
        } else {
            setCistoSimplesSelect('')
            setCistoSimplesInput('')
            removeFraseCistoSimples()
        }
    }, [CistoSimplesCheckbox, CistoSimplesSelect, CistoSimplesInput])

    const subExame = `Fígado. Cisto Simples ${numCalculo}`;
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(FrasesFigado).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesFigado,
                ConclusoesCalculo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesFigado,
                ConclusoesCalculo
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesFigado]);

    return (

        <Box display='flex' flexWrap='wrap'>


            <Checkbox

                w='160px'
                onChange={(e) => {
                    setCistoSimplesCheckbox(!CistoSimplesCheckbox);
                }}
            >
                {numCalculo} Cisto simples de
            </Checkbox>
            <Input
                p='0px'
                textAlign='center'
                w='60px'
                isDisabled={!CistoSimplesCheckbox}
                value={CistoSimplesInput}
                onChange={(e) => {
                    setCistoSimplesInput(e.target.value);
                }}
                placeholder="cm"
            />
            <Text alignSelf='center'>cm, atuando no</Text>
            <Select
                w='150px'
                isDisabled={!CistoSimplesCheckbox}
                value={CistoSimplesSelect}
                onChange={(e) => {
                    setCistoSimplesSelect(e.target.value);
                }}
            >
                <option value="" disabled selected>
                    Selecione
                </option>
                <option value="Segmento I">Segmento I</option>
                <option value="Segmento II">Segmento II</option>
                <option value="Segmento III">Segmento III</option>
                <option value="Segmento IV">Segmento IV</option>
                <option value="Segmento V">Segmento V</option>
                <option value="Segmento VI">Segmento VI</option>
                <option value="Segmento VII">Segmento VII</option>
                <option value="Segmento VIII">Segmento VIII</option>
            </Select>
        </Box>
    );
}
