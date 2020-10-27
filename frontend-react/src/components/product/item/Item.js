import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style/item.scss";
import Price from "../Price";
import LazyImage from "./LazyImageItem";

const Item = ({
  item: { id, title, address, price, free_shipping, picture },
}) => {
  return (
    <div className="item">
      <div className="row no-gutters xs-text-center">
        <div className="col-sm-auto">
          <Link to={`/items/${id}`}>
            <div className="image-container">
              <LazyImage size={180} src={picture} alt={title} title={title}/>
            </div>
          </Link>
        </div>
        <div className="col-sm">
          <Price amount={price.amount} free_shipping={free_shipping} />
          <Link to={`/items/${id}`}>
            <span className="title">{title}</span>
          </Link>
        </div>
        <div className="col-sm-2">
          <div className="address">
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
