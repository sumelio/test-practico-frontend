const NodeCache = require( "node-cache" );

const { apiMercadoLibre: { chachePeriodSeconds } } = require("../config");

const apiCache = new NodeCache( { stdTTL: 0, checkperiod: chachePeriodSeconds } );

cache = (req, res, next) => {
      const cacheData = apiCache.get(req.url);
      if (cacheData) {
          res.send(cacheData);
      } else {
          res.sendResponse = res.send;
          res.send = (body) => {
            apiCache.set(req.url, body);
              res.sendResponse(body);
          };
          next();
      }
};

module.exports = {
  cache
};
