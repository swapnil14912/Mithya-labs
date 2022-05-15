import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  }

  return (
    <div className={classes.Header}>
      <Link to="/" className={classes.Header__brand}>
        Hotel
      </Link>
      {user ? (
        <div className={classes.Header__booking}>
          <Link to="mybookings" className={classes.Header__myBooking}>My&nbsp;Bookings</Link>
          <div className={classes.user} onClick={logOutHandler}>
            <AccountCircleTwoToneIcon style={{fontSize:"3rem"}}/>
            <p className={classes.username}>{user.username}</p>
          </div>
        </div>
      ) : (
        <Link to="/auth" className={classes.Header__auth}>
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;
