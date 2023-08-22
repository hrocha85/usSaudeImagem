// const kebabCase = require("lodash.kebabcase");
const Slug = require("slugify");

const mdxResolverPassthrough =
  (fieldName) => async (source, args, context, info) => {
    const type = info.schema.getType("Mdx");
    const mdxNode = context.nodeModel.getNodeById({
      id: source.parent,
    });
    const resolver = type.getFields()[fieldName].resolve;
    const result = await resolver(mdxNode, args, context, info);
    return result;
  };

const slugify = (source, basePath, args) => {
  const field = args?.field ?? "title";
  const prefix = args?.prefix ?? undefined;
  const suffix = args?.suffix ?? undefined;
  const slug = source.slug ? source.slug : Slug(source[field], { lower: true });

  const _path = [basePath, prefix, slug, suffix].filter((x) => x != null);

  return _path.join("/").replace(/\/\/+/g, "/");
};

const conditionalChunk = (cards, chunksizes) => {
  const chunkArray = [];
  let cc = 0,
    i = 0;
  while (i < cards.length) {
    const csize = chunksizes[cc];
    chunkArray.push(cards.slice(i, i + csize));
    cc = (cc + 1) % chunksizes.length;
    i += csize;
  }
  return chunkArray;
};

const proxyField =
  (options = {}, fieldConfig) =>
  async (source, args, context, info) => {
    let fromField = "parent";
    let toField = info.fieldName;

    if (options.from) {
      const fromFields = options.from.split(".");
      fromField = fromFields[0];
      toField = fromFields.slice(1);
    }

    const resolver = fieldConfig.resolve || context.defaultFieldResolver;
    const fieldValue = await resolver(source, args, context, {
      ...info,
      from: fromField,
    });
    if (fieldValue == null) return null;

    const targetNode = context.nodeModel.getNodeById({
      id: fieldValue,
    });

    const result = await context.defaultFieldResolver(
      targetNode,
      args,
      context,
      {
        ...info,
        from: toField,
      },
    );

    return result;
  };

const proxyResolver =
  (options = {}, fieldConfig) =>
  async (source, args, context, info) => {
    const resolver = fieldConfig.resolve || context.defaultFieldResolver;
    const fieldValue = await resolver(source, args, context, info);
    if (fieldValue == null) return null;

    const { on, to } = options;
    const { schema, fieldName } = info;
    const gqlField = schema.getType(on).getFields()[to || fieldName];
    const result = await gqlField.resolve(fieldValue, args, context, info);

    return result;
  };

module.exports = {
  // kebabCase,
  // calculateLinesToHighlight,
  // getLanguage,
  // GetLanguageInput,
  proxyResolver,
  proxyField,
  mdxResolverPassthrough,
  // preToCodeBlock,
  slugify,
  conditionalChunk,
};
