import {
    Box,
    Flex,
    Text,
    Image,
    Stack,
    Heading
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import background from '../../images/landing/background2.jpeg'
import photoExam from '../../images/landing/Rectangle 8.png'
import laudo from '../../images/landing/config1.png'
import exames from '../../images/landing/Exames1.png'
import home from '../../images/landing/homeSys.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fast from '../../images/landing/fast.svg'

function System() {

    const overlayColor = 'rgba(28,73,176, 0.9)';

    return (
        <Box
        backgroundImage={background}
        backgroundSize="100% 100%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        pos="relative"
        px="2%"
        pt="5%"
        pb="5%"
        mb="5%"
      >
        <Box pos="relative" zIndex={1} mx="auto" maxWidth={['100%', '80%']}>
          <Text
            color="#fff"
            textAlign="center"
            fontFamily="Inter"
            fontSize="35px"
            fontStyle="normal"
            fontWeight={900}
            lineHeight="normal"
          >
            Conheça o sistema
          </Text>
  
          <Flex justifyContent={'center'} alignItems={'center'}  mt="5%" flexDir={{ base: 'column', md: 'row' }}>
            <Box width={['100%','50%']} mr={['0', '5%']}  px={'1%'}>
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
              >
                <Box h={'100%'}>
                  <Image src={laudo} alt="Imagem 1"  h={['100%','100%']}  rounded={'10px'}/>
                </Box>
                <Box h={'100%'}>
                  <Image src={exames} alt="Imagem 1" h={['100%','100%']} rounded={'10px'}/>
                </Box>
                <Box h={'100%'}>
                  <Image src={home} alt="Imagem 1" h={['100%','100%']} rounded={'20px'}/>
                </Box>

              </Carousel>
            </Box>
            <Box  pt={['10%', 0]}>
              <Flex flexDir={{ base: 'column', md: 'column' }}>
                <Box maxW='sm' pb={'5%'}>
                  <Box display={'flex'} flexDir={'row'}  gap={'5%'}>
                    <Image
                      src={fast}
                      alt='Sistema rápido'
                      borderRadius='sm'
                      bg={'#fff'}
                      w={'52px'}
                      h={'52px'}
                      ml={'5%'}
                      p={'3%'}
                    />
                    <Stack >
                      <Heading size='md' textColor={'#fff'} fontFamily={'Inter, sans-serif'} fontWeight={'700'} lineHeight={'normal'} fontSize={'18px'}>Cadastro de médicos e clínicas</Heading>
                      <Text textColor={'#fff'} fontFamily={'Inter, sans-serif'} fontWeight={'400'} lineHeight={'normal'} fontSize={'14px'}>
                        Adicione e gerencie quantas clínicas e médicos quiser.
                      </Text>
                    </Stack>
                  </Box>
                </Box>
                <Box maxW='sm' pb={'5%'} >
                  <Box display={'flex'} flexDir={'row'} gap={'5%'}>
                    <Image
                      src={fast}
                      alt='Sistema rápido'
                      borderRadius='sm'
                      bg={'#fff'}
                      w={'52px'}
                      h={'52px'}
                      ml={'5%'}
                      p={'3%'}
                    />
                    <Stack >
                      <Heading size='md' textColor={'#fff'} fontFamily={'Inter, sans-serif'} fontWeight={'700'} lineHeight={'normal'} fontSize={'18px'}>Criação de laudos a partir de 1 ou mais exames</Heading>
                      <Text fontFamily={'Inter, sans-serif'} textColor={'#fff'} fontWeight={'400'} lineHeight={'normal'} fontSize={'14px'}>
                      Selecione um exame para iniciar o laudo e adicione quantos exames achar necessário.
                      </Text>
                    </Stack>
                  </Box>
                </Box>
                <Box maxW='sm' pb={'5%'}>
                  <Box display={'flex'} flexDir={'row'} gap={'5%'}>
                    <Image
                      src={fast}
                      alt='Sistema rápido'
                      borderRadius='sm'
                      bg={'#fff'}
                      w={'52px'}
                      h={'52px'}
                      ml={'5%'}
                      p={'3%'}
                    />
                    <Stack >
                      <Heading size='md' fontFamily={'Inter, sans-serif'} textColor={'#fff'} fontWeight={'700'} lineHeight={'normal'} fontSize={'18px'}>Visualização do laudo durante a criação</Heading>
                      <Text fontFamily={'Inter, sans-serif'} textColor={'#fff'} fontWeight={'400'} lineHeight={'normal'} fontSize={'14px'}>
                      O software permite que você visualize o laudo durante a criação, permitindo ver com clareza o resultado final.
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
  
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height="100%"
          backgroundColor={overlayColor}
          zIndex={0}
        />
      </Box>
    )
}

export { System }