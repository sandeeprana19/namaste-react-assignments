import ArrowDown from "../assets/images/body/restaurant-card/restaurant-menu/arrow-down.png";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const toggleItemListHandler = () => {
    setShowIndex();
  };

  return (
    <div className="bg-gray-200 shadow-xl px-5 py-4">
      <div
        className="flex gap-4 justify-between items-center cursor-pointer"
        onClick={toggleItemListHandler}
      >
        <span className="text-lg font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          <div className="w-4 flex items-center justify-center overflow-hidden">
            <img src={ArrowDown} alt="Arrow down" />
          </div>
        </span>
      </div>
      {showItem && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
