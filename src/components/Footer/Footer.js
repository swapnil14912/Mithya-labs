import classes from "./Footer.module.css";

const Footer=()=>{
    return(
        <div className={classes.navbar}>
            <p className={classes.copy}>&copy;<span className={classes.logo}>Hotelierry</span></p>
        </div>
    );
}

export default Footer;