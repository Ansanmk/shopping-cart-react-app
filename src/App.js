import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import SearchProduct from './components/SearchProduct';
import DeleteProducts from './components/DeleteProducts';
import ViewAllProducts from './components/ViewAllProducts';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
<BrowserRouter>

<Routes>

<Route path='/' element={<AddProducts />}/>
<Route path='/search' element={<SearchProduct />}/>
<Route path='/delete' element={<DeleteProducts />}/>
<Route path='/viewproduct' element={<ViewAllProducts />}/>

</Routes>

</BrowserRouter>

  );
}

export default App;
