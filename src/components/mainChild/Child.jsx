import React from "react";
import CardHeaderTitle from "../cardHeaderTitle/CardHeaderTitle";
import CardList from "../cardList/CardList";
import PopularList from "../cardList/popularList";

function Child() {
  return (
    <>
      <div className="main-child">
        <CardHeaderTitle HeaderTitle="Trending Videos" />
        <CardList />
        <CardHeaderTitle HeaderTitle="Popular Genres" />
        <PopularList />
      </div>
    </>
  );
}

export default Child;
