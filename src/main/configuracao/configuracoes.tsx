import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Tooltip,
  useMediaQuery,
  useOutsideClick,
  Text,
  useToast
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import React, { memo, useEffect, useRef, useState } from "react";
import {
  AiOutlineClear
} from "react-icons/ai";
import { FaRegFolderOpen } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import SignatureCanvas from "react-signature-canvas";
import MedicosJSON from "../../Data/Medicos.json";
import GetClinicaFree from "../Helpers/UserFree/GetClinicasFree";
import GetMedicosFree from "../Helpers/UserFree/GetMedicosFree";
import RectangularCard from "../component/card_observations";
import ItemObservation from "../component/item_obeservation";
import MainCard from "../component/main_card";
import MainCardClinica from "../component/main_cardClinica";
import Sidebar from "../menu/sideBar";
import getClinicaAdmin from "../Helpers/UserAdmin/GetClinicasAdmin";


let dados;
export const lista_medicos = MedicosJSON.medicos;


const Configuracoes = () => {

  const getMedicos = () => {
    let medicos;
    let item;
    if (localStorage.getItem("medicos") != null) {
      item = localStorage.getItem("medicos");

      medicos = JSON.parse(item);
    } else medicos = [];
    return medicos;
  };

  const getUser = () => {
    let user;
    if (localStorage.getItem("user") != null) {
      user = JSON.parse(localStorage.getItem("user")!);
    }

    if (user != null) return user.isLogged;
  };

  const [userLogged, setuserLogged] = useState(getUser());

  const padRef = React.useRef<SignatureCanvas>(null);

  const toast = useToast();



  const [nome, setNome] = useState("");


  const [clinicas, setClinica] = useState<string[] | any[]>([]);

  const [medicos, setMedicos] = useState<any[]>(GetMedicosFree());


  const [listaClinicas, setListaClinicas] = useState<any[]>([]);

  const getClinicasNull = () => {
    return listaClinicas.length === 0 ? "none" : "block";
  };

  const [stateClickAddMedico, setStateClickAddMedico] = useState(false);

  const [InputNomeDoutor, setInputNomeDoutor] = useState(false);

  const [updateTAGS, setUpdateTAGS] = useState(false);

  const [placeHolderAddDoutor, setplaceHolderDoutor] = useState("Nome");

  const [imageAssinatura, setImageAssinatura] = useState(true);

  const refNomeDoutor = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    setMedicos(GetMedicosFree());
  }, [localStorage.getItem("medicos")!]);


  // const showImageAssinatura = () => {
  //   return (
  //     <>
  //       {imageAssinatura == true ? (
  //         <Box
  //           boxShadow="lg"
  //           width="400px"
  //           height="200px"
  //           backgroundPosition="center"
  //           backgroundSize="cover"
  //           backgroundClip="padding-box"
  //           backgroundRepeat="no-repeat"
  //           onClickCapture={() => setImageAssinatura(false)}
  //         ></Box>
  //       ) : (
  //         <Box boxShadow="lg">
  //           <SignatureCanvas
  //             ref={padRef}
  //             backgroundColor="#F7FAFC"
  //             penColor="black"
  //             canvasProps={{
  //               width: 400,
  //               height: 200,
  //               className: "sigCanvas",
  //             }}
  //           />
  //           <Flex justify="end">
  //             <Icon
  //               as={AiOutlineClear}
  //               color="#4658fc"
  //               margin="5px"
  //               alignItems="end"
  //               onClick={clearAssinatura}
  //             />
  //           </Flex>
  //         </Box>
  //       )}
  //     </>
  //   );
  // };

  const getUserMedico = () => {
    if (localStorage.getItem("user") != null) {
      const medico = JSON.parse(localStorage.getItem("user")!);
      return medico.medico;
    } else return null;
  };

  const listaLaudosVazia = () => {
    return (
      <Center>
        <List size="20px">
          <ListItem fontSize="17px" textAlign="center" fontWeight="semibold">
            Nenhum laudo encontrado
          </ListItem>
          <Divider orientation="horizontal" marginBottom="10px" />
        </List>
      </Center>
    );
  };

  const Laudos = () => {
    return (
      <>
        {getUserMedico() != null
          ? getMedicos().map((medi) => {
            if (medi.nome == getUserMedico().nome) {
              return medi.laudos.map((laudos, key) => {
                if (
                  laudos.laudo != null &&
                  laudos.laudo != "" &&
                  laudos != undefined
                ) {
                  return (
                    <Center>
                      <List spacing={3} size="20px" key={key}>
                        <ListItem
                          padding="10px"
                          onClick={() => {
                            showSavedLaudo(laudos.laudo);
                          }}
                          cursor="pointer"
                          _hover={{
                            bg: "blue.100",
                            fontWeight: "semibold",
                            borderRadius: "10px",
                          }}
                        >
                          <ListIcon
                            as={VscFilePdf}
                            color="blue.600"
                            h="25px"
                            w="25px"
                            fontSize="xxx-large"
                          />
                          {`Laudo Paciente ${laudos.paciente} - ${laudos.data}`}
                        </ListItem>
                        <Divider
                          orientation="horizontal"
                          marginBottom="10px"
                        />
                      </List>
                    </Center>
                  );
                } else {
                  return (
                    <Center>
                      <List size="20px">
                        <ListItem
                          fontSize="17px"
                          textAlign="center"
                          fontWeight="semibold"
                        >
                          Nenhum laudo encontrado
                        </ListItem>
                        <Divider
                          orientation="horizontal"
                          marginBottom="10px"
                        />
                      </List>
                    </Center>
                  );
                }
              });
            }
          })
          : listaLaudosVazia()}
      </>
    );
  };

  const showSavedLaudo = (laudo) => {
    return window.open(laudo);
  };

  const clearAssinatura = () => {
    padRef.current?.clear();
  };

  const TAGS = () => {
    return (
      <Center margin="25px">
        <Flex direction="row" justify="center" flexWrap="wrap" gap="5px">
          {clinicas.map((clinica, key) => {
            const clinicaParse = JSON.parse(clinica);
            return (
              <Tooltip
                key={key}
                label={clinicaParse.nome}
                size="md"
                backgroundColor="white"
                placement="top"
                hasArrow
                arrowSize={15}
                textColor="black"
              >
                <Tag
                  key={key}
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="twitter"
                >
                  <TagLabel key={key}>{clinicaParse.nome}</TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      clinicas.splice(key, 1);
                      setUpdateTAGS(true);
                    }}
                  />
                </Tag>
              </Tooltip>
            );
          })}
        </Flex>
      </Center>
    );
  };


  const returnObservacoes = () => {
    return userLogged ? (
      <Stack display={'flex'} flexDirection="row" justifyContent="center" w={'99%'} p={3}>
        <RectangularCard
          titulo="Observações: Adicione novas observações aos laudos aqui."
          item={<ItemObservation />}
        />
      </Stack>
    ) : null;
  };


  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  const width = "100%"

  const returnPOPoverLaudos = () => {
    return (
      <Popover>
        <PopoverTrigger>
          <Button
            borderRadius="xl"
            backgroundColor="white"
            w="42"
            h="42"
            boxShadow="md"
            fontSize="20px"
            mt={5}
          >
            <Icon as={FaRegFolderOpen} margin="5px" />
            Laudos
          </Button>
        </PopoverTrigger>
        <PopoverContent borderRadius="20px" w="225px">
          <PopoverArrow />

          <PopoverBody>{Laudos()}</PopoverBody>
        </PopoverContent>
      </Popover>
    );
  };

  
  useEffect(() => {
    const fetchData = async () => {
      const roleString = Cookies.get('USGImage_role');
      if (roleString) {
        const role = JSON.parse(roleString);
        if (role === 'admin') {
          setListaClinicas(await getClinicaAdmin());
        } else {
          setListaClinicas(GetClinicaFree());
        }
      }
    };

    // setListaClinicas(GetClinicaFree());
    fetchData();
  }, [stateClickAddMedico, getClinicasNull]);

  useEffect(() => {
    setMedicos(getMedicos);
    Laudos();
  }, [localStorage.getItem("medicos")]);

  // useEffect(() => {
  //   showImageAssinatura();
  // }, [imageAssinatura]);

  useOutsideClick({
    ref: refNomeDoutor,
    handler: () => {
      setInputNomeDoutor(false);
      if (nome.length != 0) {
        setplaceHolderDoutor(nome);
      } else {
        setplaceHolderDoutor("Nome");
      }
    },
  });

  // useEffect(() => {
  //   TAGS();
  //   setUpdateTAGS(false);
  // }, [updateTAGS == true]);





  return (
    <>
      <Box
        w="100%"
        h={'100%'}
        bgGradient='linear(to-b, blue.100, #fff)'
        // paddingBottom="10px"
        alignItems="center"
      >
        <Sidebar />
        <Stack>
          <Box display={'flex'} flexWrap={'wrap'} gap={5} justifyContent={'space-around'}>

            {isLargerThan500 ?
              <Box w={'100%'} display={'flex'} justifyContent={'flex-end'} pr={'3rem'}>{returnPOPoverLaudos()}</Box>
              :
              <Box width={width}>{returnPOPoverLaudos()}</Box>
            }
            <Box>
              <MainCardClinica titulo="Clínicas" icon={true} clinica={null} medicos={null} />
            </Box>


            <Box pl={3} display={getClinicasNull()}>
              <MainCard titulo="Médicos" icon={true} clinica={listaClinicas} medicos={null} />
            </Box>

          </Box>

          {/* {returnObservacoes()} */}
        </Stack>
        {returnObservacoes()}

      </Box>
      {/* <Box bottom={0}><FooterUpbase /></Box> */}
    </>
  );
};

export default memo(Configuracoes);
