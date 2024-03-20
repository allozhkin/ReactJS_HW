function Subscribe() {
  return (
    <section className="subscribe center">
      <div className="subscribe__left">
        <img className="face" src="img/face.svg" alt="face" />

        <p className="subscribe__text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
          purus condimentum“
        </p>
      </div>
      <div className="subscribe__right">
        <div className="subscribe__right-1">
          <h1 className="subscribe__title">SUBSCRIBE</h1>
          <h3 className="subscribe__subtitle">
            FOR OUR NEWLETTER AND PROMOTION
          </h3>
        </div>
        <div className="subscribe__right-2">
          <form action="#" className="subscribe__form">
            <input
              className="subscribe__input"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="subscribe__button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
