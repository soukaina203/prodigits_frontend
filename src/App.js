import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import ListerProducts from './Components/Products/Products'
import CreateProduct from './Components/Products/CreateProduct'
import EditProduct from './Components/Products/EditProduct'
import VoirProduct from './Components/Products/VoirProduct'
import Header from './Components/Header/Header'
import SignUp from './Auth/signUp'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>

          <Route path='/products' element={<ListerProducts />} />
          {/* <Route path='/products/create' element={<CreateProduct />} />
          <Route path='/product/edit/:id' element={<EditProduct />} />
          <Route path='/product/:id' element={<VoirProduct />} /> */}
          <Route path='/signUp' element={<SignUp />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
