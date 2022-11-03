import React from "react";
import styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";

import coffee from "../assets/images/coffee-3.png";
import robert from "../assets/images/robert.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import withNavigate from "../helpers/WithNavigate";
import axios from "axios";

function Login() {
  const navigate = useNavigate(); // => Untuk link ke halaman tetapi sebelum ngelink membawa kondisi


  /* state get token */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*  get token localstorage */
  // mengambil value dari email yang di input
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // mengambil value dari password yang di input
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Mendapatkan token dan di simpan di localstorage
  const handleApi = (e) => {
    e.preventDefault();
    // console.log(email, passwords);
    axios
      .post(`${process.env.REACT_APP_BACKEND_HOST}api/auth`, {
        email, // <= body
        password, // <= body
      })
      .then((response) => {
        //("Login Success");
         console.log(response.data);
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.data.token)
        );
        localStorage.setItem("user_id",JSON.stringify(response.data.data.payload));
        navigate("/");
      })
      .catch((err) => {
        //("Email or Password is WRONG !!!");
        console.log(err);
      });
  };

  return (
    <>
      <aside className={styles["aside"]}>
        <img
          className={styles["image-side"]}
          src={robert}
          alt="foods-on-the-table"
        />
      </aside>
      <main className={styles.absolute}>
        <section className={styles["title-page"]}>
          <Link to="/">
            <img className={styles["image-coffee"]} src={coffee} alt="coffee" />
          </Link>
          <label className={styles["title-web"]} for="image">
            coffee shop
          </label>
          <label className={styles.page}>Sign In</label>
        </section>
        <form className={styles["register-form"]} onSubmit={handleApi}>
          <label className={styles.form}>Email address :</label>
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your email address here"
            onChange={handleEmail}
          />
          <br />
          <label className={styles.form}>Password :</label>
          <br />
          <input
            className={styles.input}
            type="password"
            placeholder="Enter your password here"
            onChange={handlePassword}
          />
          <br />
          <div className={styles["forgot-password"]}>Forgot password?</div>
          <br />
          <button className={styles["Login-btn"]}>Login</button>
          <br />
          <button className={styles["google-btn"]}>Login with google</button>
          <br />
          <div className={styles["already-account"]}>Dont have an account?</div>
          <Link to="/sign-up">
            <button className={styles["signUp-here"]}>Sign up here</button>
          </Link>
        </form>
      </main>
      <footer className={styles["footer"]}>
        <section className={styles["footer-left"]}>
          <div className={styles["img-footer"]}>
            <img className={styles["image-coffee"]} src={coffee} alt="coffee" />
            <label className={styles["font-footer-new"]} for="image">
              Coffee Shop
            </label>
          </div>
          <div className={styles["detail-footer"]}>
            <label className={styles.detail} for="detail">
              Coffee Shop is a store that sells some
              <br />
              good meals, and especially coffee.
              <br />
              We provide high quality beans
            </label>
            <br />
          </div>
          <div className={styles["btn-footer"]}>
            <button className={styles.facebook}></button>
            <button className={styles.twitter}></button>
            <button className={styles.instagram}></button>
          </div>
          <label className={styles.copyright} for="copyright">
            @2020CoffeeStore
          </label>
        </section>
        <section className={styles["footer-right"]}>
          <div>
            <label for="product-list">Product</label>{" "}
            <br className={styles.enter2} />
            <div className={styles["url-font"]}>Download </div>{" "}
            <div className={styles["url-font"]}>Pricing</div>{" "}
            <br className={styles["image-coffee"]} />
            <div className={styles["url-font"]}>Locations</div>{" "}
            <div className={styles["url-font"]}>Countries</div>{" "}
            <br className={styles["enter2"]} />
            <div className={styles["url-font"]}>Blog</div>
          </div>
          <div className={styles.engage}>
            <label for="engage">Engage</label> <br className={styles.enter2} />
            <div className={styles["url-font"]}>Coffe Shop ? </div>{" "}
            <div className={styles["url-font"]}>About us</div>{" "}
            <br className={styles["enter3"]} />
            <div className={styles["url-font"]}>FAQ</div>{" "}
            <div className={styles["url-font"]}>Privacy Policy</div>{" "}
            <br className={styles["enter3"]} />
            <div className={styles["url-font"]}>Terms of Service</div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default withNavigate(Login);