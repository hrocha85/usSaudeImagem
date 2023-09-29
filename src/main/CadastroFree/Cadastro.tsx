import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Radio,
  RadioGroup,
  Select,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Header } from '../LandingPage/header/Header';
import { Footer } from '../LandingPage/footer/Footer';
import fundo1 from '../images/landing/Rectangle2.png'

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
          usenavigate('/Login')
        } else if (response.status === 200) {
          setTimeout(() => {
            toast({
              duration: 3000,
              title: `Email já cadastrado!`,
              position: "top",
              isClosable: true,
            });
          }, 500);
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
    <Box>
      <Header />
      <Container maxW="container.lg" centerContent pt={'2%'}>

        <Box p={6} shadow="md" borderRadius="md" w="100%" maxW="auto">
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="lg" textAlign="center">
              <Box
                backgroundImage={fundo1}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                pt={'5%'}
              >
                <Box textAlign={'center'} py={'3%'}>
                  <Text
                    fontSize={"46px"}
                    fontFamily={'Rubik, sans-serif'}
                    fontStyle={'normal'}
                    fontWeight={'700'}
                    lineHeight={'normal'}
                    textColor={'#fff'}
                    alignSelf={'stretch'}
                    textAlign={'center'}
                  >
                    Cadastro
                  </Text>
                  <Text
                    fontSize={"25px"}
                    fontFamily={'Rubik, sans-serif'}
                    fontStyle={'normal'}
                    fontWeight={'400'}
                    lineHeight={'normal'}
                    textColor={'#fff'}
                    textAlign={'center'}
                    pt={'20px'}

                  >
                    Preencha o formulário
                  </Text>
                </Box>
              </Box>
            </Heading>

            <Flex flexDir={['column', 'row']}>
              <FormControl isRequired w={['100%', '50%']} pr={'2%'}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Nome</FormLabel>
                <Input
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired w={['100%', '50%']}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']}>
              <FormControl isRequired w={['100%', '70%']} pr={'2%'}>
                <FormLabel fontFamily={'Outfit, sans-serif'}
                  fontWeight={'800'} fontSize={'18px'} display={'flex'}
                >Senha
                  <Text opacity={0.6} pl={2} display={['none', 'block']}> (Conter no mínimo 8 caracteres)</Text>
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={handleSenhaChange}
                />
              </FormControl>

              <FormControl isRequired w={['100%', '30%']} >
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Telefone</FormLabel>
                <Input
                  type="text"
                  placeholder="(99)99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(formatPhoneNumber(e.target.value))}
                  maxLength={14}
                />
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']}>

              <FormControl isRequired pr={'2%'} w={['100%', '30%']}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>  CEP</FormLabel>
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
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Rua</FormLabel>
                <Input
                  placeholder="Digite sua rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']}>
              <FormControl isRequired pr={'2%'} w={['100%', '30%']}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Número</FormLabel>
                <Input
                  type='text'
                  placeholder="0000"
                  value={Numero}
                  onChange={(e) => setNumero(e.target.value)}
                  maxLength={9}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Cidade</FormLabel>
                <Input
                  placeholder="São Paulo-SP"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']}>
              <FormControl isRequired pr={'2%'}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Bairro</FormLabel>
                <Input
                  placeholder="Digite seu bairro"
                  value={Bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired w={['100%', '30%']}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Estado</FormLabel>
                <Input
                  placeholder="São Paulo"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                />
              </FormControl>
            </Flex>

            <FormControl isRequired w={'100%'} pt={'3%'}>
              <Flex flexDir={['column', 'row']} justifyContent={'center'}>
                <FormLabel
                  fontFamily={'Outfit, sans-serif'}
                  fontWeight={'800'}
                  fontSize={'18px'}

                >
                  Clínica ou Médico independente
                </FormLabel>
                <RadioGroup
                  value={clinicaOuMedico}
                  onChange={(e) => setClinicaOuMedico(e)}
                  display={'flex'}
                  flexDir={['column', 'row']}
                  justifyContent={'space-around'}
                  w={['100%', '45%']}
                  gap={'10px'}
                >
                  <Box p={'15px'} bg={'gray.100'} rounded={'10px'}><Radio value="clinica">Clínica</Radio></Box>

                  <Box p={'15px'} bg={'gray.100'} rounded={'10px'}><Radio value="medico">Médico Independente</Radio></Box>
                </RadioGroup>
              </Flex>
            </FormControl>


            <FormControl isRequired>
              <Checkbox
                isChecked={aceitouTermo}
                onChange={() => setAceitouTermo(!aceitouTermo)}
              >
                <FormLabel w={'100%'} >
                  Li e aceito os
                  <Link pl={'2%'} color="blue.500" href="/pagina-do-contrato" isExternal>
                    termos de uso
                  </Link>
                </FormLabel>
              </Checkbox>
            </FormControl>

            <Button
              bg={'#1C49B0'}
              textColor={'white'}
              fontFamily={'Sora, sans-serif'}
              isDisabled={isDisabledCadastro || !aceitouTermo || !senhaValida || !emailValido}
              onClick={handleCadastro}
              mx={'20%'}
            >
              Cadastrar
            </Button>

          </VStack>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default CadastroUsuario;
