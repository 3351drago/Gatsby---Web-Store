import React from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </>
  );
};

export const query = graphql`
  query WatchPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`;