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
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import ReactPaginate from 'react-paginate';
import './style.css'
import Sidebar from '../menu/sideBar';
import MedicosJSON from "../../Data/Medicos.json";
import { IoIosEye, IoMdDownload } from 'react-icons/io';
import GetMedicosFree from '../Helpers/UserFree/GetMedicosFree';
import Exames from './Laudos';

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
    const [MedicoLogado, setMedicoLogado] = useState<string>('');
    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            const medico = JSON.parse(localStorage.getItem("user")!);
            setExames(medico.medico.laudos)
            setMedicoLogado(medico.medico.nome)
            console.log(MedicoLogado)
            console.log(medico)
        }
    }, [])


    const showSavedLaudo = (laudo) => {
        return window.open(laudo);
       
    };
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const filteredExames = exames.filter(
        (exame) =>
             exame.paciente.toLowerCase().includes(searchTerm.toLowerCase()) || 
             exame.medicoSolicitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
             exame.data.includes(searchTerm)
    );

    const paginatedExames = filteredExames.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
    );




    return (
        <>
            <Sidebar />

            <Box px={'2%'}>
                <Text textAlign={'center'} p={'3%'} fontSize={'2rem'}>Laudos</Text>
                <InputGroup my={'2%'}>
                    <Input
                        type="text"
                        placeholder="Pesquisar paciente"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.400" />
                    </InputLeftElement>
                </InputGroup>
                <Table variant="simple" className="custom-table">
                    <Thead>
                        <Tr>
                            <Th>Paciente</Th>
                            <Th>Usuário</Th>
                            <Th>Data</Th>
                            <Th>Procedimento</Th>
                            <Th>Médico Solicitante</Th>
                            <Th>Visualizar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {paginatedExames.map((exame, index) => (
                            <Tr key={index}>
                                <Td>{exame.paciente}</Td>
                                <Td>{MedicoLogado}</Td>
                                <Td>{exame.data}</Td>
                                <Td>{exame.tituloLaudo}</Td>
                                <Td>{exame.medicoSolicitante}</Td>
                                <Td><Button onClick={() => { showSavedLaudo(exame.laudo); }}><IoIosEye /></Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Center mt={4}>
                    <Box display={'flex'}>
                        <ReactPaginate
                            previousLabel={
                                <IconButton
                                    as={ChevronLeftIcon}
                                    aria-label="Anterior"
                                    color="blue.500"
                                    boxSize={6}
                                />
                            }
                            nextLabel={
                                <IconButton
                                    as={ChevronRightIcon}
                                    aria-label="Próximo"
                                    color="blue.500"
                                    boxSize={6}
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

        </>
    );
};

export default PageLaudos;
