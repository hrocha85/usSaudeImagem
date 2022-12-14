import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  border-bottom: 2px solid #32bfea;

  &:hover {
    background: #75d4f2;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const Logout = () => {
    window.location.href = "/Login";
    localStorage.removeItem("user");
  };

  return (
    <>
      <Button
        styled={SidebarLink}
        onClick={item.title == "Sair" ? onOpen : null}
        variant="unstyled"
        textColor="black"
        w="100%"
        marginTop="20px"
      >
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <HStack>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </HStack>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
      </Button>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deseja sair ? </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="20px">Deseja realmente sair ?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} fontSize="20px">
              Cancelar
            </Button>
            <Button variant="ghost" fontSize="20px" onClick={() => Logout()}>
              Sair
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubMenu;
