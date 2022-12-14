import { Box, Button, GridItem, Image, Link, Tooltip } from "@chakra-ui/react";
import PropsTypes from "prop-types";
import { useContext } from "react";
import { EnableExamesContext } from "../../context/ExamesEnableContext";
import reghd_2 from "../images/reghd_2.png";

const FieldDefaultHome = ({ text, textColor, id }) => {
  let { enableExames, setEnableExames } = useContext(EnableExamesContext);

  return (
    <GridItem w="200px" h="70px" display="flex" flexWrap="wrap">
      <Box
        display="flex"
        flexWrap="wrap"
        h="100%"
        w="100%"
        margin="5px"
        alignItems="center"
      >
        <Image
          position="absolute"
          h="100px"
          width="220px"
          z-index="-1"
          src={reghd_2}
          alt=""
        />

        <Tooltip
          isDisabled={enableExames}
          label="Insira os dados do paciente"
          backgroundColor="white"
          placement="top"
          hasArrow
          arrowSize={15}
          textColor="black"
          fontSize="20px"
          margin="20px"
          textAlign="center"
        >
          <Link
            href={`#/Home/${id}`}
            fontWeight="bold"
            position="relative"
            pl="80px"
            z-index="1"
          >
            <Button
              isDisabled={!enableExames}
              fontSize="13.9px"
              variant="link"
              textAlign="center"
              textColor="black"
              w="110px"
              h="100%"
              style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
            >
              {text}
            </Button>
          </Link>
        </Tooltip>
      </Box>
    </GridItem>
  );
};

FieldDefaultHome.protoTypes = {
  text: PropsTypes.string,
  textColor: PropsTypes.string,
};

FieldDefaultHome.defaultProps = {
  text: "Título",
  textColor: "FFFFFF",
};

export default FieldDefaultHome;
