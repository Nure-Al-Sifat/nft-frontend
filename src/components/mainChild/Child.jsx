import React from "react";
import CardHeaderTitle from "../cardHeaderTitle/CardHeaderTitle";
import CardList from "../cardList/CardList";
import "./Child.css";

function Child(props) {
  return (
    <>
      <div className="main-child">
        <CardHeaderTitle title={props.HeaderTitle} />
        <CardList />
      </div>
    </>
  );
}

export default Child;
