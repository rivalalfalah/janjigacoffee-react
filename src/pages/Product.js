import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Product.module.css";
import coffee from "../assets/images/coffee-3.png";

class Product extends Component {
  render() {
    return (
      <>
        <header className={styles["header1"]}>
          <nav className={styles["header"]}>
            <span className={styles["tittle-web"]}>
              <Link to="/">
                <img src={coffee} alt="coffee" />
              </Link>
              <label for="tittle" className={styles["font"]}>
                Coffee Shop
              </label>
            </span>

            <span className={styles["nav-rev"]}>
              <Link to="/" className={`${styles["font"]} ${styles["url"]}`}>
                Home
              </Link>
              <Link to="/product">
                <span
                  className={`${styles["font"]} ${styles["url"]} ${styles["product-url"]}`}
                >
                  Product
                </span>
              </Link>
              <span className={`${styles["font"]} ${styles["url"]}`}>
                Your chart
              </span>
              <span className={`${styles["font"]} ${styles["url"]}`}>
                History
              </span>
            </span>
            <span className={styles["profile-pict"]}>
              <button className={styles["search"]}></button>
              <button className={styles["chat"]}></button>
              <button className={styles["profile-pict-header"]}></button>
            </span>
          </nav>
        </header>
        <aside className={styles["aside"]}>
          <label
            className={`${styles["promo-for-text"]} ${styles["font"]} `}
            for="promo for you"
          >
            Promo for you
          </label>
          <br />
          <label className={styles["update-cupon"]} for="update cupon">
            Coupons will be updated every weeks. <br />
            Check them out!{" "}
          </label>
          <div className={styles["block1"]}></div>
          <div className={styles["block2"]}></div>
          <div className={styles["block3"]}>
            <div className={styles["top-block"]}>
              <img
                className={styles["img-block"]}
                src="./assets/beef spageti.jpg"
                alt="beef spagetti"
              />
              <br />
              <label className={styles["kupon-name"]} for="kupon name">
                Beef spaghetti <br />
                20% OFF
              </label>
              <br />
              <label className={styles["detail-kupon"]} for="detail kupon">
                Buy 1 Choco Oreo and get 20% off <br />
                for Beef Spaghetti
              </label>
            </div>
            <div className={styles["bottom-block"]}>
              <label className={styles["cupon-code"]} for="kupon name">
                CUPON CODE
              </label>
              <br />
              <label className={styles["cupon-permit"]} for="cupon-kode">
                FNPR15RG
              </label>
              <br />
              <label className={styles["cupon-valid"]} for="cupon valid">
                Valid untill October 10th 2020
              </label>
            </div>
          </div>
          <button className={styles["apply-cupon-btn"]}>Apply coupon</button>
          <div className={styles["box-terms"]}>
            <label className={styles["terms"]} for="terms and condition">
              Terms and condition
            </label>
            <br />
            <label for="detail terms and condition">
              1. You can only apply 1 coupon per day <br />
              2. It only for dine in <br />
              3. Buy 1 get 1 only for new user <br />
              4. Should make member card to apply coupon
            </label>
          </div>
        </aside>
        <main className={styles["main1"]}>
          <nav className={styles["main"]}>
            <div className={styles["link"]}>
              <span className={`${["font-nav"]} ${["favorite-product-url"]} `}>
                Favorite product
              </span>
              <span className={styles["font-nav"]}>Coffee</span>
              <span className={styles["font-nav"]}>Non Coffee</span>
              <span className={styles["font-nav"]}>Foods</span>
              <span className={styles["font-nav"]}>Add ons</span>
            </div>
          </nav>
          <section className={styles["product-box"]}>
            <div className={styles["column1"]}>
              <div className={styles["box1"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box2"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box3"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box4"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
            </div>
            <div className={styles["column2"]}>
              <div className={styles["box5"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box6"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box7"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box8"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
            </div>
            <div className={styles["column3"]}>
              <div className={styles["box9"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box10"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box11"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box12"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
            </div>
            <div className={styles["column4"]}>
              <div className={styles["box13"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box14"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box15"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
              </div>
              <div className={styles["box16"]}>
                <div className={styles["square"]}>
                  <img
                    className={styles["img-product"]}
                    src="./assets/veggie.png"
                    alt="veggie"
                  />
                  <br />
                  <label className={styles["name-product"]} for="name">
                    Veggie <br className="enter" /> tomato{" "}
                    <br className="enter" />
                    mix
                  </label>
                  <br className="enter" />
                  <label className={styles["price"]} for="harga">
                    IDR.34.000
                  </label>
                </div>
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
                href=""
              >
                Download
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                href=""
              >
                Pricing
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                href=""
              >
                Location
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                href=""
              >
                Countries
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                href=""
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
                href=""
              >
                Coffee shop ?
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                href=""
              >
                FAQ
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                href=""
              >
                About Us
              </div>
              <br />
              <div
                className={`${styles["font"]} ${styles["footer-url"]} `}
                href=""
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

export default Product;
