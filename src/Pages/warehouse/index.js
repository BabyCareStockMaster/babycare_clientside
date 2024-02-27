
import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
const Warehouse = () => {
    return (
      <Box overflowX="auto">
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>Warehouse</Th>
                        <Th>Nama Product</Th>
                        <Th>Stock</Th>
                       
                        <Th>Aksi</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr >
                       <Td>1</Td>
                       <Td>Gudang 1</Td>
                        <Td>Popol</Td>
                        <Td>200</Td>
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
                    {/* Add more rows as needed */}
                </Tbody>
            </Table>
        </Box>
     

    );
}

export default Warehouse;