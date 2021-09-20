import React, { createContext, useState, useEffect } from "react";
import { getCategories } from "../utils/fetches";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchAndSetCategories = async () => {
    const getCat = await getCategories();
    setCategories(getCat);
  };

  useEffect(() => {
    fetchAndSetCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryContextProvider };
