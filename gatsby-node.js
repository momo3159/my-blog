const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/post.tsx');
  // const tagsTemplate = path.resolve('src/templates/template-tags.tsx');
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
  range(2, totalPageNumber).map((index) => {
    createPage({
      path: `/blog/pages/${index}`,
      component: blogPageTemplate,
      context: {
        skip: unit * index - 1,
        unit,
      },
    });
  });
  console.log(range(1, 4))
  allTags.group.forEach((tag) => {
    console.log(tag.fieldValue);
    const totalPageNumberInCategory = Math.ceil(tag.totalCount / unit);
    range(1, totalPageNumberInCategory).map((index) => {
      createPage({
        path: `/blog/${tag.fieldValue}/${index}`,
        component: blogPageWithTagTemplate,
        context: {
          skip: unit * index - 1,
          unit,
          tagName: tag.fieldValue,
        },
      });
    });
  });
};

const range = (start, end) => {
  return [...Array(end - start + 1).keys()].map((index) => index + start);
};
