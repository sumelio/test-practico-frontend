import React, { useEffect, useState } from "react";

import "./style/detail.scss";

import Price from "../Price";
import { SuspenseImg } from "../../../suspense/SuspenceImage";

const Detail = ({ items }) => {
  const [item, setItem] = useState(items);
  useEffect(() => {
    setItem(items);
  }, [items]);
  return (
    <div className="row no-gutters">
      <div className="detail col-12">
        <div className="col-12 xs-text-center">
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8 pt-5">
          <div className='picture image-container'>
              {item && <SuspenseImg
                className='fluid-image'
                src={item.picture}
                alt={item.title}
                title={item.title}
              />}
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4 p-auto">
            <div className="info xs-text-center">
              <div className="info__condition">
                {item && item.condition === "new" ? "Nuevo" : "Usado"}
                {item && item.sold_quantity > 0
                  ? ` - ${item && item.sold_quantity} vendidos`
                  : ""}
              </div>
              <div className="info__title">{item && item.title}</div>
              {item && <Price
                amount={item.price.amount}
                free_shipping={item.free_shipping}
                showDecimal
              />}
              <div className="info__button">
                {item && <button
                  className="info__button--buy primary-button"
                  alt="Comprar"
                > Comprar </button>}
              </div>
            </div>
          </div>
        </div>
        {item && !!item.description && (
          <div className="row col-12 xs-text-center pt-5 mt-5">
            <div className="col-xl-8 pt-lg-5 mt-lg-5">
              <div className="description">
                <p className="description__title">Descripción del producto</p>
                <p className="description__content">{item.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
