import { baseUrl } from "./fetchData";

const fetchDataById = async (url, id) => {
    const response = await fetch(`${baseUrl}${url}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    });
    const data = await response.json();
    return data;
};
  
export const fetchOrderById = async (id) => {
  const data = await fetchDataById("orders", id);
  return data
};

export const fetchProductById = async (id) => {
  const data = await fetchDataById("products", id);
  return data
}

export const fetchCategoryById = async (id) => {
  const data = await fetchDataById("categories", id);
  return data
}

export const fetchUserById = async (id) => {
  const data = await fetchDataById("users", id);
  return data
}


export const fetchWarehouseById = async (id) => {
  const data = await fetchDataById("warehouses", id);
  return data
}