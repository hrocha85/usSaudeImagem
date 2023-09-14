import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react"
import premiun from '../../images/landing/premium.svg'
import free from '../../images/landing/free.svg'
import checkfree from '../../images/landing/CheckFree.svg'
import checkPremium from '../../images/landing/CheckPremium.svg'

function Planos() {

    return (
        <Box mb={'2%'}>
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
                Encontre o plano perfeito para você!
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
                pt={6}

            >
                lorem ipsum sit amet
            </Text>
            <Box>
                <Flex pt={10} justifyContent={'center'} flexDirection={['column', 'row']} px={'5%'}>
                    <Box w={['100%', '30%']} h={'100%'} border="3px solid #1C49B0" rounded={10} py={'1%'} mb={['5%', '0']}  mx={'2%'} px={'3%'}>
                        <Image
                            src={premiun}
                            bg={'#8fa5f5'}
                            mb={4}
                            p={'4%'}
                            rounded={15}
                        />
                        <Text
                            fontSize={"35px"}
                            fontFamily={'Outfit, sans-serif'}
                            fontStyle={'normal'}
                            fontWeight={'600'}
                            lineHeight={'normal'}
                            textColor={'#1B223C'}
                            letterSpacing={'-1px'}
                            w={'100%'}
                            mb={4}
                        >
                            Plano Grátis
                        </Text>
                        <HStack gap={'10%'}>
                            <Text
                                fontSize={"35px"}
                                fontFamily={'Outfit, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                lineHeight={'normal'}
                                textColor={'#1B223C'}
                                letterSpacing={'-1px'}
                                mb={4}
                            >
                                R$34
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
                                pt={4}
                            >
                                por mês
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Limite de 3 médicos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Limite de 1 clinica
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Laudos ilimitados
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Pré visualização do laudo
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Edição dos laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Download dos laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkfree}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#000'}
                                alignSelf={'stretch'}
                            >
                                Limite de 3 médicos
                            </Text>
                        </HStack>

                            <Link href={`#/`}>
                                <Button
                                    border="1px solid #1C49B0"
                                    color="#1C49B0"
                                    bg="transparent"
                                    height="50px"
                                    fontSize={'22px'}
                                    _hover={{
                                        background: 'transparent',
                                        color: '#1C49B0',
                                    }}
                                    width={'100%'}

                                    my={3}
                                >
                                    Escolher

                                </Button>
                            </Link>
                    </Box>
                    <Box w={['100%', '30%']} h={'100%'} border="3px solid #1C49B0" rounded={10} py={'1%'}  mx={'2%'} px={'3%'} bg={'#1C49B0'}>
                        <Image
                            src={free}
                            bg={'#FFF'}
                            mb={4}
                            p={'4%'}
                            rounded={15}
                        />
                        <Text
                            fontSize={"35px"}
                            fontFamily={'Outfit, sans-serif'}
                            fontStyle={'normal'}
                            fontWeight={'600'}
                            lineHeight={'normal'}
                            letterSpacing={'-1px'}
                            textColor={'#FFF'}
                            w={'100%'}
                            mb={4}
                        >
                            Versão Integral
                        </Text>
                        <HStack gap={'10%'}>
                            <Text
                                fontSize={"35px"}
                                fontFamily={'Outfit, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                lineHeight={'normal'}
                                textColor={'#FFF'}
                                letterSpacing={'-1px'}
                                mb={4}
                            >
                                R$34
                            </Text>
                            <Text
                                fontSize={"14px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'500'}
                                textAlign={'center'}
                                lineHeight={'normal'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                                pt={4}
                            >
                                por mês
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Limite de 3 médicos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Cadastro de clinicas ilimitado
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Laudos ilimitados
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Pré visualização do laudo
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Edição dos laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Download de laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Laudos salvos na nuvem
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Histórico de laudos
                            </Text>
                        </HStack>
                        <HStack mb={4}>
                            <Image
                                src={checkPremium}
                            />
                            <Text
                                fontSize={"16px"}
                                fontFamily={'Inter, sans-serif'}
                                fontStyle={'normal'}
                                fontWeight={'600'}
                                textAlign={'center'}
                                lineHeight={'40px'}
                                textColor={'#FFF'}
                                alignSelf={'stretch'}
                            >
                                Impressão dos laudos
                            </Text>
                        </HStack>

                            <Link href={`#/`}>
                                <Button
                                    border="1px solid #1C49B0"
                                    color="#1C49B0"
                                    height="50px"
                                    fontSize={'22px'}
                                    _hover={{
                                        color: '#1C49B0',
                                    }}
                                    width={'100%'}

                                    my={3}
                                >
                                    Escolher

                                </Button>
                            </Link>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export { Planos }