import React, { useState, useEffect, useContext } from "react";
import { getCategoryAnime } from "../utils/fetches";
import { CategoryContext } from "../Context/CategoryContext";
import HomeCard from "./HomeCard";

const CategorySearch = () => {
  const [categoryContent, setCategoryContent] = useState([]);
  const { selectedCategory } = useContext(CategoryContext);

  useEffect(() => {
    (async function getAndSetContent() {
      const fetchContentByCat = await getCategoryAnime(selectedCategory);
      setCategoryContent(fetchContentByCat);
    })();
  }, [selectedCategory]);

  return (
    <div>
      {categoryContent.map((card, index) => (
        <HomeCard
          key={index}
          img={card.attributes.posterImage.small}
          title={card.attributes.titles.en}
          // ageRating={card.attributes.ageRating}
          // averageRating={card.attributes.averageRating}
          // synopsis={card.attributes.synopsis}
        ></HomeCard>
      ))}
    </div>
  );
};

export default CategorySearch;
