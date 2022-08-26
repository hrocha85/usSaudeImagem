import FieldDefault from "../component/fieldDefault";
import { Box, HStack, Stack, Grid, Spacer, Text } from "@chakra-ui/react";
import MainCard from "../component/mainCard";

















const Clinica = () => {
  let clinicas = [{ id: 1, clinica: "Clinica" }];

  return clinicas.map((cln) => (
    <FieldDefault text={cln.clinica} textColor={"#1A202C"} />
  ));
};

export default Clinica;
