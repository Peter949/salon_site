import styles from './App.module.css';
import Header from './components/header_f/Header';
import Navigator from './components/navigator_f/Navigator';
import Footer from './components/footer_f/Footer';
import Body from './components/body_f/Body';
import Catalog from './components/catalog_f/Catalog';
import { useState } from 'react';
import Korzina from './components/Korzina_f/Korzina';



const App = () => {
  const [korzina, set_v_korzinu] = useState([]);
  const [isCatalogOpen, setCatalog] = useState(false);
  const [catalogStateShop, setStateShop] = useState(false);
  const [catalogProducts, setProducts] = useState([])
  const [isKorzinaOpen, setKorzina] = useState(false);
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
      <Navigator/>
      <Body states={[isCatalogOpen, catalogStateShop, catalogProducts, korzina]} 
            methods={[updateCatalog, updateShop, setKorzina, updateKorzina]}/>
      <Footer/>
    </div>
  );
}

export default App;
