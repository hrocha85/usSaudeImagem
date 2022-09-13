import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";
import BGImage from "./background_image.jpg";

function AbdomemTotal() {
    return (
        <Box
            w="100%"
            h="100%"
            verticalAlign="center"
            alignSelf="center"
            alignItems="center"
            backgroundImage={BGImage}
            backgroundPosition="fixed"
            backgroundSize="cover"
            backgroundClip="padding-box"
            backgroundRepeat="no-repeat"
            paddingBottom="10px"
        >
            <Box
                bg="#A0AEC0"
                w="80%"
                h="383px"
                pr="5px"
                color="white"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="10.85px"
                boxShadow="md"
            >
                <Box margin="10px">
                    <Stack direction="row" spacing="100px">
                        <Text
                            color="#1A202C"
                            fontSize="16px"
                            paddingStart="8px"
                            alignSelf="center"
                        >
                            Figado</Text>
                    </Stack>
                </Box>

                <Checkbox >Normal</Checkbox>
                <Checkbox >Hepatite Aguda</Checkbox>
                <Checkbox >Hepatopatia Crônica</Checkbox>
                <Checkbox >Dimensões</Checkbox>
                <Checkbox >Esteatose</Checkbox>
            </Box>
            <Box
                bg="#A0AEC0"
                w="80%"
                h="383px"
                pr="5px"
                color="white"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="10.85px"
                boxShadow="md"
            >
                <Box margin="10px">
                    <Stack direction="row" spacing="100px">
                        <Text
                            color="#1A202C"
                            fontSize="16px"
                            paddingStart="8px"
                            alignSelf="center"
                        >
                            Baço</Text>
                    </Stack>
                </Box>

                <Box>'aqui'</Box>
            </Box>
            <Box
                bg="#A0AEC0"
                w="80%"
                h="383px"
                pr="5px"
                color="white"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="10.85px"
                boxShadow="md"
            >
                <Box margin="10px">
                    <Stack direction="row" spacing="100px">
                        <Text
                            color="#1A202C"
                            fontSize="16px"
                            paddingStart="8px"
                            alignSelf="center"
                        >
                            Vias biliares</Text>
                    </Stack>
                </Box>

                <Box>'aqui'</Box>
            </Box>
            <Box
                bg="#A0AEC0"
                w="80%"
                h="383px"
                pr="5px"
                color="white"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="10.85px"
                boxShadow="md"
            >
                <Box margin="10px">
                    <Stack direction="row" spacing="100px">
                        <Text
                            color="#1A202C"
                            fontSize="16px"
                            paddingStart="8px"
                            alignSelf="center"
                        >
                            Pãncreas</Text>
                    </Stack>
                </Box>

                <Box>{'aqui'}</Box>
            </Box>
            <Box
                bg="#A0AEC0"
                w="80%"
                h="383px"
                pr="5px"
                color="white"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="10.85px"
                boxShadow="md"
            >
                <Box margin="10px">
                    <Stack direction="row" spacing="100px">
                        <Text
                            color="#1A202C"
                            fontSize="16px"
                            paddingStart="8px"
                            alignSelf="center"
                        >
                            Líquido Livre</Text>
                    </Stack>
                </Box>

                <Box>{'aqui'}</Box>
            </Box>
            <Box
                bg="#A0AEC0"
                w="80%"
                h="383px"
                pr="5px"
                color="white"
                bgPosition="center"
                bgRepeat="no-repeat"
                borderRadius="10.85px"
                boxShadow="md"
            >
                <Box margin="10px">
                    <Stack direction="row" spacing="100px">
                        <Text
                            color="#1A202C"
                            fontSize="16px"
                            paddingStart="8px"
                            alignSelf="center"
                        >
                            Aorta</Text>
                    </Stack>
                </Box>

                <Box>{'aqui'}</Box>
            </Box>
        </Box>
    );
}

export default AbdomemTotal;