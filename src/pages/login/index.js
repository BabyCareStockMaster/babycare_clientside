// Desc: Login page
import { Box, FormControl } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { Input, FormLabel, Heading, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Login = () => {
    return (
    <Box
        w ={['full', 'md']}
        p ={[8,10]}
        mt ={[20,'10vh']}
        mx ='auto'
        border={['none', '1px solid #ccc']}
        borderRadius ={8}
        borderColor={['', 'gray.200']}
    >
        <VStack spacing={4} align='flex-start' w='full' > 
            <VStack spacing={1} align={[ 'flex-start', 'center']} w='full' mb='{3}'>
                <Heading align='center'>Login</Heading>
                <Text>Enter your email to login</Text>
            </VStack>
            <FormControl w='full' id='email'>
                <FormLabel>Email</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl w='full' id='email'>
                <FormLabel>Password</FormLabel>
                <Input type='password' />
            </FormControl>
            <Button w='full' colorScheme='blue'>Login</Button>
        </VStack>
    </Box>

    );
}

export default Login;