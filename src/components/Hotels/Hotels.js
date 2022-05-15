import Hotel from "./Hotel/Hotel";
import Header from "../Header/Header";
import classes from "./Hotels.module.css";
import { Link } from "react-router-dom"; 

const Hotels = ({data}) => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <Header/>
    <div className={classes.hotels}>
      {user && <Link to="mybookings" className={classes.Hotels__myBooking}>My&nbsp;Bookings</Link>}
      {data.map((data)=>(
        <Hotel
          key={data.id}
          id={data.id}
          hotelName={data.hotelName}
          hotelDescription={data.hotelDescription}
          hotelPrice={data.hotelPrice}
          hotelAddress={data.hotelAddress}
          hotelAmenities={data.hotelAmenities}
          hotelRating={data.hotelRating}
          hotelReviews={data.hotelReviews}
          hotelPolicy={data.hotelPolicy}
          hotelImage={data.hotelImage}
        />
      ))}
    </div>
    </>
  );
};

export default Hotels;