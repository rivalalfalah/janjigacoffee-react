import React, { Component } from 'react'
import {Link} from "react-router-dom"
import styles from "../styles/Sign-up.module.css"
import bg from "../assets/images/robert.jpg"
import coffee from "../assets/images/coffee-3.png"

class SignUp extends Component {
  render() {
    return (
      <>
      <aside className={styles["aside"]}><img className={styles["image-side"]} src={bg} alt="foods-on-the-table" /></aside>
    <main className={styles["absolute"]}>
        <section className={styles["title-page"]}>
            <Link to="/"><img className ={styles["image-coffee"]}src={coffee} alt="coffee" /></Link>
            <label className = {styles["title-web"]} for="image">coffee shop</label>
            <label className = {styles["page"]}>Sign Up</label>
        </section>
        <section className={styles["register-form"]}>
            <label className={styles["form"]}>Email address :</label><br />
            <input className = {styles["input"]} type="email" placeholder="Enter your email address here" /><br />
            <label  className={styles["form"]}>Password :</label><br />
            <input className = {styles["input"]} type="password" placeholder="Enter your password here " /><br />
            <label  className={styles["form"]}>Phone number :</label><br />
            <input className = {styles["input"]} type="tel" placeholder="Enter you phone number here" /><br />
            <button className={styles["sign-up-btn"]}>Sign Up</button><br />
            <button className={styles["google-btn"]}>Sign up with google</button><br />
            <div className={styles["already-account"]}>Already have an account?</div>
            <Link to="/login"><button className={styles["login-here"]}>Login here</button></Link>
        </section>
    </main>
    <footer className={styles["footer1"]}>
        <section className={styles["footer-left"]}>
        <img src={coffee} alt="coffee" />
        <label className={`${styles["title-web"]} ${styles["footer"]} `} for="image">Coffee Shop</label><br />
        <label className={styles["detail"]} for="detail">Coffee Shop is a store that sells some 
            <br />good meals, and especially coffee.
            <br />We provide high quality beans</label><br />
        <button className={styles["facebook"]}></button>
        <button className={styles["twitter"]}></button>
        <button className={styles["instagram"]}></button><br />
        <label className={styles["copyright"]} for="copyright">@2020CoffeeStore</label>
    </section>
    <section className={styles["footer-right"]}>
        <div><label for={styles["product-list"]}>Product</label> <br className={styles["enter2"]} />
            <span className={styles["url-font"]} href="">Download </span> <span className={styles["url-font"]} href="">Pricing</span> <br className={styles["enter2"]} />
            <span className={styles["url-font"]} href="">Locations</span> <span className={styles["url-font"]}href="">Countries</span> <br className={styles["enter2"]} />
            <span className={styles["url-font"]} href="">Blog</span></div>
            <div className={styles["engage"]}>
                <label for="engage">Engage</label> <br className={styles["enter2"]} />
            <span className={styles["url-font"]} href="">Coffe Shop ? </span> <span className={styles["url-font"]} href="">About us</span> <br className={styles["enter3"]} />
            <span className={styles["url-font"]} href="">FAQ</span> <span className={styles["url-font"]} href="">Privacy Policy</span> <br className={styles["enter3"]} />
            <span className={styles["url-font"]} href="">Terms of Service</span></div>
    </section>
    </footer></>
    )
  }
}

export default SignUp