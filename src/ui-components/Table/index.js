import styles from "./Table.module.css";
import { Box, IconButton, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
const Tables = () => {
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
                    <Tr >
                       <Td>1</Td>
                       <Td>Dhoe</Td>
                        <Td>online</Td>
                        <Td>5</Td>
                        <Td>200</Td>
                        <Td>Jl. Pahlawan</Td>
                        <Td>12345</Td>
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

export default Tables;