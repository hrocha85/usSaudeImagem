import React from "react";

import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";

import CustomLink from "./Link";

const TableOfContents = ({ title, type = "post", data }) => {
  const items = data[type]?.tableOfContents?.items ?? [];
  return (
    <Box>
      {title && <Heading>{title}</Heading>}
      <OrderedList spacing={2}>
        {items.map((item, idx) => (
          <TocItems key={`toc-${idx}`} index={idx} {...item} />
        ))}
      </OrderedList>
    </Box>
  );
};

const TocItems = ({ title, url, items = [] }) => {
  return (
    <ListItem>
      <CustomLink href={url}>{title}</CustomLink>
      {items && Boolean(items.length) && (
        <OrderedList spacing={2} mt={2}>
          {items.map((item, idx) => (
            <TocItems key={`toc-${idx}`} {...item} />
          ))}
        </OrderedList>
      )}
    </ListItem>
  );
};

export default TableOfContents;
