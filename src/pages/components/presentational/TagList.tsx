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
        allContentfulTag {
          nodes {
            slug
            tagName
          }
        }
      }
    `}
    render={(data) => {
      const { allContentfulBlogPost, allContentfulTag } = data;

      const countMap = {};
      allContentfulBlogPost.group.map((tag) => {
        countMap[tag.fieldValue] = tag.totalCount;
      });

      return allContentfulTag.nodes.map((tag) => {
        return (
          <Tag
            tagName={tag.tagName}
            totalCount={countMap[tag.slug] ? countMap[tag.slug] : 0}
            slug={tag.slug}
            key={tag.slug}
          />
        );
      });
    }}
  />
);

export default TagList;
