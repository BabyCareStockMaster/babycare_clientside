
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import HeaderSection from "@aio/components/HeaderSection";
const Profile = () => {
    <HeaderSection title="Profile" />
    const [isLoading, setIsLoading] = useState(true);
    const[profileData, setProfileData] = useState([]);
    async function fetchProfileData() {
        const response = await fetch(
            "http://localhost:4000/api/users"
        );
        const data = await response.json();
        setProfileData(data.rows);
        console.log(data)
        setIsLoading(false);
    }
    useEffect(() => {
        fetchProfileData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
              <Th>Address</Th>
              <Th>Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {profileData.map((profile, index) => (
                    <Tr>
                        <Td>{profile.first_name}</Td>
                        <Td>{profile.last_name}</Td>
                        <Td>{profile.email}</Td>
                        <Td>{profile.password}</Td>
                        <Td>{profile.address}</Td>
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
  
            )
}
export default Profile;