import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FiFileText } from "@react-icons/all-files/fi/FiFileText";

import * as React from "react";

import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import EducationTimelineBlock from "@themebiotic/gatsby-theme-mentor/blocks/About/education.timeline";
import ExperienceTimelineBlock from "@themebiotic/gatsby-theme-mentor/blocks/About/experience.timeline";
// import HighlightLine from "@themebiotic/gatsby-theme-mentor/components/Highlight/line";
import HighlightLine2 from "@themebiotic/gatsby-theme-mentor/components/Highlight/line-2";
import Seo from "@themebiotic/gatsby-theme-mentor/components/Seo";
import Layout from "@themebiotic/gatsby-theme-mentor/layouts";

const AboutMePage = (props) => {
  const { data } = props;
  const brandGrayBg = useColorModeValue("brand.50", "gray.700");
  const lightGrayBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const spacing = [5, 10, 10, 20];

  const bgGradient = useColorModeValue(
    "linear(to-b, gray.50, brand.50)",
    "linear(to-b, gray.600, gray.900)",
  );

  const about = data?.allAboutYaml?.nodes[0] ?? undefined;
  const description =
    about?.seo?.description ?? about?.body.substring(0, 65).toLowerCase();

  return (
    <>
      <Seo
        title={about?.seo?.title ?? about?.title}
        description={description}
        thumbnail={data?.thumbnail}
      />
      <Layout>
        <VStack align="stretch" spacing={0}>
          <Container px={0} maxW="1440px">
            <AboutMeHero
              title={about?.title}
              body={about?.body}
              social={about?.social}
              spacing={spacing}
              brandGrayBg={brandGrayBg}
              bgGradient={bgGradient}
            />
          </Container>

          <Box
            pos="relative"
            zIndex={-1}
            bg={lightGrayBg}
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderColor={borderColor}
          >
            <Container py={spacing} maxW="container.md">
              <HStack mb={10} data-sal="fadeup-low">
                <HighlightLine2 color="brand.300" transform="scale(-1,1)" />
                <Heading as="h2" color="brand.300">
                  Education
                </Heading>
                <HighlightLine2 color="brand.300" />
              </HStack>
              <EducationTimelineBlock />
            </Container>
          </Box>

          <Box py={spacing}>
            <Container maxW="container.md" data-sal="fadeup-low">
              <HStack mb={10}>
                <HighlightLine2 color="brand.300" transform="scale(-1,1)" />
                <Heading as="h2" color="brand.300">
                  Work Experience
                </Heading>
                <HighlightLine2 color="brand.300" />
              </HStack>
              <ExperienceTimelineBlock />
            </Container>
          </Box>

          <Box pb={spacing}>
            <Container maxW="container.xl" data-sal="fadeup-low">
              <CTABlock
                bg={useColorModeValue("secondary.100", "secondary.900")}
                title="Have A Project In Mind? Let's Get Start."
                body="You're looking for a solid partner for the project having in your mind. Connect with us to make your work easier."
              />
            </Container>
          </Box>

          <Box pb={spacing}>
            <Container maxW="container.xl" data-sal="fadeup-low">
              <DownloadResume />
            </Container>
          </Box>
        </VStack>
      </Layout>
    </>
  );
};

const SocialIcons = [
  { title: "facebook", icon: FaFacebook },
  { title: "linkedin", icon: FaLinkedin },
  { title: "twitter", icon: FaTwitter },
];

const AboutMeHero = ({
  title,
  body,
  social,
  spacing,
  brandGrayBg,
  bgGradient,
}) => {
  const FindIcon = (title) => SocialIcons.find((i) => i.title === title);
  return (
    <Stack
      spacing={spacing}
      direction={["column-reverse", "column-reverse", "row", "row"]}
      rounded="md"
      pos="relative"
      height={["full", "full", "full", "full"]}
      zIndex={1}
      bg={{
        base: brandGrayBg,
        md: "none",
      }}
      bgGradient={{
        base: bgGradient,
        md: "none",
      }}
      _before={{
        content: "' '",
        display: ["none", "none", "block", "block"],
        pos: "absolute",
        width: "full",
        height: "85%",
        // left: [0, 0, "48%", "50%"],
        right: "-50%",
        bottom: 0,
        // bg: brandGrayBg,
        bgGradient: bgGradient,
        borderTopEndRadius: "8rem",
        transform: "translateX(-100%)",
        transformOrigin: "center",
        zIndex: -1,
      }}
    >
      <Box
        flex="1"
        sx={{
          "& > div, .gatsby-resp-image-wrapper": {
            width: "full !important",
            height: "full !important",
            maxW: "40rem",
          },
          img: {
            objectFit: "cover",
            objectPosition: "right bottom",
          },
        }}
      >
        <StaticImage
          quality={65}
          alt={title}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
          placeholder="tracedSVG"
          backgroundColor="transparent"
          src="../../assets/images/me-profile.png"
        />
      </Box>

      <Flex flex="1" align="end">
        <Stack
          py={[10, 10]}
          px={[10, 10, 4, 0]}
          maxW={{ base: "full", lg: "35rem" }}
          spacing={6}
        >
          <Heading as="h1">{title}</Heading>
          <Stack spacing={4} fontWeight="normal" fontSize="xl">
            {body?.split("\n").map((item, idx) => (
              <Text key={`about-item-${idx}`}>{item}</Text>
            ))}
          </Stack>
          <HStack>
            {social.map((item) => {
              const _name = item.title.toLowerCase();
              const _icon = FindIcon(_name);
              return (
                <Button
                  key={item.url}
                  variant="ghost"
                  colorScheme={_name}
                  leftIcon={<Icon as={_icon.icon} />}
                >
                  {item.title}
                </Button>
              );
            })}
          </HStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

const CTABlock = ({ bg, title, body }) => {
  return (
    <Box rounded="xl" pos="relative" overflow="hidden">
      <Box
        pos="absolute"
        width="full"
        height="full"
        right="0"
        top="0"
        zIndex={0}
        opacity={0.35}
        sx={{
          ".gatsby-image-wrapper": {
            width: "full",
            height: "full",
            img: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
        }}
      >
        <StaticImage
          alt="pattern"
          layout="fullWidth"
          objectFit="cover"
          objectPosition="left center"
          src="../../assets/images/bg-pattern-1.png"
        />
      </Box>
      <Stack
        bg={bg}
        rounded="xl"
        p={[8, 10, 20]}
        spacing={[5, 10, 10, 10]}
        align={["stretch", "stretch", "start"]}
      >
        <Stack
          align="center"
          spacing={[5, 5, 8]}
          direction={["column", "column", "row"]}
          pos="relative"
          zIndex={1}
        >
          <Heading as="h2" size="2xl" flex="1">
            {title}
          </Heading>
          <Text fontSize="xl" width="full" flex="1">
            {body}
          </Text>
        </Stack>
        <Button
          alignSelf={["unset", "unset", "end"]}
          size="jumbo"
          colorScheme="primary"
        >
          Get Started
        </Button>
      </Stack>
    </Box>
  );
};

const DownloadResume = () => {
  return (
    <Flex justify="center" py={[10, 0, 0]}>
      <Button
        size="jumbo"
        colorScheme="black"
        rightIcon={<FiFileText />}
        _hover={{
          bg: useColorModeValue("blackAlpha.700", "whiteAlpha.100"),
        }}
        _active={{
          bg: useColorModeValue("blackAlpha.600", "whiteAlpha.700"),
        }}
      >
        Download My Resume
      </Button>
    </Flex>
  );
};

export default AboutMePage;

/* -------------------------------------------------------------------------- */
/*                                Page Queries                                */
/* -------------------------------------------------------------------------- */

export const query = graphql`
  query {
    thumbnail: file(absolutePath: { glob: "**/assets/images/me-profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200, height: 627)
      }
    }
    allAboutYaml {
      nodes {
        title
        body
        social {
          title
          url
        }
        seo {
          title
          description
        }
      }
    }
  }
`;
