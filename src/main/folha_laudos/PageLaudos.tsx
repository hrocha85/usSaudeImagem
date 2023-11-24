import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Text,
    Center,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Divider,
    List,
    ListItem,
    InputRightElement,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import ReactPaginate from 'react-paginate';
import './style.css'
import Sidebar from '../menu/sideBar';
import MedicosJSON from "../../Data/Medicos.json";
import { IoIosEye, IoMdDownload } from 'react-icons/io';
import GetMedicosFree from '../Helpers/UserFree/GetMedicosFree';
import Exames from './Laudos';
import { Footer } from '../LandingPage/footer/Footer';

export const lista_medicos = MedicosJSON.medicos;

const PageLaudos = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const perPage = 10;

    const [medicos, setMedicos] = useState<any[]>(GetMedicosFree());

    useEffect(() => {
        setMedicos(GetMedicosFree());
    }, [localStorage.getItem("medicos")!]);

    const [exames, setExames] = useState<any>([]);
    const [haExames, setHaExames] = useState(false);

    const [MedicoLogado, setMedicoLogado] = useState<string>('');
    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            const Medico = JSON.parse(localStorage.getItem("user")!);
            const MedicoFree = GetMedicosFree()
            MedicoFree.map((medico) => {
                if (Medico.medico.nome === medico.nome) {
                    setExames(medico.laudos)
                    setMedicoLogado(medico.nome)
                }
            })
        }
    }, [])

    const getUserMedico = () => {
        if (localStorage.getItem("user") != null) {
            const medico = JSON.parse(localStorage.getItem("user")!);
            return medico.medico;
        } else return null;
    };


    const showSavedLaudo = (laudo) => {
        console.log('laudo', laudo)
        return window.open(laudo);

    };
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const filteredExames = exames.filter(
        (exame: { paciente: string | string[]; medicoSolicitante: string; data: string | string[]; }) =>
            // exame.paciente(searchTerm.toLowerCase()) ||
            // exame.medicoSolicitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
            // exame.data.includes(searchTerm)
            console.log(exame)
    );

    const paginatedExames = filteredExames.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
    );




    return (
        <>
            <Sidebar />

            <Box px={'4%'} pb={'5%'}>
                <Text p={'1%'} fontSize={'2rem'}>Laudos</Text>
                <InputGroup mb={'2%'} width="50vw">
                    <Input
                        type="text"
                        placeholder="Pesquisar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        borderBottom="2px"
                        borderColor="gray.500"
                        variant='flushed'

                    />
                    <InputRightElement pointerEvents="none" width="40px" lineHeight="inherit">
                        <SearchIcon color="gray.500" />
                    </InputRightElement>
                </InputGroup>
                {exames.length >= 0 ? (
                    <Text textAlign="center" mt="20px" fontSize="6rem" color="gray.500" opacity={'0.6'}>
                        Não há laudos para mostrar
                    </Text>
                ) : (
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th textColor={'blue.600'} borderBottom={'1px solid gray'}>Paciente</Th>
                                <Th textColor={'blue.600'} borderBottom={'1px solid gray'}>Usuário</Th>
                                <Th textColor={'blue.600'} borderBottom={'1px solid gray'}>Data</Th>
                                <Th textColor={'blue.600'} borderBottom={'1px solid gray'}>Procedimento</Th>
                                <Th textColor={'blue.600'} borderBottom={'1px solid gray'}>Médico Solicitante</Th>
                                <Th textColor={'blue.600'} borderBottom={'1px solid gray'}>Visualizar</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {paginatedExames.map((exame, index) => {
                                console.log('Dados do exame:', exame); // Adiciona este console.log
                                return (
                                    <Tr key={index}>
                                        <Td borderBottom={'1px solid gray'}>{exame.paciente}</Td>
                                        <Td borderBottom={'1px solid gray'}>{MedicoLogado}</Td>
                                        <Td borderBottom={'1px solid gray'}>{exame.data}</Td>
                                        <Td borderBottom={'1px solid gray'}>{exame.tituloLaudo}</Td>
                                        <Td borderBottom={'1px solid gray'}>{exame.medicoSolicitante}</Td>
                                        <Td borderBottom={'1px solid gray'}><Button bg={'transparent'} onClick={() => { showSavedLaudo(exame.laudo) }}><IoIosEye /></Button></Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                )}
                <Center mt={4}>
                    <Box display={'flex'}>
                        <ReactPaginate
                            previousLabel={
                                <IconButton
                                    as={ChevronLeftIcon}
                                    aria-label="Anterior"
                                    color="blue.500"
                                    boxSize={10}
                                />
                            }
                            nextLabel={
                                <IconButton
                                    as={ChevronRightIcon}
                                    aria-label="Próximo"
                                    color="blue.500"
                                    boxSize={10}
                                />
                            }
                            breakLabel="..."
                            breakClassName="break-me"
                            pageCount={Math.ceil(exames.length / perPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageChange}
                            containerClassName={'pagination custom-pagination'}
                            activeClassName={'active'}

                        />
                    </Box>
                </Center>
            </Box>
            <Footer />
        </>
    );
};

export default PageLaudos;
