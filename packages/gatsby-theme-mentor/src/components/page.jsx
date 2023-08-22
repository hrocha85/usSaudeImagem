import { MDXProvider } from "@mdx-js/react";

import * as React from "react";

import Layout from "../layouts";
import MDXComponents from "./Mdx";
import Seo from "./Seo";

const Page = ({ data: { page }, children }) => {
  return (
    <>
      <Seo
        title={page.title}
        description={page.excerpt.replace(/(\r\n|\n|\r)/gm, "")}
        thumbnail={page.cover}
      />
      <Layout>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </Layout>
    </>
  );
};

export default Page;
