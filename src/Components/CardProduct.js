import React from 'react'
import { useNavigate } from "react-router-dom";
import withParams from "../helpers/WithRouteParams";

// import css
import styles from "../styles/CardProduct.module.css"


// import image_product from "../asset/product-7.png"


function Card_Product(props) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                navigate(`/product-detail/${props.id}`);
            }}

            className={`col-md-2 p-4 position-relative text-wrap ${styles["content-product"]}`}>
            <img className={styles["list-product-image"]} src={props.image_product} alt="image_product" width="50px" height="50px" />
            {/* <div className={styles["label-promo"]}>
                <p>{props.discount}<span>%</span></p>
            </div> */}
            <p className={styles.title}>{props.product_name}</p>
            <p className={styles.price}>{props.size}</p>
            <p className={styles.price}>{props.price}</p>
        </div>
    )
}
export default withParams(Card_Product)
