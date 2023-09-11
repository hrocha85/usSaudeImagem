import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Select,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

type data = {
  name: string,
  email: string,
  password: string,
  telefone?: string,
  address: string,
  tipo: string,
  ip: string,
  ip_address: string,
  role_id: number[]
}

function CadastroUsuario() {
  const usenavigate = useNavigate()
  const toast = useToast();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [CEP, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [Numero, setNumero] = useState('');
  const [Bairro, setBairro] = useState('');
  const [clinicaOuMedico, setClinicaOuMedico] = useState('');
  const [aceitouTermo, setAceitouTermo] = useState(false);
  const [isDisabledCadastro, setIsDisabledCadastro] = useState(true);
  const [senhaValida, setSenhaValida] = useState(false);
  const [emailValido, setEmailValido] = useState(false);

  const handleCadastro = async () => {
    try {
      const ip = await axios.get('https://ipapi.co/json')

      const endereco = `${rua}, ${Numero}- ${Bairro}, ${cidade}- ${estado}, ${CEP}`
      const enderecoIP = `${ip.data.city}, ${ip.data.country}, ${ip.data.region}`

      const userData: data = {
        name: nome,
        email,
        password: senha,
        telefone,
        address: endereco,
        tipo: clinicaOuMedico,
        ip: ip.data.ip,
        ip_address: enderecoIP,
        role_id: [2]
      };

      await api.post('usuario', userData).then((response) => {
        if (response.status === 201) {
          setTimeout(() => {
            toast({
              duration: 3000,
              title: `Cadastro realizado com sucesso, efetue login!`,
              position: "top",
              isClosable: true,
            });
          }, 500);
          usenavigate('/LoginFree')
        }
      }).catch((e) => {
        console.log('erro aqui', e)
      })
    } catch (error) {
      console.log('erro error', error)
    }
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

  const consultarCEP = async (CEP) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
      const data = response.data;

      if (!data.erro) {
        setRua(data.logradouro);
        setCidade(data.localidade);
        setEstado(data.uf);
        setBairro(data.bairro);
      } else {
        console.log('  CEP inválido ou não encontrado');
      }
    } catch (error) {
      console.error('Erro ao consultar o   CEP', error);
    }
  };

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, '');
    const match = cleanedValue.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
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


  useEffect(() => {
    if (nome && senha && email && telefone && rua && cidade
      && CEP && estado && clinicaOuMedico && Numero) {
      setIsDisabledCadastro(false);
    } else {
      setIsDisabledCadastro(true);
    }
  }, [nome, senha, email, telefone, rua, cidade, CEP, estado, clinicaOuMedico, Numero]);

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
            <FormLabel display={'flex'}>Email <Text opacity={0.6} pl={2}> (name@dominio.com)</Text></FormLabel>
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel display={'flex'}>Senha <Text opacity={0.6} pl={2}> (Conter no mínimo 8 caracteres)</Text></FormLabel>
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
              <FormLabel>  CEP</FormLabel>
              <Input
                type='text'
                placeholder="00000-000"
                value={CEP}
                onChange={(e) => setCep(formatCEP(e.target.value))}
                onBlur={(e) => consultarCEP(e.target.value)}
                maxLength={9}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Número</FormLabel>
              <Input
                type='text'
                placeholder=""
                value={Numero}
                onChange={(e) => setNumero(e.target.value)}
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
              <FormLabel>Bairro</FormLabel>
              <Input
                placeholder="Digite sua cidade"
                value={Bairro}
                onChange={(e) => setBairro(e.target.value)}
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

          <Button
            colorScheme="blue"
            isDisabled={isDisabledCadastro || !aceitouTermo || !senhaValida || !emailValido}
            onClick={handleCadastro}
          >
            Cadastrar
          </Button>

        </VStack>
      </Box>
    </Container>
  );
}

export default CadastroUsuario;
