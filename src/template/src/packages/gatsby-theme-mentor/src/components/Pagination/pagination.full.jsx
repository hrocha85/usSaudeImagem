import React from "react";

import { Link as GatsbyLink } from "gatsby";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Stack, Wrap } from "@chakra-ui/react";

export const PaginationFull = ({
  urlPrefix = "",
  currentPage,
  // eslint-disable-next-line no-unused-vars
  totalCount,
  // eslint-disable-next-line no-unused-vars
  perPage,
  pageCount,
  // eslint-disable-next-line no-unused-vars
  itemCount,
  hasPreviousPage,
  hasNextPage,
  ...rest
}) => {
  const calcPrevious = () => {
    if (currentPage - 1 < 2) return urlPrefix;
    return `${urlPrefix}/${currentPage - 1}`;
  };
  const calcNext = () => {
    if (currentPage + 1 > pageCount) return;
    return `${urlPrefix}/${currentPage + 1}`;
  };

  const PaginationItem = ({ i }) => {
    const to = i < 1 ? urlPrefix : `${urlPrefix}/${i + 1}`;
    const isDisabled =
      (!hasPreviousPage && !hasNextPage) || currentPage === i + 1;
    return (
      <Button
        as={isDisabled ? undefined : GatsbyLink}
        isDisabled={isDisabled}
        to={isDisabled ? undefined : to}
        rounded="full"
        variant="outline"
      >
        {i + 1}
      </Button>
    );
  };

  return (
    <Stack
      justify="center"
      align="center"
      direction={["column", "column", "row"]}
      {...rest}
    >
      <Button
        isDisabled={!hasPreviousPage}
        as={hasPreviousPage ? GatsbyLink : undefined}
        to={hasPreviousPage ? calcPrevious() : undefined}
        leftIcon={<ChevronLeftIcon width={8} height={8} />}
        variant="outline"
        pr={8}
      >
        Prev
      </Button>

      <Wrap justify="center" shouldWrapChildren>
        {Array.from({ length: pageCount }, (_, i) => {
          return <PaginationItem key={`pagination-ful-${i}`} i={i} />;
        })}
      </Wrap>

      <Button
        isDisabled={!hasNextPage}
        as={hasNextPage ? GatsbyLink : undefined}
        to={hasNextPage ? calcNext() : undefined}
        rightIcon={<ChevronRightIcon width={8} height={8} />}
        variant="outline"
        pl={8}
      >
        Next
      </Button>
    </Stack>
  );
};
