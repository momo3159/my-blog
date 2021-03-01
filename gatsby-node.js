const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/post.ts');
  const tagsTemplate = path.resolve('src/templates/template-tags.ts');
  const { allContentfulBlogPost, allContentfulTag } = await graphql(`
    query {
      allContentfulBlogPost(limit: 10, skip: 0) {
        totalCount
        nodes {
          id
          body {
            id
            body
          }
          date
          slug
          title
          tags {
            tagName
            slug
          }
        }
      }
    }
  `);

  allContentfulBlogPost.nodes.map((node) => {
    const { body } = node.body;
    const { date, slug, title, tags } = node;

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        title,
        tags,
        date,
        body,
      },
    });
  });
};
