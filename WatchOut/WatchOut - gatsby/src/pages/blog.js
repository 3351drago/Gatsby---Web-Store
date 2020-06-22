import React from "react";
import { graphql } from "gatsby";
import { BlogIndex } from "components";


export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
      <BlogIndex posts={posts} />
    </>
  );
};

export const query = graphql`
query BlogIndexQuery {
  allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }
                      sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        id
        frontmatter {
          title
          date
          slug 
          frontPhoto {
            childImageSharp {
              fluid(maxWidth: 1200) {
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
        excerpt(pruneLength: 300)
      }
    }
  }
}
`;
