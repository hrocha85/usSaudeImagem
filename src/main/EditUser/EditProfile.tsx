import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, Container, Flex, FormControl, Image, FormLabel, Heading, Input, Text, Link, Radio, RadioGroup, Stack, VStack, useToast } from '@chakra-ui/react';
import api from '../../api';
import { Footer } from '../LandingPage/footer/Footer';
import { Header } from '../LandingPage/header/Header';
import fundo1 from '../images/landing/Rectangle2.png'
import Cookies from 'js-cookie'
import axios from 'axios';
import PasswordReset from './PasswordReset';
import { Spinner } from "@chakra-ui/react";
import marca from "../images/Marca.png";
import { motion } from "framer-motion";
import UserDelete from './UserDelete';

function EditProfile() {
  const [userData, setUserData] = useState({});
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenExc, setIsModalOpenExc] = useState(false);

  const [userID, setUserID] = useState();
  const [userNome, setUserNome] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userTelefone, setUserTelefone] = useState('');
  const [userCep, setUserCep] = useState('');
  const [userRua, setUserRua] = useState('');
  const [userNumero, setUserNumero] = useState('');
  const [userCidade, setUserCidade] = useState('');
  const [userBairro, setUserBairro] = useState('');
  const [userEstado, setUserEstado] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(true);
  useEffect(() => {
    const userLogged = Cookies.get('USGImage_user')
    const userParse = JSON.parse(userLogged)
    setUserID(userParse.id)
    const getUsers = async () => {
      try {
        const response = await api.get(`/usuario/${userParse.id}`);
        const usuario = response.data
        console.log(usuario)
        const endereco = usuario.address
        const enderecoSplit = endereco.split(',')
        console.log(enderecoSplit)
        const cep = enderecoSplit[3].trim()
        const ruaBairro = enderecoSplit[1].trim().split('- ')
        const cidadeEstado = enderecoSplit[2].trim().split('- ')
        console.log(cidadeEstado)
        setUserNome(usuario.name)
        setUserCep(cep)
        setUserEmail(usuario.email)
        setUserTelefone(usuario.telefone)
        setUserRua(enderecoSplit[0])
        setUserNumero(ruaBairro[0].trim())
        setUserCidade(cidadeEstado[0])
        setUserBairro(ruaBairro[1])
        setUserEstado(cidadeEstado[1])
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsSpinnerVisible(false);
    }, 1000);
  }, []);



  const openModal = () => {
    setIsModalOpen(true);
  };
  const openModal1 = () => {
    setIsModalOpenExc(true);
  };


  const Edita = async () => {
    const endereco = `${userRua}, ${userNumero}- ${userBairro}, ${userCidade}- ${userEstado}, ${userCep}`
    const obj = {
      name: userNome,
      email: userEmail,
      telefone: userTelefone,
      address: endereco
    }
    try {
      console.log(userID)
      const response = await api.put(`usuarioUpdate/${userID}`, obj);

      if (response.status === 201) {
        toast({
          duration: 3000,
          title: 'Usuário atualizado com sucesso!',
          status: 'success',
          position: 'top',
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Erro ao atualizar o usuário', error);
      toast({
        duration: 3000,
        title: 'Erro ao atualizar o usuário',
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  }

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, '');
    const match = cleanedValue.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleanedValue;
  };

  const consultarCEP = async (CEP) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`);
      const data = response.data;

      if (!data.erro) {
        setUserRua(data.logradouro);
        setUserCidade(data.localidade);
        setUserEstado(data.uf);
        setUserBairro(data.bairro);
      } else {
        console.log('  CEP inválido ou não encontrado');
      }
    } catch (error) {
      console.error('Erro ao consultar o   CEP', error);
    }
  };

  const formatCEP = (value) => {
    const cleanedValue = value.replace(/\D/g, '');
    if (cleanedValue.length == 8) {
      return `${cleanedValue.substring(0, 5)}-${cleanedValue.substring(5, 8)}`;
    }
    return cleanedValue;
  };

  return (

    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ display: isSpinnerVisible ? 'block' : 'none' }}
      >
        <Box display={'flex'} alignItems={'center'} flexDir={'column'} pt={'15%'}>
          <Box w={'60%'}>
            <Image src={marca} />
          </Box>
          <Spinner size="xl" color="blue.500" />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
        style={{ display: isSpinnerVisible ? 'none' : 'block' }}
      >
        <Container maxW="container.lg" centerContent>

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
                      Editar Perfil
                    </Text>
                  </Box>
                </Box>
              </Heading>

              <Flex flexDir={['column', 'row']}>
                <FormControl isRequired w={['100%', '50%']} pr={'2%'}>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Nome</FormLabel>
                  <Input
                    placeholder="Digite seu nome"
                    defaultValue={userNome}
                    onChange={(e) => setUserNome(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired w={['100%', '50%']}>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Digite seu email"
                    defaultValue={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </FormControl>
              </Flex>

              <Flex flexDir={['column', 'row']} justifyContent={'space-between'}>
                <FormControl isRequired w={['100%', '30%']}>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Telefone</FormLabel>
                  <Input
                    type="text"
                    placeholder="(99)99999-9999"
                    maxLength={14}
                    value={userTelefone}
                    onChange={(e) => setUserTelefone(formatPhoneNumber(e.target.value))}
                  />
                </FormControl>

                <Link w={'50%'} pt={'3.8%'} pl={'2%'} >
                  <Button
                    bg={'#fff'}
                    textColor={'black'}
                    fontFamily={'Sora, sans-serif'}
                    w={'100%'}
                    border={'1px solid #aaa'}
                    onClick={openModal1}
                  >
                    alterar Senha
                  </Button>
                  <PasswordReset isOpen={isModalOpenExc} onClose={() => setIsModalOpenExc(false)} />
                </Link>
                <Link w={'50%'} pt={'3.8%'} pl={'2%'}>
                  <Button
                    bg={'#fff'}
                    textColor={'black'}
                    fontFamily={'Sora, sans-serif'}
                    w={'100%'}
                    border={'1px solid #aaa'}
                    onClick={openModal}
                  >
                    Excluir Conta
                  </Button>
                  <UserDelete isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </Link>
              </Flex>

              <Flex flexDir={['column', 'row']}>

                <FormControl isRequired pr={'2%'} w={['100%', '30%']}>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>  CEP</FormLabel>
                  <Input
                    type='text'
                    placeholder="00000-000"
                    defaultValue={userCep}
                    onChange={(e) => setUserCep(formatCEP(e.target.value))}
                    onBlur={(e) => consultarCEP(e.target.value)}
                    maxLength={9}
                  />
                </FormControl>
                <FormControl isRequired pr={'2%'} w={['100%', '30%']}>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Número</FormLabel>
                  <Input
                    type='text'
                    placeholder="0000"
                    maxLength={9}
                    defaultValue={userNumero}
                    onChange={(e) => setUserNumero(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Rua</FormLabel>
                  <Input
                    placeholder="Digite sua rua"
                    defaultValue={userRua}
                    onChange={(e) => setUserRua(e.target.value)}
                  />
                </FormControl>
              </Flex>

              <Flex flexDir={['column', 'row']}>

                <FormControl isRequired>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Cidade</FormLabel>
                  <Input
                    placeholder="São Paulo-SP"
                    defaultValue={userCidade}
                    onChange={(e) => setUserCidade(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired pr={'2%'} pl={'2%'}>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Bairro</FormLabel>
                  <Input
                    placeholder="Digite seu bairro"
                    defaultValue={userBairro}
                    onChange={(e) => setUserBairro(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired w={['100%', '30%']}>
                  <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Estado</FormLabel>
                  <Input
                    placeholder="São Paulo"
                    defaultValue={userEstado}
                    onChange={(e) => setUserEstado(e.target.value)}
                  />
                </FormControl>
              </Flex>

              <Flex gap={'5%'} justifyContent={'space-around'} pt={'5%'}>

                <Link href='#/Home/Configuracoes' w={'40%'}>
                  <Button
                    bg={'#1C49B0'}
                    textColor={'white'}
                    fontFamily={'Sora, sans-serif'}
                    w={'100%'}
                    onClick={Edita}
                  >
                    Salvar
                  </Button>
                </Link>

                <Link href='#/Home/Configuracoes' w={'40%'}>
                  <Button
                    bg={'#1C49B0'}
                    textColor={'white'}
                    fontFamily={'Sora, sans-serif'}
                    w={'100%'}
                  >
                    voltar
                  </Button>
                </Link>

              </Flex>

            </VStack>
          </Box>
        </Container>
        <Footer />
      </motion.div>
    </Box>
  );
}

export default EditProfile;
function setIsLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function setIsSpinnerVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}

