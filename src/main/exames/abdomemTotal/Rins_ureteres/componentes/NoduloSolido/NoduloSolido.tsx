/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";
import IndividualizarNodulo from "./individualizaNodulo";

export default function NoduloSolido({ Disable }) {
    const [FraseNoduloSolido, setFraseNoduloSolido] = useState<any>([]);
    const [ConclusoesNoduloSolido, setConclusoesNoduloSolido] = useState<any>([]);
    const [numberArray, setNumberArray] = useState([1]);
    const [UpdateNodulos, setUpdateNodulos] = useState(false);

    function Nodulos() {
        return (
            <>
                {numberArray.map((num, key) => {
                    return <IndividualizarNodulo key={key} numCalculo={num} />;
                })}
            </>
        );
    }

    useEffect(() => {
        if (UpdateNodulos) {
            setUpdateNodulos(false);
            setNumberArray([...numberArray, numberArray.length + 1]);
            Nodulos();
        }
    }, [UpdateNodulos]);

    const subExame = "Rins e ureteres. Nódulo sólido";
    const titulo_exame = "Abdômen total";


    useEffect(() => {
        if (Object.keys(FraseNoduloSolido).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseNoduloSolido,
                ConclusoesNoduloSolido,
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseNoduloSolido,
                ConclusoesNoduloSolido
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseNoduloSolido]);
    return (
        <Box borderWidth="2px" borderColor="blue.100" borderRadius="lg" p='5px' mt='5px' >
            <Text fontWeight="bold" >Nódulo sólido</Text>
            <Box display='flex' flexWrap='wrap' gap='10px'>
                {Nodulos()}
                <Button

                    colorScheme="blue"
                    onClick={() => {
                        setUpdateNodulos(true);
                    }}
                >
                    +1 Nódulo
                </Button>
            </Box >
        </Box>
    )
}