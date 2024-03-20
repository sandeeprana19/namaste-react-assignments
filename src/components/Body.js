import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Search from "../assets/images/body/search.png";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await res.json();

    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
                    (res) => res.info.avgRating > 4.1
                  );
                  setFilteredRestaurants(filteredRestaurants);
                }}
              >
                Top Rated Restaurant
              </button>
            </div>
            <div className="restro-search">
              <input
                type="search"
                placeholder="Search for restaurants and food"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const filteredSearchRestaurants = listOfRestaurants.filter(
                      (res) =>
                        res.info.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                    );
                    setFilteredRestaurants(filteredSearchRestaurants);
                  }
                }}
              />
              <button type="button">
                <img src={Search} alt="Search icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="restro-container">
          {filteredRestaurants.map((restaurant) => {
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
