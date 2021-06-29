import fs from 'fs'

export function products(params) {
    const contents = fs.readFileSync(`../provider/${params}-10-reais.json`);
    const data = JSON.parse(contents);
    const items = data.items.map(function (item) {
        return { imageUrl, name, price } = item;
    })
    return { items, value: data.value };
}