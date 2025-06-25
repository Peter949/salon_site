import styles from './App.module.css';
import Header from './components/header_f/Header';
import Navigator from './components/navigator_f/Navigator';
import Footer from './components/footer_f/Footer';
import Body from './components/body_f/Body';
import Catalog from './components/catalog_f/Catalog';
import { useState } from 'react';
import Korzina from './components/Korzina_f/Korzina';
import Account from './components/pages/account_f/Account';



const App = () => {
  // сам state и его метод должны быть camelCase (и лучше максимально юзать camelCase в своих проектах)
  // также нужно чтобы стейт и метод отличались только словом в начале "set" у второго, например, [isOpen, setIsOpen]
  // это рекомендация на будущее, не грубые ошибки
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isKorzinaOpen, setIsKorzinaOpen] = useState(false);
  const [korzina, setKorzina] = useState([]);
  const [catalogStateShop, setStateShop] = useState(false);
  const [catalogProducts, setProducts] = useState([]);

  const updateKorzina = (value) =>
  {
    setKorzina(value);
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
    setIsCatalogOpen(value);
  }

  return (
    <div className={styles.App}>
      
      {isCatalogOpen && (<Catalog methods={[updateCatalog, updateShop, updateProducts]}/>
      )}
      {isKorzinaOpen && (<Korzina korzina = {korzina} states={[isKorzinaOpen]} methods={[setIsKorzinaOpen, updateKorzina]}/>
      )}
      <Header/>
      <Navigator methods={[setIsAccountOpen]}/>
      {/* <BrowserRouter>
        <Routes>
          <Route path=''/>
          <Route path='account'/>
        </Routes>
      </BrowserRouter> */}
      {isAccountOpen && (<Account methods={[setIsAccountOpen]}/>)}
      <Body states={[isCatalogOpen, catalogStateShop, catalogProducts, korzina]} 
            methods={[updateCatalog, updateShop, setIsKorzinaOpen, updateKorzina]}/>
      <Footer/>
    </div>
  );
}

export default App;
