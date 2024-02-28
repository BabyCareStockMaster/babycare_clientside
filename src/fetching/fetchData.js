export const baseUrl = "http://localhost:3000/";

//Data Fetching function, just change the url parameters when calling fetchData('example')
export const fetchData = async (url) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
};

export const fetchStocks = async () => {
  const data = await fetchData("warehousestocks");
  return data;
};

export const fetchOrderDetails = async () => {
  const data = await fetchData("orderproducts");
  return data;
};

export const fetchWarehouses = async () => {
  const data = await fetchData("warehouses");
  return data;
};


export const fetchProducts = async (filters = {}) => {
  const nonEmptyFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value !== "")
  );
  const params = new URLSearchParams(nonEmptyFilters).toString();
  const data = await fetchData(`products?${params}`);
  return {
    products: data.products,
    totalItems: data.totalItems,
    totalPages: data.totalPages,
    currentPage: data.currentPage
  };
};


export const fetchOrders = async (filters = {}) => {
  const nonEmptyFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value !== "")
  );
  const params = new URLSearchParams(nonEmptyFilters).toString();
  const data = await fetchData(`orders?${params}`);
  return {
    orders: data.data,
    totalData: data.totalData,
    totalPages: data.totalPages,
    currentPage: data.currentPage
  }
};

export const fetchUsers = async () => {
  const data = await fetchData("users");
  return data;
};

export const fetchCategories = async () => {
  const data = await fetchData("categories");
  return data;
};

export const fetchAdmin = async () => {
  const data = await fetchData("admin");
  return data;
};
