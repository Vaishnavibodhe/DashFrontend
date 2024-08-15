import React, { useState, useEffect } from 'react';
import { Stack, Input, Button, FormLabel, Select, Box, Heading, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateDash() {
    const [formdata, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        department: "",
        salary: 0,
    });

    const { _id } = useParams(); 

    useEffect(() => {
        // Fetch employee data when component mounts
        const fetchEmployeeData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    `https://mernbackend-70sg.onrender.com/dashboard/${_id}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`, 
                            'Content-Type': 'application/json'
                        }
                    }
                );
                setFormData(response.data); // Initialize formdata with fetched data
            } catch (error) {
                console.error("Error fetching employee data", error);
                alert("Error fetching employee data");
            }
        };

        fetchEmployeeData();
    }, [_id]); // Run the effect only when _id changes

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage

        axios.patch(
            `https://mernbackend-70sg.onrender.com/dashboard/employees/${_id}`,
            formdata,
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // Add the token to headers
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((res) => {
                alert("Employee data updated successfully!");
                console.log(res);
            })
            .catch((err) => {
                console.error("Error submitting form", err);
                alert("Error submitting form");
            });
    }


    return (
        <div>
            <Flex align="center" mb={6} p={4} borderBottom="1px solid" borderColor="gray.200">
                <Heading as="h1" size="lg">Update Employee Form</Heading>
            </Flex>
            <Box width='80%' maxW='600px' mx='auto' p={4} borderWidth={1} borderRadius="md" boxShadow="md">
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormLabel htmlFor='first_name'>First Name</FormLabel>
                        <Input
                            id='first_name'
                            placeholder='Enter First Name'
                            value={formdata.first_name}
                            onChange={(e) => setFormData({ ...formdata, first_name: e.target.value })}
                            borderColor="gray.300"
                        />

                        <FormLabel htmlFor='last_name'>Last Name</FormLabel>
                        <Input
                            id='last_name'
                            placeholder='Enter Last Name'
                            value={formdata.last_name}
                            onChange={(e) => setFormData({ ...formdata, last_name: e.target.value })}
                            borderColor="gray.300"
                        />

                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                            id='email'
                            placeholder='Enter Email'
                            type='email'
                            value={formdata.email}
                            onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
                            borderColor="gray.300"
                        />

                        <FormLabel htmlFor='department'>Department</FormLabel>
                        <Select
                            id='department'
                            placeholder='Select Department'
                            value={formdata.department}
                            onChange={(e) => setFormData({ ...formdata, department: e.target.value })}
                            borderColor="gray.300"
                        >
                            <option value='Tech'>Tech</option>
                            <option value='Operation'>Operation</option>
                            <option value='Marketing'>Marketing</option>
                        </Select>

                        <FormLabel htmlFor='salary'>Salary</FormLabel>
                        <Input
                            id='salary'
                            placeholder='Enter Salary'
                            type='number'
                            value={formdata.salary}
                            onChange={(e) => setFormData({ ...formdata, salary: e.target.value })}
                            borderColor="gray.300"
                        />

                        <Button
                            type='submit'
                            colorScheme='teal'
                            size='lg'
                            mt={4}
                        >
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Box>
        </div>
    );
}

export default UpdateDash;
