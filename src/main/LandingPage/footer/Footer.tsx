import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from '../../images/landing/Marca.png'
import whatapp from '../../images/landing/llinkedin.svg'
import facebook from '../../images/landing/facebook.svg'
import instagras from '../../images/landing/instagram.svg'


function Footer() {
    return (
        <Box bg={'#101E40'} mt={'5%'}>
            <Box display={'flex'} flexDir={'column'} alignItems={'center'} py={'2%'}>
                <Box py={['5%', 0]}>
                    <Image
                        src={logo}
                    />
                </Box>
                <Flex
                    w={'100%'}
                    gap={'5px'}
                    py={'2%'}
                    flexDir={['column', 'row']}
                    paddingY={['5%', '2%']}
                    justifyContent={'center'}
                >
                    <Text
                        color={'#fff'}
                        fontFamily={'Inter, sans-serif'}
                        fontSize={'16px'}
                        fontStyle={'normal'}
                        fontWeight={'500'}
                        lineHeight={'normal'}
                        pr={'3%'}
                        textAlign={{ base: 'center', md: 'left' }}
                    >
                        USGImagem - Todos os direitos reservados
                    </Text>
                    <Link>
                        <Text
                            color={'#fff'}
                            fontFamily={'Inter, sans-serif'}
                            fontSize={'16px'}
                            fontStyle={'normal'}
                            fontWeight={'500'}
                            lineHeight={'normal'}
                            textAlign={{ base: 'center', md: 'left' }}
                        >
                             contato@usgimagem.com.br
                        </Text>
                    </Link>
                </Flex>
                <Flex justifyContent={'space-between'} w={['100%', '20%']} px={['20%', 0]} py={['3%', 0]}>
                    <Link href={`https://www.linkedin.com/company/usg-imagem/`} target="_blank">
                        <Image
                            src={whatapp}
                            w={'28px'}
                        />
                    </Link>
                    <Link href={`https://www.facebook.com/profile.php?id=61551257969410&mibextid=LQQJ4d`} target="_blank">
                        <Image
                            src={facebook}
                        />
                    </Link>
                    <Link href={`https://instagram.com/usgimagem?igshid=NzZhOTFlYzFmZQ==`} target="_blank">
                        <Image
                            src={instagras}
                        />
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}

export { Footer }