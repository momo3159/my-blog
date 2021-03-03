const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/Templates/post.tsx');
  // const tagsTemplate = path.resolve('src/templates/template-tags.tsx');
  const blogPageTemplate = path.resolve('src/Templates/Page.tsx');
  const blogPageWithTagTemplate = path.resolve('src/Templates/PageWithTag.tsx');
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

  //
  const { allContentfulBlogPost, allTags } = data;
  const { nodes } = allContentfulBlogPost;

  for (let i = 0; i < nodes.length; i++) {
    const { id, slug } = nodes[i];
    console.log('currnetID', id);
    const context = { prevId: '', currentId: id, nextId: '' };
    if (i === 0) {
      context.nextId = nodes[i + 1].id;
    } else if (i + 1 === nodes.length) {
      context.prevId = nodes[i - 1].id;
    } else {
      context.prevId = nodes[i - 1].id;
      context.nextId = nodes[i + 1].id;
    }

    createPage({
      path: `/blog/posts/${slug}`,
      component: blogPostTemplate,
      context,
    });
  }

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

  allTags.group.forEach((tag) => {
    console.log(tag.totalCount);
    const totalPageNumberInCategory = Math.ceil(tag.totalCount / unit);
    range(1, totalPageNumberInCategory).map((index) => {
      createPage({
        path: `/blog/${tag.fieldValue}/${index}`,
        component: blogPageWithTagTemplate,
        context: {
          skip: unit * index - 1,
          unit,
          tagName: tag.fieldValue,
          totalTags: tag.totalCount
        },
      });
    });
  });
};

const range = (start, end) => {
  return [...Array(end - start + 1).keys()].map((index) => index + start);
};
