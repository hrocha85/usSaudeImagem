import React, { useState } from 'react';
import {
    Box,
    Container,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Heading,
    Select,
    HStack,
    Checkbox,
    Link
} from '@chakra-ui/react';

function CadastroUsuario() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [clinicaOuMedico, setClinicaOuMedico] = useState('');
    const [aceitouTermo, setAceitouTermo] = useState(false);

    const handleCadastro = () => {
        console.log('Nome:', nome);
        console.log('Sobrenome:', sobrenome);
        console.log('Email:', email);
        console.log('Senha:', senha);
        console.log('Cidade:', cidade);
        console.log('Estado:', estado);
        console.log('CEP:', cep);
        console.log('Rua:', rua);
        console.log('Número:', numero);
        console.log('Telefone:', telefone);
        console.log('Clinica ou Médico:', clinicaOuMedico);

    };

    return (
        <Container maxW="container.lg" centerContent>
            <Box p={6} shadow="md" borderRadius="md" w="100%" maxW="auto">
                <VStack spacing={4} align="stretch">
                    <Heading as="h1" size="lg" textAlign="center">
                        Cadastro:
                    </Heading>

                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Telefone</FormLabel>
                        <Input
                            type="text"
                            placeholder="Digite seu número"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </FormControl>

                    <HStack>
                        <FormControl>
                            <FormLabel>Rua</FormLabel>
                            <Input
                                placeholder="Digite sua rua"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Cidade</FormLabel>
                            <Input
                                placeholder="Digite sua cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                        </FormControl>
                    </HStack>
                    <HStack>
                        <FormControl>
                            <FormLabel>CEP</FormLabel>
                            <Input
                                placeholder="Digite seu CEP"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Estado</FormLabel>
                            <Input
                                placeholder="Digite seu estado"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                            />
                        </FormControl>
                    </HStack>

                    <FormControl>
                        <FormLabel>Clinica ou Médico independente</FormLabel>
                        <Select
                            placeholder="Selecione"
                            value={clinicaOuMedico}
                            onChange={(e) => setClinicaOuMedico(e.target.value)}
                        >
                            <option value="clinica">Clínica</option>
                            <option value="medico">Médico Independente</option>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <Checkbox
                            isChecked={aceitouTermo}
                            onChange={() => setAceitouTermo(!aceitouTermo)}
                        >
                            Aceito os termos de uso
                        </Checkbox>
                        <FormLabel>
                            Leia os{' '}
                            <Link color="blue.500" href="/pagina-do-contrato" isExternal>
                                termos de uso
                            </Link>{' '}
                            antes de prosseguir.
                        </FormLabel>
                    </FormControl>
                    <Link
                        href='#/Splash'>
                        <Button colorScheme="blue" isDisabled={!aceitouTermo}>
                            Cadastrar
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </Container>
    );
}

export default CadastroUsuario;
