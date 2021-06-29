import jquery, { data } from 'jquery'

export function getProducts(params) {
    const items
    $.getJSON(`/src/provider/${params}-10-reais.json`, function (data) {
        data.items.forEach(item => {
            const row = { "img": item.imageUrl, "name": item.name, "price": item.price };
            items.push(row);
        });
    })

    return items;
}