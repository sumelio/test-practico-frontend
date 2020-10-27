import React, { memo, useEffect, useMemo } from "react";
import { connect } from "react-redux";

// Redux
import {
  getItemsSelector,
  getLoadingState,
  getItemsCategoriesSelector,
} from "../../../redux/selectors/items";
import { fetchItems } from "../../../redux/actions/items";
import { loading } from "../../../redux/actions/items";

// Component
import Message from "../../common/message/message";
import Categories from "../../common/categories/Categories";
import Item from "../../product/item/Item";

// Style
import "./style/Items.scss";

const Items = ({
  items,
  categories,
  fetchItems,
  loading,
  location,
  isLoading,
}) => {
  const searchQuery = new URLSearchParams(location.search).get("search");
  const abortController = useMemo(() => new window.AbortController(), []);

  useEffect(() => {
    const load = async () => {
      loading(true);
      searchQuery && (await fetchItems(searchQuery, abortController));
      await loading(false);
    };

    load();
  }, [searchQuery, loading, abortController, fetchItems]);

  return (
    <div className={`list ${searchQuery ? 'list--show': 'list--hide'} row no-gutters`}>
      <Categories className="col-12" categories={categories} />
      <span className={`col-12 list__item`}>
        { items.length ? (
          items.map((item) => <Item key={item.id} item={item} />)
        ) : (
           <Message show={!isLoading} text='No hay publicaciones que coincidan con tu búsqueda.' />
        )}
      </span>
    </div>
  );
};

Items.defaultProps = {
  items: [],
  categories: [],
  isLoading: false,
};

const mapStateToProps = (state) => ({
  items: getItemsSelector(state),
  categories: getItemsCategoriesSelector(state),
  isLoading: getLoadingState(state),
});

export default connect(mapStateToProps, { loading, fetchItems })(memo(Items));
