import {
  Box,
  Center,
  HStack,
  Image,
  useDisclosure,
  ModalOverlay,
  Button
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../splashScreen/logo.png";
import { SidebarData } from "./sideBarData";
import SubMenu from "./subMenu";
import { MenuContext } from "../../context/MenuContext";


const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #c5ecfb;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  
  let { menuOpen, setMenuOpen } = useContext(MenuContext)



  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Box
        w="100%"
        borderTop="2px"
        borderTopColor="#32bfea"
        borderBottom="2px"
        borderBottomColor="#32bfea"
        margin="5px"
        marginBottom="20px"
        marginTop="10px"
      >
        <IconContext.Provider value={{ color: "black" }}>
          <Nav>
            <HStack>
              <Center>
                <NavIcon to="#">                  
                  <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                <Image
                  src={logo}
                  w="197.66px"
                  h="78.73px"
                  marginLeft="18px"
                  marginTop="10px"
                />
              </Center>
            </HStack>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <HStack>
                <Image
                  src={logo}
                  w="180px"
                  h="90px"
                  marginLeft="30px"
                  marginTop="10px"
                />

                <NavIcon to="#">
                  <IoIosArrowBack onClick={showSidebar} />
                </NavIcon>
              </HStack>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </Box>
    </>
  );
};

export default Sidebar;
