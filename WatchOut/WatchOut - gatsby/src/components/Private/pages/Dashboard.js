import React from "react";
import SEO from "components/SEO";
import {getUser} from "services/authentication/auth.js"
import 'font-awesome/css/font-awesome.min.css';
import styles from "../styles/Dashboard.module.css";

export default () => (
  <>
    <SEO title="Dashboard" />
    <h1>User information:</h1>
      <div className={styles.Profile}>
        <h1 className={styles.Photo}>Profile Photo</h1>
        <div className={styles.Info}>
          <b>Name: {getUser().name}</b>
          <b>E-mail: {getUser().email}</b>
        </div>
      </div>
  </>
);