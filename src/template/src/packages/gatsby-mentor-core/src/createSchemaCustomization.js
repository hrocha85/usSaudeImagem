const withDefaults = require("./utils/default.options");
const types = require("./types");
const {
  mdxResolverPassthrough,
  slugify,
  proxyResolver,
  proxyField,
} = require("./utils");

module.exports = async ({ actions }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions;
  const { basePath } = withDefaults(themeOptions);

  const allTypeDefs = [types.interfaces];

  createFieldExtension({
    name: "slugify",
    args: {
      field: "String",
      prefix: "String",
      suffix: "String",
    },
    extend(args) {
      return {
        resolve(source) {
          return slugify(source, basePath, args);
        },
      };
    },
  });

  createFieldExtension({
    name: "defaultFalse",
    extend() {
      return {
        resolve(source, _args, _context, info) {
          if (source[info.fieldName] == null) return false;
          return source[info.fieldName];
        },
      };
    },
  });

  createFieldExtension({
    name: "proxyField",
    description: "Proxy field value to a field in another node.",
    args: {
      from: "String",
    },
    extend: (options, fieldConfig) => {
      return {
        resolve: proxyField(options, fieldConfig),
      };
    },
  });

  createFieldExtension({
    name: "proxyResolver",
    description: "Resolve field using a resolver from another type.",
    args: {
      on: "String!",
      to: "String",
    },
    extend: (options, fieldConfig) => {
      return {
        resolve: proxyResolver(options, fieldConfig),
      };
    },
  });

  createFieldExtension({
    name: "mdxpassthrough",
    args: {
      fieldName: "String!",
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      };
    },
  });

  createTypes(allTypeDefs);
};
