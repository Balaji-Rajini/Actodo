import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));

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
root.render(
    <App/>
);