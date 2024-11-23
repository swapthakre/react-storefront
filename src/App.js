import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/component/Header';
import Home from './Home'
import About from './About'
import Products from './products/Products'
import Checkout from './checkout/Checkout';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/products' Component={Products} />
        <Route path='/checkout' Component={Checkout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
