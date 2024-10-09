
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/client/Home';
import Projects from './components/client/Projects';
import Skills from './components/client/Skills';
import About from './components/client/About';

function App() {
  return (
    <div className="App  ">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Project' element={<Projects/>}/>
        </Routes>
    </div>
  );
}

export default App;
