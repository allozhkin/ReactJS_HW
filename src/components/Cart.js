import Footer from "./Footer";
import Header from "./Header";
import Subscribe from "./Subscribe";

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div class="top-head center">
        <h2 class="top-head__heading">SHOPPING CART</h2>
      </div>
      <section class="cart center">
        <div class="cart__left">
          <div class="cart__box">
            <div class="cart__box-item">
              {cartItems.map((item) => (
                <div key={item.id}>
                  <div class="item-left">
                    <img class="cart__img" src={item.image} alt="cart_pic" />
                  </div>
                  <div class="cart__discription">
                    <h1 class="cart__title">{item.name}</h1>
                    <p class="cart__text">
                      Price: <span class="cart__price"> {item.price}</span>
                    </p>
                    <p class="cart__text">Color: Red</p>
                    <p class="cart__text">{item.size}</p>
                    <p class="cart__text">Quantity:{item.quantity}</p>
                  </div>
                  <button class="cart__close" type="button">
                    <svg
                      class="cart__img"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                        fill="#575757"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div class="cart__buttons">
            <button class="cart__buttons_button" type="button">
              <span class="button__text"> CLEAR SHOPPING CART</span>
            </button>
            <button class="cart__buttons_button" type="button">
              <span class="button__text"> CONTINUE SHOPPING</span>
            </button>
          </div>
        </div>
        <div class="cart__right">
          <h2 class="cart__heading">SHIPPING ADRESS</h2>
          <div class="cart__right_box">
            <div class="cart__forms">
              <form action="#" class="cart__forms_form">
                <input
                  autofocus
                  required
                  class="cart__input"
                  type="text"
                  placeholder="Bangladesh"
                />
                <input
                  required
                  class="cart__input"
                  type="text"
                  placeholder="State"
                />
                <input
                  required
                  class="cart__input"
                  type="number"
                  placeholder="Postcode / Zip"
                />
              </form>
              <button class="cart__button" type="button">
                GET A QUOTE
              </button>
            </div>
            <div class="cart__total">
              <h2 class="cart__total_subtitle">
                SUB TOTAL <span class="subtitle_price">{totalPrice}</span>
              </h2>
              <h1 class="cart__total_title">
                GRAND TOTAL <span class="cart__total_price">{totalPrice}</span>
              </h1>
              <hr class="cart__total_line" />
              <button class="cart__total_button" type="button">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Cart;
