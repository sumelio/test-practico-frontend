import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/Categories.scss";

const Category = ({ last, name }) => (
  <span className={`categories ${last ? "last" : ""}`}>{name}</span>
);

const SeparatorIcon = () => (
  <span>
    <FontAwesomeIcon icon={faChevronRight} size="xs" />
  </span>
);

const Categories = ({ categories }) => {
  let list = [];
  categories.forEach((category, i) => {
    list = [
      ...list,
      <Category
        last={categories[categories.length - 1] === category}
        name={category}
        key={category}
      />,
      <SeparatorIcon key={`separator-${i}`} />,
    ];
  });
  list.pop();
  return (
    <div className="categories-container">
      {list.length ? list : <span>&nbsp;</span>}
    </div>
  );
};

export default Categories;
