import React, { FC } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Tag from './Tag';

const TagList = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost {
          group(field: tags___slug) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) =>
      data.allContentfulBlogPost.group.map((tag) => (
        <div>
          <Link to={`/blog/tags/${tag.fieldValue}/`} key={tag.fieldValue}>
            <Tag tagName={tag.fieldValue} usageCount={tag.totalCount} />
          </Link>
        </div>
      ))
    }
  />
);

export default TagList;
