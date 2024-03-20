import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div class="header center">
        <div class="header__left">
          <div class="home__link">
            <a href="index.html">
              <svg
                width="44"
                height="38"
                viewBox="0 0 44 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="38" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_52_6"
                      transform="scale(0.0227273 0.0263158)"
                    />
                  </pattern>
                  <image
                    id="image0_52_6"
                    width="44"
                    height="38"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </a>
          </div>
          <div class="button_search">
            <link href="#">
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0589 17.6249C20.6705 15.8648 21.6275 13.6038 21.769 11.2215C21.9106 8.8392 21.2281 6.48075 19.8362 4.5422C18.4443 2.60365 16.4278 1.20306 14.1252 0.575643C11.8227 -0.0517774 9.37437 0.132183 7.19143 1.09663C5.0085 2.06108 3.22389 3.74727 2.1373 5.87205C1.05071 7.99682 0.728322 10.4308 1.22426 12.7652C1.72021 15.0996 3.00428 17.1922 4.86085 18.6917C6.71741 20.1912 9.0334 21.0063 11.4199 20.9999C13.6723 21.003 15.8638 20.269 17.6599 18.9099L25.4079 26.7169C25.4934 26.806 25.5958 26.8771 25.7091 26.926C25.8225 26.975 25.9444 27.0008 26.0679 27.0019C26.1916 27.0023 26.314 26.9772 26.4276 26.9282C26.5411 26.8792 26.6434 26.8072 26.7279 26.7169C26.9018 26.536 26.999 26.2949 26.999 26.0439C26.999 25.793 26.9018 25.5518 26.7279 25.3709L19.0589 17.6249ZM2.88589 10.4999C2.89873 8.81465 3.41021 7.17089 4.35586 5.77587C5.30151 4.38086 6.63899 3.29703 8.1997 2.66102C9.76042 2.02501 11.4745 1.86529 13.1258 2.202C14.7772 2.53871 16.2919 3.35678 17.479 4.55307C18.6661 5.74935 19.4725 7.27031 19.7965 8.92421C20.1204 10.5781 19.9475 12.2909 19.2995 13.8467C18.6515 15.4024 17.5574 16.7315 16.1551 17.6664C14.7529 18.6013 13.1052 19.1001 11.4199 19.0999C9.14843 19.0891 6.97409 18.1774 5.3741 16.5651C3.77412 14.9527 2.87924 12.7714 2.88589 10.4999Z"
                  fill="#E8E8E8"
                />
              </svg>
            </link>
          </div>
        </div>
        <div class="header__right">
          <div class="header__hamburger">
            <div class="menu">
              <label for="dropdown">
                <svg
                  width="32"
                  height="23"
                  viewBox="0 0 32 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"
                    fill="#E8E8E8"
                  />
                </svg>
              </label>
              <input
                type="checkbox"
                name="dropdown"
                id="dropdown"
                class="dropbox__checkbox"
              />
              <nav class="dropdown__menu">
                <h5 class="dropdown__menu__title">MENU</h5>

                <div class="catalog__block">
                  <Link href="#">
                    <h6 class="catalog__name">MAN</h6>
                  </Link>
                  <section class="catalog__list">
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Accessories
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Bags
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Denim
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        T-Shirts
                      </Link>
                    </article>
                  </section>
                </div>
                <div class="catalog__block">
                  <Link href="#">
                    <h6 class="catalog__name">WOMAN</h6>
                  </Link>
                  <section class="catalog__list">
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Accessories
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Jackets & Coats
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Polos
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        T-Shirts
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Shirts
                      </Link>
                    </article>
                  </section>
                </div>
                <div class="catalog__block">
                  <Link href="#">
                    <h6 class="catalog__name">KIDS</h6>
                  </Link>
                  <section class="catalog__list">
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Accessories
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Jackets & Coats
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Polos
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        T-Shirts
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Shirts
                      </Link>
                    </article>
                    <article class="list__item">
                      <Link class="list__link" href="#">
                        Bags
                      </Link>
                    </article>
                  </section>
                </div>
              </nav>
            </div>
          </div>
          <div class="header__personal">
            <Link href="#">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z"
                  fill="#E8E8E8"
                />
              </svg>
            </Link>
          </div>
          <div class="header__basket">
            <a href="cart.html">
              <svg
                width="32"
                height="29"
                viewBox="0 0 32 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1998 29C25.5521 28.9738 24.9404 28.6948 24.4961 28.2227C24.0518 27.7506 23.8103 27.1232 23.8234 26.475C23.8365 25.8269 24.1032 25.2097 24.5662 24.7559C25.0292 24.3022 25.6516 24.048 26.2999 24.048C26.9482 24.048 27.5706 24.3022 28.0336 24.7559C28.4966 25.2097 28.7633 25.8269 28.7764 26.475C28.7895 27.1232 28.5479 27.7506 28.1036 28.2227C27.6593 28.6948 27.0477 28.9738 26.3999 29H26.1998ZM6.75183 26.32C6.75183 25.79 6.90901 25.2718 7.20349 24.8311C7.49797 24.3904 7.91654 24.0469 8.40625 23.844C8.89596 23.6412 9.43484 23.5881 9.95471 23.6915C10.4746 23.7949 10.9521 24.0502 11.3269 24.425C11.7017 24.7998 11.957 25.2773 12.0604 25.7972C12.1638 26.317 12.1107 26.8559 11.9078 27.3456C11.705 27.8353 11.3615 28.2539 10.9208 28.5483C10.4801 28.8428 9.96194 29 9.43188 29C9.07977 29.0003 8.73102 28.9311 8.40564 28.7966C8.08026 28.662 7.7846 28.4646 7.53552 28.2158C7.28645 27.9669 7.08891 27.6713 6.9541 27.3461C6.81929 27.0208 6.74988 26.6721 6.74988 26.32H6.75183ZM10.5519 20.686C10.2924 20.6868 10.0398 20.6024 9.83301 20.4457C9.62617 20.2891 9.47648 20.0689 9.40686 19.819L4.57385 2.36401H1.18091C0.867422 2.36401 0.566761 2.23947 0.345093 2.01781C0.123425 1.79614 -0.00109863 1.49549 -0.00109863 1.18201C-0.00109863 0.868519 0.123425 0.567873 0.345093 0.346205C0.566761 0.124537 0.867422 5.81268e-06 1.18091 5.81268e-06H5.46191C5.7214 -0.00080736 5.97394 0.0837201 6.18066 0.240568C6.38739 0.397416 6.53674 0.617884 6.60583 0.868006L11.4388 18.323H24.6168L28.9999 8.27501H14.3999C14.2417 8.27961 14.0843 8.25242 13.9368 8.19507C13.7893 8.13771 13.6548 8.05134 13.5413 7.94108C13.4277 7.83082 13.3375 7.69891 13.2759 7.55315C13.2143 7.40739 13.1825 7.25075 13.1825 7.0925C13.1825 6.93426 13.2143 6.77762 13.2759 6.63186C13.3375 6.4861 13.4277 6.35419 13.5413 6.24393C13.6548 6.13367 13.7893 6.0473 13.9368 5.98994C14.0843 5.93259 14.2417 5.90541 14.3999 5.91001H30.8129C31.0086 5.90996 31.2011 5.95866 31.3733 6.05172C31.5454 6.14478 31.6917 6.27926 31.7988 6.44301C31.9067 6.60729 31.9723 6.79569 31.9897 6.99145C32.0072 7.18721 31.976 7.38424 31.8989 7.565L26.4939 19.977C26.4015 20.1876 26.2499 20.3668 26.0574 20.4927C25.8649 20.6186 25.6399 20.6858 25.4099 20.686H10.5519Z"
                  fill="#E8E8E8"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
