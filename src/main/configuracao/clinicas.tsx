import FieldDefault from "../component/fieldDefault";
import { Box, HStack, Stack, Grid, Spacer, Text } from "@chakra-ui/react";
import MainCard from "../component/mainCard";
import IconButtonPlus from "../component/iconButtonPlus";
import { FaRegFolderOpen } from "react-icons/fa";
import FieldDefaultIcon from "../component/fieldDefaultIcon";

const Clinica = () => {
  let clinicas = [
    { id: 1, clinica: "Clínica" },
    { id: 2, clinica: "Clínica" },
    { id: 3, clinica: "Clínica" },
  ];

  return (
    <>
      {clinicas.map((cln) => (
        <FieldDefaultIcon
          text={cln.clinica + " " + 0 + cln.id}
          textColor="black"
          icon={FaRegFolderOpen}
        />
      ))}
    </>
  );
};

export default Clinica;
