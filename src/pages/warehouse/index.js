import React, { useState, useEffect } from "react";

import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios"; // Import axios for making HTTP requests

const Warehouse = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [warehouseStockData, setWarehouseStockData] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // Functions to handle modal and form
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleNameChange = (e) => setName(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  async function fetchWarehouseData() {
    const response = await fetch(
      `http://localhost:4000/api/warehousestock/?${page}=1&limit=5`
    );
    const data = await response.json();
    setWarehouseStockData(data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchWarehouseData();
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleSave = async () => {
    // Construct payload
    const payload = {
      name: name,
      city: city,
      address: address,
    };

    // Perform your save operation, e.g., using fetch or axios
    try {
      const response = await axios.put(`http://localhost:4000/api/warehouses/${id}`, payload, {
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
      });
    
      if (response.status === 200) {
        // Show success message or handle success case
        console.log('Data saved successfully');
      } else {
        // Handle error case
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }

    // Close the modal after saving data
    closeModal();
  };


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
                       onClick={openModal}
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
      <Modal isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Warehouse</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={handleNameChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input value={city} onChange={handleCityChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input value={address} onChange={handleAddressChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button colorScheme="green"  onClick={handleSave}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Warehouse;