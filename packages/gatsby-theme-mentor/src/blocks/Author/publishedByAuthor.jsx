import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  chakra,
  Circle,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";

const PublishedByAuthor = ({ author, publishedAt, timeAgo, ...rest }) => {
  let _avatar;
  if (author?.image) _avatar = getImage(author.image);
  return (
    <Wrap
      color={useColorModeValue("gray.600", "gray.400")}
      shouldWrapChildren
      align="center"
      {...rest}
    >
      {_avatar && (
        <Circle size={8} overflow="hidden" borderWidth="1px">
          <GatsbyImage image={_avatar} alt={author?.name} />
        </Circle>
      )}
      <Text fontSize="sm">
        <chakra.time dateTime={publishedAt}>Published {timeAgo}</chakra.time>
        {author?.name && <> by {author?.name}</>}
      </Text>
    </Wrap>
  );
};

export default PublishedByAuthor;
