import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Tables = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);

    async function fetchOrderData() {
        const response = await fetch("http://localhost:4000/api/orders");
        const data = await response.json();
        console.log(data)
        console.log(data.rows)
        setOrderData(data.rows); // Set order data to the rows array
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
                        <Th>Id</Th>
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
                    {orderData.map((order, index) => (
                        <Tr key={index}>
                            <Td>{order.id}</Td>
                            <Td>{order.user_id}</Td>
                            <Td>{order.status}</Td>
                            <Td>{order.total_item}</Td>
                            <Td>{order.total_price}</Td>
                            <Td>{order.address}</Td>
                            <Td>{order.tracking_code}</Td>
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
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}

export default Tables;
