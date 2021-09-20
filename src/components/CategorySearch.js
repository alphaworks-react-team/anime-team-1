import React, { useState, useEffect, useContext } from "react";
import { getCategoryAnime } from "../utils/fetches";
import { CategoryContext } from "../Context/CategoryContext";
import { CategoryCardContainer } from "../fragments/CategoryContainer";
import HomeCard from "./HomeCard";
import CategoryCard from "./CategoryCard";

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
    <CategoryCardContainer>
      {categoryContent.map((card, index) => (
        <CategoryCard
          key={index}
          img={card.attributes.posterImage.medium}
          title={
            card.attributes.titles.en
              ? card.attributes.titles.en
              : card.attributes.titles.en_jp
          }
          ageRating={card.attributes.ageRating}
          averageRating={card.attributes.averageRating}
        ></CategoryCard>
      ))}
    </CategoryCardContainer>
  );
};

export default CategorySearch;
