import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import Search from "../assets/images/body/search.png";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="container">
        <div className="title-container">
          <h1>Restaurants Lists</h1>
          <div className="action-wrapper">
            <div className="filter-by-wrapper">
              <span className="filter-by">Filter by:</span>
              <button
                className="restro-filter-button"
                onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setListOfRestaurants(filteredRestaurants);
                }}
              >
                Top Rated Restaurant
              </button>
            </div>
            <div className="restro-search">
              <input
                type="search"
                placeholder="Search for restaurants and food"
              />
              <button type="button">
                <img src={Search} alt="Search icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="restro-container">
          {listOfRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
