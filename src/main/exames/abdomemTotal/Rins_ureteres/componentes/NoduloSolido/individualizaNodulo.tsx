
/* eslint-disable array-callback-return */
import { Box, Checkbox, Input, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../../component/function_format_laudo";

export default function IndividualizarNodulo({ numCalculo }) {

    const [FraseNoduloSolido, setFraseNoduloSolido] = useState<any>([]);
    const [ConclusoesNoduloSolido, setConclusoesNoduloSolido] = useState<any>([]);

    const [NoduloCheckbox, setNoduloCheckbox] = useState(false)
    const [ValueSelectNodulo1, setValueSelectNodulo1] = useState('')
    const [ValueSelectNodulo2, setValueSelectNodulo2] = useState('')
    const [ValueSelectNodulo3, setValueSelectNodulo3] = useState('')
    const [ValueSelectNodulo4, setValueSelectNodulo4] = useState('')
    const [ValueInput1, setValueInput1] = useState('')


    const criaStringNodulo = () => {
        let string = `Presença do ${numCalculo}º nódulo`
        const conclusao = 'Imagem sugestiva a presença de nódulo sólido.'
        removeNodulo()
        if (NoduloCheckbox) {
            if (ValueSelectNodulo1 != '' && ValueSelectNodulo2 != '' && ValueSelectNodulo3 != '' && ValueSelectNodulo4 != '' &&
                ValueInput1 != '') {
                string = `${string} ${ValueSelectNodulo1} de ${ValueSelectNodulo2}, medindo ${ValueInput1} cm 
            localizado no ${ValueSelectNodulo3} do ${ValueSelectNodulo4}.`
                setConclusoesNoduloSolido((arr) => [...arr, conclusao])
                setFraseNoduloSolido((arr) => [...arr, string]);
            }
        } else {
            setValueSelectNodulo1('')
            setValueSelectNodulo2('')
            setValueSelectNodulo3('')
            setValueSelectNodulo4('')
            setValueInput1('')
        }
    }

    const removeNodulo = () => {
        FraseNoduloSolido.map((e) => {
            if (e.includes(`Presença do ${numCalculo}º nódulo`)) {
                const index = FraseNoduloSolido.indexOf(e);
                if (index > -1) {
                    FraseNoduloSolido.splice(index, 1);
                    setFraseNoduloSolido((arr) => [...arr]);
                }
            }
        });
        ConclusoesNoduloSolido.map((e) => {
            if (e.includes("Imagem sugestiva a presença de nódulo sólido.")) {
                const index = ConclusoesNoduloSolido.indexOf(e);
                if (index > -1) {
                    ConclusoesNoduloSolido.splice(index, 1);
                    setConclusoesNoduloSolido((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Imagem sugestiva a presença de nódulo sólido.');
                }
            }
        });
    };

    useEffect(() => {
        criaStringNodulo()
    }, [NoduloCheckbox, ValueInput1, ValueSelectNodulo1, ValueSelectNodulo2, ValueSelectNodulo3, ValueSelectNodulo4])

    const subExame = `Rins e ureteres. Nódulo sólido ${numCalculo}`;
    const titulo_exame = "Abdômen total";

    useEffect(() => {
        if (Object.keys(FraseNoduloSolido).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseNoduloSolido,
                ConclusoesNoduloSolido
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
        <Box display='flex' flexWrap='wrap' gap='10px'>
            <Checkbox
                onChange={() => setNoduloCheckbox(!NoduloCheckbox)}>
            </Checkbox>
            <Select w='150px'
                isDisabled={!NoduloCheckbox}
                value={ValueSelectNodulo1}
                onChange={(e) => setValueSelectNodulo1(e.target.value)}
            >
                <option selected disabled value="">Selecione</option>
                <option value="hipoecogênico">hipoecogênico</option>
                <option value="hiperecogênico">hiperecogênico</option>
                <option value="isoecogênico">isoecogênico</option>
            </Select>
            <Select w='150px'
                isDisabled={!NoduloCheckbox}
                value={ValueSelectNodulo2}
                onChange={(e) => setValueSelectNodulo2(e.target.value)}
            >
                <option selected disabled value="">Selecione</option>
                <option value="contornos regulares">contornos regulares</option>
                <option value="contornos irregulares">contornos irregulares</option>
            </Select>
            <Input
                p='0'
                textAlign='center'
                w='60px'
                isDisabled={!NoduloCheckbox}
                value={ValueInput1}
                placeholder="00"
                onChange={(e) => setValueInput1(e.target.value)}
            />
            <Text alignSelf='center'>cm</Text>
            <Text alignSelf='center'>no</Text>
            <Select w='150px'
                isDisabled={!NoduloCheckbox}
                value={ValueSelectNodulo3}
                onChange={(e) => setValueSelectNodulo3(e.target.value)}
            >
                <option selected disabled value="">Selecione</option>
                <option value="terço superior">terço superior</option>
                <option value="terço médio">terço médio</option>
                <option value="terço inferior">terço inferior</option>
                <option value="pólo superior">pólo superior</option>
                <option value="pólo inferior">pólo inferior</option>
            </Select>
            <Select w='150px'
                isDisabled={!NoduloCheckbox}
                value={ValueSelectNodulo4}
                onChange={(e) => setValueSelectNodulo4(e.target.value)}
            >
                <option selected disabled value="">Selecione</option>
                <option value="rim esquerdo">rim esquerdo</option>
                <option value="rim direito">rim direito</option>
            </Select>
        </Box >
    );
}
