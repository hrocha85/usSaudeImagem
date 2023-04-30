/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";

function Procedimentos() {
    const altura = "100%";
    const largura = "66%";
    const [FraseProcedimentos, setFraseProcedimentos] = useState<any>([]);

    const [PuncaoAspirativaCheckbox, setPuncaoAspirativaCheckbox] = useState(false)
    const [NodulosCheckbox, setNodulosCheckbox] = useState(false)
    const [DisableNodulosCheckbox, setDisableNodulosCheckbox] = useState(false)

    const criaStringPuncaoAspirativa = () => {
        let string = 'FALTA Punção aspiratica'
        removeProcedimentos()
        if (PuncaoAspirativaCheckbox) {
            if (NodulosCheckbox) {
                string = `${string} com nódulos`
            }
            setFraseProcedimentos((arr) => [...arr, string]);
        } else {
            removeProcedimentos()
        }
    }

    useEffect(() => {
        criaStringPuncaoAspirativa()
        PuncaoAspirativaCheckbox ? setDisableNodulosCheckbox(false) : setDisableNodulosCheckbox(true)
    }, [PuncaoAspirativaCheckbox, NodulosCheckbox])


    const removeProcedimentos = () => {
        FraseProcedimentos.map((e) => {
            if (e.includes("FALTA Punção aspiratica")) {
                var index = FraseProcedimentos.indexOf(e);

                if (index > -1) {
                    FraseProcedimentos.splice(index, 1);
                    setFraseProcedimentos((arr) => [...arr]);
                }
            }
        });
    };
    const subExame = "Procedimentos diagnósticos";
    const titulo_exame = "Tireóide";


    useEffect(() => {
        if (Object.keys(FraseProcedimentos).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseProcedimentos
            ).Format_Laudo_Create_Storage();
        } else {
            new Format_Laudo(
                titulo_exame,
                subExame,
                false,
                FraseProcedimentos
            ).Format_Laudo_Create_Storage();
        }
    }, [FraseProcedimentos]);

    return (
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="24px 15px 24px 15px"
            mt="15px"
        >
            <TituloNomeExame titulo="Procedimentos diagnósticos" />

            <Stack gap="5px" mb="10px">
                <Checkbox
                    onChange={() => setPuncaoAspirativaCheckbox(!PuncaoAspirativaCheckbox)}>
                    Punção aspirativa com agulha fina (PAAF)
                </Checkbox>
                <Checkbox pl='40px'
                    isDisabled={DisableNodulosCheckbox}
                    onChange={() => setNodulosCheckbox(!NodulosCheckbox)}>
                    Referir só os nódulos no laudo
                </Checkbox>
            </Stack>
        </Box>
    )
}
export default Procedimentos