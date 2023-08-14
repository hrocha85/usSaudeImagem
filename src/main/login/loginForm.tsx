import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Text, VStack } from "@chakra-ui/react";

export default function LoginForm() {
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
                    <Heading>Login</Heading>
                    <Text>Entre com email e senha</Text>
                </VStack>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input rounded='none' variant='filled' />
                </FormControl>
                <FormControl>
                    <FormLabel>Senha</FormLabel>
                    <Input rounded='none' variant='filled' />
                </FormControl>
                <HStack w='full' justify='space-between'>
                    <Checkbox>Remember me.</Checkbox>
                    <Button variant='link' colorScheme="blue"> Forgot Password</Button>
                </HStack>
                <Button rounded='none' colorScheme="blue" w={['full', 'auto']}>Login</Button>
            </VStack>

        </Box>
    )
}