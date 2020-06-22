import React from "react";
import { Link } from "gatsby";
import { Container } from "components";
import styles from "./styles.module.css";
import Img from "gatsby-image";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const {slug, frontPhoto} = post.node.frontmatter;
    return (
      <Container className={styles.Container}>
      <Link to={`blog/${slug}`}>
       <Img
          fluid={frontPhoto.childImageSharp.fluid}
          className={styles.Index_Image}
        />
        <button className={styles.Button_icon}>See more</button>
      </Link>
      </Container>
    );
  });

  return postsList;
};