/**
 * Thanks to Tiago Fsanchez
 * https://www.tiagofsanchez.com/blog/2020-08-06-code-line-highlight-with-prism-react-renderer/
 * */
import React from "react";

import Highlight, { defaultProps } from "prism-react-renderer";
import themeNightOwl from "prism-react-renderer/themes/nightOwl";
import themeNightOwlLight from "prism-react-renderer/themes/nightOwlLight";

import {
  Badge,
  chakra,
  Code,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const rangeParser = require("parse-numeric-range");

const getParams = (className = "") => {
  const [lang = "", params = ""] = className.split(":");
  return [lang.split("language-").pop().split("{").shift()].concat(
    params.split("&").reduce((merged, param) => {
      const [key, value] = param.split("=");
      merged[key] = value;
      return merged;
    }, {}),
  );
};

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (i) => lineNumbers.includes(i + 1);
  } else {
    return () => false;
  }
};

const LineNo = ({ children, ...rest }) => (
  <Text
    as="span"
    display="table-cell"
    textAlign="right"
    float="left"
    clear="both"
    pr="1em"
    userSelect="none"
    opacity={0.5}
    {...rest}
  >
    {children}
  </Text>
);

const CodeBlock = ({ className, children, ...rest }) => {
  const [language, { title = "", lineNo = false, lines = "" }] =
    getParams(className);
  const shouldHighlightLine = calculateLinesToHighlight(lines);
  const _title = title ? title.replace(/__/g, " ") : undefined;
  const _theme = useColorModeValue(themeNightOwlLight, themeNightOwl);
  const _titleBg = useColorModeValue("rgb(238, 238, 238)", "gray.600");
  const _highlightlLine = useColorModeValue("rgb(244, 240, 240)", "gray.700");

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      theme={_theme}
      language={language}
      {...rest}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {_title && (
            <Flex
              px={4}
              py={1}
              align="center"
              justify="space-between"
              bg={_titleBg}
              overflowX="auto"
            >
              <Text>{_title}</Text>
              <Badge>{language}</Badge>
            </Flex>
          )}
          <Code
            className={className}
            style={style}
            maxW="100vw"
            overflow="auto"
            pt={title ? 2 : 0}
            sx={{
              ".highlight-line": {
                bg: _highlightlLine,
              },
            }}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`;
              }
              return (
                <div key={i} {...lineProps}>
                  <>
                    {(lineNo || lines) && <LineNo>{i + 1}</LineNo>}
                    {line.map((token, key) => (
                      // eslint-disable-next-line react/jsx-key
                      <chakra.span
                        display="table-cell"
                        {...getTokenProps({ token, key })}
                      />
                    ))}
                  </>
                </div>
              );
            })}
          </Code>
        </>
      )}
    </Highlight>
  );
};

export default CodeBlock;
