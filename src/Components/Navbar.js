import React from "react";
import coffee from "../assets/images/coffee-3.png";
import styles from "./styles/Navbar.module.css";
import { Link } from "react-router-dom";
export default function NavbarNotlogin() {
    const role = parseInt(localStorage.getItem("role_id"))
  if (!localStorage.getItem("token"))
    return (
      <header className={styles["container-header"]}>
        <section className={styles["left-header"]}>
          <img src={coffee} alt="" />
          <label className={styles["coffee-text"]}>Coffee shop</label>
        </section>
        <section className={styles["middle-header"]}>
          <Link to={"/"} className={styles["url"]}>Home</Link>
          <Link to={"/product"} className={styles["url"]}>Product</Link>
          <Link className={styles["url"]}>Your cart</Link>
          <Link to={"/login"} className={styles["url"]}>History</Link>
        </section>
        <section className={styles["right-header"]}>
          <Link to={"/login"} className={styles["login-box"]}>
          <Link to={"/login"} className={styles["login-text"]}>Login</Link>
          </Link>
          <Link to={"/sign-up"} className={styles["signup-box"]}>
          <Link to={"/sign-up"} className={styles["login-text"]}>Sign Up</Link>
          </Link>
          
        </section>
      </header>
    );

    if(role === 1)
    return (
        <header className={styles["container-header"]}>
        <section className={styles["left-header"]}>
          <img src={coffee} alt="" />
          <label className={styles["coffee-text"]}>Coffee shop</label>
        </section>
        <section className={styles["middle-header"]}>
          <Link to={"/"} className={styles["url"]}>Home</Link>
          <Link to={"/product"} className={styles["url"]}>Product</Link>
          <Link className={styles["url"]}>Your cart</Link>
          <Link className={styles["url"]}>History</Link>
        </section>
        <section className={styles["right-header"]}>
          
        </section>
      </header>
    )

    if(role === 2)
    return(
        <header className={styles["container-header"]}>
        <section className={styles["left-header"]}>
          <img src={coffee} alt="" />
          <label className={styles["coffee-text"]}>Coffee shop</label>
        </section>
        <section className={styles["middle-header"]}>
          <Link to={"/"} className={styles["url"]}>Home</Link>
          <Link to={"/product"} className={styles["url"]}>Product</Link>
          <Link className={styles["url"]}>Your cart</Link>
          <Link> className={styles["url"]}Dashboard</Link>
        </section>
        <section className={styles["right-header"]}>
          
        </section>
      </header>
    )
}
