import './App.css';
import Header from './components/header_f/Header';
import Navigator from './components/navigator_f/Navigator';
import Footer from './components/footer_f/Footer';
import Body from './components/body_f/Body';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Navigator/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
