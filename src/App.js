import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import About from './components/sections/about';
import Header from './components/sections/header';
import Pricing from './components/sections/pricing';
import Features from './components/sections/features';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Features/>
      <Pricing/>
    </div>
  );
}

export default App;
