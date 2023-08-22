// const readingTime = require("reading-time");

module.exports = async ({ createResolvers }) => {
  const resolvers = {
    MdxPost: {
      relatedPosts: {
        type: ["MdxPost"],
        resolve: (source, args, context) => {
          const mdxNode = context.nodeModel.getNodeById({
            id: source.parent,
          });

          return context.nodeModel.runQuery({
            query: {
              filter: {
                id: {
                  ne: source.id,
                },
                tags: {
                  elemMatch: { title: { in: mdxNode.frontmatter.tags } },
                },
              },
              limit: 3,
            },
            type: "MdxPost",
          });
        },
      },
    },
  };

  createResolvers(resolvers);
};
