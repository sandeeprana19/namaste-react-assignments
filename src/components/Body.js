import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Search from "../assets/images/body/search.png";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pt-[8.625rem] mb-7">
      <div className="2xl:w-[90rem] w-[73.125rem] mx-auto">
        <div className="flex items-center justify-between gap-x-[0.625rem]">
          <h1 className="text-3xl font-bold text-black">Restaurants Lists</h1>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-[0.625rem]">
              <span className="text-sm font-semibold">Filter by:</span>
              <button
                className="h-11 bg-orange-600 hover:bg-orange-800 transition-all text-white rounded-md border-none p-[0.625rem] text-sm font-semibold outline-none"
                onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setFilteredRestaurants(filteredRestaurants);
                }}
              >
                Top Rated Restaurant
              </button>
            </div>
            <div className="relative">
              <input
                className="w-[31.25rem] h-[2.8125rem] rounded-md border border-solid border-black p-1 ps-11 outline-none"
                type="search"
                placeholder="Search for restaurants and food"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const filteredSearchRestaurants = listOfRestaurants.filter(
                      (res) =>
                        res.info.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredSearchRestaurants);
                  }
                }}
              />
              <button
                type="button"
                className="w-[2.8125rem] p-3 flex items-center justify-center overflow-hidden absolute top-1/2 -translate-y-1/2 start-0 bg-transparent border-none cursor-pointer"
              >
                <img src={Search} alt="Search icon" className="w-full h-auto" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-7 mt-7">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                className="no-underline text-black"
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {" "}
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
