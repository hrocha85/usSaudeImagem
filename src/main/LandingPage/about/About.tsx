import { Box, Button, Card, CardBody, Flex, HStack, Heading, Icon, Image, Link, Stack, Text, useMediaQuery } from "@chakra-ui/react"
import offline from '../../images/landing/offiline.svg'
import fast from '../../images/landing/fast.svg'
import phone from '../../images/landing/Group.svg'
import print from '../../images/landing/print.svg'


function About() {

  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  let display = ""
  let display1 = ""
  let width = ""
  let width1 = ""

  let flexCol=''
  isLargerThan600 ? flexCol = "row": width = "column"  
  isLargerThan600 ? width = "50%": width = "100%"
  isLargerThan600 ? width1 = "20rem": width1 = "100%"
  isLargerThan600 ? display = "": display = "none"
  isLargerThan600 ? display1 = "flex": display1 = "block"

    return(
        <Box w={'100%'} px={4}>
          <Box   mt={10} px={{ base: '0rem', md: '15rem' }}>

        <Text
          fontSize={"35px"}
          fontFamily={'Rubik, sans-serif'}
          fontStyle={'normal'}
          fontWeight={'700'}
          lineHeight={'normal'}
          textColor={'#101E40'}
          alignSelf={'stretch'}
          textAlign={'center'}
          w={'100%'}
        >
          O que é a USG Imagem?
        </Text>
        <Text
          fontSize={"14px"}
          fontFamily={'Inter, sans-serif'}
          fontStyle={'normal'}
          fontWeight={'600'}
          textAlign={'center'}
          lineHeight={'normal'}
          textColor={'#000'}
          alignSelf={'stretch'}
          pt={10}

        >
          Nosso software oferece uma abordagem inovadora, permitindo que os médicos gerem
          laudos de maneira rápida e fácil, ao mesmo tempo em que fornecem uma visualização prévia dos
          resultados. Esse recurso único permite que os médicos façam ajustes conforme necessário, garantindo
          que os laudos finais sejam personalizados e detalhados antes mesmo de serem finalizados.
        </Text>
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
          pt={'5%'}
        >
          A USGImagem tem como base a comodidade, a tranqulidade e a precisao no dia a dia da medicina
        </Text>
      </Box>

      <Flex justifyContent={'space-around'} flexDir={{ base: 'column', md: 'row' }} mt={'5%'} alignItems={'center'} textAlign={'center'} px={5}>
        <Card maxW='sm'>
          <CardBody display={'flex'} flexDir={'column'} alignItems={'center'} fontFamily={'Inter, sans-serif'}>
            <Image
              src={offline}
              alt='Sistema rapido'
              borderRadius='sm'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' textColor={'#1C49B0'}>Online e Offline</Heading>
              <Text fontWeight={'600'}>
                Com seu login, acessede qualquer lugar
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody display={'flex'} flexDir={'column'} alignItems={'center'} fontFamily={'Inter, sans-serif'}>
            <Image
              src={fast}
              alt='Sistema rapido'
              borderRadius='sm'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' textColor={'#1C49B0'}>Rápido e Prático</Heading>
              <Text fontWeight={'600'}>
                Gere os laudos com apenas alguns clique.
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='sm'>
          <CardBody display={'flex'} flexDir={'column'} alignItems={'center'} fontFamily={'Inter, sans-serif'}>
            <Image
              src={phone}
              alt='mobile'
              borderRadius='sm'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' textColor={'#1C49B0'}>Na palma da sua mão</Heading>
              <Text fontWeight={'600'}>
                Seus laudos ficaram salvos para vizualização
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW='sm'>
          <CardBody display={'flex'} flexDir={'column'} alignItems={'center'} fontFamily={'Inter, sans-serif'}>
            <Image
              src={print}
              alt='compartilhar'
              borderRadius='sm'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md' textColor={'#1C49B0'}>Pronto p/ Compartilhar</Heading>
              <Text fontWeight={'600'}>
                Envie o laudo para o WhatsApp ou e-mail.
              </Text>
            </Stack>
          </CardBody>
        </Card>

      </Flex>

      <Flex display={display1} gap={10} justifyContent={'center'} mt={10} fontFamily={"Sora, sans-serif"} fontWeight={'600'}>
        <Link href={`#/`}>
          <Button
            border="1px solid #1C49B0"
            color="#1C49B0"
            bg="transparent"
            height="50px"
            fontSize={'16px'}
            _hover={{
              background: 'transparent',
              color: '#1C49B0',
            }}
            width={width1}

            my={3}
          >
            Entrar em contato

          </Button>
        </Link>

        <Link href={`#/`}>
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
            Seja um parceiro USGImagem

          </Button>
        </Link>
      </Flex>
    </Box>
  )

}

export { About }