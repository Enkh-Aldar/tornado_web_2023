import Footer from './components/Footer';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css';

function App(){
  return(
    <div>
      <Header />
      <NavBar />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
