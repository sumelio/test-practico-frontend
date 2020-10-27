import React, { memo, useEffect, useMemo } from "react";
import { isEmpty } from "lodash";
import {
  getItemSelector,
  getLoadingState,
  getItemCategoriesSelector,
} from "../../../redux/selectors/items";
import { connect } from "react-redux";
import { fetchItemDetail } from "../../../redux/actions/items";
import { loading } from "../../../redux/actions/items";

import Categories from "../../common/categories/Categories";

import Detail from "../../product/detail/Detail";

const ProductDetail = ({
  item,
  categories,
  fetchItemDetail,
  loading,
  match: {
    params: { id },
  },
  isLoading,
}) => {
  const abortController = useMemo(() => new window.AbortController(), []);

  useEffect(() => {
    const asyncLoad = async () => {
      try {
        loading(true);
        id && (await fetchItemDetail(id, abortController));
      } finally {
        await loading(false);
      }
    };

    asyncLoad();
  }, [id, abortController, loading, fetchItemDetail]);

  return (
    <div className="row no-gutters">
      <Categories className="col-12" categories={categories} />
      <div className="col-12">
        {isLoading || <Detail items={item.item} />}
      </div>
    </div>
  );
};

ProductDetail.defaultProps = {
  item: [],
  categories: [],
  isLoading: false,
};

const mapStateToProps = (state) => ({
  item: getItemSelector(state),
  categories: getItemCategoriesSelector(state),
  isLoading: getLoadingState(state),
});

export default connect(mapStateToProps, { loading, fetchItemDetail })(
  memo(ProductDetail)
);
