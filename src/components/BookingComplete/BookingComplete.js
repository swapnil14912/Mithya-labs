import Header from "../Header/Header";
import classes from "./BookingComplete.module.css";

const BookingComplete = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userBooking = JSON.parse(localStorage.getItem(user.username));

  console.log(userBooking);
  return (
    <div className={classes.booking}>
      <Header />
      {userBooking ? (
        <div className={classes.userBooking}>
          <p className={classes.userBooking__pOne}>
            Your bookings {userBooking[1].fullName}
          </p>
          <div className={classes.userBooking__data}>
            <div className={classes.Data__details}>
              <div className={classes.Data__nameAddress}>
                <p className={classes.Data__pOne}>{userBooking[0].hotelName}</p>
                <p className={classes.Data__pTwo}>
                  {userBooking[0].hotelAddress.stateut}-
                  {userBooking[0].hotelAddress.pincode}
                </p>
                <p className={classes.Data__date}>
                  Check-In -{" "}
                  <span className={classes.Date__span}>
                    {userBooking[1].checkIn}
                  </span>{" "}
                  at <span className={classes.Date__span}>12:00 PM</span>
                </p>
                <p className={classes.Data__date}>
                  Check-Out -{" "}
                  <span className={classes.Date__span}>
                    {userBooking[1].checkOut}
                  </span>{" "}
                  at <span className={classes.Date__span}>11:00 AM</span>
                </p>
                <p className={classes.Data__price}>&#8377;{userBooking[0].hotelPrice}</p>
                <div className={classes.Data__amenities}>
                  {userBooking[0].hotelAmenities.map((amenitie)=>(
                    <p className={classes.Amenitie}>{amenitie}</p>
                  ))}
                </div>
              </div>
              <img
                className={classes.Data__img}
                src={userBooking[0].hotelImage[0]}
                alt="hotel"
              />
            </div>
            <div>
              <p className={classes.Data__policypOne}>Hotel Policies</p>
              <ul className={classes.Data__policy}>
                {userBooking[0].hotelPolicy.map((policy) => (
                  <li key={Math.random()} className={classes.Policy}>{policy}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className={classes.Data__noBooking}>!No bookings yet</p>
      )}
    </div>
  );
};

export default BookingComplete;
