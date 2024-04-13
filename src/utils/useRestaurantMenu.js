import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(API_URL + resId);

    const json = await data.json();

    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
