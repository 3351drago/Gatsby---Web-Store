import React from "react";
import { Container } from "components";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default () => (
  <footer className={styles.Footer}>
    <Container className={styles.Container}>
      <h2>Our Products</h2>
      <Link to={`/`}>All Watches</Link>
      <Link to={`second-page`}>New Watches</Link>
    </Container>
    <Container className={styles.Container}>
      <h2>About us</h2>
      <Link to={`about`}>History</Link>
      <Link to={`blog`}>Blog</Link>
    </Container>
    <Container className={styles.Container}>
      <h2>Contact</h2>
      <Link to={`/`}>Contact us</Link>
    </Container>
  </footer>
);
