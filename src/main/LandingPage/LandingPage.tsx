import {
  Box,
  Button,
  Center,
  Link,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function LandingPage() {

  const AlreadyRegistered = localStorage.getItem("AlreadyRegistered");



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
      w="100%"
      h="100vh"
      height={'100vh'} bgGradient='linear(to-b, blue.100, #fff)'
      backgroundSize="cover"
      backgroundClip="padding-box"
      backgroundRepeat="no-repeat"
      paddingBottom="10px"
      alignItems="center"
    >
      <Center>
        <Box
          position="absolute"
          top="30%"
          bg="#FAFAFA"
          w="auto"
          h="auto"
          borderRadius="10.85px"
          boxShadow="md"
          padding="30px"
        >
          <Text fontSize={'100px'}
            fontWeight={'bold'}
          >Landing page</Text>
          <Text>
            Já tem tem seu acesso? clique aqui
          </Text>
          <Link
            href={`#/Login`}
          >
            <Button>
              Logina
            </Button>
          </Link>
          <Text>
            Faça um teste free
          </Text>
          <Link
            href={`#/LoginFree`}
          >

            <Button>
              Login Teste Free
            </Button>
          </Link>
        </Box>
      </Center>
    </Box>
  );
}

export default LandingPage;
