import classes from "./Search.module.css";

const Search = () => {
  const searchHandler = (e) => {
    e.preventDefault();
  };

  const getCurrentDate=(separator="-")=>{

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
  }

  const getNextDate=(separator="-")=>{
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date+1}`:`${date+1}`}`
  }

  return (
    <div className={classes.search}>
      <form className={classes.search__form} onSubmit={searchHandler}>
        <div className={`${classes.search__hotel}`}>
          <input
            className={`${classes.search__input} ${classes.border__left}`}
            type="text"
            placeholder="Location"
          />
          <input
            className={classes.search__input}
            id="datePicker"
            type="date"
            defaultValue={getCurrentDate()}
          />
          <input
            className={classes.search__input}
            type="date"
            defaultValue={getNextDate()}
          />
          <input
            className={classes.search__input}
            type="number"
            placeholder="Rooms"
            defaultValue={1}
            step={1}
            
          />
          <input
            className={`${classes.search__input} ${classes.border__right}`}
            type="number"
            placeholder="Adults"
            defaultValue={1}
          />
        </div>
          <button className={classes.search__button}>Search</button>
      </form>
    </div>
  );
};

export default Search;
