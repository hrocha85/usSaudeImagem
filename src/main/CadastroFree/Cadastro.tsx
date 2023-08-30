import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    Link,
    Text
} from '@chakra-ui/react';

function CadastroUsuario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [clinicaOuMedico, setClinicaOuMedico] = useState('');
    const [aceitouTermo, setAceitouTermo] = useState(false);
    const [isDisabledCadastro, setIsDisabledCadastro] = useState(true);
    const [senhaValida, setSenhaValida] = useState(false);
    const [emailValido, setEmailValido] = useState(false);


    const getUserIp = async () => {
        const ip = await axios.get('https://ipapi.co/json')
        console.log("mostrar IP:" ,ip.data)
      }

    const handleCadastro = () => {
      const userData = {
        nome,
        email,
        senha,
        telefone,
        cidade,
        estado,
        cep,
        rua,
        clinicaOuMedico
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log(userData)

          getUserIp()


    };
      
    const handleSenhaChange = (event) => {
        const newSenha = event.target.value;
        setSenha(newSenha);
    

        if (newSenha.length >= 8) {
          setSenhaValida(true);
        } else {
          setSenhaValida(false);
        }
      };

      const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

      const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setEmailValido(validarEmail(newEmail));
      };

    const consultarCEP = async (cep) => {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const data = response.data;
      
          if (!data.erro) {
            setRua(data.logradouro);
            setCidade(data.localidade);
            setEstado(data.uf);
          } else {
            // CEP inválido ou não encontrado
            console.log('CEP inválido ou não encontrado');
          }
        } catch (error) {
          console.error('Erro ao consultar o CEP', error);
        }
    };

      

      const formatPhoneNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, '');
        const match = cleanedValue.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
          return `(${match[1]}) ${match[2]} -${match[3]}`;
        }
      
        return cleanedValue;
      };

      
      const formatCEP = (value) => {

        const cleanedValue = value.replace(/\D/g, '');
      

        if (cleanedValue.length == 8) {

          return `${cleanedValue.substring(0, 5)}-${cleanedValue.substring(5, 8)}`;
        }
      
        return cleanedValue;
      };


      

    const CheckRegistered = () => {
        localStorage.setItem("AlreadyRegistered", 'salvo');
    }

    useEffect(() => {
        if (nome && senha && email && telefone && rua && cidade
            && cep && estado && clinicaOuMedico) {
            setIsDisabledCadastro(false);
        } else {
            setIsDisabledCadastro(true);
        }
      }, [nome, senha, email, telefone, rua, cidade, cep, estado, clinicaOuMedico]);

    return (
        <Container maxW="container.lg" centerContent>
            <Box p={6} shadow="md" borderRadius="md" w="100%" maxW="auto">
                <VStack spacing={4} align="stretch">
                    <Heading as="h1" size="lg" textAlign="center">
                        Cadastro:
                    </Heading>

                    <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    </FormControl>

                    <FormControl isRequired>
                    <FormLabel display={'flex'}>Email <Text opacity={0.6}pl={2}> (name@dominio.com)</Text></FormLabel>
                    <Input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </FormControl>

                    <FormControl isRequired>
                    <FormLabel display={'flex'}>Senha <Text opacity={0.6}pl={2}> (Conter no mínimo 8 caracteres)</Text></FormLabel>
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={handleSenhaChange}
                    />
                    </FormControl>

                    <FormControl isRequired>
                    <FormLabel>Telefone</FormLabel>
                    <Input
                        type="text"
                        placeholder="(99)99999-9999"
                        value={telefone}
                        onChange={(e) => setTelefone(formatPhoneNumber(e.target.value))}
                        maxLength={14}
                    />
                    </FormControl>

                    <HStack>

                    <FormControl isRequired>
                        <FormLabel>CEP</FormLabel>
                        <Input
                        type='text'
                        placeholder="00000-000"
                        value={cep}
                        onChange={(e) => setCep(formatCEP(e.target.value))}
                        onBlur={(e) => consultarCEP(e.target.value)}
                        maxLength={9}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Rua</FormLabel>
                        <Input
                        placeholder="Digite sua rua"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        />
                    </FormControl>
                    </HStack>

                    <HStack>
                    <FormControl isRequired>
                        <FormLabel>Cidade</FormLabel>
                        <Input
                        placeholder="Digite sua cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Estado</FormLabel>
                        <Input
                        placeholder="Digite seu estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        />
                    </FormControl>
                    </HStack>

                    <FormControl isRequired>
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

                    <FormControl isRequired>
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

                    <Link href='#/LoginFree'>
                        <Button
                        colorScheme="blue"
                        isDisabled={isDisabledCadastro || !aceitouTermo || !senhaValida || !emailValido}
                        onClick={handleCadastro}
                        >
                        Cadastrar
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </Container>
    );
}

export default CadastroUsuario;
