import { Box, Button, Center, HStack, Image } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../../context/MenuContext";
import logo from "../splashScreen/logoUsg2.png";
import logo2 from "../images/logousbl.png";
import { SidebarDataNaoLogado } from "./sideBarDataNaoLogado";
import { SidebarDataLogado } from "./sideBarDataLogado";
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


  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const getUser = () => {
    let user;
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user")!);
    }

    if (user != null) return user.isLogged;
  };

  const [userLogged, setuserLogged] = useState(getUser());
  useEffect(() => {
    setMenuOpen(sidebar);
  }, [sidebar]);

  const [isHovering, setHovering] = useState("");

  // function handleMouseEnter() {
  //   setHovering(true);
  // }
  // function handleMouseLeave() {
  //   setHovering(false);
  // }

  return (
    <>
      <Box
        w="100%"
        filter="none"
        blur="none"
      >
        <IconContext.Provider value={{ color: "black" }}>
          <Image
            src={logo2}
            w="12rem"
            h="3rem"
            marginLeft="18px"
            marginTop="1.1rem"
            mr={'2rem'}
            float={'right'}
          />
          <Nav>
            <HStack>
              <Center>
                <NavIcon to="#">
                  <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
              </Center>
            </HStack>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <HStack>
                {<Image
                  src={logo}
                  w="10rem"
                  h="4rem"
                  marginLeft="30px"
                  marginTop="10px"
                />}

                <NavIcon to="#">
                  <IoIosArrowBack onClick={showSidebar} />
                </NavIcon>
              </HStack>

              {userLogged ? (
                SidebarDataLogado.map((item, index) => {
                  return (
                    <SubMenu item={item} key={index} />
                  );
                })
              ) : (
                SidebarDataNaoLogado.map((item, index) => {
                  return (
                    <SubMenu item={item} key={index} />
                  );
                })
              )}

            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </Box>
    </>
  );
};

export default Sidebar;
