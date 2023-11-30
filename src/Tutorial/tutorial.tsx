import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  CircularProgress,
  Text,
  Box,
  ListItem,
  UnorderedList,
  Flex,
  useMediaQuery,
  Link,
  Spinner,
} from '@chakra-ui/react';
import Sidebar from '../main/menu/sideBar';
import { Footer } from '../main/LandingPage/footer/Footer';
import GetMedicosFree from '../main/Helpers/UserFree/GetMedicosFree';
import GetMedicosAdmin from '../main/Helpers/UserAdmin/GetMedicosAdmin';
import Cookies from 'js-cookie';
import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import video4 from './videos/video4.mp4';

const VideoModal = ({ isOpen, onClose }) => {
  const videos = [video1, video2, video3, video4];
  const videoCaptions = [
    { title: 'Tutorial 1', description: 'Inicialmente é necessário cadastrar uma clínica e um médico para dar seguimento' },
    { title: 'Tutorial 2', description: 'Inicie cadastrando uma clínica e logo após cadastre um médico.' },
    { title: 'Tutorial 3', description: <><Text>`Com a clínica e o médico cadastrados, selecione quem está usando o sistema e avance para a próxima página.</Text><Text>Cadastre o paciente e o médico solicitante e selecione um exame para iniciar o laudo.</Text></> },
    { title: 'Tutorial 4', description: 'Este é o vídeo 4 explicativo.' },
  ];
  const [time, setTime] = useState(false)


  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const initialProgress = (currentVideoIndex / (videos.length - 1)) * 100;
    setProgress(initialProgress);
    setTime(true)
    setTimeout(() => setTime(false), 1000);
  }, [currentVideoIndex]);

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleComplete = () => {
    onClose();
    setCurrentVideoIndex(0);
    setProgress(0);
  };

  useEffect(() => {
    setCurrentVideoIndex(0);
    setProgress(0);
  }, [onClose])


  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent margin='1vw'>
        <ModalHeader textAlign="center">{videoCaptions[currentVideoIndex].title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody position="relative" mb={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Text fontSize="lg" mb={2} textAlign="center">
            {videoCaptions[currentVideoIndex].description}
          </Text>
          {time ?
            <Box>
              <Spinner size={'xl'} />
            </Box> :
            <video controls width="100%" height="auto">
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          }
          <Box bottom="0" left="0" width="100%" height="30px" borderRadius="md" px={'4%'} position="relative">
            <Box
              bg="gray.200"
              height="100%"
              borderRadius="md"
              overflow="hidden"
            >
              <Box
                bg="blue.400"
                height="100%"
                width={`${progress}%`}
                borderRadius="md"
                transition="width 0.3s ease-in"
              />
            </Box>
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="black"
              fontWeight="bold"
            >
              {`${Math.round(progress)}%`}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter gap='10px' pt={'1%'}>
          {currentVideoIndex === videos.length - 1 ? (
            <Button onClick={handleComplete}>Concluir</Button>
          ) : (
            <>
              <Button onClick={handlePrevious} isDisabled={currentVideoIndex === 0}>
                Anterior
              </Button>
              <Button onClick={handleNext} isDisabled={currentVideoIndex === videos.length - 1}>
                Próximo
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


const VideoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  let display1 = ""
  let width1 = ""
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  isLargerThan600 ? width1 = "20rem" : width1 = "100%"
  isLargerThan600 ? display1 = "flex" : display1 = "block"

  const [redirectNow, setRedirectNow] = useState(false);
  const [PrimeiroLogin, setPrimeiroLogin] = useState(true);
  const [AdminMaster, setAdminMaster] = useState(false);
  const [lista_medico, setlista_medico] = useState<any[]>([]);
  //tempo de 5 segundos para sair da pagina
  setTimeout(() => setRedirectNow(true), 4000);

  useEffect(() => {
    let isAdmin;
    const roleString = Cookies.get('USGImage_role');
    if (roleString) {
      const role = JSON.parse(roleString);
      role === 'admin' ? isAdmin = true : isAdmin = false
      role === 'adminMaster' ? setAdminMaster(true) : setAdminMaster(false)
    }
    if (!isAdmin) {
      setlista_medico(GetMedicosFree())
    } else {
      GetMedicosAdmin()
        .then(medicos => {
          setlista_medico(medicos)
        })
        .catch(error => {
          console.error('Erro ao obter clínicas:', error);
        });
    }

    if (lista_medico.length > 0) {
      setPrimeiroLogin(false)
    }
  }, [])

  return (
    <Box h={'100vh'}>
      <Sidebar />
      <Box>
        <Text
          textAlign={'center'}
          fontSize={"35px"}
          fontFamily={'Rubik, sans-serif'}
          fontStyle={'normal'}
          fontWeight={'700'}
          lineHeight={'normal'}
          textColor={'#101E40'}
          alignSelf={'stretch'}
          w={'100%'}
        >
          Bem vindo ao Tutorial Usg Imagem
        </Text>
        <Box px={'2%'}>
          <UnorderedList spacing={'1.5%'}>
            <Text
              fontSize={"25px"}
              fontFamily={'Inter, sans-serif'}
              fontStyle={'normal'}
              fontWeight={'700'}
              lineHeight={'normal'}
              textColor={'#101E40'}
              alignSelf={'stretch'}
              textAlign={'center'}
              w={'100%'}
              pt={'1%'}
            >
              Como usar o sistema:
            </Text>
            <ListItem fontSize="lg" fontFamily={'Inter, sans-serif'} fontWeight={'700'}>
              Ao clicar em "Adicionar Médico" você será redirecionado a página inicial.
            </ListItem>
            <ListItem fontSize="lg" fontFamily={'Inter, sans-serif'} fontWeight={'700'}>
              Primeiramente você deve adiconar uma clínica ao clicar no botão de "+"
              abrirá uma tela para adicionar a clínica preencha os dados CORRETAMENTE.
            </ListItem>
            <ListItem fontSize="lg" fontFamily={'Inter, sans-serif'} fontWeight={'700'}>
              Em seguida você poderá adicionar um médico clicando no botão "+" ao lado de Médico abrirá outra tela que você
              poderá preencher os dados do médico. Lembre-se de preencher os dados Corretamente.
            </ListItem>
            <ListItem fontSize="lg" fontFamily={'Inter, sans-serif'} fontWeight={'700'}>
              Após preencher os dados de Clínica e Médicos aparecerá um span para logar com o
              médico cadastrado e a clinica aperte o botão "Login" que está contido
              no span que você será redirecionado a tela de Selecionar Médicos do sistema.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
      <Text
        fontSize={"20px"}
        fontFamily={'Inter, sans-serif'}
        fontStyle={'normal'}
        fontWeight={'900'}
        lineHeight={'normal'}
        textColor={'#101E40'}
        alignSelf={'stretch'}
        w={'100%'}
        pt={'1%'}
        textAlign={'center'}
      >
        Caso ainda esteja com dúvidas assista nossos vídeos didádicos de como dar os primeiros passos na Usg Imagem
      </Text>
      <Box display={'flex'} justifyContent={'center'}>
        <Flex display={display1} gap={10} justifyContent={'center'} mt={5} fontFamily={"Sora, sans-serif"} fontWeight={'600'}>
          <Button
            border="1px solid #1C49B0"
            color="#1C49B0"
            bg="transparent"
            height="50px"
            fontSize={'16px'}
            onClick={handleOpenModal}
            _hover={{
              background: 'transparent',
              color: '#1C49B0',
            }}
            width={width1}

            my={3}
          >
            Assistir aos vídeos

          </Button>
          {PrimeiroLogin ? (
            <Link href='#/SelectMedicos'>
              <Button
                border="1px solid #1C49B0"
                color="#FFF"
                bg="#1C49B0"
                height="50px"
                fontSize={'16px'}
                _hover={{
                  background: '#1C49B0',
                  color: '#FFF',
                }}
                w={width1}
                my={3}
              >
                Concluir o Tutorial

              </Button>
            </Link>
          ) : (
            <Link href='#/Home'>
              <Button
                border="1px solid #1C49B0"
                color="#FFF"
                bg="#1C49B0"
                height="50px"
                fontSize={'16px'}
                _hover={{
                  background: '#1C49B0',
                  color: '#FFF',
                }}
                w={width1}
                my={3}
              >
                Concluir o Tutorial

              </Button>
            </Link>
          )}
        </Flex>
        <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </Box>
      <Box>
        <Footer />
      </Box>

    </Box >
  );
};

export default VideoPage;
