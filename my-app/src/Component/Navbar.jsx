import React from 'react';
import { Flex, Box, Button, Spacer, Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
    return (
        <Flex as='nav' p={4} bg='teal.500' color='white' alignItems='center'>
            <Heading size='md'>Employee App</Heading>
            <Spacer />
            <Box>
                <Link as={RouterLink} to="/login" mx={4}>
                    <Button variant='solid' colorScheme='teal'>
                        Login
                    </Button>
                </Link>
                <Link as={RouterLink} to="/" mx={4}>
                    <Button variant='solid' colorScheme='teal'>
                        Signup
                    </Button>
                </Link>
                <Link as={RouterLink} to="/all" mx={4}>
                    <Button variant='solid' colorScheme='teal'>
                        Employees
                    </Button>
                </Link>
                <Link as={RouterLink} to="/dash" mx={4}>
                    <Button variant='solid' colorScheme='teal'>
                    Dashboard
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
}

export default Navbar;
