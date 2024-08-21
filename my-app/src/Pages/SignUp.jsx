import React, { useState} from 'react';
import { Stack, Input, InputGroup, Button, HStack, Box, Heading, FormLabel, } from '@chakra-ui/react';
import axios from "axios";
import { Link} from "react-router-dom";

function SignUp() {

    const [formdata , setformData] = useState({
        email:"",
        password:"",
        confirm_password:"",
      });
    
      const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://mernbackend-70sg.onrender.com/users/signup`,{
          ...formdata,
        }).then((res)=>{
            alert("register successfully!")
          
    })
      }
//    console.log(formdata);

    return (
        <div >
            <Heading>Create account</Heading>
            <HStack justifyContent="space-evenly" marginTop="30px" marginBottom="50px">
                <Box width='80%' height="auto" marginLeft="200px">
                    <form onSubmit={handleSubmit}>
                    <Stack spacing={3} >
                       <FormLabel >Email </FormLabel>
                        <Input className="email" placeholder="Email" type="text" value={formdata.email} onChange={(e)=>setformData({...formdata, email:e.target.value})}/>
                        <FormLabel>Password</FormLabel>
                        <InputGroup height='48px' width='400px'>
                        <Input className="password" placeholder="password" type="text" value={formdata.password} onChange={(e)=>setformData({...formdata, password:e.target.value})}/>
                        </InputGroup>
                        <FormLabel >Confirm Password </FormLabel>
                        <Input className="confirm_password" placeholder="confirmPassword" type="text" value={formdata.confirm_password} onChange={(e)=>setformData({...formdata, confirm_password:e.target.value})}/>
                        <Button onClick={handleSubmit} type="submit" height='48px' width='400px' border='1px solid black' backgroundColor='#001f48' color="white">
                            CREATE AN ACCOUNT
                        </Button>
                    </Stack>
                    </form>
                </Box>
                <br/>
                <Box width='80%' height="300px">
                    <HStack spacing={4}>
                        <Heading fontSize="18px">HAVE AN ACCOUNT?</Heading>
                    </HStack>
                    <br />
                    <HStack>
                        <Button  height='48px' width='400px' border='1px solid black' backgroundColor='#001f48' color="white">
                            <Link to="/login">CLICK HERE TO LOG IN</Link>
                        </Button >
                    </HStack>
                </Box>
            </HStack>
        </div>
    )
}

export default SignUp;