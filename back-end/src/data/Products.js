const fs = require('fs')
const path = require('path')


function products(params) {
    const contents = fs.readFileSync(path.join(__dirname, `../provider/${params}-10-reais.json`));
    const data = JSON.parse(contents);
    const items = data.items.map(function (item) {
        const { id, imageUrl, name, sellingPrice } = item;
        return { id, imageUrl, name, sellingPrice }
    })
    return { items, value: data.value };
}
module.exports = { products }