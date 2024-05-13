import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item?.card?.info;

        return (
          <div
            data-testid="foodItem"
            key={id}
            className="flex justify-between gap-4 border-b-2 border-gray-300 pb-5 min-h-[11.5625rem]"
          >
            <div className="w-8/12">
              <h1 className="font-bold mb-2">{name}</h1>
              <h2 className="font-medium mb-3">
                ₹ {price ? price : defaultPrice / 100}
              </h2>
              <p className="text-sm">{description}</p>
            </div>
            <div>
              <div className="w-[9.75rem] relative h-36">
                {imageId && (
                  <div className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={CDN_URL + imageId}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <button
                  className="bg-white border-2 border-gray-300 text-green-600 text-lg font-bold rounded-lg absolute -bottom-5 w-[7.5rem] h-10 left-1/2 -translate-x-1/2"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
