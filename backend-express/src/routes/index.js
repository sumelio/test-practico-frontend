const express               = require('express');
const router                = express.Router();
const { getItems, getItemById }       = require('../controllers/itemsController');
const { cache }       = require('../service/cache');

module.exports = function() {
    // Items
    router.get('/items', cache, getItems);
    router.get('/items/:id', cache, getItemById);

    return router;
}