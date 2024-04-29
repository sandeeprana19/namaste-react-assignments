import { CDN_URL } from "../utils/constant";
import Star from "../assets/images/body/restaurant-card/star.png";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="w-[16.9688rem] 2xl:w-[21.1875rem] rounded-[1.25rem] overflow-hidden cursor-pointer transition-[all 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)] hover:scale-[1.07] bg-white hover:shadow-[0_0_1.25rem_rgba(0,0,0,0.2)] transition-all h-full">
      <div className="w-full h-[13.75rem] flex items-center justify-center overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="m-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex items-center gap-x-[0.625rem] my-1">
          <div className="flex items-center gap-x-[0.3125rem]">
            <i className="w-5 flex items-center justify-center overflow-hidden">
              <img src={Star} alt="Star icon" className="w-full h-auto" />
            </i>
            <h3 className="text-base font-medium">{avgRating}</h3>
          </div>
          <h3 className="text-base font-medium">{sla.slaString}</h3>
        </div>
        <h4 className="text-[0.9375rem] text-[#808080] font-normal">
          {costForTwo}
        </h4>
        <h4 className="text-[0.9375rem] text-[#808080] font-normal">
          {cuisines.join(", ")}
        </h4>
        <h4>Logged in user: {loggedInUser}</h4>
      </div>
    </div>
  );
};

export const WithAggregatedDiscount = (RestaurantCard) => {
  return (props) => {
    const { header, subHeader } = props.resData.info.aggregatedDiscountInfoV3;

    return (
      <div className="relative">
        <label className="absolute top-4 left-4 text-xl font-extrabold text-white z-50">{`${header} ${subHeader}`}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
