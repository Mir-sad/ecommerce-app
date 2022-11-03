import './App.css';
import Header from './containers/header/Header';
import ProductListing from './containers/productListing/ProductListing';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetail from './containers/productDetail/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductListing />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
