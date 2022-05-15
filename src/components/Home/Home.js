import Filter from "../Filter/Filter";
import Hotels from "../Hotels/Hotels";
import Header from "../Header/Header";
import classes from "./Home.module.css";
import { useState } from "react";

const Home=()=>{

    return(
        <>
        <Header/>
        <div className={classes.home}>
            <div className={classes.home__hotels}>
                <Hotels/>
            </div>
        </div>
        </>
    );
}

export default Home;



//Searching