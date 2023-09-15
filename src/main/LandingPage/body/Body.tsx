import {Box, Button, Flex, HStack, Icon, Image, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import fundo1 from '../../images/landing/Rectangle2.png'
import doctor from '../../images/landing/doctor 1.png'
import { AiFillWindows } from "react-icons/ai";
import { FaLinux } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
  function Body() { 
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)') 
    let display =""
    let display1 =""
    let width = ""
    let paddLe = "left"
    isLargerThan600 ? width = "50%": width = "100%"
    isLargerThan600 ? display = "": display = "none"
    isLargerThan600 ? paddLe = "0" : paddLe = "center"
    isLargerThan600 ? display1 = "flex": display1 = "block"
  
    return (
      <Box
      backgroundImage={fundo1}
      backgroundSize="100% 100%"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      px={'2%'}
      pt={'5%'}
      pl={[0,'10%']}
    >
      <Flex alignItems={'center'} display={display1} px={'2%'}>
       <Box w={width}>
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
            Transformando Experiências Médicas
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
          com tecnologia avançada para emissão de laudos detalhados e personalizados!
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
            <Link href={`#/Cadastro`} ml={5}>
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
                Conheça nosso sistema
              </Button>
            </Link>
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
            >Faça o Download
            </Text>

            <HStack pt={'5%'} pb={'5%'}>
              <Link href={`#/`}>
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
              >
                <Flex alignItems="center" fontFamily={"Inter, sans-serif"} gap={5}>
                  <Icon as={AiFillWindows} fontSize="40px"/>
                  <Text>Windows</Text>
                </Flex>
              </Button>
            </Link>

            <Link href={`#/`}>
              <Button
                border="2px solid #FFF"
                color="#FFF"
                bg="transparent"
                height="50px"
                w={'150x'}
                px={12}
                fontSize={'16px'}
                _hover={{ 
                  background: 'transparent',
                  color: '#FFF',
                }}
              >
                <Flex alignItems="center" fontFamily={"Inter, sans-serif"} gap={5}>
                  <Icon as={FaLinux}  fontSize="40px"/>
                  Linux
                </Flex>
              </Button>
            </Link>  

            <Link href={`#/`}>
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
              >
                <Flex alignItems="center" fontFamily={"Inter, sans-serif"} gap={5}>
                  <Icon as={FaApple}  fontSize="40px"/>
                  Mac OS
                </Flex>
              </Button>
            </Link>  
            </HStack>
            </Box>
        </Box>
        <Box>
          <Image
          src={doctor}
          />
        </Box>
      </Flex>

    </Box>
    );
  }
  
  export  {Body};
  