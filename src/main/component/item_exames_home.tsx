import { Text } from "@chakra-ui/react";
import FieldDefaultHome from "./field_default_home";

const ItemExamesHome = () => {
  const exames = [
    {
      key: 1,
      nomeExame: "Abdômen total",
    },
    {
      key: 2,
      nomeExame: "Doppler Transvaginal",
    },
    {
      key: 3,
      nomeExame: "Mamas",
    },
    {
      key: 4,
      nomeExame: "Doppler Artrial do MMSS",
    },
    {
      key: 5,
      nomeExame: "Abdomen Superior",
    },
    {
      key: 6,
      nomeExame: "Transvaginal",
    },
    // {
    //   key: 7,
    //   nomeExame: "Doppler Renal",
    // },
    {
      key: 7,
      nomeExame: "Doppler Venoso de MMII",
    },
    {
      key: 8,
      nomeExame: "Tireóide",
    },
    {
      key: 9,
      nomeExame: "Doppler das Carótidas",
    },
    // {
    //   key: 11,
    //   nomeExame: "Doppler Hepático",
    // },
    {
      key: 10,
      nomeExame: "Doppler Arterial de MMII",
    },
    // {
    //   key: 13,
    //   nomeExame: "Tireóide 2",
    // },
    // {
    //   key: 14,
    //   nomeExame: "Doppler das Carótidas 2",
    // },
    {
      key: 11,
      nomeExame: "Rins e Vias Urinárias",
    },
    // {
    //   key: 16,
    //   nomeExame: "Dopper Venoso de MMSS",
    // },
    {
      key: 12,
      nomeExame: "Doppler da Tireóide",
    },
    {
      key: 13,
      nomeExame: "Partes Moles",
    },
    {
      key: 14,
      nomeExame: "Testículo",
    },
    {
      key: 15,
      nomeExame: "Doppler de Bolsa Testicular",
    },
    // {
    //   key: 21,
    //   nomeExame: "Doppler da Tireóide 2",
    // },
    {
      key: 16,
      nomeExame: "Pélvico",
    },
    {
      key: 17,
      nomeExame: "Próstata",
    },
    {
      key: 18,
      nomeExame: "Articulações",
    },
    {
      key: 19,
      nomeExame: "Região Inguinal",
    },
  ]


  return (
    <>
      {
        exames.map((exames, key) => (
          <FieldDefaultHome key={key} text={exames.nomeExame} textColor={"#1A202C"} id={exames.key.toString()} />
        ))
      }
    </>
  );
}


export default ItemExamesHome;
