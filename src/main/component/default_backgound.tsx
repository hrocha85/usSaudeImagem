import { Flex } from "@chakra-ui/react";
import BGImage from "../images/bg_img.png";

export default function Default_Backgound({ children }) {
  return (
    <Flex
      flex="1"
      h="100%"
      w="100%"
      minH="100vh"
      minW="100vw"
      flexDirection="column"
      backgroundImage={BGImage}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      alignItems="center"
      backgroundClip="padding-box"
      overflowX="hidden"
      justifyContent="center"
    >
      <>{children}</>
    </Flex>
  );
}
