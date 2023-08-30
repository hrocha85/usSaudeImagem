import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function LoginFormFree() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

    if (email === userData.email && password === userData.senha) {
       window.location.href = '#/Splash';
    } else {
      setLoginError(true);
    }


  }
  };
  return (
    <Box
      w={['full', 'md']}
      p={[8, 10]}
      mt={[20, '10vh']}
      mx='auto'
      border={['none', '1px']}
      borderColor={['', 'gray.300']}
      borderRadius={10}
    >
      <VStack spacing={4} align={['flex-start', 'center']} w='full' mb={3}>
        <VStack>
          <Link
            href={`#/Cadastro`}
          >
            <Button>Não possui cadastro? Clique aqui</Button></Link>
          <Heading>Login versão free</Heading>
          <Text>Entre com email e senha</Text>
        </VStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input rounded='none' variant='filled'
          type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <Input rounded='none' variant='filled'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <HStack w='full' justify='space-between'>
          <Checkbox>Remember me.</Checkbox>
          <Button variant='link' colorScheme="blue"> Forgot Password</Button>
        </HStack>

        {loginError && (
                    <Text color="red.500">Email ou senha incorretos. Por favor, tente novamente.</Text>
                )}
        <Link
          // href={`#/Splash`}
        >
          <Button rounded='none' colorScheme="blue" w={['full', 'auto']} onClick={handleLogin}>Login</Button>
        </Link>
      </VStack>

    </Box>
  )
}
