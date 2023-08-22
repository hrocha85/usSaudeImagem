import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage as Img } from "gatsby-plugin-image";

const Logo = (props) => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(absolutePath: { regex: "/logo.(jpeg|jpg|gif|png)/" }) {
          childImageSharp {
            gatsbyImageData(
              width: 36
              height: 36
              formats: [AUTO, WEBP]
              layout: FIXED
            )
          }
        }
      }
    `,
  );

  const image = getImage(logo);

  return <Img image={image} alt="Logo" {...props} />;
};

export default Logo;
