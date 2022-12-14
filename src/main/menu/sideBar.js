import { Box, Button, Center, HStack, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../../context/MenuContext";
import logo from "../splashScreen/logo.png";
import { SidebarData } from "./sideBarData";
import SubMenu from "./subMenu";

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
  let { menuOpen, setMenuOpen } = useContext(MenuContext);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    setMenuOpen(sidebar);
  }, [sidebar]);

  const [isHovering, setHovering] = useState("");

  function handleMouseEnter() {
    setHovering(true);
  }
  function handleMouseLeave() {
    setHovering(false);
  }

  return (
    <>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          top: isHovering ? "5px" : "-70px",
          transition: "top ease 0.5s",
          borderBottomColor: isHovering ? "#32bfea" : "transparent",
          marginBottom: isHovering ? "20px" : "-20px",
        }}
        w="100%"
        borderTop="2px"
        borderTopColor="#32bfea"
        borderBottom="2px"
        margin="5px"
        filter="none"
        blur="none"
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
                  w="180.66px"
                  h="60.73px"
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
                  w="175px"
                  h="90px"
                  marginLeft="30px"
                  marginTop="10px"
                />

                <NavIcon to="#">
                  <IoIosArrowBack onClick={showSidebar} margin="20px" />
                </NavIcon>
              </HStack>
              {SidebarData.map((item, index) => {
                return (
                    <SubMenu item={item} key={index} />
                );
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </Box>
    </>
  );
};

export default Sidebar;
