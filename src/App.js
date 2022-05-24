import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Dashboard/Order';
import Review from './Pages/Dashboard/Review';
import Home from './Pages/Home/Home';
import PurchsePage from './Pages/Home/PurchsePage';
import Login from './Pages/LogIn/Login';
import Register from './Pages/LogIn/Register';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchase/:id' element={<PurchsePage></PurchsePage>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='order' element={<Order></Order>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
