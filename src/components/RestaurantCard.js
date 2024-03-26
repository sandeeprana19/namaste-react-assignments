import { CDN_URL } from "../utils/constant";
import Star from "../assets/images/body/restro-cards/star.png";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="restro-card">
      <div className="restro-logo-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restro Logo"
          className="restro-logo"
        />
      </div>
      <div className="restro-content">
        <h2 className="my-0">{name}</h2>
        <div className="restro-wrapper">
          <div className="restro-rating-wrap">
            <i className="restro-star-icon">
              <img src={Star} alt="Star icon" />
            </i>
            <h3 className="my-0">{avgRating}</h3>
          </div>
          <h3 className="my-0">{sla.slaString}</h3>
        </div>
        <h4 className="my-0">{costForTwo}</h4>
        <h4 className="my-0">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
