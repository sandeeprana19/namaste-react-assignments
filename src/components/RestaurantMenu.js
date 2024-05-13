import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="pt-[8.625rem] mb-7">
      <div className="w-[56.25rem] mx-auto">
        <h1 className="font-bold text-xl">{name}</h1>
        <h2>
          {cuisines.join(",")} - {costForTwoMessage}
        </h2>
        <div className="flex flex-col gap-5 mt-4">
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category.card.card}
                showItem={showIndex === index ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
