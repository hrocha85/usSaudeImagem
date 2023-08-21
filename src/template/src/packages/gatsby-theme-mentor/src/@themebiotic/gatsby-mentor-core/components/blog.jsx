import * as React from "react";

import { Navigation } from "swiper";
import "swiper/css/effect-creative";

import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useToken,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import {
  PaginationFull, // PaginationMini,
} from "@themebiotic/gatsby-theme-mentor/components/Pagination";
import Seo from "@themebiotic/gatsby-theme-mentor/components/Seo";
import Swiper from "@themebiotic/gatsby-theme-mentor/components/Swiper";
import Layout from "@themebiotic/gatsby-theme-mentor/layouts";

const BlogPage = (props) => {
  const { data } = props;
  const items = data?.allPost?.edges.map((item) => item.node) ?? [];
  const pageInfo = data?.allPost?.pageInfo ?? false;
  const featuredItems = data?.featured?.edges.map((item) => item.node) ?? [];
  const [swiperNavLight, swiperNavDark] = useToken("colors", [
    "black",
    "white",
  ]);
  const lightGradient =
    "linear-gradient(0deg, gray.100 0%, gray.200 50%, gray.50 100%)";
  const darkGradient =
    "linear-gradient(0deg, gray.900 0%, gray.800 50%, gray.700 100%)";
  return (
    <>
      <Seo
        title="Blog"
        description="Tech insights & latest trends. Stay ahead in the tech world with our in-depth blog. Join the conversation on the future of technology."
        thumbnail={data?.thumbnail}
      />
      <Layout>
        <Box
          bg="gray.100"
          bgGradient={useColorModeValue(lightGradient, darkGradient)}
          mb={10}
        >
          <Swiper
            speed={1000}
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={null}
            navigation
            modules={[Navigation]}
            grabCursor={true}
            sx={{
              "--swiper-navigation-color": useColorModeValue(
                swiperNavLight,
                swiperNavDark,
              ),
            }}
          >
            {featuredItems.map((item) => (
              <FeaturedPostItem key={item.id} {...item} />
            ))}
          </Swiper>
        </Box>
        <Container maxW="container.lg" mb={10}>
          <SimpleGrid columns={[1, 1, 2, 2]} width="full" spacing={[5, 5, 10]}>
            {items.map((item) => (
              <PostItem key={item.id} {...item} />
            ))}
          </SimpleGrid>
        </Container>
        <Container maxW="container.lg" mb={10}>
          {/* <PaginationMini urlPrefix="/blog" {...pageInfo} /> */}
          <PaginationFull urlPrefix="/blog" {...pageInfo} />
        </Container>
      </Layout>
    </>
  );
};

export default BlogPage;

const FeaturedPostItem = React.memo(
  ({
    id,
    title,
    cover,
    // eslint-disable-next-line no-unused-vars
    author,
    date,
    excerpt,
    slug,
    timeToRead,
    tags,
    featured,
    props,
    ...rest
  }) => {
    let _cover;
    if (cover) _cover = getImage(cover);
    const _tags = tags.filter(Boolean); // remove null tag
    const tagDivider = (idx) => _tags.length && _tags.length > idx + 1;
    const [light, dark] = useToken("colors", props?.bg) ?? [];
    const [cLight, cDark] = useToken("colors", props?.color) ?? [];

    return (
      <Box key={id} bg={useColorModeValue(light, dark)} {...rest}>
        <Container maxW="container.lg">
          <Stack
            px={{ base: 6, lg: 0 }}
            py={[10]}
            direction={["column-reverse", "column-reverse", "row"]}
            spacing={[5, 5, 10]}
            align="stretch"
          >
            <VStack
              flex="1.33"
              align={["start"]}
              alignSelf="center"
              color={useColorModeValue(cLight, cDark)}
            >
              {featured && (
                <Badge
                  variant="solid"
                  fontWeight="bold"
                  colorScheme="secondary"
                  color={useColorModeValue("brand.800", "white")}
                >
                  Featured
                </Badge>
              )}
              {_tags && (
                <Text
                  variant="subtitle"
                  fontSize={["sm", "md", "md"]}
                  mx={["auto", "unset", "unset"]}
                  noOfLines={1}
                  // colorScheme="black"
                >
                  {_tags.map((item, idx) => (
                    <Text
                      key={item.id}
                      as="span"
                      _after={tagDivider(idx) ? { content: "','", mr: 2 } : {}}
                    >
                      {item.title}
                    </Text>
                  ))}
                </Text>
              )}
              <Heading as="h3">{title}</Heading>
              <Text
                display={["none", "block", "block", "block"]}
                fontSize={["md", "md", "xl", "xl"]}
              >
                {excerpt}
              </Text>
              <Text fontSize="lg">
                {date} • {timeToRead?.text}
              </Text>
              <Link
                to={slug}
                as={GatsbyLink}
                title={title}
                fontSize="lg"
                fontWeight="bold"
                variant="underline"
                colorScheme="secondary"
                _hover={{}}
              >
                Read Story
              </Link>
            </VStack>
            <Flex width="full" flex="1">
              <Box
                flex="1"
                width="full"
                overflow="hidden"
                rounded="lg"
                sx={{
                  ".gatsby-image-wrapper": {
                    height: "full",
                  },
                }}
              >
                <GatsbyImage image={_cover} alt={title} />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
    );
  },
);
FeaturedPostItem.displayName = "FeaturedPostItem";

const PostItem = React.memo(
  ({ id, title, cover, author, tags, date, timeToRead, excerpt, slug }) => {
    let _cover;
    if (cover) _cover = getImage(cover);
    const _tags = tags ?? [];
    return (
      <Stack
        key={id}
        // direction={["column", "column", "row"]}
        spacing={[5, 5, 5, 10]}
        mb={[1]}
      >
        <Box rounded="lg" overflow="hidden">
          <GatsbyImage image={_cover} alt={title} />
        </Box>
        <VStack align="start" mb={2}>
          <Wrap
            fontSize="xs"
            align="center"
            fontWeight="bold"
            textTransform="uppercase"
            shouldWrapChildren
          >
            {_tags.map((tag) => {
              if (!tag) return;
              return (
                <Link as={GatsbyLink} key={tag.id} to={tag.slug}>
                  #{tag.title}
                </Link>
              );
            })}
          </Wrap>
          <Text>
            By {author?.name} &bull; {date} &bull; {timeToRead?.text}
          </Text>
          <Heading as="h3" size="lg">
            {title}
          </Heading>
          <Text>{excerpt}</Text>
          <Link
            to={slug}
            variant="underline"
            colorScheme="secondary"
            as={GatsbyLink}
            title={title}
            _hover={{
              opacity: 0.75,
            }}
          >
            Read Story
          </Link>
        </VStack>
      </Stack>
    );
  },
);
PostItem.displayName = "PostItem";
