import styles from './App.module.css';
import Header from './components/header_f/Header';
import Navigator from './components/navigator_f/Navigator';
import Footer from './components/footer_f/Footer';
import Body from './components/body_f/Body';
import Catalog from './components/catalog_f/Catalog';
import { useState } from 'react';
import Korzina from './components/korzina_f/Korzina';
import Account from './components/pages/account_f/Account';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  const [isAccountOpen, setAccount] = useState(false);
  const [isCatalogOpen, setCatalog] = useState(false);
  const [isKorzinaOpen, setKorzina] = useState(false);
  const [korzina, set_v_korzinu] = useState([]);
  const [catalogStateShop, setStateShop] = useState(false);
  const [catalogProducts, setProducts] = useState([])

  const updateKorzina = (value) =>
  {
    set_v_korzinu(value);
  }
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
    <div className={styles.App}>
      
      {isCatalogOpen && (<Catalog methods={[updateCatalog, updateShop, updateProducts]}/>
      )}
      {isKorzinaOpen && (<Korzina korzina = {korzina} states={[isKorzinaOpen]} methods={[setKorzina, updateKorzina]}/>
      )}
      <Header/>
      <Navigator methods={[setAccount]}/>
      {/* <BrowserRouter>
        <Routes>
          <Route path=''/>
          <Route path='account'/>
        </Routes>
      </BrowserRouter> */}
      {isAccountOpen && (<Account methods={[setAccount]}/>)}
      <Body states={[isCatalogOpen, catalogStateShop, catalogProducts, korzina]} 
            methods={[updateCatalog, updateShop, setKorzina, updateKorzina]}/>
      <Footer/>
    </div>
  );
}

export default App;
