import {
  Box,
  Link,
  Container,
  Heading,
  Image,
  Text,
  VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../LandingPage/footer/Footer';
import fundo1 from '../images/landing/Rectangle2.png';
import Cookies from 'js-cookie';
import emojiTriste from './emojiTriste.png'
import emojiFeliz from './emojiFeliz.png'



function PeriodoTesteExpired() {
  const usenavigate = useNavigate()

  return (
    <Box minHeight="100vh" position="relative">
      <Container maxW="container.lg" centerContent>
        <Box p={6} shadow="md" borderRadius="md" w="100%" maxW="auto">
          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="lg" textAlign="center">
              <Box
                backgroundImage={`url(${fundo1})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                pt={['1%', '2%']} // Adjust the padding for responsiveness
              >
                <Box textAlign={['center', 'left']} py={['2%', '3%']}>
                  <Text
                    fontSize={["32px", "46px"]} // Adjust the font size for responsiveness
                    fontFamily="Rubik, sans-serif"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="normal"
                    textColor="#fff"
                    alignSelf="stretch"
                    textAlign="center"
                  >
                    Periodo de teste expirou
                  </Text>
                </Box>
              </Box>
            </Heading>
          </VStack>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          overflowY="auto"
          width="100%"
          height={['auto', '450px']} // Adjust the height for responsiveness
        >
          <Text
            fontSize={["16px", "20px"]} // Adjust the font size for responsiveness
            fontFamily="Rubik, sans-serif"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            textAlign="center"
            pt={['10px', '20px']} // Adjust the padding for responsiveness
            display="inline-flex"
            alignItems="center"
          >
            Seu periodo de teste expirou!
            <Image src={emojiTriste} boxSize={['20px', '30px']} ml={2} /> {/* Adjust the image size for responsiveness */}
          </Text>

          <Text
            fontSize={["24px", "30px"]} // Adjust the font size for responsiveness
            fontFamily="Rubik, sans-serif"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            textAlign="center"
            pt={['10px', '20px']} // Adjust the padding for responsiveness
            display="inline"
          >
            Com a versão integral do <Link href="https://www.usgimagem.com.br/" display="inline" fontWeight="bold" color="blue">USG Imagem</Link>, você terá inúmeras vantagens, como: Armazenamento em nuvem dos laudos, cadastro de clínicas e médicos ilimitado, suporte humanizado...
          </Text>
          <Text
            fontSize={["28px", "35px"]} // Adjust the font size for responsiveness
            fontFamily="Rubik, sans-serif"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            textAlign="center"
            pt={['10px', '20px']} // Adjust the padding for responsiveness
            display="inline"
          >
            Conheça a versão integral através do link <Link href="https://www.usgimagem.com.br/" display="inline" fontWeight="bold" color="blue">USG Imagem</Link> ou entre em contato através do email: <Text display="inline" fontWeight="bold">contato@usgimagem.com.br</Text>
          </Text>
        </Box>
      </Container>
      <Box as="footer" position="fixed" bottom="0" left="0" width="100%">
        <Footer />
      </Box>
    </Box>
  );
}



export default PeriodoTesteExpired;
