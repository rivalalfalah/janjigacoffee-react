import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Profile.module.css";

class Profile extends Component {
  render() {
    return (
      <>
        <header className={styles["header"]}>
          <nav className={styles["nav"]}>
            <span className={styles["tittle-web"]}>
              <img src="./assets/coffee 3.png" alt="coffee" />
              <label for="tittle" className={styles["font"]}>
                Coffee Shop
              </label>
            </span>

            <span className={styles["nav-rev"]}>
              <Link to="/"><span className={`${styles["font"]} ${styles["url"]}`}>Home</span></Link>
              <Link to="/product"><span className={`${styles["font"]} ${styles["url"]}`}>Product</span></Link>
              <span className={`${styles["font"]} ${styles["url"]}`}>Your chart</span>
              <span className={`${styles["font"]} ${styles["url"]}`}>History</span>
            </span>
            <span className={styles["profile-pict"]}>
              <button className={styles["search"]}></button>
              <button className={styles["chat"]}></button>
              <img src="./assets/image 39.jpg" alt="profile-pict" />
            </span>
          </nav>
        </header>
        <main className={styles["main"]}>
          <section className={styles["user-change"]}>
            <div
              className={`${styles["font"]} ${styles["user-profile-text"]} `}
            >
              User Profile
            </div>
          </section>
          <section className={styles["profile-detail"]}>
            <div className={styles["profie-img"]}>
              <img
                className={styles["profile-picture"]}
                src="./assets/image 39.jpg"
                alt="profile-pict"
              />
              <br />
              <label
                className={`${styles["font"]} ${styles["email-profile"]} `}
                for="profile-text"
              >
                Zulaikha
                <br />
                Zulaikha@gmail.com
              </label>
            </div>
            <div className={styles["profile-btn"]}>
              <button
                className={`${styles["font"]} ${styles["choose-foto-btn"]} `}
              >
                choose photo
              </button>
              <br />
              <button
                className={`${styles["font"]} ${styles["remove-foto-btn"]} `}
              >
                Remove photo
              </button>
              <br />
              <button
                className={`${styles["font"]} ${styles["edit-password-btn"]} `}
              >
                Edit Password
              </button>
              <br />
              <label
                className={`${styles["font"]} ${styles["change-save"]} `}
                for="change"
              >
                Do you want to save <br />
                the change?
              </label>
              <br />
              <button
                className={`${styles["font"]} ${styles["save-change-btn"]} `}
              >
                Save change
              </button>
              <br />
              <button className={`${styles["font"]} ${styles["cancel-btn"]} `}>
                Cancel
              </button>
              <br />
              <button className={`${styles["font"]} ${styles["log-out-btn"]} `}>
                Log out
              </button>
              <br />
            </div>
          </section>
          <section className={styles["profile-form"]}>
            <label className={styles["font-detail"]} for="contact">
              Contact
            </label>
            <button className={styles["change-btn"]}></button>
            <div className={styles["form-top"]}>
              <label className={styles["font"]} for="email-address">
                Email address:
              </label>
              <label
                className={`${styles["font"]} ${styles["mobile-number"]} `}
                for="mobile-number"
              >
                Mobile number:
              </label>
              <br />
              <input
                className={styles["input"]}
                type="text"
                name="email-address"
              />
              <input
                className={styles["input"]}
                type="text"
                name="mobile-number"
              />
              <br />
              <label className={styles["font"]} for="Delivery address">
                Delivery address
              </label>
              <br />
              <input
                className={styles["input"]}
                type="text"
                name="Delivery address"
              />
            </div>
            <div className={styles["form-bottom"]}>
              <label className={styles["font-detail"]} for="detail">
                Detail
              </label>
              <br />
              <label className={styles["font"]} for="display-name">
                Display name
              </label>
              <label className={`${styles["font"]} ${styles["birth"]} `} for="birth">
                DD-MM-YYYY
              </label>
              <br />
              <input
                className={styles["input"]}
                type="text"
                name="display-name"
              />
              <input className={styles["input"]} type="text" name="birth" />
              <br />
              <label className={styles["font"]} for="first-name">
                First name
              </label>
              <br />
              <input
                className={`${styles["input"]}`}
                type="text"
                name="first-name"
              />
              <br />
              <label className={styles["font"]} for="last-name">
                Last name
              </label>
              <br />
              <input className={styles["input"]} type="text" name="last-name" />
              <div className={styles["radio"]}>
                <input type="radio" className={styles["font"]} name="gender" />
                female
                <input type="radio" className={styles["font"]} name="gender" />
                Male
              </div>
            </div>
          </section>
        </main>
        <footer className={styles["footer"]}>
          <section className={styles["footer-left"]}>
            <img src="./assets/coffee 3.png" alt="coffee" />
            <label className={styles["font"]} for="image">
              Coffee Shop
            </label>
            <br />
            <label className={styles["font"]} for="detail-footer">
              Coffee Shop is a store that sells some good <br />
              meals, and especially coffee. We provide <br />
              high quality beans
            </label>
            <br />
            <button className={styles["instagram"]}></button>
            <button className={styles["twitter"]}></button>
            <button className={styles["facebook"]}></button>
          </section>
          <section className={styles["footer-right"]}>
            <div className={styles["footer-product"]}>
              <label
                className={`${styles["font"]} ${styles["product"]} `}
                for="footer-product"
              >
                Product
              </label>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                Download
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                Pricing
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                Location
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                Countries
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                Blog
              </div>
            </div>
            <div className={styles["footer-engage"]}>
              <label
                className={`${styles["font"]} ${styles["engage"]} `}
                for="engage"
              >
                Engage
              </label>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                Coffee shop ?
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                FAQ
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                About Us
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                
              >
                Privacy Policy
              </div>
              <br />
              <div>Terms of Service</div>
              <br />
            </div>
          </section>
        </footer>
      </>
    );
  }
}
export default Profile;
