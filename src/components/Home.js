import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Item from "./Item";
import Product from "./Product";
import Advertisement from "./Advertisement";
import Subscribe from "./Subscribe";


function Home() {
  return (
    <>
      <Header />
      <div className="top center">
        <div className="top__left">
          <img className="top__left-img" src="img/top__img.svg" alt="top" />
        </div>
        <div className="top__right">
          <div className="rectangle">
            <img src="img/Rectangle 16 copy.svg" alt="some_picture_header" />
          </div>
          <div className="topic">
            <h1 className="topic__title">THE BRAND</h1>
            <div className="topic__sub">
              <h2 className="sub__subtitle1">OF LUXERIOUS</h2>
              <h2 className="sub__subtitle2">FASHION</h2>
            </div>
          </div>
        </div>
      </div>
      <Item />
      <div class="heading">
        <h2 class="heading__sub">Fetured Items</h2>
        <p class="heading__txt">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <Product />
      <div className="link_brows center">
        <img src="img/footer__Rectangle 5.svg" alt="link_drows_picrure" />
        <div className="all__prod">
          <button  className="link__prod">
            Browse All Product
          </button>
        </div>
      </div>
      <Advertisement />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
