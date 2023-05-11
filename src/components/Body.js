import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useState , useEffect  } from "react";
import Shimmer from "./shimmerUI";

const Body = () => {
    // Local state variable-----> Super powerful variable
    const [ListOfRestaurant, setListOfRestaurant]= useState([]);

    useEffect(()=>{
      // API CALL
      getRestaurant();
    },[])

    async function getRestaurant(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
// optional chaining
      setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }




    return ListOfRestaurant.length==0 ? (<Shimmer></Shimmer>) : (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
               const filteredList = ListOfRestaurant.filter(res=>res.data.avgRating > 4);
            setListOfRestaurant(filteredList);

               
            }}>
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
         {
          ListOfRestaurant.map((restaurant)=> <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
         }
        </div>
      </div>
    )
  };

  export default Body;

