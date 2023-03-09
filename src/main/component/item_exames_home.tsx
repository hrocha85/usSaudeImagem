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
    {
      key: 7,
      nomeExame: "Doppler Renal",
    },
    {
      key: 8,
      nomeExame: "Doppler Venoso de MMII",
    },
    {
      key: 9,
      nomeExame: "Tireóide",
    },
    {
      key: 10,
      nomeExame: "Doppler das Carótidas",
    },
    {
      key: 11,
      nomeExame: "Doppler Hepático",
    },
    {
      key: 12,
      nomeExame: "Doppler Arterial de MMII",
    },
    {
      key: 13,
      nomeExame: "Tireóide 2",
    },
    {
      key: 14,
      nomeExame: "Doppler das Carótidas 2",
    },
    {
      key: 15,
      nomeExame: "Rins e Vias Urinárias",
    },
    {
      key: 16,
      nomeExame: "Dopper Venoso de MMSS",
    },
    {
      key: 17,
      nomeExame: "Doppler da Tireóide",
    },
    {
      key: 18,
      nomeExame: "Partes Moles",
    },
    {
      key: 19,
      nomeExame: "Testículo",
    },
    {
      key: 20,
      nomeExame: "Doppler de Bolsa Testicular",
    },
    {
      key: 21,
      nomeExame: "Doppler da Tireóide 2",
    },
    {
      key: 22,
      nomeExame: "Pélvico",
    },
    {
      key: 23,
      nomeExame: "Próstata",
      observações: [
        "Exame restrito para avaliação do volume prostático, devendo ser correlacionado com os dados clínicos e exames laboratoriais específicos para pesquisa de neoplasia.",
        "Exames anteriores não disponíveis para estudo comparativo.",
        "Estaremos à disposição para a discussão do presente caso.",
        "Achados negativos na ultrassonografia não excluem a necessidade de prosseguir a investigação na presença de dados clínicos positivos.",
      ],
    },
    {
      key: 24,
      nomeExame: "Articulações",
    },
    {
      key: 25,
      nomeExame: "Reg. Inguinal",
    },
  ];

  return (
    <>
      {exames.map((exames, key) => (
        <FieldDefaultHome
          key={key}
          text={exames.nomeExame}
          textColor={"#1A202C"}
          id={exames.key.toString()}
          obs={exames.observações}
        />
      ))}
    </>
  );
};

export default ItemExamesHome;
