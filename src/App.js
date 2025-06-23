import './App.css';
import Header from './components/header_f/Header';
import Navigator from './components/navigator_f/Navigator';
import Footer from './components/footer_f/Footer';
import Body from './components/body_f/Body';
import Catalog from './components/catalog_f/Catalog';
import { useState } from 'react';



const App = () => {
  const [isCatalogOpen, setCatalog] = useState(false);
  const [catalogStateShop, setStateShop] = useState(false);
  const [catalogProducts, setProducts] = useState([])
  const updateProducts = (value) =>
  {
    setProducts(value);
  }
  const updateShop = (value) =>
  {
    setStateShop(value)
  }
  const updateCatalog = (value) =>
  {
    setCatalog(value);
  }
  return (
    <div className='App'>
      {isCatalogOpen && (<Catalog methods={[updateCatalog, updateShop, updateProducts]}/>
      )}
      <Header/>
      <Navigator/>
      <Body states={[isCatalogOpen, catalogStateShop, catalogProducts]} 
            methods={[updateCatalog, updateShop]}/>
      <Footer/>
    </div>
  );
}

export default App;
