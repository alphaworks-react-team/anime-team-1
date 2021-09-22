import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import { getCategoryAnime } from "../utils/fetches";
import { CategoryContext } from "../Context/CategoryContext";
import CategoryCard from "./CategoryCard";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import ReactLoading from "react-loading";
import CategoryContainer from "../fragments/CategoryContainer";

const CategorySearch = () => {
  const [categoryContent, setCategoryContent] = useState([]);
  const [sortedBy, setSortedBy] = useState("popularityRank");
  const [offset, setOffset] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const { selectedCategory } = useContext(CategoryContext);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFilterSelect = (filter) => {
    setSortedBy(filter);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    (async function () {
      setLoading(true);
      setOffset(0);
      setCategoryContent([]);
      setTimeout(async () => {
        const fetchContentByCat = await getCategoryAnime(
          selectedCategory,
          sortedBy,
          0
        );
        setCategoryContent(fetchContentByCat);
        setLoading(false);
      }, 1000);
    })();
  }, [selectedCategory, sortedBy]);

  useEffect(() => {
    (async function () {
      setLoading(true);
      setTimeout(async () => {
        const fetchContentByCat = await getCategoryAnime(
          selectedCategory,
          sortedBy,
          offset
        );
        setCategoryContent([...categoryContent, ...fetchContentByCat]);
        setLoading(false);
      }, 1000);
    })();
  }, [selectedCategory, sortedBy, offset]);

  const handleObserver = useCallback(async (entries) => {
    const target = await entries[0];
    if (target.isIntersecting) {
      setOffset((offset) => offset + 12);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      <h1>{selectedCategory} Anime</h1>
      <div>
        <h2>Sorted By </h2>
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {sortedBy}
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            name="popularityRank"
            onClick={() => handleFilterSelect("popularityRank")}
          >
            Popularity
          </MenuItem>
          <MenuItem
            name="highestRated"
            onClick={() => handleFilterSelect("-averageRating")}
          >
            Ranking
          </MenuItem>
          {/* <MenuItem name="popularityRank" onClick={handleFilterSelect}>Logout</MenuItem> */}
        </Menu>
      </div>
      <CategoryContainer>
        {categoryContent &&
          categoryContent.map((card, index) => (
            <CategoryCard
              key={index}
              img={card.attributes.posterImage.medium}
              id={card.id}
              title={
                card.attributes.titles.en
                  ? card.attributes.titles.en
                  : card.attributes.titles.en_jp
              }
              ageRating={card.attributes.ageRating}
              averageRating={card.attributes.averageRating}
            ></CategoryCard>
          ))}
      </CategoryContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading && (
          <ReactLoading
            type={"bars"}
            color={"#ffbf00"}
            height={"10%"}
            width={"20%"}
          />
        )}
      </div>
      <div ref={loader} />
    </div>
  );
};

export default CategorySearch;
