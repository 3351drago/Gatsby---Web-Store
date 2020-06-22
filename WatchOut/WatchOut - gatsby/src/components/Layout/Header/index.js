import React from "react";
import { Container } from "components";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import navLinks from "config/menu.js";
import { Link } from "gatsby";
import 'font-awesome/css/font-awesome.min.css';
import { PrivateRoute } from "components";

export default () => {
  const nav = navLinks.map(link => {
    if (link.private) {
      return (
        <PrivateRoute
          key={link.path}
          render={() => (
            <NavLink
              key={link.path}
              to={link.path}
              className={styles.PrivateLink}
              activeClassName={styles.PrivateLink_active}
            >
              {link.text}
            </NavLink>
          )}
        />
      );
    }

    return (
      <NavLink key={link.path} to={link.path}>
        {link.text}
      </NavLink>
    );
  });


  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
       <div className={styles.Order}>
       <Link to={`/`}>
        <span className={styles.Logo}><img src="red-watch-out-rubber-stamp-illustration-drawing_csp53752206.jpg" alt="Logo" /></span> 
       </Link>   
          <div className={styles.End}>
          <Link to={`private`}>
            <span className={styles.User}>
              <i className="fa fa-user fa-2x"></i>
              <p>Log in</p>
            </span>
            </Link>
            <span className={styles.Cart}>
              <i className="fa fa-shopping-cart fa-2x"></i>
              <p>Cart</p>
            </span>
          </div>
       </div>
      </Container>
      <Container className={styles.Container}>
        <Nav>{nav}</Nav>
      </Container>
    </header>
  );
};

