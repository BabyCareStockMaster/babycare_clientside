import styles from "./Table.module.css";
import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
const Tables = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    async function fetchOrderData() {
        const response = await fetch(
            "http://localhost:4000/api/orders"
        );
        const data = await response.json();
        setOrderData(data.rows);
        console.log(typeof(data.data.rows))
        setIsLoading(false);
    }
    useEffect(() => {
        fetchOrderData();
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
      <Box overflowX="auto">
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>Nama USer</Th>
                        <Th>Status</Th>
                        <Th>Total Item</Th>
                        <Th>Harga</Th>
                        <Th>Address</Th>
                        <Th>tracking code</Th>
                        <Th>Aksi</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                   orderData.map((item,index) => 
                    item.Users.map((items) => (
                    <Tr key = {index}>
                       <Td>{index + 1}</Td>
                       <Td>{items.first_name}</Td>
                        <Td>{item.status}</Td>
                        <Td>{item.total_item}</Td>
                        <Td>{item.total_price}</Td>
                        <Td>{item.address}</Td>
                        <Td>{item.tracking_code}</Td>
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
                    )
                    }
                    
                    

                    {/* Add more rows as needed */}
                </Tbody>
            </Table>
        </Box>
     

    );
}

export default Tables;