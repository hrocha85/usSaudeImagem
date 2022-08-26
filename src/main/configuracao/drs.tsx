import FieldDefault from "../component/fieldDefault";
import { Box, HStack, Stack, Grid, Spacer, Text } from "@chakra-ui/react";
import MainCard from "../component/mainCard";
import IconButtonPlus from "../component/iconButtonPlus";
import { FaRegFolderOpen } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import FieldDefaultIcon from "../component/fieldDefaultIcon";


const Drs = () => {
  let drs = [
    { id: 1, dr: "Doutor(a)", clinica: "Clinica"},
    
  ];

  return (
    <>
      {drs.map((dr) => (
        <FieldDefaultIcon
          text={dr.clinica + " " + 0 + dr.id}
          textColor="black"
          icon={HiOutlineUser}
        />
      ))}
    </>
  );
};

export default Drs;
