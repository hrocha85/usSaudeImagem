import {
    Box,
    Button,
    Flex,
    Link,
    Text,
    Image, 
    useMediaQuery,
    extendTheme,
    VStack,
    IconButton,
    ChakraProvider,
    Collapse
  } from "@chakra-ui/react";
  import marca from "../../images/Marca.png";
import { useState } from "react";
import { ChevronLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
  
  function Header() {
  
    const AlreadyRegistered = localStorage.getItem("AlreadyRegistered");
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    let display =""
    let width = ""
    let width1 = ""
    isLargerThan600 ? display = "flex": display = "none"
   
    isLargerThan600 ? width = "20%": width = "45%"
    isLargerThan600 ? width1 = "150px": width1 = "110px"
  
    const theme = extendTheme({
      config: {
        initialColorMode: "light",
      },
    });
    

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

  
    const VerifyRegistered = () => {
      if (AlreadyRegistered) {
        return (
          <Link
            href={`#/Splash`}
          >
  
            <Button>
              Teste Free
            </Button>
          </Link>
        );
      }
      if (!AlreadyRegistered) {
        return (
          <Link
            href={`#/Cadastro`}
          >
  
            <Button>
              Login Teste Free
            </Button>
          </Link>
        );
      }
    }
  
  
    return (
      <Box
        top="0"
        left="0"
        right="0"
        bg="#FAFAFA"
        w="100%"
        borderRadius="0"
        boxShadow="md"
        padding="1%"
        px={5}
        py={'15px'}
        gap={5}
      >
        <Flex alignItems="center" justifyContent="space-between"  p={0} m={0}>
          <Image
            src={marca}
            w={width}
             />
          <Flex flexWrap={'wrap'} alignItems="center">
            <Link href={`#/LoginFree`} display={display}>
              <Button
                mr={3}
                bg={'transparent'}
                fontFamily={"Sora, sans-serif"}
                fontSize={"13px"}
                fontStyle={'normal'}
                fontWeight={'600'}
                lineHeight={'24px'}
              >Login Gratuito</Button>
            </Link>
            <Text display={display}>|</Text>
            <Link href={`#/Login`} display={display}>
              <Button
                ml={2}
                mr={2}
                bg={'transparent'}
                fontFamily={"Sora, sans-serif"}
                fontSize={"13px"}
                fontStyle={'normal'}
                fontWeight={'600'}
                lineHeight={'24px'}
              >Login Integral</Button>
            </Link>
  
            <Link href={`#/Cadastro`}>
              <Button
                border="1px solid #1C49B0"
                color="#1C49B0"
                w={width1}
                fontFamily={"Sora, sans-serif"}
                fontWeight={'600'}
                bg="transparent"
                _hover={{background: 'transparent', color: '#1C49B0',}}
              >
                Contato</Button>
            </Link>

        <ChakraProvider>
        <Box >
          <Box ml={1}>
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Abrir menu"
              onClick={toggleMenu}
              bg={'transparent'}
              fontSize={'25px'}
              top={'-2px'}
              fontWeight={'extrabold'}
              justifyContent={'center'}
              color={'#1C49B0'}
              display={{ base: "block", md: "none" }}
              _hover={{ 
                background: 'transparent',
                color: '#1C49B0',
              }}
            />
          </Box>

          <Box display={{ base: isMenuOpen ? "block" : "none", md: "block" }} pr={4} bg="gray.100">
            <VStack spacing={4} align="start">
            </VStack>
          </Box>

          <Collapse in={isMenuOpen} animateOpacity>
            <Box
              display={{ base: "block", md: "block" }}
              bg="gray.100"
              w="250px"
              minH="100vh"
              borderRight="1px solid"
              borderColor="gray.200"
              position="fixed"
              left="0"
              top="0"
              zIndex="999"
            >
              <VStack spacing={4} align="start" p={4}>
                <Link>Home</Link>
              </VStack>
            </Box>
          </Collapse>
        </Box>
      </ChakraProvider>
            
          </Flex>
        </Flex>
      </Box>

    );
  }
  
  export  {Header};
  