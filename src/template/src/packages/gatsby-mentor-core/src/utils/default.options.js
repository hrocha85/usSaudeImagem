module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || "/";

  // Contents
  const postsPath = themeOptions.postsPath || "content/posts";
  const authorsPath = themeOptions.authorsPath || "content/authors";
  const taxonomyPath = themeOptions.taxonomyPath || "content/taxonomy";
  const resumePath = themeOptions.resumePath || "content/resume";

  const pagesPath = themeOptions.pagesPath || "content/pages";
  const expertisesPath = themeOptions.expertisesPath || "content/expertises";
  const worksPath = themeOptions.worksPath || "content/works";
  const servicesPath = themeOptions.servicesPath || "content/services";
  const testimonialsPath =
    themeOptions.testimonialsPath || "content/testimonials";

  // Assets
  const imagesPath = themeOptions.imagesPath || "assets/images";

  const formatString = themeOptions.formatString || "DD.MM.YYYY";

  const mdx = typeof themeOptions.mdx === "undefined" ? true : themeOptions.mdx;
  const sharp =
    typeof themeOptions.sharp === "undefined" ? true : themeOptions.sharp;

  return {
    basePath,
    authorsPath,
    expertisesPath,
    imagesPath,
    pagesPath,
    postsPath,
    resumePath,
    servicesPath,
    taxonomyPath,
    testimonialsPath,
    worksPath,
    formatString,
    mdx,
    sharp,
  };
};
