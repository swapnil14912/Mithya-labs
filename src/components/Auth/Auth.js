import { useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { useState } from "react";

const Auth = ({users}) => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = users.find((item)=>(item.username === user && item.password === password));

  const submitFormHandler = (e) => {
    e.preventDefault();
    if(data){
      localStorage.setItem("user",JSON.stringify(data));
      navigate("/");
    }else{
      alert("Enter correct username and password");
    }
  };

  return (
    <div className={classes.Auth}>
      <div className={classes.Auth__form}>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.icon}>
            <AccountCircleTwoToneIcon style={{ fontSize: "4rem" }} />
          </div>
          <label className={classes.label} htmlFor="user">
            Username
          </label>
          <input
            className={classes.input}
            id="user"
            type="text"
            placeholder="Username"
            onChange={(e)=>setUser(e.target.value)}
          />
          <label className={classes.label} htmlFor="password">
            Password
          </label>

          <input
            className={classes.input}
            id="password"
            type="password"
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className={classes.link}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
