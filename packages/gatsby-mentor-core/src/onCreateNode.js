const withDefaults = require("./utils/default.options");
const readingTime = require("reading-time");

module.exports = async (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions,
) => {
  const { createNode, createNodeField, createParentChildLink } = actions;

  const { worksPath, pagesPath, postsPath } = withDefaults(themeOptions);

  // Make sure that it's an MDX node
  if (node.internal.type !== "Mdx") {
    return;
  }

  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  // Check for "Posts" and create the "Post" type
  if (node.internal.type === "Mdx" && source === postsPath) {
    // console.log("Node", node);
    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      cover: node.frontmatter.cover,
      author: node.frontmatter.author,
      tags: node.frontmatter.tags,
      featured: node.frontmatter.featured,
      date: node.frontmatter.date,
      defer: node.frontmatter.defer,
      draft: node.frontmatter.draft,
      contentFilePath: fileNode.absolutePath,
    };

    const mdxPostId = createNodeId(`${node.id} >>> MdxPost`);

    createNodeField({
      node,
      name: "timeToRead",
      value: readingTime(node.body),
    });

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPostId,
      parent: node.id,
      children: [],
      internal: {
        type: "MdxPost",
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: "Mdx implementation of the Post interface",
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxPostId) });
  }

  // Check for "Work" and create the "MdxWork" type
  if (node.internal.type === "Mdx" && source === worksPath) {
    // console.log("Node", node);
    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      cover: node.frontmatter.cover,
      client: node.frontmatter.client,
      details: node.frontmatter.details,
      date: node.frontmatter.date,
      defer: node.frontmatter.defer,
      draft: node.frontmatter.draft,
      contentFilePath: fileNode.absolutePath,
    };

    const mdxWorkId = createNodeId(`${node.id} >>> MdxWork`);

    createNodeField({
      node,
      name: "timeToRead",
      value: readingTime(node.body),
    });

    createNode({
      ...fieldData,
      // Required fields
      id: mdxWorkId,
      parent: node.id,
      children: [],
      internal: {
        type: "MdxWork",
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: "Mdx implementation of the Work interface",
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxWorkId) });
  }

  // Check for "pages" and create the "Page" type
  if (node.internal.type === "Mdx" && source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      cover: node.frontmatter.cover,
      defer: node.frontmatter.defer,
      contentFilePath: fileNode.absolutePath,
    };

    const mdxPageId = createNodeId(`${node.id} >>> MdxPage`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPageId,
      parent: node.id,
      internal: {
        type: "MdxPage",
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: "Mdx implementation of the Page interface",
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxPageId) });
  }
};
