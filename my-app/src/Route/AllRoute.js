import {Route , Routes} from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashBoard from "../Pages/DashBoard";
import UpdateDash from "../Pages/UpdateDash";
import AllData from "../Pages/AllData";

function AllRoutes(){
  return (
    <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/dash" element={<DashBoard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/all" element={<AllData/>}></Route>
        <Route path="/update/:_id" element={<UpdateDash/>}></Route>
    </Routes>
  ) 
}


export default AllRoutes;