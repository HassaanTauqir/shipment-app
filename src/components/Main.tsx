import React, { useState, SetStateAction, Dispatch } from "react";
import Grid from "./Grid";
import SearchBar from "./SearchBar";
import UsageGuide from "./UsageGuide";

const Main = (): JSX.Element => {
  const [filter, setFilter]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState("");

  return (
    <div className="main">
      <div className="search-wrapper">
        <SearchBar setValue={setFilter} value={filter} />
      </div>
      <Grid filter={filter} />
      <UsageGuide />
    </div>
  );
};

export default Main;
