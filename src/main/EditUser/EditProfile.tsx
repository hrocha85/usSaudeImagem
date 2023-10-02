import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, Heading, Input, Text, Link, Radio, RadioGroup, Stack, VStack, useToast } from '@chakra-ui/react';
import api from '../../api';
import { Footer } from '../LandingPage/footer/Footer';
import { Header } from '../LandingPage/header/Header';
import fundo1 from '../images/landing/Rectangle2.png'
import Cookies from 'js-cookie'

function EditProfile() {
  const [userData, setUserData] = useState({});
  const toast = useToast();

  const [userID, setUserID] = useState();
  const [userNome, setUserNome] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSenha, setUserSenha] = useState('');
  const [userConfirmSenha, setUserConfirmSenha] = useState('');
  const [userTelefone, setUserTelefone] = useState('');
  const [userCep, setUserCep] = useState('');
  const [userRua, setUserRua] = useState('');
  const [userNumero, setUserNumero] = useState('');
  const [userCidade, setUserCidade] = useState('');
  const [userBairro, setUserBairro] = useState('');
  const [userEstado, setUserEstado] = useState('');
  useEffect(() => {
    const userLogged = Cookies.get('USGImage_user')
    const userParse = JSON.parse(userLogged)
    const getUsers = async () => {
      try {
        const response = await api.get(`/usuario/${userParse.id}`);
        const usuario = response.data
        console.log(response.data)
        setUserNome(usuario.name)
        setUserEmail(usuario.email)
        setUserSenha(usuario.senha)
        setUserConfirmSenha(usuario.confirmSenha)
        setUserTelefone(usuario.telefone)
        setUserCep(usuario.cep)
        setUserRua(usuario.rua)
        setUserNumero(usuario.numero)
        setUserCidade(usuario.cidade)
        setUserBairro(usuario.bairro)
        setUserEstado(usuario.estado)
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };

    getUsers();
  }, []);


  const Edita = async () => {
    const obj = {
      name: userNome,
      email: userEmail
    }
    try {
      const response = await api.put(`usuario/${userID}`, obj);
      if (response.status === 200) {
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
                  defaultValue={userSenha}
                  onChange={(e) => setUserSenha(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired w={['100%', '70%']} pr={'2%'}>
                <FormLabel fontFamily={'Outfit, sans-serif'}
                  fontWeight={'800'} fontSize={'18px'} display={'flex'}
                >Confirme sua senha
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  defaultValue={userConfirmSenha}
                  onChange={(e) => setUserConfirmSenha(e.target.value)}
                />
              </FormControl>
            </Flex>

            <FormControl isRequired w={['100%', '30%']} >
              <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Telefone</FormLabel>
              <Input
                type="text"
                placeholder="(99)99999-9999"
                maxLength={14}
                defaultValue={userTelefone}
                onChange={(e) => setUserTelefone(e.target.value)}
              />
            </FormControl>

            <Flex flexDir={['column', 'row']}>

              <FormControl isRequired pr={'2%'} w={['100%', '30%']}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>  CEP</FormLabel>
                <Input
                  type='text'
                  placeholder="00000-000"
                  maxLength={9}
                  defaultValue={userCep}
                  onChange={(e) => setUserCep(e.target.value)}
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
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Cidade</FormLabel>
                <Input
                  placeholder="São Paulo-SP"
                  defaultValue={userCidade}
                  onChange={(e) => setUserCidade(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']}>
              <FormControl isRequired pr={'2%'}>
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

              <Button
                bg={'#1C49B0'}
                textColor={'white'}
                fontFamily={'Sora, sans-serif'}
                w={'40%'}
                onClick={Edita}
              >
                Salvar
              </Button>

              <Link href='#/Home/Configuracoes' w={'40%'}>
                <Button
                  bg={'#1C49B0'}
                  textColor={'white'}
                  fontFamily={'Sora, sans-serif'}
                  w={'100%'}
                >
                  Cancelar
                </Button>
              </Link>

            </Flex>

          </VStack>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default EditProfile;
