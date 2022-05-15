import classes from "./Hotel.module.css";
import AirIcon from "@mui/icons-material/Air";
import TvIcon from "@mui/icons-material/Tv";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import KitchenIcon from "@mui/icons-material/Kitchen";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Hotel = (props) => {
  const ratingLength = props.hotelRating.length;
  let sum = props.hotelRating.reduce(function (x, y) {
    return Number(x) + Number(y);
  }, 0);

  let count = 0;

  return (
    <div className={classes.card}>
      <div className={classes.head}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          stopOnHover={true}
        >
          {props.hotelImage.map((img) => (
            <img
              className={classes.Hotel__image}
              key={props.id}
              alt="Hotel"
              src={img}
            />
          ))}
        </Carousel>
      </div>
      <div className={classes.info}>
        <div className={classes.info__title}>
          <p className={classes.info__name}>{props.hotelName}</p>
          <p
            className={classes.info__address}
          >{`${props.hotelAddress.stateut}-${props.hotelAddress.pincode}`}</p>
        </div>
        <div className={classes.amenities__value}>
          {props.hotelAmenities.map((amenitie) => (
            <div key={Math.random()}>
              {amenitie === "AC" && (
                <>
                  <p className={classes.Amenitie__p}>
                    <AirIcon />
                    &nbsp;AC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className={classes.count}>{count++}</p>
                </>
              )}
              {amenitie === "TV" && (
                <>
                  <p className={classes.Amenitie__p}>
                    <TvIcon />
                    &nbsp;TV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className={classes.count}>{count++}</p>
                </>
              )}
              {amenitie === "WiFi" && (
                <>
                  <p className={classes.Amenitie__p}>
                    <SignalWifi4BarIcon />
                    &nbsp;WiFi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className={classes.count}>{count++}</p>
                </>
              )}
              {amenitie === "Refrigerator" && (
                <>
                  <p className={classes.Amenitie__p}>
                    <KitchenIcon />
                    &nbsp;Refrigerator&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className={classes.count}>{count++}</p>
                </>
              )}
            </div>
          ))}
          <p className={classes.Amenitie__p}>+{props.hotelAmenities.length - count} more</p>
        </div>
        <div className={classes.action}>
          <div className={classes.Action__option}>
            <div className={classes.price}>
              <p className={classes.amount}>&#8377;{props.hotelPrice}</p>
              <p className={classes.room}>
                per room per night
              </p>
            </div>
            <div className={classes.rating}>
              <p className={classes.rating__pOne}>
                {(sum / ratingLength).toPrecision(2)}&nbsp;⭐
              </p>
              <p>({ratingLength})</p>
            </div>
          </div>
          <Link className={classes.button} to={`/${props.id}`}>
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
