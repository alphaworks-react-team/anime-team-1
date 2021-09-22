import React, { useState, useEffect, useContext } from "react";
import { getCategoryAnime } from "../utils/fetches";
import { CategoryContext } from "../Context/CategoryContext";
import CategoryCard from "./CategoryCard";
import CategoryContainer from "../fragments/CategoryContainer";

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
      <h2>{selectedCategory} Anime</h2>
      <CategoryContainer>
        {categoryContent.map((card, index) => (
          <CategoryCard
            key={index}
            img={card.attributes.posterImage.medium}
            id={card.id}
            title={
              card.attributes.titles.en
                ? card.attributes.titles.en
                : card.attributes.titles.en_jp
            }
          ></CategoryCard>
        ))}
      </CategoryContainer>
    </div>
  );
};

export default CategorySearch;
