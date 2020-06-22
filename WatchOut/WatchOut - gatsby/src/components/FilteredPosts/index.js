import React, { Component } from "react";
import Fuse from "fuse.js";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./styles.module.css";
import SearchIcon from "./SearchIcon";
import {Container} from "components";

class FilteredProducts extends Component {
  state = {
    search: ""
  };

  constructor(props) {
    super(props);

    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["markdown.excerpt", "markdown.frontmatter.title"]
    };

    this.fuse = new Fuse(props.posts.markdowns, options);
  }

  onChange = event => this.setState({ search: event.target.value });

  render() {
    const { posts } = this.props;
    const { search } = this.state;

    let searchResults = posts.markdowns;

    if (search.length > 0) {
      searchResults = this.fuse.search(search);
    }

    const matchedPosts = searchResults.map(({ markdown }) => {
      const { id, excerpt } = markdown;
      const { title, slug, frontPhoto, price} = markdown.frontmatter;

      return (
        <Container className={styles.Container}>
        <div key={id} className={styles.PostContainer}>
          <Link to={`blog/${slug}`} className={styles.Link}>
            <Img
            fluid={frontPhoto.childImageSharp.fluid}
            className={styles.Index_Image}
            />
            <h2 className={styles.Title}>
            {title}
            </h2>
            <p className={styles.Excerpt}>{excerpt}</p>
            <b className={styles.Date}>Price: {price}</b>
          </Link>
        </div>
        </Container>
      );
    });

    return (
      <>
        <div className={styles.InputContainer}>
          <label className={styles.Label}>
            <input
              className={styles.Input}
              type="search"
              value={this.state.search}
              onChange={this.onChange}
              placeholder="Search posts"
            />
            <SearchIcon className={styles.SearchIcon} />
          </label>
        </div>

        <div className={styles.ResultsContainer}>{matchedPosts}</div>
      </>
    );
  }
}

export default FilteredProducts;