import { baseUrl } from "./fetchData";

const updateData = async (url, id, body) => {
    const response = await fetch(`${baseUrl}${url}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  };
  

  export const updateProduct = async (id, formData) => {
    const response = await fetch(`${baseUrl}products/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      body: formData,
    });
  
    const data = await response.json();
    return data;
  };
  

export const updateOrder = async (id, updatedData) => {
  const data = await updateData("orders", id, updatedData);
  return data;
};


export const updateWarehouse = async (id, updatedData) => {
  const data = await updateData("warehouses", id, updatedData);
  return data;
};

export const updateCategory = async (id, updatedData) => {
  const data = await updateData("categories", id, updatedData);
  return data;
};

export const updateUser = async (id, updatedData) => {
  const data = await updateData("users", id, updatedData);
  return data;
};

export const updateAdmin = async (updatedData) => {
  const data = await updateData("admin","", updatedData);
  return data;
};
  