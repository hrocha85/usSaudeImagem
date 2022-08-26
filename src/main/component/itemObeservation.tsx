import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import FieldDefault from "./fieldDefault";

const ItemObservation = () => {
  const observacoes = [
    { id: 1, observacao: "Abdomen Total" },
    { id: 2, observacao: "Doppler Transvaginal" },
    { id: 3, observacao: "Mamas" },
    { id: 4, observacao: "Doppler Artrial do MMSS" },
    { id: 5, observacao: "Abdomen Superior" },
    { id: 6, observacao: "Transvaginal" },
    { id: 7, observacao: "Doppler Renal" },
    { id: 8, observacao: "Doppler Venoso de MMII" },
    { id: 9, observacao: "Tireóide" },
    { id: 10, observacao: "Doppler das Carótidas" },
    { id: 11, observacao: "Doppler Hepático" },
    { id: 12, observacao: "Doppler Arterial de MMII" },
    { id: 13, observacao: "Tireóide 2" },
    { id: 14, observacao: "Doppler das Carótidas 2" },
    { id: 15, observacao: "Rins e Vias Urinárias" },
    { id: 16, observacao: "Doppler Venoso de MMSS" },
    { id: 17, observacao: "Doppler da Tireóide" },
    { id: 18, observacao: "Partes Moles" },
    { id: 19, observacao: "Testículo" },
    { id: 20, observacao: "Doppler de Bolsa Testicular" },
    { id: 21, observacao: "Doppler da Tireóide 2" },
    { id: 22, observacao: "Pélvico" },
    { id: 23, observacao: "Próstata" },
    { id: 24, observacao: "Articulações" },
  ];

  return observacoes.map((observacoes) =>
    <FieldDefault text={observacoes.observacao} textColor={'#1A202C'} />);
};

export default ItemObservation;

