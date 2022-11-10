import React, { Component } from 'react'
import "./Home2.css"
import "bootstrap/dist/css/bootstrap.css"

import Navbar from "../../Components/Navbar"

import checklist1 from "../../assets/images/checklist.png";
import image from "../../assets/images/bgh.png";
import checklist2 from "../../assets/images/checklist2.png";
import maps from "../../assets/images/maps.png";
import hazelnut from "../../assets/images/hazelnut-latte.png";
import pinky from "../../assets/images/pinky-promise.png";
import chiken from "../../assets/images/chiken-wings.png";
import profile from "../../assets/images/profil.jpg";
import amazon from "../../assets/images/img_amazon.png";
import discord from "../../assets/images/img_discord.png";
import netflix from "../../assets/images/img_netflix.png";
import reddit from "../../assets/images/img_reddit.png";
import spotify from "../../assets/images/img_spotify.png";
import next from "../../assets/images/next.png";
import prev from "../../assets/images/previous.png";
import person from "../../assets/images/human.png"
import search from "../../assets/images/search.png"
import love from "../../assets/images/love.png"
import star from "../../assets/images/star.png"
import location from "../../assets/images/location.png"
 class Home2 extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <div className="row custom-banner">
                        <div className="col custom-banner-left">
                            <h2>Start Your Day with Coffee and Good Meals</h2>
                            <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your
                                day with us for a bigger smile!</p>
                            <div className="custom-get-started-button">Get Started</div>
                            <div className="custom-additional-bg"></div>
                        </div>
                        <div className="col custom-banner-right">
                            <div className="custom-search">
                                <div className="custom-search-img"><img src={search} alt="search" /></div>
                                <form action="search">
                                    <input type="text" id="search" name="search" placeholder="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="custom-store-info row">
                        <div className="col row">
                            <div className="col custom-vector-container">
                                <div className="custom-vector"><img src={person} alt="person-vector" className='person-vector' /></div>
                            </div>
                            <div className="col custom-store-info-text">
                                <div className="custom-store-info-number">90+</div>
                                <div className="custom-store-info-obj">Staff</div>
                            </div>
                        </div>
                        <div className="col row custom-store-info-box">
                            <div className="col custom-vector-container">
                                <div className="custom-vector"><img src={location} alt="location-vector" className='loc-vector' /></div>
                            </div>
                            <div className="col custom-store-info-text">
                                <div className="custom-store-info-number">30+</div>
                                <div className="custom-store-info-obj">Stores</div>
                            </div>
                        </div>
                        <div className="col row">
                            <div className="col custom-vector-container">
                                <div className="custom-vector"><img src={love} alt="love-vector" className='love-vector' /></div>
                            </div>
                            <div className="col custom-store-info-text">
                                <div className="custom-store-info-number">800+</div>
                                <div className="custom-store-info-obj">Customers</div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-teamwork row">
                        <div className="custom-teamwork-left col"><img
                            src={image}
                            alt="teamwork" className='teamwork-pict' /></div>
                        <div className="custom-teamwork-right col">
                            <h3 className="custom-teamwork-header">We Provide Good Coffee and Healthy Meals</h3>
                            <p className="custom-teamwork-paragraph">You can explore the menu that we provide with fun and have their
                                own taste and make your day better.</p>
                            <p className="custom-teamwork-list"><img src={checklist1} alt="check" /> High quality beans
                            </p>
                            <p className="custom-teamwork-list"><img src={checklist1} alt="check" /> Healthy meals, you
                                can request the ingredients</p>
                            <p className="custom-teamwork-list"><img src={checklist1} alt="check" /> Chat with our
                                staff to get better experience for ordering</p>
                            <p className="custom-teamwork-list"><img src={checklist1} alt="check" /> Free member card
                                with a minimum purchase of IDR 200.000.</p>
                        </div>
                    </div>
                    <div className="custom-favorite">
                        <div className="custom-favorite-title">Here is People's Favorite</div>
                        <div className="custom-favorite-paragraph">Let's choose and have a bit taste of poeple's favorite. It might be
                            yours too!</div>
                        <div className="custom-favorite-menu row">
                            <div className="custom-favorite-menu-card col">
                                <div className="custom-favorite-picture"><img
                                    src={hazelnut}
                                    alt="hazelnut-latte" className="hazelnut-latte-pict" /></div>
                                <div className="custom-favorite-name">Hazelnut Latte</div>
                                <div className="custom-favorite-list">
                                    <p><img src={checklist2} alt="simple-check" />Hazelnut Syrup</p>
                                    <p><img src={checklist2} alt="simple-check" />Vanilla Whipped Cream</p>
                                    <p><img src={checklist2} alt="simple-check" />Ice / Hot</p>
                                    <p><img src={checklist2} alt="simple-check" />Sliced Banana on Top</p>
                                </div>
                                <div className="custom-favorite-price">IDR 25.000</div>
                                <div className="custom-favorite-button">Order Now</div>
                            </div>
                            <div className="custom-favorite-menu-card col">
                                <div className="custom-favorite-picture"><img
                                    src={pinky}
                                    alt="pinky-promise" className="pinky-promise-pict" /></div>
                                <div className="custom-favorite-name">Pinky Promise</div>
                                <div className="custom-favorite-list">
                                    <p><img src={checklist2} alt="simple-check" /> 1 Shot of Coffee</p>
                                    <p><img src={checklist2} alt="simple-check" /> Vanilla Whipped Cream</p>
                                    <p><img src={checklist2} alt="simple-check" /> Chocolate Biscuits</p>
                                    <p><img src={checklist2} alt="simple-check" /> Strawberry Syrup</p>
                                    <p><img src={checklist2} alt="simple-check" /> Sliced strawberry on Top
                                    </p>
                                </div>
                                <div className="custom-favorite-price">IDR 30.000</div>
                                <div className="custom-favorite-button">Select</div>
                            </div>
                            <div className="custom-favorite-menu-card-selected col">
                                <div className="custom-favorite-picture"><img
                                    src={chiken}
                                    alt="chicken-wings" className="chicken-wings-pict" /></div>
                                <div className="custom-favorite-name">Chicken Wings</div>
                                <div className="custom-favorite-list">
                                    <p><img src={checklist2} alt="" /> Wings</p>
                                    <p><img src={checklist2} alt="" /> Drum Sticks</p>
                                    <p><img src={checklist2} alt="" /> Mayonaise and Lemon</p>
                                    <p><img src={checklist2} alt="" /> Hot Fried</p>
                                    <p><img src={checklist2} alt="" /> Secret Recipe</p>
                                    <p><img src={checklist2} alt="" /> Buy 1 Get 1 only for Dine in</p>
                                </div>
                                <div className="custom-favorite-price">IDR 40.000</div>
                                <div className="custom-favorite-button-selected">Select</div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-store-loc">
                        <div className="custom-store-loc-title">Visit Our Store in the Spot on the Map Below</div>
                        <div className="custom-store-loc-paragraph">See our store in every city on the spot and spen your good day
                            there. See you soon!</div>
                        <div className="custom-store-map"><img src={maps} alt="map" /></div>
                    </div>
                    <div className="custom-main-title">Our Partner</div>
                    <div className="row custom-partner-logo">
                        <div className="col"><img
                            src={netflix}
                            alt="netflix" className="custom-partner-logo-netflix" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src={reddit}
                            alt="reddit" className="custom-partner-logo-reddit" /></div>
                        <div className="col"><img
                            src={amazon}
                            alt="amazon" className="custom-partner-logo-amazon" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src={discord}
                            alt="discord" className="custom-partner-logo-discord" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src={spotify}
                            alt="spotify" className="custom-partner-logo-spotify" /></div>
                    </div>
                    <div className="custom-testimony">
                        <div className="custom-testimony-title">Loved by Thousands of Happy Customer</div>
                        <div className="custom-testimony-paragraph">These are the stories of our customers who have visited us with
                            great pleasure.</div>

                    </div>
                    <div className="row custom-review">
                        <div className="col custom-review-card-selected">
                            <div className="row custom-review-identity">
                                <div className="col-2 custom-review-profpict"><img
                                    src={profile}
                                    alt="viezh-robert" className="custom-review-profpict-viezh" /></div>
                                <div className="col-7">
                                    <div className="custom-review-name">Viezh Robert</div>
                                    <div className="custom-review-from">Warsaw, Poland</div>
                                </div>
                                <div className="col-3 custom-review-rating">4.5 <img src={star} alt="" /></div>
                            </div>
                            <div className="custom-review-testimony">"Wow... I am very happy to spend my whole day here. the Wi-fi is
                                good, and the coffee and meals tho. I like it here!! Very recommended!</div>
                        </div>
                        <div className="col custom-review-card">
                            <div className="row custom-review-identity">
                                <div className="col-2 custom-review-profpict"><img
                                    src={profile}
                                    alt="yessica" className="custom-review-profpict-viezh" /></div>
                                <div className="col-7">
                                    <div className="custom-review-name">Yessica Christy</div>
                                    <div className="custom-review-from">Shanxi, China</div>
                                </div>
                                <div className="col-3 custom-review-rating">4.5 <img src={star} alt="" /></div>
                            </div>
                            <div className="custom-review-testimony">"I like it because I like to travel far and still can make my day
                                better just by drinking their Hazelnut Latte</div>
                        </div>
                        <div className="col custom-review-card">
                            <div className="row custom-review-identity">
                                <div className="col-2 custom-review-profpict"><img
                                    src={profile}
                                    alt="yessica" className="custom-review-profpict-viezh" /></div>
                                <div className="col-7">
                                    <div className="custom-review-name">Kim Young Jou</div>
                                    <div className="custom-review-from">Seoul, South Korea</div>
                                </div>
                                <div className="col-3 custom-review-rating">4.5 <img src={star} alt="" /></div>
                            </div>
                            <div className="custom-review-testimony">"This is very unusual for my taste, I haven't liked coffee before
                                but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</div>
                        </div>
                        <div className="row">
                            <div className="col-2 row">
                            </div>
                            <div className="col"></div>
                            <div className="col-1">
                                <div className="custom-leftarrow">
                                    <img src={prev} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="custom-rightarrow">
                                    <img src={next} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-promo row">
                        <div className="col custom-promo-title">
                            <h3 className="custom-promo-title-head">Check our promo today!</h3>
                            <p className="custom-promo-title-paragraph">Let's see the deals and pick yours!</p>
                        </div>
                        <div className="col"></div>
                        <div className="col custom-see-promo-button-container">
                            <div className="custom-see-promo-button">See Promo</div>
                        </div>
                    </div>
                </main>
            </div>

        )
    }
}



export default Home2