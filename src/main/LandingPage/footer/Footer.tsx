import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from '../../images/landing/Marca.png'
import whatapp from '../../images/landing/whatsapp.svg'
import facebook from '../../images/landing/facebook.svg'
import twitter from '../../images/landing/twitter.svg'
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
                        123.456.789/0001-90
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
                            Dev@usgimagem.com.br
                        </Text>
                    </Link>
                </Flex>
                <Flex justifyContent={'space-between'} w={['100%', '20%']} px={['20%', 0]} py={['3%', 0]}>
                    <Link href={`#/`}>
                        <Image
                            src={whatapp}
                        />
                    </Link>
                    <Link href={`#/`}>
                        <Image
                            src={facebook}
                        />
                    </Link>
                    <Link href={`#/`}>
                        <Image
                            src={twitter}
                        />
                    </Link>
                    <Link href={`#/`}>
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