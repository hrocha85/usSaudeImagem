
import { Box, Checkbox, Flex, HStack, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Format_Laudo } from "../../../../component/function_format_laudo";

export default function DilatacaoPielocalicinal({ Disable }) {


    const [FraseRinsUreteres, setFraseRinsUreteres] = useState<any>([]);
    const [ConclusoesRinsUreteres, setConclusoesRinsUreteres] = useState<any>([]);

    const [DireitaCheckbox, setDireitaCheckbox] = useState(false)
    const [UreteralDireitaCheckbox, setUreteralDireitaCheckbox] = useState(false)
    const [ValueSelectDireita, setValueSelectDireita] = useState('')
    const [DisableSelectDireita, setDisableSelectDireita] = useState(true)

    const [AmbosCheckbox, setAmbosCheckbox] = useState(false)

    const [EsquerdaCheckbox, setEsquerdaCheckbox] = useState(false)
    const [UreteralEsquerdaCheckbox, setUreteralEsquerdaCheckbox] = useState(false)
    const [ValueSelectEsquerda, setValueSelectEsquerda] = useState('')
    const [DisableSelectEsquerda, setDisableSelectEsquerda] = useState(true)

    const subExame = "Rins e ureteres. Dilatção Pielocalicinal";
    const titulo_exame = "Abdômen total";



    useEffect(() => {
        if (ValueSelectDireita !== '' || ValueSelectEsquerda !== '') {
            const conclusao = 'Dilatação do sistema coletor renal.'
            setConclusoesRinsUreteres([conclusao]);
        } else {
            removeConclusão()
        }
    }, [ValueSelectDireita, ValueSelectEsquerda])

    const removeConclusão = () => {
        ConclusoesRinsUreteres.map((e) => {
            if (e.includes("Dilatação do sistema coletor renal")) {
                const index = ConclusoesRinsUreteres.indexOf(e);
                if (index > -1) {
                    ConclusoesRinsUreteres.splice(index, 1);
                    setConclusoesRinsUreteres((arr) => [...arr]);
                    new Format_Laudo(titulo_exame).Remove_Conclusao_Select('Dilatação do sistema coletor renal');
                }
            }
        });
    };


    const criaStringAmbos = () => {
        let string = 'Presença'
        //let conclusao = 'Dilatação do sistema coletor renal bilateralmente.'
        removeAmbos()
        if (AmbosCheckbox && ValueSelectDireita != '') {
            removeDireita()
            removeEsquerda()
            string = `${string} ${ValueSelectEsquerda} de dilatação pielocalicinal bilateral.`
            if (UreteralEsquerdaCheckbox) {
                string = `${string} Nota-se também dilatação ureteral à esquerda.`
            }
            if (UreteralDireitaCheckbox) {
                string = `${string} Nota-se também dilatação ureteral à direita.`
            }
            setFraseRinsUreteres((arr) => [...arr, string]);
            //setConclusoesRinsUreteres((arr) => [...arr, conclusao]);
        }
    }
    const removeAmbos = () => {
        FraseRinsUreteres.map((e) => {
            if (e.includes("dilatação pielocalicinal bilateral")) {
                const index = FraseRinsUreteres.indexOf(e);

                if (index > -1) {
                    FraseRinsUreteres.splice(index, 1);
                    setFraseRinsUreteres((arr) => [...arr]);
                }
            }
        });
    };


    useEffect(() => {
        criaStringAmbos()
    }, [AmbosCheckbox, ValueSelectEsquerda, ValueSelectDireita, UreteralDireitaCheckbox, UreteralEsquerdaCheckbox])

    const criaStringDireita = () => {
        let string = 'Presença de dilatação pielocalicinal à direita'
        removeDireita()
        if (ValueSelectDireita === ValueSelectEsquerda) {
            setAmbosCheckbox(true)
            return
        } else {
            setAmbosCheckbox(false)
        }
        if (ValueSelectDireita != '' && UreteralDireitaCheckbox) {
            string = `${string} ${ValueSelectDireita}. Nota-se também dilatação ureteral à direita.`
            setFraseRinsUreteres((arr) => [...arr, string]);
        } else if (ValueSelectDireita != '') {
            string = `${string} ${ValueSelectDireita}`
            setFraseRinsUreteres((arr) => [...arr, string]);
        }
    }

    const removeDireita = () => {
        FraseRinsUreteres.map((e) => {
            if (e.includes("Presença de dilatação pielocalicinal à direita")) {
                const index = FraseRinsUreteres.indexOf(e);

                if (index > -1) {
                    FraseRinsUreteres.splice(index, 1);
                    setFraseRinsUreteres((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (DireitaCheckbox) {
            criaStringDireita()
            setDisableSelectDireita(false)
        } else {
            removeDireita()
            setDisableSelectDireita(true)
            setValueSelectDireita('')
        }
    }, [ValueSelectDireita, DireitaCheckbox, UreteralDireitaCheckbox])

    const criaStringEsquerda = () => {
        let string = 'Presença de dilatação pielocalicinal à esquerda'
        removeEsquerda()
        if (ValueSelectDireita === ValueSelectEsquerda) {
            setAmbosCheckbox(true)
            return
        } else {
            setAmbosCheckbox(false)
        }
        if (ValueSelectEsquerda != '' && UreteralEsquerdaCheckbox) {
            string = `${string} ${ValueSelectEsquerda},Nota-se também dilatação ureteral à esquerda.`
            setFraseRinsUreteres((arr) => [...arr, string]);
        } else if (ValueSelectEsquerda != '') {
            string = `${string} ${ValueSelectEsquerda}`
            setFraseRinsUreteres((arr) => [...arr, string]);
        }
    }

    const removeEsquerda = () => {
        FraseRinsUreteres.map((e) => {
            if (e.includes("Presença de dilatação pielocalicinal à esquerda")) {
                const index = FraseRinsUreteres.indexOf(e);

                if (index > -1) {
                    FraseRinsUreteres.splice(index, 1);
                    setFraseRinsUreteres((arr) => [...arr]);
                }
            }
        });
    };

    useEffect(() => {
        if (EsquerdaCheckbox) {
            criaStringEsquerda()
            setDisableSelectEsquerda(false)
        } else {
            removeEsquerda()
            setDisableSelectEsquerda(true)
            setValueSelectEsquerda('')
        }
    }, [ValueSelectEsquerda, EsquerdaCheckbox, UreteralEsquerdaCheckbox])

    useEffect(() => {
        if (Object.keys(FraseRinsUreteres).length == 0) {
            new Format_Laudo(
                titulo_exame,
                subExame,
                true,
                FraseRinsUreteres,
                ConclusoesRinsUreteres
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
            <Text fontWeight="bold" >Dilatação Pielocalicinal</Text>
            <Box display='flex' flexWrap='wrap' gap='10px'>
                <HStack gap='10px'>
                    <Checkbox onChange={() => setDireitaCheckbox(!DireitaCheckbox)}>
                        DIREITA:
                    </Checkbox>
                    <Flex flexWrap={'wrap'} gap={3}>
                        <Select w='100%'
                            isDisabled={DisableSelectDireita}
                            value={ValueSelectDireita}
                            onChange={(e) => setValueSelectDireita(e.target.value)}
                        >
                            <option selected disabled value="">Selecione</option>
                            <option value="Ausente">Ausente</option>
                            <option value="discreta">discreta</option>
                            <option value="discreta/moderada">discreta/moderada</option>
                            <option value="moderada">moderada</option>
                            <option value="acentuada">acentuada</option>
                        </Select>
                        <Checkbox
                            isDisabled={DisableSelectDireita}
                            onChange={() => setUreteralDireitaCheckbox(!UreteralDireitaCheckbox)}>
                            +Uretal
                        </Checkbox>
                    </Flex>
                </HStack >
                <HStack gap='10px'>
                    <Checkbox
                        onChange={() => setEsquerdaCheckbox(!EsquerdaCheckbox)}>
                        Esquerda:
                    </Checkbox>
                    <Flex display={'flex'} flexWrap={'wrap'} gap={3}>
                        <Select w='100%'
                            isDisabled={DisableSelectEsquerda}
                            value={ValueSelectEsquerda}
                            onChange={(e) => setValueSelectEsquerda(e.target.value)}
                        >
                            <option selected disabled value="">Selecione</option>
                            <option value="Ausente">Ausente</option>
                            <option value="discreta">discreta</option>
                            <option value="discreta/moderada">discreta/moderada</option>
                            <option value="moderada">moderada</option>
                            <option value="acentuada">acentuada</option>
                        </Select>
                        <Checkbox
                            isDisabled={DisableSelectEsquerda}
                            onChange={() => setUreteralEsquerdaCheckbox(!UreteralEsquerdaCheckbox)}>
                            +Uretal
                        </Checkbox>
                    </Flex>
                </HStack >
            </Box>
        </Box>
    )
}