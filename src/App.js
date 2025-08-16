import { BrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Todocontainer from "./components/TodoContainer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import { useState } from "react";

function App(){

const [users,setUsers]=useState([
    {username:"Balaji",password:"123"}])

return(
<div>
<BrowserRouter>

<Routes>
    <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
    <Route path='/SignUp' element={<Signup users={users} setUsers={setUsers}/>}></Route>
<Route path='/Landing' element={<Landing/>}></Route>
</Routes>

</BrowserRouter>
</div>

)


}
export default App;