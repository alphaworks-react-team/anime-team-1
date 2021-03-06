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
import LoaderContainer from "../fragments/LoaderContainer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import ReactLoading from "react-loading";
import CategoryContainer from "../fragments/CategoryContainer";
import { FcExpand } from "react-icons/fc";

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
        <span>Sort by: </span>
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {sortedBy} <FcExpand />
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
          <MenuItem
            name="popularityRank"
            onClick={() => handleFilterSelect("-startDate")}
          >
            Recently Added
          </MenuItem>
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
            ></CategoryCard>
          ))}
      </CategoryContainer>
      <LoaderContainer>
        {loading && (
          <ReactLoading
            type={"bars"}
            color={"#f16246"}
            height={"5%"}
            width={"8%"}
          />
        )}
      </LoaderContainer>
      <div ref={loader} />
    </div>
  );
};

export default CategorySearch;
