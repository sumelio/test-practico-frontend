import React from "react";
import SearchBar from "../common/serchBar/SearchBar";

const MainLayout = (props) => (
  <>
    <SearchBar />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10">{props.children}</div>
      </div>
    </div>
  </>
);

export default MainLayout;
