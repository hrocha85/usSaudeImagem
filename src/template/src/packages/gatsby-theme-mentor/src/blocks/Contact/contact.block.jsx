import React from "react";

import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import ContactForm from "@themebiotic/gatsby-theme-mentor/blocks/Contact/contact.form";
import HighlightLine2 from "@themebiotic/gatsby-theme-mentor/components/Highlight/line-2";

const ContactFormBlock = ({ subtitle, title, body, ...rest }) => {
  return (
    <Box {...rest}>
      <Container mb={16} maxW="container.xl">
        <VStack mb={[10]}>
          {subtitle && (
            <HStack>
              <HighlightLine2 color="brand.300" transform="scaleX(-1)" />
              <Text fontSize="xl" variant="subtitle">
                {subtitle}
              </Text>
              <HighlightLine2 color="brand.300" />
            </HStack>
          )}
          <Heading size="3xl">{title}</Heading>
          <Text fontSize="xl" variant="xsubtitle">
            {body}
          </Text>
        </VStack>
        <ContactForm />
      </Container>
    </Box>
  );
};

export default ContactFormBlock;
