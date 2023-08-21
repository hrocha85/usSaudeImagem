import * as React from "react";

import { graphql } from "gatsby";

import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import ContactFormBlock from "@themebiotic/gatsby-theme-mentor/blocks/Contact/contact.block";
import { TestimonialsCarouselBlock } from "@themebiotic/gatsby-theme-mentor/blocks/Testimonials";
import Seo from "@themebiotic/gatsby-theme-mentor/components/Seo";
import Layout from "@themebiotic/gatsby-theme-mentor/layouts";

const ContactPage = (props) => {
  const { data } = props;
  return (
    <>
      <Seo
        title="Contact"
        description="I am eager to receive your thoughts and desires"
        thumbnail={data?.pageCover}
      />
      <Layout>
        <Box pt={14} pb={32} bg={useColorModeValue("gray.100", "gray.900")}>
          <Container maxW="container.xl">
            <VStack
              textAlign={["center", "center", "center"]}
              align={["center", "center", "center"]}
            >
              <Heading size="4xl" data-sal="fadeup-low" maxW={900}>
                I am eager to receive your thoughts and desires
              </Heading>
            </VStack>
          </Container>
        </Box>

        <Container
          mt={-16}
          py={10}
          px={[2, 4, 10, 20]}
          bg={useColorModeValue("white", "gray.700")}
          borderTopRadius={20}
          maxW="container.lg"
          boxShadow="0 -5px 15px rgba(0,0,0, 0.1)"
        >
          <Box data-sal="fadeup-low" data-sal-delay="300">
            <ContactFormBlock subtitle="Contact Form" title="Let's talk!" />
          </Box>
        </Container>
        <Box py={20} bg={useColorModeValue("gray.50", "gray.900")}>
          <TestimonialsCarouselBlock
            subtitle="Testimonials"
            title="Great feedback from my customers"
            width="full"
          />
        </Box>
      </Layout>
    </>
  );
};

export default ContactPage;

/* -------------------------------------------------------------------------- */
/*                                Page Queries                                */
/* -------------------------------------------------------------------------- */

export const query = graphql`
  query {
    pageCover: file(
      absolutePath: { glob: "**/assets/images/contact-cover.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200)
      }
    }
  }
`;
