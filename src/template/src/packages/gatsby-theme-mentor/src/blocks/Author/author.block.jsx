import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Box,
  Circle,
  Divider,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";

import SocialMediaIcons from "../../components/SocialMediaIcons";
// import SocialMediaIcons from "@themebiotic/gatsby-theme-mentor/components/SocialMediaIcons";

const AuthorBlock = ({ author, ...rest }) => {
  let _avatar;
  if (author?.image) _avatar = getImage(author.image);
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Stack
      direction={["column", "column", "row", "row"]}
      align="start"
      p={[4, 5, 5]}
      rounded="lg"
      bg={bg}
      alignItems="start"
      {...rest}
    >
      {_avatar && (
        <Circle size={32} overflow="hidden" borderWidth="1px">
          <GatsbyImage image={_avatar} alt={author?.name} />
        </Circle>
      )}
      <Stack direction="column">
        <Box>
          <Heading as="h3" fontSize="2xl" fontWeight="bold">
            {author?.name && author?.name}
          </Heading>
          <Text fontWeight="semibold">
            {author?.occupation}{" "}
            {author?.company && <Text as="span">/ {author?.company}</Text>}
          </Text>
        </Box>
        <Text>{author?.description}</Text>
        <Divider py={1} />
        <Wrap shouldWrapChildren overflow="visible">
          {author?.social.map((item) => (
            <Link
              key={item.url}
              display="flex"
              alignItems="center"
              aria-label={item.name}
              href={item.url}
              isExternal
              sx={{
                "svg + span": {
                  display: "none",
                },
              }}
              _hover={{
                transform: "scale(1.3)",
              }}
            >
              <SocialMediaIcons
                // aria-label={item.name}
                aria-hidden="true"
                name={item.name}
                width={8}
                height={8}
              />
              <Text as="span">{item.name}</Text>
            </Link>
          ))}
        </Wrap>
      </Stack>
    </Stack>
  );
};

export default AuthorBlock;
