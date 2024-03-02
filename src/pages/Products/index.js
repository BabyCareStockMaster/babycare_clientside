import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await fetch("http://localhost:4000/api/products");
                const data = await response.json();
                setProductData(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching product data:", error);
                setIsLoading(false);
            }
        }

        fetchProductData();
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
                        <Th>Nama Product</Th>
                        <Th>Harga</Th>
                        <Th>Brand</Th>
                        <Th>Deskripsi</Th>
                        <Th>SKU</Th>
                        <Th>Image</Th>
                        <Th>Aksi</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {productData.map((product, index) => (
                        <Tr key={index}>
                            <Td>{product.id}</Td>
                            <Td>{product.name}</Td>
                            <Td>{product.price}</Td>
                            <Td>{product.brand}</Td>
                            <Td>{product.description}</Td>
                            <Td>{product.SKU}</Td>
                            <Td>
                                <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} />
                            </Td>
                            <Td>
                                <IconButton
                                    aria-label="Edit"
                                    icon={<EditIcon />}
                                    mr={2}
                                    variant="outline"
                                    colorScheme="blue"
                                />
                                <IconButton
                                    aria-label="Delete"
                                    icon={<DeleteIcon />}
                                    variant="outline"
                                    colorScheme="red"
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default Products;
