import React, { useState } from 'react';
import { Stack, Input, InputGroup, InputRightElement, Button, HStack, Box, Heading, FormLabel } from "@chakra-ui/react";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    axios.post("https://mernbackend-70sg.onrender.com/users/login", payload)
      .then((res) => {
        console.log(res)
        const { token } = res.data;
        // Save to localStorage
        localStorage.setItem('token', token);

        alert("Login successful!");
        // Optionally redirect after login
        window.location.href = "/dash";
      })
      .catch((err) => {
        alert("Login failed");
        console.error(err);
      });
  };

  return (
    <div>
      <Heading>My account</Heading>
      <HStack justifyContent="space-evenly" marginTop="30px" marginBottom="50px">
        <Box width='80%' height="300px" marginLeft="200px">
          <Stack spacing={3}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              size='md'
              height='48px'
              width='400px'
            />
            <FormLabel>Password</FormLabel>
            <InputGroup height='48px' width='400px'>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormLabel>Forgotten your password?</FormLabel>
            <Button
              onClick={handleLogin}
              height='48px'
              width='400px'
              border='1px solid black'
              backgroundColor='#001f48'
              color="white"
            >
              Log In
            </Button>
          </Stack>
        </Box>
        {/* Optionally, you can include additional content here */}
      </HStack>
    </div>
  );
}

export default Login;
