import jquery, { data } from 'jquery'

export function getProducts(params) {
    const itens
    $.ajax({
        dataType: "json",
        url: `/src/provider/${params}-10-reais.json`,
        success: function (data) {
            $(data).each(function (e) {
                const item = ("img" = e.imageUrl, "name" = e.name, "price" = e.price);
                itens.push(item);
            })
        }
    })
}