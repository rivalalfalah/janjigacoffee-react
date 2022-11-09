import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from"./NewProduct.module.css";
import "bootstrap/dist/css/bootstrap.css";
import camera from "../../assets/images/profil.jpg";

export default class newProduct extends Component {
  render() {
    return (
      <>
        <div className="container-fluid border-top mb-5">
          {/* breadcrumb */}
          <div className="container">
            <div className="row py-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className={`breadcrumb-item ${styles["step-one"]}`}>
                    <Link to="/handlingproduct">Product</Link>
                  </li>
                  <li className={`breadcrumb-item ${styles["step-two"]}`}>
                    Add new product{" "}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* breadcrumb */}

          {/* Left Content */}
          <div className="container">
            <div className="row gap-2 d-flex justify-content-between">
              <section className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column align-items-center ">
                <div className="pt-5">
                  <img
                    className="rounded-circle"
                    src={camera}
                    alt="img_product"
                    width="250px"
                    height="250px"
                  ></img>
                </div>
                <button
                  className={`${styles["change-profile"]} mt-5 rounded-4.5`}>
                  Take a picture
                </button>
                <div
                  className={`${styles["profile-image"]} text-center rounded-4.5 mt-3 mb-5`}
                >
                  <label for="img-profile">Choose From gallery</label>
                  <input type="file" name="" id="img-profile" />
                </div>
                <div className={`${styles[`delivery-hour`]}`}>
                  <p>Delivery Hour :</p>
                </div>
                <div className="mt-3 w-100 d-flex align-item-center justify-content-center">
                  <select
                    className={` ${styles["dropdown-hour"]} ps-3 opacity-50`}
                    disabled
                  >
                    <option selected>Select start hour</option>
                    <option value="1">1 hour</option>
                    <option value="2">2 hour</option>
                    <option value="3">3 hour</option>
                    <option value="4">4 hour</option>
                    <option value="5">5 hour</option>
                  </select>
                </div>
                <div className="mt-3 w-100 d-flex align-item-center justify-content-center">
                  <select
                    className={`${styles["dropdown-hour"]} mb-3 ps-3 opacity-50`}
                    disabled
                  >
                    <option selected>Select end hour</option>
                    <option value="1">1 hour</option>
                    <option value="2">2 hour</option>
                    <option value="3">3 hour</option>
                    <option value="4">4 hour</option>
                    <option value="5">5 hour</option>
                  </select>
                </div>
                <div className={`${styles[`delivery-hour`]} mt-5`}>
                  <p>Input stock :</p>
                </div>
                <div className="mt-3 w-100 d-flex align-item-center justify-content-center mb-5">
                  <select className={`${styles["dropdown-hour"]} ps-3 `}>
                    <option selected>Input stock</option>
                    <option value="10">10 stock</option>
                    <option value="15">15 stock</option>
                    <option value="20">20 stock</option>
                    <option value="25">25 stock</option>
                    <option value="30">30 stock</option>
                  </select>
                </div>
              </section>

              <section className="col-lg-6 col-md-12 col-sm-12 pt-5 ">
                <div
                  className={`${styles["data-form"]} d-flex flex-column w-100`}
                >
                  <label for="">Name :</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    // value={this.state.name}
                    // onChange={this.valueNameproduct}
                    placeholder="product name"
                  />
                  <label for="">Price :</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    // value={this.state.price}
                    // onChange={this.valuePrice}
                    placeholder="price"
                  />
                  <label for="">Description :</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    // value={this.state.description}
                    // onChange={this.valueDescription}
                    placeholder="Describe product"
                  />
                </div>
                <div className={`${styles[`input-size`]} mt-5`}>
                  <p className={styles["input-product-size"]}>
                    Input product size :
                  </p>
                  <p className={styles["input-product-desc"]}>
                    Click size you want to use for this product
                  </p>
                </div>
                <div
                  className={`${styles.size} d-flex justify-content-start text-center mt-3`}
                >
                  <button className={`${styles["size-product-info"]} rounded-circle`}>R</button>
                  <button className=" rounded-circle">L</button>
                  <button className=" rounded-circle">XL</button>
                  <button className=" rounded-circle">250 gr</button>
                  <button className=" rounded-circle">500 gr</button>
                  <button className=" rounded-circle">750 gr</button>
                </div>
                <div className={`${styles[`input-size`]} mt-5`}>
                  <p className={styles["input-product-size"]}>
                    Input delivery methods :
                  </p>
                  <p className={styles["input-product-desc"]}>
                    Click methods you want to use for this product
                  </p>
                </div>
                <div
                  className={`${styles.method} d-flex justify-content-start text-center mt-3`}
                >
                  <button className=" rounded-4">Home delivery</button>
                  <button className=" rounded-4">Dine in</button>
                  <button className=" rounded-4">Take away</button>
                </div>
                <button className={`${styles["save-product"]} mt-5 rounded-5`}>
                  Save Product
                </button>
                <button
                  className={`${styles["cancel-product"]} mt-3 rounded-5`}
                >
                  Cancel
                </button>
              </section>
            </div>
          </div>
          {/* Left Content */}
        </div>
      </>
    );
  }
}
