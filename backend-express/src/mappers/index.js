const {author } = require("../config");

const getDecimals = value => (value.length && value.length > 1 ? Number(value[1]): 0) 

const getPrice = (currencyId, price) => ({
    currency: currencyId,
    amount: Math.floor(price),
    decimals: getDecimals(`${price}`.split('.'))
})
const mapDetailResponse = (
 detail,
 description,
 category
) => {

const item = {
id: detail.id,
title: detail.title,
price: getPrice(detail.currency_id, detail.price),
    picture: detail.pictures.length && detail.pictures[0].secure_url,
    condition: detail.condition,
    free_shipping: detail.shipping.free_shipping,
    sold_quantity: detail.sold_quantity,
    description:   description && description.plain_text
}

const categories = [];

if (category.path_from_root.length) {
    const { path_from_root: pathFromRoot } = category
    pathFromRoot.map(category => categories.push(category.name))
}

return { author, categories, item }}

const mapItemResponse = ({
     id,
     title,
     currency_id,
     price,
     thumbnail,
     condition,
     shipping,
     address,
     sold_quantity,
     category_id
 }) => ({
        id,
        title,
        condition,
        price: getPrice(currency_id, price),
        picture: thumbnail,
        free_shipping: shipping.free_shipping,
        address: address ? address.state_name : null,
        sold_quantity,
        category_id
    })

const mapResponse = (items, categories) => ({
        author, categories, items: items.map(item => mapItemResponse(item))
    })

module.exports = { mapItemResponse, mapResponse, mapDetailResponse };