import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Tag from '../Atoms/Tag';
import SideBarHeading from '../Atoms/SideBarHeading';

type QueryResult = {
  allContentfulBlogPost: {
    group: TagInfo[];
  };
  allContentfulTag: {
    nodes: Node[];
  };
};

type TagInfo = {
  fieldValue: string;
  totalCount: number;
};

type Node = {
  slug: string;
  tagName: string;
};

const TagList: FC = () => (
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
    render={(data: QueryResult) => {
      const { allContentfulBlogPost, allContentfulTag } = data;

      const countMap: { [tagName: string]: number } = {};
      allContentfulBlogPost.group.map((tag) => {
        countMap[tag.fieldValue] = tag.totalCount;
      });

      return (
        <>
          <SideBarHeading title="タグ" />
          <Grid container direction="row" justify="flex-start" spacing={1}>
            {allContentfulTag.nodes.map((tag) => (
              <Grid item>
                <Tag
                  tagName={tag.tagName}
                  totalCount={countMap[tag.slug] ? countMap[tag.slug] : 0}
                  slug={tag.slug}
                  key={tag.slug}
                />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }}
  />
);

export default TagList;
