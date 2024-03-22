// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Banner /> */}
      <div className='main'>
      <About />

      </div>
    </div>
  );
}

export default App;
