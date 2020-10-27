const fs = require("fs");
const path = require("path");

const config = {
  app: {
    env: process.env.ENVIRONMENT || "dev",
    host: process.env.HOST || "http://127.0.0.1",
    path: "/api/",
    basePath: "/",
    port: 4000,
  },
  apiMercadoLibre: {
    url: process.env.API_MERCADOLIBRE || "https://api.mercadolibre.com",
    limitItem: process.LIMIT_ITEMS_API_MERCADOLIBRE || 4,
    services: {
      searchItems: "/sites/MLA/search",
      items: "/items",
      itemDescription: "/description",
      categories: "/categories",
    },
    chachePeriodSeconds: 20
  },
  author: { name: 'Freddy', lastName: 'Lemus'}
};

module.exports = config;
