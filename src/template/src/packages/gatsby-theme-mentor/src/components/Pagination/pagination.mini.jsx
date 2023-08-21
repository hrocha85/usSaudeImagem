import React from "react";

import { Link as GatsbyLink } from "gatsby";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";

export const PaginationMini = ({
  urlPrefix = "",
  currentPage,
  // totalCount,
  // perPage,
  pageCount,
  // itemCount,
  hasPreviousPage,
  hasNextPage,
}) => {
  const calcPrevious = () => {
    if (currentPage - 1 < 2) return urlPrefix;
    return `${urlPrefix}/${currentPage - 1}`;
  };
  const calcNext = () => {
    if (currentPage + 1 > pageCount) return;
    return `${urlPrefix}/${currentPage + 1}`;
  };

  return (
    <Stack
      justify="center"
      align="center"
      direction={["column", "column", "row"]}
      spacing={[5, 5, 10]}
    >
      <Button
        isDisabled={!hasPreviousPage}
        as={hasPreviousPage ? GatsbyLink : undefined}
        to={hasPreviousPage ? calcPrevious() : undefined}
        leftIcon={<ChevronLeftIcon width={8} height={8} />}
        pr={8}
      >
        Prev
      </Button>

      <Button
        isDisabled={!hasNextPage}
        as={hasNextPage ? GatsbyLink : undefined}
        to={hasNextPage ? calcNext() : undefined}
        rightIcon={<ChevronRightIcon width={8} height={8} />}
        pl={8}
      >
        Next
      </Button>
    </Stack>
  );
};
