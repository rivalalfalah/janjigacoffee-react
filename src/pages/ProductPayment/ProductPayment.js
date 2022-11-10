import React, { Component } from 'react';
import Navbar from "../../Components/Navbar"
import styles from "./ProductPayment.module.css"

class ProductPayment extends Component {
  render() {
    return (
      <>
      <Navbar />
      <main className={styles["main"]}>
      <section className={styles["left-content"]}>
        <div className={styles["checkout-text"]}>Checkout your item now!</div>
        <div className={styles["checkout-box"]}>
          <label className={styles["order-summary"]}>Order Sumarry</label>
          <div className={styles["detail-product"]}>
            <div className={styles["product-1"]}>
              <span><img className={styles["img-product"]} src="./assets/hazelnut-latte-delivery.png" alt="" /></span>
              <span className={styles["detail-product-text"]}>
                <div className={styles["name-product"]}>hazelnut latte</div>
                <div className={styles["total-product"]}>2X</div>
                <div className={styles["size-product"]}>Reguler</div>
              </span>
              <span className={styles["total-price"]}>IDR 40.000</span>
            </div>
            <div className={["product-2"]}>
              <span><img className={styles["img-product"]} src="./assets/chicken-fire.png" alt="" /></span>
              <span className={styles["detail-product-text"]}>
                <div className={styles["name-product"]}>hazelnut latte</div>
                <div className={styles["total-product"]}>2X</div>
                <div className="size-product">Reguler</div>
              </span>
              <span className="total-price">IDR 40.000</span>
            </div>
          </div>
          <span className="detail-text">
            <div className="text-detail-1">
                <span>SUBTOTAL</span>
                <span>IDR 100.000</span>
            </div>
            <div className="text-detail">
                <span>TAX & FEES</span>
                <span>IDR 20.000</span>
            </div>
            <div className="text-detail">
                <span>SHIPPING</span>
                <span>IDR 10.000</span>
            </div>
          </span>
          <div className="total">
            <span>TOTAL</span>
            <span>IDR 130.000</span>
          </div>
          </div>
        </section>
      <section className="right-content">
        <div className="address-detail">
            <span className="adrress-font">Address details</span>
            <span className="edit">edit</span>
        </div>
        <div className="right-box1">
            <div className="delivery-to">Delivery to Iskandar Street</div>
            <div className="address">Km 5 refinery road oppsite re
                public road, effurun, Jakarta</div>
            <div className="phone">+62 81348287878</div>
        </div>
        <div className="payment-text">Payment method</div>
        <div className="right-box2">
            <div className="card">
                <span className="radio"><input name="delivery-method" type="radio" /></span>
                <span className="image-delivery-card"><img src="./assets/bank.png" alt="" /></span>
                <span className="text-delivery-btn">Card</span>
            </div>
            <div className="bank">
                <span className="radio"><input name="delivery-method" type="radio" /></span>
                <span className="image-delivery-bank"><img src="./assets/card.png" alt="" /></span>
                <span className="text-delivery-btn">Bank account</span>
            </div>
            <div className="cod">
                <span className="radio"><input name="delivery-method" type="radio" /></span>
                <span className="image-delivery-cod"><img src="./assets/cod.png" alt="" /></span>
                <span className="text-delivery-btn">Cash on delivery</span>
            </div>
           
        </div>
        <div className="submit-btn">
            <button className="confirm">Confirm and pay</button>
        </div>
      </section>
    </main>
      </>
    )
  }
}

export default ProductPayment