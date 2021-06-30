import client from "../api";

export async function getProducts(type) {
    const response = await client.get(`/products?type=${type}`);
    return response.data;
}
