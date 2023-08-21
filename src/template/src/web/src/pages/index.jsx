import * as React from "react";

import { Link as GatsbyLink, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { BlogBlock } from "../../packages/gatsby-theme-mentor/src/blocks/Blog";
// import { BlogBlock } from "@themebiotic/gatsby-theme-mentor/blocks/Blog";
import {
  ClientFour,
  ClientOne,
  ClientThree,
  ClientTwo,
} from "../../packages/gatsby-theme-mentor/src/blocks/Clients";
// import {
//   ClientFour,
//   ClientOne,
//   ClientThree,
//   ClientTwo,
// } from "@themebiotic/gatsby-theme-mentor/blocks/Clients";
import { ExpertisesBlock } from "../../packages/gatsby-theme-mentor/src/blocks/Expertises";
// import { ExpertisesBlock } from "@themebiotic/gatsby-theme-mentor/blocks/Expertises";
import { ServicesBlock } from "../../packages/gatsby-theme-mentor/src/blocks/Services";
// import { ServicesBlock } from "@themebiotic/gatsby-theme-mentor/blocks/Services";
import { TestimonialsCarouselBlock } from "../../packages/gatsby-theme-mentor/src/blocks/Testimonials";
// import { TestimonialsCarouselBlock } from "@themebiotic/gatsby-theme-mentor/blocks/Testimonials";
import { WorksBlock } from "../../packages/gatsby-theme-mentor/src/blocks/Works";
// import { WorksBlock } from "@themebiotic/gatsby-theme-mentor/blocks/Works";
import Marquee from "../../packages/gatsby-theme-mentor/src/components/Marquee";
// import Marquee from "@themebiotic/gatsby-theme-mentor/components/Marquee";
import Seo from "../../packages/gatsby-theme-mentor/src/components/Seo";
// import Seo from "@themebiotic/gatsby-theme-mentor/components/Seo";
import { StatsContent } from "../../packages/gatsby-theme-mentor/src/components/Stats";
// import { StatsContent } from "@themebiotic/gatsby-theme-mentor/components/Stats";
import Layout from "../../packages/gatsby-theme-mentor/src/layouts";
// import Layout from "@themebiotic/gatsby-theme-mentor/layouts";

const IndexPage = (props) => {
  const { data } = props;

  return (
    <>
      <Seo title="Mentor Preimum Gatsby" thumbnail={data?.indexPageFeatured} />
      <Layout isHeaderOverlay>
        <VStack width="full" align="stretch" mb={32} spacing={32}>
          <HeroBlock
            title="Designing digital products that make a difference"
            body="Meet Ethan, a Modena-based product designer dedicated to crafting intuitive interfaces for thriving startups."
            buttons={
              <>
                <Button fontWeight="bold" colorScheme="white" size="jumbo">
                  Hire me
                </Button>
                <Button
                  as={GatsbyLink}
                  size="jumbo"
                  variant="outline"
                  fontWeight="bold"
                  colorScheme="white"
                  to="/contact"
                >
                  Contact me
                </Button>
              </>
            }
          />

          <Box>
            <Container maxW="container.xl">
              <StatsContent
                title="Chosen by thriving startups and discerning investors"
                items={[
                  {
                    title: "10+",
                    subtitle: "Years of experience",
                    color: "brand.300",
                  },
                  {
                    title: "50+",
                    subtitle: "Projects completed",
                    color: "primary.300",
                  },
                  {
                    title: "1140+",
                    subtitle: "Happy Clients",
                    color: "secondary.400",
                  },
                ]}
              >
                <ClientOne
                  color="gray.500"
                  bg="white"
                  height="40px"
                  width="auto"
                  data-sal="fadeup-low"
                  data-sal-delay="200"
                />
                <ClientTwo
                  color="gray.500"
                  height="40px"
                  width="auto"
                  data-sal="fadeup-low"
                  data-sal-delay="300"
                />
                <ClientThree
                  color="gray.500"
                  height="40px"
                  width="auto"
                  data-sal="fadeup-low"
                  data-sal-delay="400"
                />
                <ClientFour
                  color="gray.500"
                  height="40px"
                  width="auto"
                  data-sal="fadeup-low"
                  data-sal-delay="500"
                />
              </StatsContent>
            </Container>
          </Box>

          <ExpertisesBlock subtitle="Specialization" title="My Expertises" />

          <WorksBlock
            title="Bringing stellar results for every client"
            subtitle="Works"
          />

          <ServicesBlock
            subtitle="Services"
            title="Pushing the boundaries of your potential"
            body="Fictum,  deserunt mollit anim laborum astutumque! Ullamco laboris nisi ut aliquid ex ea commodi consequat. Quam temere in vitiis, legem sancimus haerentia."
            bg="brand.400"
            color="brand.50"
            py={32}
          />

          <TestimonialsCarouselBlock
            subtitle="Testimonials"
            title="Hear it directly from my clients"
            width="full"
          />

          <Box bg={useColorModeValue("gray.100", "gray.900")}>
            <BlogBlock title="Recent Insights" subtitle="Blog" py={20} />
          </Box>

          <Box>
            <Marquee>
              <Heading size="3xl" lineHeight={1.4}>
                JamStack, ReactJS, Chakra UI, NextJS, Vercel, Gastby, Netlify,
                Mentor, Envato, Themeforest,&nbsp;
              </Heading>
            </Marquee>
          </Box>
        </VStack>
      </Layout>
    </>
  );
};

const HeroBlock = ({ title, body, buttons }) => {
  return (
    <Flex display="grid" pt={[32, 36, 20]} align="center">
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
          width: "100%",
          height: "100%",
        }}
        src="../../assets/images/main-hero.jpg"
        layout="fullWidth"
        loading="eager"
        aspectRatio={1.93}
        quality={85}
        formats={["auto", "webp", "avif"]}
        alt="hero"
      />
      <Container
        pr={[4, 4, 0]}
        alignSelf="end"
        maxW="container.xl"
        sx={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <VStack
            py="10vh"
            align={["center", "center", "start"]}
            textAlign={["center", "center", "start"]}
            spacing={10}
          >
            {title && <Heading size="4xl">{title}</Heading>}
            {body && (
              <Text letterSpacing={"-0.01em"} fontSize="2xl">
                {body}
              </Text>
            )}
            <Stack direction={["column", "row", "row", "row"]}>{buttons}</Stack>
          </VStack>
          <StaticImage
            src="../../assets/images/profile.png"
            placeholder="TRACED_SVG"
            objectPosition="0% 100%"
            tracedSVGOptions={{ color: "#DEC4B6" }}
            alt={title}
          />
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default IndexPage;

/* -------------------------------------------------------------------------- */
/*                                Page Queries                                */
/* -------------------------------------------------------------------------- */

export const query = graphql`
  query {
    indexPageFeatured: file(
      absolutePath: { glob: "**/assets/images/home-cover.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200)
      }
    }
  }
`;
