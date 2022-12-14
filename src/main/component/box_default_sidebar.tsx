import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import BGImage from "../images/bg_img.png";
import Sidebar from "../menu/sideBar";

export default function Box_Default_With_Sidebar({ children }) {
  let { menuOpen, setMenuOpen } = useContext(MenuContext);

  return (
    <>
      <Box
        w="100%"
        h="100%"
        verticalAlign="center"
        alignSelf="center"
        alignItems="center"
        backgroundImage={BGImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Sidebar />
        <Box
          filter={menuOpen == true ? "auto" : "none"}
          blur={menuOpen == true ? "3px" : "none"}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
