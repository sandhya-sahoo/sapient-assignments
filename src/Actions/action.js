export const getItems = () => {
    return (dispatch) => {
      fetch("https://api.spacexdata.com/v3/launches?limit=96")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "GET-DATA",
            payload: data,
          });
        })
        .catch((err) => {
          dispatch({
            type: "API-ERROR",
            message: err.message,
          });
          throw err;
        });
    };
  };
  export const getAllFilteredItem = (lunch, landing, year) => {
    let url = `https://api.spacexdata.com/v3/launches?limit=96`;
    if (lunch) {
      url += `&launch_success=${lunch}`;
    }
    if (landing) {
      url += `&land_success=${landing}`;
    }
    if (year !== "") {
      url += `&launch_year=${year}`;
    }
  
    return (dispatch) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "GET-ALL-FILTER_ITEMS",
            payload: data,
          });
        })
        .catch((err) => {
          dispatch({
            type: "API-ERROR",
            message: err.message,
          });
          throw err;
        });
    };
  };
  