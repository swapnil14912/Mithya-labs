import classes from "./HotelDetails.module.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import AirIcon from "@mui/icons-material/Air";
import TvIcon from "@mui/icons-material/Tv";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import BoltIcon from "@mui/icons-material/Bolt";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ElevatorIcon from "@mui/icons-material/Elevator";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import { Carousel } from "react-responsive-carousel";

const HotelDetails = ({ hotels }) => {
  const { id } = useParams();
  const hotel = hotels.find((item) => String(item.id) === String(id));
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const bookingHandler = () => {
    if (user) {
      navigate(`/${id}/payment`);
    } else {
      navigate("/auth");
    }
  };

  const scrollHandler = () => {
    window.scrollTo(
      {
        top:0,
        behavior:"smooth",
      }
    );
  }

  const recommendedHotels = hotels.filter(
    (item) => String(item.id) !== String(id)
  );

  return (
    <div className={classes.hotelDetails}>
      <div className={classes.card}>
        <div className={classes.heading}>
          <p className={classes.title}>{hotel?.hotelName}</p>
          <p
            className={classes.location}
          >{`${hotel?.hotelAddress?.stateut}-${hotel?.hotelAddress?.pincode}`}</p>
          <Carousel
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={true}
            className={classes.carousel}
          >
            {hotel?.hotelImage?.map((img) => (
              <img
                key={hotel.id}
                className={classes.image}
                alt="Hotel"
                src={img}
              />
            ))}
          </Carousel>
        </div>
        <div className={classes.info}>
          <p className={classes.description}>{hotel?.hotelDescription}</p>
          <p className={classes.description}></p>
          <div className={classes.action}>
            <p className={classes.price}>&#8377;{hotel?.hotelPrice}</p>
            <div>
              <span className={classes.user}>Hey, {user?.username}&nbsp;</span>
              <button onClick={bookingHandler} className={classes.button}>
                Book&nbsp;Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.amenities}>
          {hotel?.hotelAmenities.map((amenitie) => (
            <>
              {amenitie === "AC" && (
                <p className={classes.Amenitie__P}>
                  <AirIcon />
                  &nbsp;{amenitie}
                </p>
              )}
              {amenitie === "TV" && (
                <p className={classes.Amenitie__P}>
                  <TvIcon />
                  &nbsp;{amenitie}
                </p>
              )}
              {amenitie === "WiFi" && (
                <p className={classes.Amenitie__P}>
                  <SignalWifi4BarIcon />
                  &nbsp;{amenitie}
                </p>
              )}
              {amenitie === "Refrigerator" && (
                <p className={classes.Amenitie__P}>
                  <KitchenIcon />
                  &nbsp;{amenitie}
                </p>
              )}
              {amenitie === "Elevator" && (
                <p className={classes.Amenitie__P}>
                  <ElevatorIcon />
                  &nbsp;{amenitie}
                </p>
              )}
              {amenitie === "Parking" && (
                <p className={classes.Amenitie__P}>
                  <LocalParkingIcon />
                  &nbsp;{amenitie}
                </p>
              )}
              {amenitie === "Laundry" && (
                <p className={classes.Amenitie__P}>
                  <LocalLaundryServiceIcon />
                  &nbsp;{amenitie}
                </p>
              )}
              {amenitie === "24x7 Electricity" && (
                <p className={classes.Amenitie__P}>
                  <BoltIcon />
                  &nbsp;{amenitie}
                </p>
              )}
            </>
          ))}
        </div>
        <div className={classes.policy}>
          <p className={classes.policy__pOne}>Hotel Policies</p>
          <ol className={classes.policy__list}>
            {hotel?.hotelPolicy?.map((policy) => (
              <li key={Math.random()}>{policy}.</li>
            ))}
          </ol>
        </div>
      </div>
      <div className={classes.card}>
        <div>
          <p className={classes.suggestions__pOne}>
            Other hotels that you might like
          </p>
          {recommendedHotels ? (
            <div className={classes.suggestions__hotels}>
              {recommendedHotels.map((hotel) => (
                <div>
                  <p className={classes.suggestions__pTwo}>{hotel.hotelName}</p>
                  <p className={classes.suggestions__pThree}>{`${hotel?.hotelAddress?.stateut}-${hotel?.hotelAddress?.pincode}`}</p>
                  <Carousel
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    stopOnHover={true}
                    className={classes.carousel}
                  >
                    {hotel?.hotelImage.map((img) => (
                      <img
                        key={hotel.id}
                        className={classes.image}
                        alt="Hotel"
                        src={img}
                      />
                    ))}
                  </Carousel>
                  <div className={classes.action}>
                    <p className={classes.price}>&#8377;{hotel?.hotelPrice}</p>
                    <Link onClick={scrollHandler} to={`/${hotel.id}`} className={classes.button}>
                      Show&nbsp;Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No recommendations</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
