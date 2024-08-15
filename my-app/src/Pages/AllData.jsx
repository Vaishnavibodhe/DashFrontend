import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AllData = () => {
 const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`https://mernbackend-70sg.onrender.com/dashboard/`);
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Alert status="error"><AlertIcon />{error}</Alert>;

  const handleDelete = (e, _id) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    axios.delete(
        `https://mernbackend-70sg.onrender.com/dashboard/delete/${_id}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
    )
        .then((res) => {
            alert("Employee data delete successfully!");
            console.log(res);
            window.location.href="/all";
        })
        .catch((err) => {
            console.error("Error deleting form", err);
            alert("Error deleting form");
        });
}

  return (
    <Box width='100%' overflowX='auto' p={4}>
      <Heading mb={4}>Employee Table</Heading>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Sr. No.</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Department</Th>
            <Th>Email</Th>
            <Th>Salary</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{employee.first_name}</Td>
              <Td>{employee.last_name}</Td>
              <Td>{employee.department}</Td>
              <Td>{employee.email}</Td>
              <Td>${employee.salary}</Td>
              <Td> 
                <Button as={Link} to={`/update/${employee._id}`} size='sm' mr={2} colorScheme='teal'>
                   Edit
                </Button>
                <Button colorScheme='red' size='sm' onClick={(e)=>handleDelete(e,employee._id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default AllData
