
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarCalculo({ numCalculo }) {

    const [FrasesVesicula, setFrasesVesicula] = useState<any>([]);
    const [ConclusoesCalculo, setConclusoesCalculo] = useState<any>([]);

    const [CalculoUnicoCheckbox, setCalculoUnicoCheckbox] = useState(false);
    const [CalculoUnicoInput, setCalculoUnicoInput] = useState("");
    const [DisableCalculoUnicoInput, setDisableCalculoUnicoInput] =
        useState(true);
    const [CalculoUnicoColecisiteCheckbox, setCalculoUnicoColecisiteCheckbox] =
        useState(false);

    const criaStringCalculoUnico = (dados) => {
        let string = `${numCalculo}: Vesícula biliar`;
        removeFraseCalculoUnico();
        if (dados != "" && CalculoUnicoColecisiteCheckbox) {
            string = `${string} distendida, com paredes espessadas, apresentando uma imagem calculosa fixa no infundíbulo, medindo ${dados} cm.`;
            setFrasesVesicula((arr) => [...arr, string]);
        } else if (dados != "") {
            string = `${string} com forma e dimensões normais, paredes finas e regulares, apresentando uma imagem calculosa em seu interior, móvel às mudanças de decúbito, medindo ${dados} cm`;
            setFrasesVesicula((arr) => [...arr, string]);
        }
    };

    const removeFraseCalculoUnico = () => {
        FrasesVesicula.map((e) => {
            let index;
            if (
                e.includes(
                    `${numCalculo}: Vesícula biliar`
                )
            ) {
                index = FrasesVesicula.indexOf(e);
                if (index > -1) {
                    FrasesVesicula.splice(index, 1);
                    setFrasesVesicula((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (CalculoUnicoCheckbox) {
            criaStringCalculoUnico(CalculoUnicoInput);
            setDisableCalculoUnicoInput(false);
        } else {
            setDisableCalculoUnicoInput(true);
            removeFraseCalculoUnico();
            setCalculoUnicoInput("");
        }
    }, [CalculoUnicoCheckbox, CalculoUnicoInput, CalculoUnicoColecisiteCheckbox]);

    const subExame = `Vesícula biliar. Cálculo ${numCalculo}`;
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(FrasesVesicula).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesVesicula,
                ConclusoesCalculo
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesVesicula,
                ConclusoesCalculo
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesVesicula]);

    return (

        <Stack>
            <Checkbox
                onChange={(e) => setCalculoUnicoCheckbox(!CalculoUnicoCheckbox)}
            >
                {numCalculo} Cálculo de
            </Checkbox>
            <Input
                w='70px'
                p='0'
                textAlign='center'
                onChange={(e) => {
                    setCalculoUnicoInput(e.target.value);
                }}
                value={CalculoUnicoInput}
                disabled={DisableCalculoUnicoInput}
                placeholder="cm"
            />
            <Checkbox
                onChange={(e) => {
                    setCalculoUnicoColecisiteCheckbox(
                        !CalculoUnicoColecisiteCheckbox
                    );
                }}
                disabled={DisableCalculoUnicoInput}
            >
                colecisite aguda?
            </Checkbox>
        </Stack>
    );
}
