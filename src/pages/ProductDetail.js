import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Product-detail.module.css"
import coffee from "../assets/images/coffee-3.png"
 class ProductDetail extends Component {
  render() {
    return (
      <><header className={styles["header"]}>
      <section className={styles["header-left"]}>
        <span className={styles["tittle-web"]}>
          <img
            className={`${styles["coffee-img"]} ${styles["header-coffee"]} `}
            src={coffee}
            alt="coffee"
          />
          <label className={`${styles["coffee-shop"]} ${styles["text-coffee"]} `} for="tittle"
            >Coffee Shop</label>
        </span>
      </section>
      <section className={styles["header-middle"]}>
        <nav className={styles["nav-header"]}>
          <Link to="/"><span className={styles["home"]}>Home</span></Link>
          <Link to="/product"><span className={styles["product"]}>Product</span></Link>
          <span className={styles["your-cart"]}>Your cart</span>
          <span className={styles["history"]}>History</span>
        </nav>
      </section>
      <section className={styles["header-right"]}></section>
    </header>
    <main className={styles["main"]}>
      <section className={styles["box-left"]}>
        <section className={styles["page-tittle"]}>
          <label className={styles["page-tittle-1"]}>Favorite & Promo</label>
          <label className={styles["page-tittle-2"]}>&gt; Cold Brew</label>
        </section>
        <section className={styles["img-product"]}>
          <img className={styles["product-profile"]} src="./assets/product-img.png" alt="" />
        </section>
        <section className={styles["box-delivery-time"]}>
          <label className={styles["text-delivery-time"]} for="delivery and time"
            >Delivery and Time</label
          >
          <section className={styles["delivery-btn"]}>
            <button className={styles["dine-in-btn"]}>Dine in</button>
            <button className={styles["door-delivery-btn"]}>Door deliver</button>
            <button className={styles["pick-up-btn"]}>Pick up</button>
          </section>
          <section className={styles["now"]}>
            <label className={styles["now-text"]}>Now</label>
            <button className={styles["yes"]}>Yes</button>
            <button className={styles["no"]}>No</button>
          </section>
          <section className={styles["set-time"]}>
            <label className={styles["set-time-text"]}>Set time</label>
            <input
              className={styles["set-time-input"]}
              type="text"
              placeholder="Enter time for reservation"
            />
          </section>
        </section>
      </section>
      <section className={styles["box-right"]}>
        <label className={styles["cold-brew"]}>COLD BREW</label>
        <div className={styles["btn-cart"]}>
          <button className={styles["add-cart-btn"]}>Add to Cart</button>
          <button className={styles["staff-btn"]}>Ask a Staff</button>
        </div>
        <span className={styles["detail-product"]}>
          <label className={styles["detail-1"]}
            >Cold brewing is a method of brewing that</label
          >
          <label className={styles["detail-2"]}>combines ground coffee and cool water</label>
          <label className={styles["detail-3"]}
            >and uses time instead of heat to extract the</label
          >
          <label className={styles["detail-4"]}
            >flavor. It is brewed in small batches and</label
          >
          <label className={styles["detail-5"]}>steeped for as long as 48 hours.</label>
        </span>
        <span className={styles["detail-delivery"]}>
          <label className={styles["detail-deliv-1"]}>Delivery only on</label>
          <label className={styles["detail-deliv-2"]}>Monday to </label>
          <label className={styles["detail-deliv-3"]}>friday</label>
          <label className={styles["detail-deliv-4"]}>at</label>
          <label className={styles["detail-deliv-5"]}>1 - 7 pm</label>
        </span>
        <div className={styles["price-total"]}>
          <span className={styles["total"]}>
            <span className={styles["minus"]}><label className={styles["minus-text"]}>-</label></span>
            <span className={styles["number"]}><label className={styles["number-text"]}>2</label></span>
            <span className={styles["plus"]}><label className={styles["plus-text"]}>+</label></span>
          </span>
          <span className={styles["price"]}>IDR 30.000</span>
        </div>
      </section>
    </main>
    <footer className={styles["footer"]}>
      <span className={styles["choose-size"]}>
        <span className={styles["choose-size-text"]}> Choose a size </span>
        <div className={styles["size-btn"]}>
          <div className={styles["r"]}>
            <div className={styles["round1"]}>R</div>
          </div>
          <div className={styles["l"]}>
            <div className={styles["round1"]}>L</div>
          </div>
          <div className={styles["xl"]}>
            <div className={styles["round2"]}>XL</div>
          </div>
        </div>
      </span>
      <span className={styles["check-out"]}></span>
      <span className={styles["left-footer"]}>
        <div className={styles["cf"]}>
          <img className={styles["img-little-web"]} src={coffee} alt="" />
          <label className={`${styles["text-coffee"]} ${styles["coffee-shop-footer"]} `}>Coffee shop</label>
        </div>
        <div className={styles["cs"]}>
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </div>
        <div className={styles["btn-footer"]}>
          <span
            ><img className={styles["facebook-image"]} src="./assets/facebook.png" alt=""
          /></span>
          <span
            ><img className={styles["twitter-image"]} src="./assets/twitter.png" alt=""
          /></span>
          <span
            ><img className={styles["instagram-image"]} src="./assets/instagram.png" alt=""
          /></span>
        </div>
        <div className={styles["copyright"]}>©2020CoffeeStore</div>
      </span>
      <span className={styles["right-footer"]}>
        <span className={styles["product-footer"]}>
          <div className={styles["engage-text"]}>Product</div>
          <div className={styles["url-footer"]}>Download</div>
          <div className={styles["url-footer"]}>Pricing</div>
          <div className={styles["url-footer"]}>Locations</div>
          <div className={styles["url-footer"]}>Countries</div>
          <div className={styles["url-footer"]}>Blog</div>
        </span>
        <span className={styles["engage"]}>
          <div className={styles["engage-text"]}>Engage</div>
          <div className={styles["url-footer"]}>Coffe Shop ?</div>
          <div className={styles["url-footer"]}>FAQ</div>
          <div className={styles["url-footer"]}>About Us</div>
          <div className={styles["url-footer"]}>Privacy Policy</div>
          <div className={styles["url-footer"]}>Terms of Service</div>
        </span>
      </span>
    </footer></>
    )
  }
}
export default ProductDetail