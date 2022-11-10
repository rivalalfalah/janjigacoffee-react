import React, { Component } from "react";
import styles from "./Product.module.css";

import Navbar from "../../Components/Navbar"

import CardProduct from "../../Components/CardProduct";
import axios from "axios";
class Product extends Component {
  // State awal
  state = {
    product: [],
    favorite: `${process.env.REACT_APP_BACKEND_HOST}api/products/?sorting=favorit&page=1&limit=12`,
    coffee: `${process.env.REACT_APP_BACKEND_HOST}api/products/?category=1&page=1&limit=12`,
    non_coffee: `${process.env.REACT_APP_BACKEND_HOST}api/products/?category=2&page=1&limit=12`,
    food: `${process.env.REACT_APP_BACKEND_HOST}api/products/?category=3&page=1&limit=12`,
    addons: `${process.env.REACT_APP_BACKEND_HOST}api/products/?category=4&page=1&limit=12`,
    searchParams: {},
  };

  // Kondisi ketika di refresh
  componentDidMount() {
    axios
      .get(this.state.favorite)
      .then((res) => {
        console.log(res.data)
        this.setState({ product: res.data.result });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {}

  costing = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  };

  Favorite = () => {
    axios
      .get(this.state.favorite)
      .then((res) => this.setState({ product: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  Coffee = () => {
    axios
      .get(this.state.coffee)
      .then((res) => this.setState({ product: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  NonCoffee = () => {
    axios
      .get(this.state.non_coffee)
      .then((res) => this.setState({ product: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  Food = () => {
    axios
      .get(this.state.food)
      .then((res) => this.setState({ product: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  AddOn = () => {
    axios
      .get(this.state.addons)
      .then((res) => this.setState({ product: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  render() {
    console.log(this.state.product)
    return (
      <>
        <Navbar />
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
              <span
                className={`${["font-nav"]} ${["favorite-product-url"]} `}
                onClick={() => {
                  this.Favorite();
                  this.setState(
                    {
                      searchParams: { sorting: "favorite" },
                    },
                    () => {
                      this.props.setSearchParams(this.state.searchParams);
                    }
                  );
                }}
              >
                Favorite product
              </span>
              <span
                className={styles["font-nav"]}
                onClick={() => {
                  this.Coffee();
                  this.setState(
                    {
                      searchParams: { sorting: "coffee" },
                    },
                    () => {
                      this.props.setSearchParams(this.state.searchParams);
                    }
                  );
                }}
              >
                Coffee
              </span>
              <span
                className={styles["font-nav"]}
                onClick={() => {
                  this.NonCoffee();
                  this.setState(
                    {
                      searchParams: { sorting: "non coffee" },
                    },
                    () => {
                      this.props.setSearchParams(this.state.searchParams);
                    }
                  );
                }}
              >
                Non Coffee
              </span>
              <span
                className={styles["font-nav"]}
                onClick={() => {
                  this.Food();
                  this.setState(
                    {
                      searchParams: { sorting: "food" },
                    },
                    () => {
                      this.props.setSearchParams(this.state.searchParams);
                    }
                  );
                }}
              >
                Foods
              </span>
              <span
                className={styles["font-nav"]}
                onClick={() => {
                  this.AddOn();
                  this.setState(
                    {
                      searchParams: { sorting: "addon" },
                    },
                    () => {
                      this.props.setSearchParams(this.state.searchParams);
                    }
                  );
                }}
              >
                Add ons
              </span>
            </div>
          </nav>
          <section className={styles["product-box"]}>
            <div
              className={`row ${styles["list-content"]} d-flex justify-content-start`}
            >
              {this.state.product.map((e, key) => (
                <CardProduct
                  // key={`${key}`}
                  id={e.id}
                  params={e.id}
                  product_name={e.name}
                  size={e.size}
                  price={this.costing(e.price)}
                  image_product={e.image}
                />
              ))}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Product;
