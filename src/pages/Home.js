import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

import coffee from "../assets/images/coffee-3.png";
import checklist1 from "../assets/images/checklist.png";
import imageTop from "../assets/images/homebg.jpg";
import image from "../assets/images/bgh.png";
import checklist2 from "../assets/images/checklist2.png";
import maps from "../assets/images/maps.png";
import hazelnut from "../assets/images/hazelnut-latte.png";
import pinky from "../assets/images/pinky-promise.png";
import chiken from "../assets/images/chiken-wings.png";
import profile from "../assets/images/profil.jpg";
import amazon from "../assets/images/img_amazon.png";
import discord from "../assets/images/img_discord.png";
import netflix from "../assets/images/img_netflix.png";
import reddit from "../assets/images/img_reddit.png";
import spotify from "../assets/images/img_spotify.png";
import next from "../assets/images/next.png";
import prev from "../assets/images/previous.png";
class Home extends Component {
  render() {
    return (
      <>
        <header className={styles["header1"]}>
          <nav className={styles["nav"]}>
            <span className={styles["tittle-web"]}>
              <Link to="/home"><img src={coffee} alt="coffee" /></Link>
              <label for="tittle" className={styles["font"]}>
                Coffee Shop
              </label>
            </span>
            <span className={styles["nav-rev"]}>
              <span
                className={`${styles["font"]} ${styles["url"]} ${styles["home-url"]}`}
              ><Link to="/home">
                Home
                </Link>
              </span>
              <span className={`${styles["font"]} ${styles["url"]}`}>
                <Link to="/product">
                Product</Link>
              </span>
              <span className={`${styles["font"]} ${styles["url"]}`}>
                Your chart
              </span>
              <span className={`${styles["font"]} ${styles["url"]}`}>
                History
              </span>
            </span>
            <span className={styles["author-button"]}>
              <Link to="login"><button className={styles["login"]}>Login</button></Link>
              <Link to="sign-up"><button className={styles["sign-in"]}>Sign In</button></Link>
            </span>
          </nav>
        </header>
        <main className={styles["main"]}>
          <section className={styles["top"]}>
            <div className={styles["background"]}>
              <div className={styles["opening"]}>
                <label className={styles["start-your-text"]} for="top">
                  Start Your Day with <br />
                  Coffee and Good Meals
                </label>
                <label className={styles["detail-top"]} for="top">
                  We provide high quality beans, good taste, and healthy
                  <br className={styles["top"]} />
                  meals made by love just for you. Start your day with us
                  <br className={styles["top"]} />
                  for a bigger smile!
                </label>
                <br />
                <button className={styles["get-started"]}>Get started</button>
              </div>
            </div>
          </section>
          <section className={styles["middle"]}>
            <span className={styles["image-top"]}>
              <img src={image} alt="" />
            </span>
            <span className={styles["side-image"]}>
              <label className={styles["we-provide-text"]} for="cof">
                We Provide Good Coffee <br className={styles["enter"]} />
                and Healthy Meals
              </label>
              <br className={styles["enter2"]} />
              <label className={styles["you-can-text"]} for="fee">
                You can explore the menu that we provide with fun and
                <br className={styles["enter"]} />
                have their own taste and make your day better.
              </label>
            </span>
            <div className={styles["checklist"]}>
              <div>
                <img src={checklist1} alt="checklist" />
                <label className={styles["middle-font"]} for="checklist">
                  High Quality Beans
                </label>
              </div>
              <div>
                <img src={checklist1} alt="checklist" />
                <label className={styles["middle-font"]} for="checklist">
                  Healthy meals, you can request the ingredients
                </label>
              </div>
              <div>
                <img src={checklist1} alt="checklist" />
                <label className={styles["middle-font"]} for="checklist">
                  Chat with our staff to get better experience for ordering
                </label>
              </div>
              <div>
                <img src={checklist1} alt="checklist" />
                <label className={styles["middle-font"]} for="checklist">
                  Free member card with a minimum purchase of IDR 200.000.
                </label>
              </div>
            </div>
            <div className={styles["here-is-text"]}>
              <label
                className={`${styles["font"]} ${styles["hyper"]}`}
                for="here"
              >
                Here is People's Favorite
              </label>
              <br className={styles["enter2"]} />
              <label className={styles["font"]} for="lets choose">
                Let's choose and have a bit taste of poeple's favorite. It might
                be yours too!
              </label>
            </div>
          </section>
          <section className={styles["product-favorite"]}>
            <div className={styles["favotite-product-center"]}>
              <span className={styles["block1"]}>
                <img className={styles["img-block"]} src={hazelnut} alt="" />
                <label
                  className={styles["name-favorite-product"]}
                  for="hazelnut latte"
                >
                  Hazelnut latte
                </label>
                <div className={styles["checklist-last"]}>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist 1">Hazelnut syrup</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist 1">Vanilla Whipped Cream</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist 1">Ice / Hot</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist 1">Sliced Banana on Top</label>
                  </div>
                </div>
                <div className={styles["price"]}>IDR 25.000</div>
                <button className={styles["buy"]}>SELECT</button>
              </span>
              <span className={styles["block2"]}>
                <img className={styles["img-block"]} src={pinky} alt="" />
                <label
                  className={styles["name-favorite-product"]}
                  for="pinky promise"
                >
                  pinky promise
                </label>
                <div className={styles["checklist-last"]}>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist2">1 Shot of Coffee</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist2">Vanilla Whipped Cream</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist2">Chocolate Biscuits</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist2">Strawberry Syrup</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist2">Sliced strawberry on Top</label>
                  </div>
                </div>
                <div className={styles["price"]}>IDR 25.000</div>
                <button className={styles["buy"]}>SELECT</button>
              </span>
              <span className={styles["block3"]}>
                <img className={styles["img-block"]} src={chiken} alt="" />
                <label
                  className={styles["name-favorite-product"]}
                  for="chiken wings"
                >
                  chiken wings
                </label>
                <div className={styles["checklist-last"]}>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist3">Wings</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist3">Drum Sticks</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist3">Mayonaise and Lemon</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist3">Hot Fried</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist3">Secret Recipe</label>
                  </div>
                  <div>
                    <img src={checklist2} alt="" />
                    <label for="checklist3">Buy 1 Get 1 only for Dine in</label>
                  </div>
                </div>
                <div className={styles["price"]}>IDR 25.000</div>
                <button className={styles["buy"]}>SELECT</button>
              </span>
            </div>
          </section>
          <section className={styles["bottom"]}>
            <div className={styles["bottom-top"]}>
              <label
                className={styles["visit-our-text"]}
                for="Visit Our Store in the Spot on the Map Below"
              >
                Visit Our Store in the <br className={styles["enter"]} />
                Spot on the Map Below
              </label>
              <br className={styles["enter2"]} />
              <label className={styles["see-our-text"]} for="See our store">
                See our store in every city on the spot and spen your good day
                there. See <br className={styles["enter"]} />
                you soon!
              </label>
            </div>
            <div className={styles["maps"]}>
              <img src={maps} alt="" />
            </div>
            <div className={styles["text-our-partner"]}>
              <label className={styles["our-partner"]} for="our">
                Our partner
              </label>
            </div>
            <div className={styles["our-partner-img"]}>
              <span className={styles["all-partner-img"]}>
                <img className={styles["img-partner"]} src={netflix} alt="" />
                <img className={styles["img-partner"]} src={reddit} alt="" />
                <img className={styles["img-partner"]} src={amazon} alt="" />
                <img className={styles["img-partner"]} src={discord} alt="" />
                <img className={styles["img-partner"]} src={spotify} alt="" />
              </span>
            </div>
          </section>
          <section className={styles["last-content"]}>
            <div className={styles["loved-by-text"]}>
              <label
                className={styles["loved-by"]}
                for="Loved by Thousands of Happy Customer"
              >
                Loved by Thousands of <br className={styles["enter"]} />
                Happy Customer
              </label>
              <br className={styles["enter2"]} />
              <label className={styles["these-are"]} for="">
                These are the stories of our customers who have visited us with
                great <br className={styles["enter"]} />
                pleasure.
              </label>
            </div>
            <div className={styles["comment"]}>
              <span className={styles["square1"]}>
                <div className={styles["profile-comment"]}>
                  <img className={styles["img-comment"]} src={profile} alt="" />
                  <label for="name">veronica</label>
                </div>
                <div className={styles["comment-section"]}>
                  "wow aku sangat bahagia karena telah meminum kopi ini dan bisa
                  bertmbah lega <br />
                  seketika aku merasa gembira sekali"
                </div>
              </span>
              <span className={styles["square2"]}>
                <div className={styles["profile-comment"]}>
                  <img className={styles["img-comment"]} src={profile} alt="" />
                  <label for="name">veronica</label>
                </div>
                <div className={styles["comment-section"]}>
                  "wow aku sangat bahagia karena telah meminum kopi ini dan bisa
                  bertmbah lega <br />
                  seketika aku merasa gembira sekali"
                </div>
              </span>
              <span className={styles["square3"]}>
                <div className={styles["profile-comment"]}>
                  <img className={styles["img-comment"]} src={profile} alt="" />
                  <label for="name">veronica</label>
                </div>
                <div className={styles["comment-section"]}>
                  "wow aku sangat bahagia karena telah meminum kopi ini dan bisa
                  bertmbah lega <br />
                  seketika aku merasa gembira sekali"
                </div>
              </span>
            </div>
            <div className={styles["button-cursor"]}>
              <button className={styles["previous"]}></button>
              <img className={styles["img-previous"]} src={prev} alt="" />
              <button className={styles["next"]}></button>
              <img className={styles["img-next"]} src={next} alt="" />
            </div>
            <div className={styles["button3"]}>
              <button className={styles["click"]}></button>
              <button className={styles["no-click"]}></button>
              <button className={styles["no-click"]}></button>
            </div>
          </section>
        </main>
        <article className={styles["box1"]}>
          <span className={styles["box1-1"]}>
            <span className={styles["img-loc"]}>
              <button className={styles["button-loc"]}></button>{" "}
              <img
                className={styles["center-img"]}
                src="./assets/human.png"
                alt=""
              />
            </span>
            <label className={styles["upto"]} for="">
              90+
            </label>
            <div className={styles["stores"]}>Staff'</div>
          </span>
          <span className={styles["box1-2"]}>
            <span className={styles["img-loc"]}>
              <button className={styles["button-loc"]}></button>{" "}
              <img
                className={styles["center-img"]}
                src="./assets/location.png"
                alt=""
              />
            </span>
            <label className={styles["upto"]} for="">
              30+
            </label>
            <div className={styles["stores"]}>Stores</div>
          </span>
          <span className={styles["box1-3"]}>
            <span className={styles["img-loc"]}>
              <button className={styles["button-loc"]}></button>{" "}
              <img
                className={styles["center-love"]}
                src="./assets/love.png"
                alt=""
              />
            </span>
            <label className={styles["upto"]} for="">
              800+
            </label>
            <div className={styles["stores"]}>Customers</div>
          </span>
        </article>
        <footer className={styles["footer"]}>
          <section className={styles["checkpromo"]}>
            <span className={styles["checkpromo-text"]}>
              <label className={styles["promo-text-1"]} for="">
                Check our promo <br /> today!
              </label>
              <br />
              <label className={styles["promo-text-2"]} for="">
                Let's see the deals and pick yours!
              </label>
            </span>
            <button className={styles["see-promo"]}>See Promo</button>
          </section>
          <section className={styles["footer-left"]}>
            <div className={styles["img-footer"]}>
              <img src={coffee} alt="coffee" />
              <label className={styles["font"]} for="image">
                Coffee Shop
              </label>
            </div>
            <div className={styles["detail-footer"]}>
              <label className={styles["font"]} for="detail-footer">
                Coffee Shop is a store that sells some good <br />
                meals, and especially coffee. We provide <br />
                high quality beans
              </label>
            </div>
            <div className={styles["btn-footer"]}>
              <button className={styles["instagram"]}></button>
              <button className={styles["twitter"]}></button>
              <button className={styles["facebook"]}></button>
            </div>
          </section>
          <section className={styles["footer-right"]}>
            <div className={styles["footer-product"]}>
              <label
                className={`${styles["font"]} ${styles["font-footer-up"]}`}
                for="footer-product"
              >
                Product
              </label>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Download
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Pricing
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Location
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Countries
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Blog
              </div>
            </div>
            <div className={styles["footer-engage"]}>
              <label
                className={`${styles["font"]} ${styles["font-footer-up"]}`}
                for="engage"
              >
                Engage
              </label>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Coffee shop ?
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                FAQ
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                About Us
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Privacy Policy
              </div>
              <br />
              <div className={`${styles["font"]} ${styles["footer-url"]}`}>
                Terms of Service
              </div>
              <br />
            </div>
          </section>
        </footer>
      </>
    );
  }
}

export default Home;
