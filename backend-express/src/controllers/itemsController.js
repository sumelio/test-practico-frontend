

const axios = require("axios");

const { apiMercadoLibre: { url, limitItem, services } } = require("../config");
const { mapDetailResponse, mapResponse } = require("../mappers");


getCategories = (data) => {
  const catetories =
    [...data.filters, ...data.available_filters].filter(({ id }) => id === "category")

  if (catetories && catetories.length && catetories[0].values.length) {
    return catetories[0].values.map(({ name }) => name);
  }
  return [];
};

getItems = async (req, res, next) => {
  try {
    const response = await axios.get(
      `${url}${services.searchItems}?q=${req.query.q}${"&limit="}${limitItem}`
    );

    res.send(
      mapResponse(
        response.data.results,
        getCategories(response.data)
      )
    );
  } catch (error) {
    next(error);
  }
};

getItemById = async (req, res, next) => {
  try {
    const itemsById = `${url}${services.items}${"/"}${req.params.id}`;

    const [{ data: detail }, { data: description }] = await Promise.all([
      axios.get(itemsById),
      axios.get(`${itemsById}${services.itemDescription}`),
    ]);

    const { data: category } = await axios.get(
      `${url}${services.categories}${"/"}${detail.category_id}`
    );
    res.send(mapDetailResponse(detail, description, category));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getItems,
  getItemById
};
