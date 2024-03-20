import { Link } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import Advertisement from "./Advertisement";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Catalog = ({ products, setProducts }) => {
  const sortProducts = (size) => {
    const sorted = [...products].sort((a, b) => {
      return a.size[size] - b.size[size];
    });
    setProducts(sorted);
  };

  return (
    <>
      <Header />
      <div class="top-head center">
        <h2 class="top-head__heading">NEW ARRIVALS</h2>
        <nav class="braedcrumbs">
          <Link href="index.html" class="breadcrumbs__link">
            HOME
          </Link>
          <button class="breadcrumbs__link">
            MENU
          </button>
          <button class="breadcrumbs__link">
            NEW ARRIVALS
          </button>
        </nav>
      </div>
      <div class="filter-sort center">
        <details class="filter">
          <summary class="filter__summary">
            {" "}
            <span class="filter__heading">FILTER</span>
            <svg
              class="filter__img"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                fill="black"
              />
            </svg>
          </summary>
          <div class="filter__content">
            <details class="filter__item">
              <summary class="filter__head">CATEGORY</summary>
              <div class="filter__link-box">
                <button class="filter__link">
                  Accessories
                </button>
                <button class="filter__link">
                  Bags
                </button>
                <button class="filter__link">
                  Denim
                </button>
                <button class="filter__link">
                  Hoodies & Sweatshirts
                </button>
                <button class="filter__link">
                  Jackets & Coats
                </button>
                <button class="filter__link">
                  Polos
                </button>
                <button class="filter__link">
                  Shirts
                </button>
                <button class="filter__link">
                  Shoes
                </button>
                <button class="filter__link">
                  Sweaters & Knits
                </button>
                <button class="filter__link">
                  T-Shirts
                </button>
                <button class="filter__link">
                  Tanks
                </button>
              </div>
            </details>
            <details class="filter__item">
              <summary class="filter__head">BRAND</summary>
              <div class="filter__link-box">
                <button class="filter__link">
                  Accessories
                </button>
                <button class="filter__link">
                  Bags
                </button>
                <button class="filter__link">
                  Denim
                </button>
                <button class="filter__link">
                  Hoodies & Sweatshirts
                </button>
                <button class="filter__link">
                  Jackets & Coats
                </button>
                <button class="filter__link">
                  Polos
                </button>
                <button class="filter__link">
                  Shirts
                </button>
                <button class="filter__link">
                  Shoes
                </button>
                <button class="filter__link">
                  Sweaters & Knits
                </button>
                <button class="filter__link">
                  T-Shirts
                </button>
                <button class="filter__link">
                  Tanks
                </button>
              </div>
            </details>
            <details class="filter__item">
              <summary class="filter__head">DESIGNER</summary>
              <div class="filter__link-box">
                <button class="filter__link">
                  Accessories
                </button>
                <button class="filter__link">
                  Bags
                </button>
                <button class="filter__link">
                  Denim
                </button>
                <button class="filter__link">
                  Hoodies & Sweatshirts
                </button>
                <button class="filter__link">
                  Jackets & Coats
                </button>
                <button class="filter__link">
                  Polos
                </button>
                <button class="filter__link">
                  Shirts
                </button>
                <button class="filter__link">
                  Shoes
                </button>
                <button class="filter__link">
                  Sweaters & Knits
                </button>
                <button class="filter__link">
                  T-Shirts
                </button>
                <button class="filter__link">
                  Tanks
                </button>
              </div>
            </details>
          </div>
        </details>
        <div class="sort">
          <details class="sort__details">
            <summary class="sort__summary">
              <span class="sort__heading">TRENDING NOW</span>{" "}
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>
          <details class="sort__details">
            <summary class="sort__summary">
              <span class="sort__heading">SIZE</span>{" "}
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div class="sort__box">
              <div class="sort__check">
                <input
                  id="sort__check1"
                  type="checkbox"
                  onClick={() => sortProducts("XS")}
                />
                <label for="sort__check1">XS</label>
              </div>
              <div class="sort__check">
                <input
                  id="sort__check2"
                  type="checkbox"
                  onClick={() => sortProducts("S")}
                />
                <label for="sort__check2">S</label>
              </div>
              <div class="sort__check">
                <input
                  id="sort__check3"
                  type="checkbox"
                  onClick={() => sortProducts("M")}
                />
                <label for="sort__check3">M</label>
              </div>
              <div class="sort__check">
                <input
                  id="sort__check4"
                  type="checkbox"
                  onClick={() => sortProducts("L")}
                />
                <label for="sort__check4">L</label>
              </div>
            </div>
          </details>
          <details class="sort__details">
            <summary class="sort__summary">
              <span class="sort__heading">PRICE</span>{" "}
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>
        </div>
      </div>
      <Product />
      <section class="vector center">
        <div class="vector__pagination">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <Link class="page-link">
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </li>
              <li class="page-item">
                <button class="page-link" >
                  1
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" >
                  2
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" >
                  3
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" >
                  4
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" >
                  5
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" >
                  6
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" >
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Advertisement />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Catalog;
