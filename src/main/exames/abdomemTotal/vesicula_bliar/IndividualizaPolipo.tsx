/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { Box, Checkbox, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";

export default function IndividualizarPolipo({ numCalculo }) {

    const [FrasesVesicula, setFrasesVesicula] = useState<any>([]);
    const [ConclusoesVesicula, setConclusoesVesicula] = useState<any>([]);


    const [PolipoUnicoCheckbox, setPolipoUnicoCheckbox] = useState(false);
    const [PolipoUnicoInput, setPolipoUnicoInput] = useState("");

    const criaStringPolipoUnico = (dados1) => {
        var string =
            "Imagem polipoide hiperecogênica aderida à parede da vesícula, medindo";
        const conclusao = "Imagem compatível com pólipo na vesícula biliar."
        removeFrasePolipoUnico();
        removeItemConclusao(conclusao);
        if (PolipoUnicoCheckbox) {
            if (dados1 != "") {
                string = `${string} ${dados1} cm`;
                setFrasesVesicula((arr) => [...arr, string]);
                setConclusoesVesicula((arr) => [...arr, conclusao]);
            }
        } else {
            setPolipoUnicoInput("");
        }
    };

    const removeFrasePolipoUnico = () => {
        FrasesVesicula.map((e) => {
            if (
                e.includes(
                    "Imagem polipoide hiperecogênica aderida à parede da vesícula, medindo"
                )
            ) {
                var index = FrasesVesicula.indexOf(e);
                if (index > -1) {
                    FrasesVesicula.splice(index, 1);
                    setFrasesVesicula((arr) => [...arr]);
                }
            }
        });
    };


    useEffect(() => {

        criaStringPolipoUnico(PolipoUnicoInput);

    }, [PolipoUnicoCheckbox, PolipoUnicoInput]);

    const removeItemConclusao = (value) => {
        var index = ConclusoesVesicula.indexOf(value);
        if (index > -1) {
            ConclusoesVesicula.splice(index, 1);
            setConclusoesVesicula((arr) => [...arr]);
            new Format_Laudo(titulo_exame).Remove_Conclusao(value);
        }
    };

    const subExame = `Vesícula biliar. Cálculo ${numCalculo}`;
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(FrasesVesicula).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FrasesVesicula,
                ConclusoesVesicula
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FrasesVesicula,
                ConclusoesVesicula
            ).Format_Laudo_Create_Storage();
        }
    }, [FrasesVesicula]);

    return (

        <Stack>
            <Checkbox

                onChange={(e) => setPolipoUnicoCheckbox(!PolipoUnicoCheckbox)}
            >
                {numCalculo} pólipo de
            </Checkbox>
            <HStack>
                <Input
                    p='0'
                    textAlign='center'
                    value={PolipoUnicoInput}
                    w="60px"
                    onChange={(e) => setPolipoUnicoInput(e.target.value)}
                    disabled={!PolipoUnicoCheckbox}
                    placeholder="cm"
                />
                <Text alignSelf="center">cm</Text>
            </HStack>
        </Stack>
    );
}
