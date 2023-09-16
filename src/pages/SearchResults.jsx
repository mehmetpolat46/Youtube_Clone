import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers";

const SearchResults = () => {
  const [params, setParams] = useSearchParams();
  const [searchResults, setSearchResult] = useState(null);
  const query = params.get("search_query");

  useEffect(() => {
    getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`).then(
      (results) => setSearchResult(results)
    );
  }, [query]);

  console.log("sonuçlar", searchResults);
  return (
    <div className="flex bg-[#0f0f0f] text-white  min-h-[100vh]">
      <SideNav />

      <div className="flex flex-col gap-20 p-10 w-full">
        {!searchResults ? (
          <Loading />
        ) : (
          searchResults?.contents?.map((item, i) => {
            //  console.log(item)
            return <VideoCard video={item?.video} key={i} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
