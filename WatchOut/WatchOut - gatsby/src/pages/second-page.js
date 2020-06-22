import React from "react";
import { graphql } from "gatsby";
import SEO from "components/SEO";
import FilteredPosts from "components/FilteredPosts";
import {Container} from "components"; 


export default ({ data: { posts } }) => {
  return (
    <>
      <SEO keywords={[`gatsby`, `application`, `react`]} />
      <Container className="aside">
          <h2 className="hide">FILTER</h2>
          <aside>
              <div className="filter">Brands</div>
              <div className="filter">Gender</div>
              <div className="filter">Price</div>
              <div className="filter">Movement type</div>
          </aside>
        <Container className="container-flex">
          <FilteredPosts posts={posts} />
        </Container>
      </ Container>
      
    </>
  );
};

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/newwatches/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      markdowns: edges {
        markdown: node {
          id
          excerpt(pruneLength: 60)
          frontmatter {
            title
            price
            slug
            frontPhoto {
              childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 1200) {
                  aspectRatio
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
