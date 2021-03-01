const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/post.tsx');
  // const tagsTemplate = path.resolve('src/templates/template-tags.tsx');
  const blogPageTemplate = path.resolve('src/templates/Page.tsx');

  const { data } = await graphql(`
    query {
      allContentfulBlogPost(sort: {order: DESC, fields: date}) {
        totalCount
        nodes {
          id
          slug
        }
      }
    }
  `);
  const { allContentfulBlogPost } = data;

  allContentfulBlogPost?.nodes.map((node) => {
    const { id, slug } = node;

    createPage({
      path: `/blog/posts/${slug}`,
      component: blogPostTemplate,
      context: {
        id,
      },
    });
  });

  const unit = 1;
  const totalPageNumber = Math.ceil(allContentfulBlogPost.totalCount / unit);
  [...Array(totalPageNumber + 1).keys()].slice(2).map((index) => {
    createPage({
      path: `/blog/pages/${index}`,
      component: blogPageTemplate,
      context: {
        skip: unit * index - 1,
        unit,
      },
    });
  });
};
