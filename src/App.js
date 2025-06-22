import './App.css';
import Header from './components/header_f/Header';
import Navigator from './components/navigator_f/Navigator';
import Footer from './components/footer_f/Footer';
import Body from './components/body_f/Body';
import Catalog from './components/catalog_f/Catalog';
import { useState } from 'react';



const App = () => {
  const [isCatalogOpen, setCatalog] = useState(false);
  const updateCatalog = (value) =>
  {
    setCatalog(value);
  }
  return (
    <div className='App'>
      {isCatalogOpen && (<Catalog method={updateCatalog}/>
      )}
      <Header/>
      <Navigator/>
      <Body states={[isCatalogOpen]} methods={[updateCatalog]}/>
      <Footer/>
    </div>
  );
}

export default App;
