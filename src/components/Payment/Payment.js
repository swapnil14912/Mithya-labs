import { ArrowBack } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./Payment.module.css";

const Payment = ({ hotels }) => {
  const { id } = useParams();
  const hotel = hotels.find((item) => String(item.id) === String(id));
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const bookHandler = () => {
    localStorage.setItem(user.username, JSON.stringify([hotel, input]));
    navigate("/");
  };

  const ratingLength = hotel.hotelRating.length;
  let sum = hotel.hotelRating.reduce(function (x, y) {
    return Number(x) + Number(y);
  }, 0);

  return (
    <div className={classes.Payment}>
      <Link to={`/${hotel.id}`} className={classes.return}><ArrowBack/> Go back</Link>
      <p className={classes.Payment__pOne}>Review your booking</p>
      <div className={classes.Payment__information}>
        <div className={classes.Payment__hotelDetails}>
          <p className={classes.Payment__pTwo}>Hotel Information</p>
          <div className={classes.Payment__hotel}>
            <div>
              <p className={classes.Payment__pThree}>
                {hotel.hotelName}{" "}
                <span className={classes.Payment__sOne}>
                  {(sum / ratingLength).toPrecision(2)}&nbsp;⭐
                </span>
              </p>
              <p className={classes.Payment__hotelAddress}>
                {hotel.hotelAddress.stateut}-{hotel.hotelAddress.pincode}
              </p>
            </div>
            <img
              className={classes.Payment__image}
              src={hotel.hotelImage[0]}
              alt="hotel"
            />
          </div>
          <div className={classes.Payment__amount}>
            <p className={classes.Payment__price}>Room price for one night</p>
            <p className={classes.Payment__room}>{hotel.hotelPrice}</p>
          </div>
          <hr/>
          <div className={classes.Payment__payable}>
            <p className={classes.Payable__pOne}>Total payable amount</p>
            <p className={classes.Payable}>{hotel.hotelPrice}</p>
          </div>
        </div>
        <div className={classes.Payment__userDetails}>
          <div className={classes.Payment__details}>
            <form className={classes.Payment__form} onSubmit={bookHandler}>
              <div className={classes.Form__input}>
                <label className={classes.label} htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="fullName"
                  className={classes.Form__name}
                  type="text"
                  placeholder="Enter your name here..."
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className={classes.Form__input}>
                <label className={classes.label} htmlFor="checkin">
                  Check-In
                </label>
                <input
                  id="checkin"
                  name="checkIn"
                  className={classes.Form__date}
                  type="date"
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className={classes.Form__input}>
                <label className={classes.label} htmlFor="checkout">
                  Check-Out
                </label>
                <input
                  id="checkout"
                  name="checkOut"
                  className={classes.Form__date}
                  type="date"
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className={classes.Form__card}>
                <div className={classes.Card__details}>
                  <label htmlFor="cardNumber" className={classes.label}>
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    className={classes.Card__number}
                    type="number"
                    placeholder="Enter card number"
                  />
                </div>
                <div className={classes.Card__cvvExpiry}>
                  <div className={classes.Card__details}>
                    <label htmlFor="cvv" className={classes.label}>
                      CVV
                    </label>
                    <input
                      className={classes.Card__cvv}
                      type="number"
                      placeholder="Enter CVV"
                    />
                  </div>
                  <div className={classes.Card__details}>
                    <label htmlFor="expiry" className={classes.label}>
                      Expiry Date
                    </label>
                    <input
                      id="expiry"
                      className={classes.Card__expiry}
                      type="text"
                      placeholder="Expiry Date(mm/yy)"
                    />
                  </div>
                </div>
              </div>
              <button className={classes.Form__button}>Pay Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
