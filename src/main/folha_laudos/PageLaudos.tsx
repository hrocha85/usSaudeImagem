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

let dados;
export const lista_medicos = MedicosJSON.medicos;

const PageLaudos = () => {

    const getMedicos = () => {
        let medicos;
        let item;
        if (localStorage.getItem("medicos") != null) {
            item = localStorage.getItem("medicos");

            medicos = JSON.parse(item);
        } else medicos = [];
        return medicos;
    };

    const getUser = () => {
        let user;
        if (localStorage.getItem("user") != null) {
            user = JSON.parse(localStorage.getItem("user")!);
        }

        if (user != null) return user.isLogged;
    };

    // const [exames, setExames] = useState([
    //     { id: 1, paciente: 'Paciente 1', medico: 'Médico 1', data: '01/01/2022' },
    //     { id: 2, paciente: 'Marcos', medico: 'Paulo', data: '01/01/2022' },
    //     { id: 3, paciente: 'Paciente 1', medico: 'Médico 1', data: '01/05/2022' },
    //     { id: 4, paciente: 'Paciente 1', medico: 'João', data: '10/01/2022' },
    //     { id: 5, paciente: 'Leandro', medico: 'Médico 1', data: '01/07/2022' },
    //     { id: 6, paciente: 'Paciente 1', medico: 'Médico 1', data: '18/01/2022' },
    //     { id: 7, paciente: 'Paciente 1', medico: 'Médico 1', data: '01/01/2022' },
    //     { id: 8, paciente: 'José', medico: 'Médico 1', data: '01/01/2022' },
    //     { id: 9, paciente: 'Paciente 1', medico: 'Pedro', data: '01/01/2022' },
    //     { id: 10, paciente: 'Paciente 1', medico: 'Médico 1', data: '10/03/2022' },
    //     { id: 11, paciente: 'Paciente 1', medico: 'Médico 1', data: '01/01/2022' },
    //     { id: 12, paciente: 'Paciente 1', medico: 'Médico 1', data: '01/08/2022' },
    //     { id: 13, paciente: 'Paciente 1', medico: 'Médico 1', data: '01/01/2022' },

    //     // Adicione os outros exames aqui...
    // ]);

    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const perPage = 10;
    const [stateClickAddMedico, setStateClickAddMedico] = useState(false);

    const [InputNomeDoutor, setInputNomeDoutor] = useState(false);

    const [updateTAGS, setUpdateTAGS] = useState(false);

    const [placeHolderAddDoutor, setplaceHolderDoutor] = useState("Nome");

    const [imageAssinatura, setImageAssinatura] = useState(true);

    const refNomeDoutor = useRef<HTMLInputElement | null>(null);
    const [medicos, setMedicos] = useState<any[]>(GetMedicosFree());

    const pegaLaudos = () => {
        if (localStorage.getItem("user") != null) {
            const medico = JSON.parse(localStorage.getItem("user")!);
            console.log(medico)
            return medico.medico;

        } else return null;
    }

    useEffect(() => {
        setMedicos(GetMedicosFree());
    }, [localStorage.getItem("medicos")!]);

    const [exames, setExames] = useState<any>([]);
    const [MedicoLogado, setMedicoLogado] = useState<string>('');
    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            const medico = JSON.parse(localStorage.getItem("user")!);
            setExames(medico.medico.laudos)
            setMedicoLogado(medico.nome)
        }
    })


    const showSavedLaudo = (laudo) => {
        return window.open(laudo);
    };

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // const filteredExames = exames.filter(
    //     (exame) =>
    //         exame.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         exame.medico.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         exame.data.includes(searchTerm)
    // );

    // const paginatedExames = filteredExames.slice(
    //     currentPage * perPage,
    //     (currentPage + 1) * perPage
    // );



    const listaLaudosVazia = () => {
        return (
            <Center>
                <List size="20px">
                    <ListItem fontSize="17px" textAlign="center" fontWeight="semibold">
                        Nenhum laudo encontrado
                    </ListItem>
                    <Divider orientation="horizontal" marginBottom="10px" />
                </List>
            </Center>
        );
    };

    return (
        <>
            <Sidebar />

            <Box>
                <Text textAlign={'center'} p={'3%'} fontSize={'2rem'}>Laudos</Text>
                <InputGroup>
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
                            <Th>Médico</Th>
                            <Th>Data</Th>
                            <Th>Procedimento</Th>
                            <Th>Visualizar</Th>
                            <Th>Baixar Exame</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {exames.map((exame, index) => (
                            <Tr key={index}>
                                <Td>{exame.paciente}</Td>
                                <Td>{MedicoLogado}</Td>
                                <Td>{exame.data}</Td>
                                {/* <Td><Button onClick={() => { showSavedLaudo(laudos.laudo); }}><IoIosEye /></Button></Td> */}
                                <Td><Button><IoMdDownload /></Button></Td>
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
