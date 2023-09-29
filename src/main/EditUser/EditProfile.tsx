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
  useEffect(() => {
    const userLogged = Cookies.get('USGImage_user')
    const userParse = JSON.parse(userLogged)
    const getUsers = async () => {
      try {
        const response = await api.get(`/usuario/${userParse.id}`);
        const usuario = response.data
        setUserNome(usuario.name)
        setUserEmail(usuario.email)
        setUserID(usuario.id)
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
                  value={userToUpdate.senha}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, senha: e.target.value })}
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
                  value={userToUpdate.confirmSenha}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, confirmSenha: e.target.value })}
                />
              </FormControl>
            </Flex>

            <FormControl isRequired w={['100%', '30%']} >
              <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Telefone</FormLabel>
              <Input
                type="text"
                placeholder="(99)99999-9999"
                maxLength={14}
                value={userToUpdate.telefone}
                onChange={(e) => setUserToUpdate({ ...userToUpdate, telefone: e.target.value })}
              />
            </FormControl>

            <Flex flexDir={['column', 'row']}>

              <FormControl isRequired pr={'2%'} w={['100%', '30%']}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>  CEP</FormLabel>
                <Input
                  type='text'
                  placeholder="00000-000"
                  maxLength={9}
                  value={userToUpdate.cep}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, cep: e.target.value })}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Rua</FormLabel>
                <Input
                  placeholder="Digite sua rua"
                  value={userToUpdate.rua}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, rua: e.target.value })}
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
                  value={userToUpdate.numero}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, numero: e.target.value })}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Cidade</FormLabel>
                <Input
                  placeholder="São Paulo-SP"
                  value={userToUpdate.cidade}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, cidade: e.target.value })}
                />
              </FormControl>
            </Flex>

            <Flex flexDir={['column', 'row']}>
              <FormControl isRequired pr={'2%'}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Bairro</FormLabel>
                <Input
                  placeholder="Digite seu bairro"
                  value={userToUpdate.bairro}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, bairro: e.target.value })}
                />
              </FormControl>

              <FormControl isRequired w={['100%', '30%']}>
                <FormLabel fontFamily={'Outfit, sans-serif'} fontWeight={'800'} fontSize={'18px'}>Estado</FormLabel>
                <Input
                  placeholder="São Paulo"
                  value={userToUpdate.estado}
                  onChange={(e) => setUserToUpdate({ ...userToUpdate, estado: e.target.value })}
                />
              </FormControl>
            </Flex>

            <Flex gap={'5%'} justifyContent={'space-around'} pt={'5%'}>

              <Button
                bg={'#1C49B0'}
                textColor={'white'}
                fontFamily={'Sora, sans-serif'}
                w={'40%'}
                onClick={Editar}
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
