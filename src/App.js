import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import Order from './Pages/Dashboard/Order';
import Review from './Pages/Dashboard/Review';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import PurchsePage from './Pages/Home/PurchsePage';
import Login from './Pages/LogIn/Login';
import Register from './Pages/LogIn/Register';
import RequireAdmin from './Pages/LogIn/RequireAdmin';
import RequireAuth from './Pages/LogIn/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/purchase/:id' element={<PurchsePage></PurchsePage>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='order' element={<Order></Order>}></Route>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
