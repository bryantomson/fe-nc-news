import { useEffect } from "react";
import "./ArticleSort.css";
import OrderSelector from "./OrderSelector";
import SortBySelector from "./SortBySelector";
import { useSearchParams } from "react-router-dom";


export default function ArticleSort({
  setSortBy,
  sortBy,
  sortOrder,
  setSortOrder,
}) {
const [searchParams, setSearchParams] = useSearchParams();

useEffect(()=>{
    const paramString = `${sortBy ? `sort_by=${sortBy}` : ""}${sortOrder ? `&order=${sortOrder}` : ""}`;
    setSearchParams(paramString)
},[sortBy, sortOrder])
 

  return (
    <div id="article-sort-container">
      <div id="sort-by">
        Sort articles by{" "}
        <SortBySelector
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <div id="order-by">
        Order{" "}
        <OrderSelector sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
    </div>
  );
}
