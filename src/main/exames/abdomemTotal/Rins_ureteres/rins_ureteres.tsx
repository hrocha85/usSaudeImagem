/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../component/function_format_laudo";
import TituloNomeExame from "../../../component/titulo_nome_exame";
import Calculo from "./componentes/Calculo";
import CalculoUreteral from "./componentes/CalculoUreteral";
import Cateter from "./componentes/CateterDuplo";
import Cistos from "./componentes/Cistos";
import DilatacaoPielocalicinal from "./componentes/DilatacaoPielocalicinal";
import Nefropatia from "./componentes/Nefropatia";
import NoduloSolido from "./componentes/NoduloSolido";

function RinsUreteres() {
    const altura = "100%";
    const largura = "66%";
    const [FraseRinsUreteres, setFraseRinsUreteres] = useState<any>([]);

    const subExame = "Rins e ureteres";
    const titulo_exame = "Abdômen total";

    const [AspectoNormalCheckbox, setAspectoNormalCheckbox] = useState(false)
    const [AusenciaRimDirCheckbox, setAusenciaRimDirCheckbox] = useState(false)
    const [AusenciaRimEsqCheckbox, setAusenciaRimEsqCheckbox] = useState(false)

    useEffect(() => {
        const string = 'Aspecto normal'
        AspectoNormalCheckbox ? setFraseRinsUreteres((arr) => [...arr, string]) : removeItemString(string)
    }, [AspectoNormalCheckbox])

    useEffect(() => {
        const string = 'Rim direito não caracterizado.'
        AusenciaRimDirCheckbox ? setFraseRinsUreteres((arr) => [...arr, string]) : removeItemString(string)
    }, [AusenciaRimDirCheckbox])
    useEffect(() => {
        const string = 'Rim esquerdo não caracterizado.'
        AusenciaRimEsqCheckbox ? setFraseRinsUreteres((arr) => [...arr, string]) : removeItemString(string)
    }, [AusenciaRimEsqCheckbox])


    const removeItemString = (value) => {
        // console.log("valor remove = ", value);
        var index = FraseRinsUreteres.indexOf(value);
        //caso o valor enviado exista no array, vai remover com splice e setar array novamente
        if (index > -1) {
            FraseRinsUreteres.splice(index, 1);
            setFraseRinsUreteres((arr) => [...arr]);
        }
    };

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
        <Box
            bg="#FAFAFA"
            w={largura}
            h={altura}
            bgPosition="center"
            bgRepeat="no-repeat"
            borderRadius="10.85px"
            boxShadow="md"
            padding="15px"
            mt="15px"
        >
            <TituloNomeExame titulo="Rins e Ureteres" />

            <Box display='flex' flexWrap='wrap' gap='20px'>
                <Checkbox
                    onChange={() => setAspectoNormalCheckbox(!AspectoNormalCheckbox)}>
                    Aspecto normal
                </Checkbox>
                <Checkbox
                    onChange={() => setAusenciaRimDirCheckbox(!AusenciaRimDirCheckbox)}>
                    Ausência do rim DIR.
                </Checkbox>
                <Checkbox
                    onChange={() => setAusenciaRimEsqCheckbox(!AusenciaRimEsqCheckbox)}>
                    Ausência do rim ESQ.
                </Checkbox>
            </Box>

            <Nefropatia />

            <NoduloSolido />
            <Cistos />
            <Calculo />
            <DilatacaoPielocalicinal />
            <CalculoUreteral />
            <Cateter />
        </Box>
    )
}
export default RinsUreteres