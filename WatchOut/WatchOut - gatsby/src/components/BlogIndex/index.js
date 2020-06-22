import React from "react";
import { Link } from "gatsby";
import { Container } from "components";
import styles from "./styles.module.css";
import Img from "gatsby-image";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, date, slug, frontPhoto} = post.node.frontmatter;
    return (
      <Container className={styles.Container}>
      <Link to={`blog/${slug}`}>
       <section key={id} className={styles.Post}>
       <Img
          fluid={frontPhoto.childImageSharp.fluid}
          className={styles.Index_Image}
        />
        <h2 className={styles.Title}>
          <Link to={`blog/${slug}`}>{title}</Link>
        </h2>
        <p className={styles.Excerpt}>{excerpt}</p>
        <span className={styles.Date}>{date}</span>
      </section>
      </Link>
      </Container>
      
    );
  });

  return postsList;
};
