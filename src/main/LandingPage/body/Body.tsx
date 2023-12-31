import { Box, Button, Flex, HStack, Icon, Image, Link, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import fundo1 from '../../images/landing/Rectangle2.png'
import doctor from '../../images/landing/doctor 1.png'
import { AiFillWindows } from "react-icons/ai";
import { FaLinux } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import ModalDownload from "../cadastroDownload/CadastroDownload";
import { useState } from "react";

function Body() {
  const [isLargerThan600] = useMediaQuery('(min-width: 700px)')
  const [isLargerThan1100] = useMediaQuery('(min-width: 1300px)')
  let display = ""
  let display1 = ""
  let display2 = ""
  let width = ""
  let paddLe = "left"
  isLargerThan1100 ? width = "50%" : width = "100%"
  isLargerThan600 ? display = "" : display = ""
  isLargerThan1100 ? display2 = "block" : display2 = "none"
  isLargerThan1100 ? paddLe = "left" : paddLe = "center"
  isLargerThan600 ? display1 = "flex" : display1 = "block"

  const [isOpenModalDownload, setIsOpenModalDownload] = useState(false)
  const [SistemaOperacional, setSistemaOperacional] = useState<number>(0)

  const toggleModalDownload = () => {
    setIsOpenModalDownload(!isOpenModalDownload)
  }

  return (
    <Box
      backgroundImage={fundo1}
      backgroundSize={['cover', "100% 100%"]}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      pt={'5%'}
      pl={['5%', '10%']}
    >
      <Flex alignItems={'center'} display={display1} px={'2%'}>
        <Box w={width} pb={['2%', 0]}>
          <Text
            fontSize={"46px"}
            fontFamily={'Rubik, sans-serif'}
            fontStyle={'normal'}
            fontWeight={'700'}
            lineHeight={'normal'}
            textColor={'#fff'}
            alignSelf={'stretch'}
            textAlign={{ base: 'center', md: 'left' }}
            pt={"3%"}
          >
            Tecnologia avançada para emissão de laudos detalhados e personalizados
          </Text>
          <Text
            fontSize={"25px"}
            fontFamily={'Rubik, sans-serif'}
            fontStyle={'normal'}
            fontWeight={'400'}
            lineHeight={'normal'}
            textColor={'#fff'}
            textAlign={{ base: 'center', md: 'left' }}
            pt={'20px'}
          >
            transformando experiências médicas
          </Text>
          <Text
            fontSize={"18px"}
            fontFamily={'Lato, sans-serif'}
            fontStyle={'normal'}
            fontWeight={'600'}
            lineHeight={'normal'}
            textColor={'#B4CAFF'}
            textAlign={{ base: 'center', md: 'left' }}
            pt={'5%'}
            pb={'7%'}
          >
            Um sistema de inovação de ultrassom, o futuro da medicina transformando vidas, aqui a tecnologia e a medicina se unem para cuidar de pessoas com precisão em tempo real, laudos feitos com qualidade de ponta.
          </Text>
          <ScrollLink to="planos" smooth={true} duration={500} ml={5}>
            <Box display={'flex'} justifyContent={['center', 'left']}>
              <Button
                border="1px solid #1C49B0"
                color="#1C49B0"
                bg="#FFF"
                fontSize={'20px'}
                paddingX={"12%"}
                borderRadius={"15px"}
                paddingY={"25px"}
                fontFamily={"Sora, sans-serif"}
                fontWeight={'600'}
              >
                Conheça nossos planos
              </Button>
            </Box>
          </ScrollLink>
          <Box pt={'5%'} display={display}>
            <Text
              fontSize={"18px"}
              fontFamily={'Rubik, sans-serif'}
              fontStyle={'normal'}
              fontWeight={'400'}
              lineHeight={'normal'}
              textColor={'#fff'}
              w={'100%'}
              pt={'2%'}
              pb={'3%'}
              textAlign={{ base: 'center', md: 'left' }}
            >Baixe a versão de teste agora mesmo
            </Text>

            <Flex flexDirection={['column', 'row']} pt={'5%'} pb={'5%'} gap={'2%'} alignItems={'center'}>
              <Button
                border="2px solid #FFF"
                color="#FFF"
                bg="transparent"
                height="50px"
                w={'150x'}
                px={10}
                fontSize={'16px'}
                _hover={{
                  background: 'transparent',
                  color: '#FFF',
                }}
                onClick={(e) => {
                  setSistemaOperacional(1)
                  toggleModalDownload()
                }}
              >
                <Flex alignItems="center" fontFamily={"Inter, sans-serif"} gap={3}>
                  <Icon as={AiFillWindows} fontSize="40px" />
                  <Text>Windows</Text>
                </Flex>
              </Button>

              <Button
                border="2px solid #FFF"
                color="#FFF"
                bg="transparent"
                height="50px"
                w={'150x'}
                px={10}
                fontSize={'16px'}
                _hover={{
                  background: 'transparent',
                  color: '#FFF',
                }}
                onClick={(e) => {
                  setSistemaOperacional(2)
                  toggleModalDownload()
                }}
              >
                <Flex alignItems="center" fontFamily={"Inter, sans-serif"} gap={10}>
                  <Icon as={FaLinux} fontSize="40px" />
                  Linux
                </Flex>
              </Button>

              <Button
                border="2px solid #FFF"
                color="#FFF"
                bg="transparent"
                height="50px"
                w={'150x'}
                px={10}
                fontSize={'16px'}
                _hover={{
                  background: 'transparent',
                  color: '#FFF',
                }}
                onClick={(e) => {
                  setSistemaOperacional(3)
                  toggleModalDownload()
                }}
              >
                <Flex alignItems="center" fontFamily={"Inter, sans-serif"} gap={5}>
                  <Icon as={FaApple} fontSize="40px" />
                  Mac OS
                </Flex>
              </Button>
            </Flex>
          </Box>
        </Box>
        <Box display={display2} w={'100%'} p={0}>
          <Image
            src={doctor}
            w={'600px'}
          />
        </Box>
      </Flex>
      <ModalDownload isOpen={isOpenModalDownload} onClose={toggleModalDownload} sistema={SistemaOperacional} />
    </Box>
  );
}

export { Body };
