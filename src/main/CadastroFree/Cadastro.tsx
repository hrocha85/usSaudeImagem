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
  Spinner,
  Text,
  Tooltip,
  VStack,
  useToast,
  FormErrorMessage 
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { Header } from '../LandingPage/header/Header';
import { Footer } from '../LandingPage/footer/Footer';
import fundo1 from '../images/landing/Rectangle2.png'
import Cookies from 'js-cookie';

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
  const [isLoading, setIsLoading] = useState(false);
  const [cepInvalido, setCepInvalido] = useState(false);
  const [emailInvalido, setEmailInvalido] = useState(false);

  const handleCadastro = async () => {
    try {
      setIsLoading(true);
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
          finalizaForm()

          setIsLoading(false);
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
            setIsLoading(false);
            toast({
              duration: 3000,
              title: `Email já cadastrado!`,
              position: "top",
              isClosable: true,
            });
          }, 500);
        }
      }).catch((e) => {
        setIsLoading(false);
        console.log('erro aqui', e)
      })
    } catch (error) {
      setIsLoading(false);
      console.log('erro error', error)
    }
    finally {
      setIsLoading(false);
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
    regex.test(email)? setEmailInvalido(false) : setEmailInvalido(true)
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
        setCepInvalido(false)
      } else {
        setCepInvalido(true);
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

  const finalizaForm = async () => {
    try {

      const Email = 'contato@usgimagem.com.br';
      const html = `
            <p>Nome: ${nome}</p>
            <p>Email: ${email}</p>
            <p>Telefone: ${telefone}</p>
            <p>um Novo usuario foi Cadastrado no sistema UsgImagem</p>`;
      const subject = 'Novo cadastro USG';
      const dest = { Email, html, subject };

      const responseEmail = await api.post('sendEmailContato', dest);

      if (responseEmail.status === 200) {
        // Limpeza e configuração de sucesso
        console.log('enviou email')
      } else {
        // Erro no envio do e-mail
        throw new Error('Erro no envio de e-mail');
      }

    } catch (error) {
      console.error(error);

      setTimeout(() => {
        toast({
          duration: 3000,
          title: 'Ops, algo deu errado, avalie novamente!',
          position: 'top',
          isClosable: true,
        });
      }, 500);
    }
  };

  useEffect(() => {
    if (nome && senha && email && telefone && rua && cidade
      && CEP && estado && clinicaOuMedico && Numero && aceitouTermo) {
      setIsDisabledCadastro(false);
    } else {
      setIsDisabledCadastro(true);
    }
  }, [nome, senha, email, telefone, rua, cidade, CEP, estado, clinicaOuMedico, Numero, aceitouTermo]);

  return (
    <Box>
      <Container maxW="container.lg" centerContent>

        <Box p={6} shadow="md" borderRadius="md" w="100%" maxW="auto">
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="lg" textAlign="center">
              <Box
                backgroundImage={fundo1}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                pt={'1%'}
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

              <FormControl isRequired w={['100%', '50%']} isInvalid={!validarEmail}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={handleEmailChange}
                  errorBorderColor={!validarEmail ? 'red.300' : 'yellow'}
                />
                 {emailInvalido && <small style={{ color: 'red' }}>Email invalido</small>}
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']}>
              <FormControl isRequired w={['100%', '70%']} pr={'2%'}>
                <FormLabel fontFamily={'Outfit, sans-serif'}
                  fontWeight={'800'} fontSize={'18px'} display={'flex'}
                >Senha
                  <Text opacity={0.6} pl={2} display={['none', 'block']}> (Conter no mínimo 8 Dígitos)</Text>
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

              <FormControl isRequired pr={'2%'} w={['100%', '30%']}  isInvalid={!formatCEP}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>  CEP</FormLabel>
                <Input
                  type='text'
                  placeholder="00000-000"
                  value={CEP}
                  onChange={(e) => setCep(formatCEP(e.target.value))}
                  onBlur={(e) => consultarCEP(e.target.value)}
                  maxLength={9}
                  errorBorderColor={!formatCEP ? 'red.300' : undefined}
                />
                {cepInvalido && <small style={{ color: 'red' }}>CEP inválido</small>}
              </FormControl>
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
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Rua</FormLabel>
                <Input
                  placeholder="Digite sua rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']} pr={'2%'}>
              <FormControl isRequired>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Cidade</FormLabel>
                <Input
                  placeholder="São Paulo-SP"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </FormControl>
              <FormControl pl={'2%'} pr={'2%'}>
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
                  pt={'1.5%'}

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
                <FormLabel w={'100%'} display={'flex'} justifyContent={'center'} mt={'3%'}>
                  <span>Li e aceito os </span>
                  <Link pl={'2%'} color="blue.500" href="https://drive.google.com/file/d/1vBw3Y52Pq0bfadCiTHw0EJt2bu7J88gz/view?usp=sharing" isExternal target='_blank'>
                    termos de uso
                  </Link>
                </FormLabel>
              </Checkbox>
            </FormControl>
            {isDisabledCadastro || !aceitouTermo || !senhaValida || !emailValido || isLoading ?
              <Tooltip textAlign={'center'} hasArrow fontSize={'16px'} label='Preencha todos os campos corretamente para cadastrar.' bg='gray.300' color='black'>

                <Button
                  bg={'#1C49B0'}
                  textColor={'white'}
                  fontFamily={'Sora, sans-serif'}
                  isDisabled={isDisabledCadastro || !aceitouTermo || !senhaValida || !emailValido || isLoading}
                  onClick={handleCadastro}
                  w={'100%'}
                  _hover={{
                    background: '#1C49B0',
                    color: '#FFF',
                    textDecoration: 'none'
                  }}
                >
                  {isLoading ? (
                    <Spinner size='sm' color='white' style={{ marginRight: '10px' }} />
                  ) : (
                    <>
                      Cadastrar
                    </>
                  )}

                </Button>
              </Tooltip>
              :
              <Button
                bg={'#1C49B0'}
                textColor={'white'}
                fontFamily={'Sora, sans-serif'}
                onClick={handleCadastro}
                w={'100%'}
                _hover={{
                  background: '#1C49B0',
                  color: '#FFF',
                  textDecoration: 'none'
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner size='sm' color='white' style={{ marginRight: '10px' }} />
                ) : (
                  <>
                    Cadastrar
                  </>
                )}
              </Button>
            }
            <Link href={`#/`}>
              <Button
                bg={'red'}
                textColor={'white'}
                fontFamily={'Sora, sans-serif'}
                w={'100%'}
                _hover={{
                  background: 'red',
                  color: '#FFF',
                  textDecoration: 'none'
                }}
              >
                Voltar
              </Button>
            </Link>
          </VStack>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default CadastroUsuario;
