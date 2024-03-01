import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// import axios from "axios"; // Import axios for making HTTP requests

const Warehouse = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [warehouseStockData, setWarehouseStockData] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = warehouseStockData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPagesNum = Math.ceil(warehouseStockData.length / recordsPerPage);
  const numbers = [...Array(totalPagesNum).keys()].map((num) => num + 1);
  async function fetchWarehouseData() {
    const response = await fetch(
      `http://localhost:4000/api/warehousestock/?${page}=1&limit=5`
    );
    const data = await response.json();
    setWarehouseStockData(data.data);
    setIsLoading(false);
    console.log(typeof data.data[0].Products);
    // data.data[0].Products.map(item => console.log(item))
    warehouseStockData.map((item) => console.log(item.Products));
    console.log(data.data[0].Products);
  }
  useEffect(() => {
    fetchWarehouseData();
  }, [page]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //pagination

  // Check if warehouseStockData is an array before mapping over it
  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Warehouse</Th>
            <Th>Nama Product</Th>
            <Th>Stock</Th>
            <Th>Address</Th>
            <Th>Kota</Th>
            <Th>Aksi</Th>
          </Tr>
        </Thead>
        <Tbody>
          {warehouseStockData.map((item) =>
            item.Products.map((items) => (
              <Tr>
                <Td>{item.name}</Td>
                <Td>{items.name}</Td>
                <Td>{items.WarehouseStock.stock}</Td>
                <Td>{item.address}</Td>
                <Td>{item.city}</Td>
                <Td>
                  <IconButton
                    aria-label="Edit"
                    icon={<EditIcon />}
                    mr={2}
                    variant="ghost"
                    colorScheme="blue"
                  />
                  <IconButton
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                    variant="ghost"
                    colorScheme="red"
                  />
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Warehouse;
