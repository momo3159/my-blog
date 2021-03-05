const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/Post.tsx');
  const blogPageTemplate = path.resolve('src/templates/Page.tsx');
  const blogPageWithTagTemplate = path.resolve('src/templates/PageWithTag.tsx');
  const { data } = await graphql(`
    query {
      allContentfulBlogPost(sort: { order: DESC, fields: date }) {
        totalCount
        nodes {
          id
          slug
        }
      }
      allTags: allContentfulBlogPost {
        group(field: tags___slug) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const { allContentfulBlogPost, allTags } = data;
  const { nodes } = allContentfulBlogPost;

  for (let i = 0; i < nodes.length; i++) {
    const { id, slug } = nodes[i];
    const context = { prevId: '', currentId: id, nextId: '' };
    if (i === 0) {
      context.nextId = nodes[i + 1]?.id;
    } else if (i + 1 === nodes.length) {
      context.prevId = nodes[i - 1]?.id;
    } else {
      context.prevId = nodes[i - 1]?.id;
      context.nextId = nodes[i + 1]?.id;
    }

    createPage({
      path: `/blog/posts/${slug}`,
      component: blogPostTemplate,
      context,
    });
  }

  const unit = 6;
  const totalPageNumber = Math.ceil(allContentfulBlogPost.totalCount / unit);

  for (let i = 2; i <= totalPageNumber; i++) {
    createPage({
      path: `/blog/pages/${index}`,
      component: blogPageTemplate,
      context: {
        skip: unit * (i - 1),
        unit,
      },
    });
  }

  allTags.group.forEach((tag) => {
    const totalPageNumberInCategory = Math.ceil(tag.totalCount / unit);
    for (let i = 1; i <= totalPageNumberInCategory; i++) {
      createPage({
        path: `/blog/${tag.fieldValue}/${i}`,
        component: blogPageWithTagTemplate,
        context: {
          skip: unit * (i - 1),
          unit,
          tagName: tag.fieldValue,
          totalTags: tag.totalCount,
        },
      });
    }
  });
};
