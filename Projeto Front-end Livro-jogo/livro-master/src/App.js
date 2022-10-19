
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Intro from './components/1 - Introdução/Intro';
import MundoBita from './components/2 - MundoBita/mundobita';
import Aurora from './components/3 - Aurora/Aurora';
import Cafe from './components/4 - Café da Manhã/Cafe';
import CafeA from './components/4 - Café da Manhã/CafeA';
import CafeB from './components/4 - Café da Manhã/CafeB';
import Trab from './components/5 - Trabalhocantado/Trab';
import Volta from './components/6 - Volta Para Casa/Volta';
import Agro from './components/7 - Hackhatagro/Agro';
import Oracle from './components/8 - Oracle/Oracle';
import Letrus from './components/9 - Letrus/Letrus';
import LetrusA from './components/9 - Letrus/LetrusA';
import LetrusB from './components/9 - Letrus/LetrusB';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/mundobita" element={<MundoBita />}/>
        <Route path="/Aurora" element={<Aurora />}/>
        <Route path="/Cafe" element={<Cafe />}/>
        <Route path="/CafeA" element={<CafeA />}/>
        <Route path="/CafeB" element={<CafeB />}/>
        <Route path="/Trab" element={<Trab />}/>
        <Route path="/Volta" element={<Volta />}/>
        <Route path="/Agro" element={<Agro/>}/>
        <Route path="/Oracle" element={<Oracle/>}/>
        <Route path="/Letrus" element={<Letrus/>}/>
        <Route path="/LetrusA" element={<LetrusA/>}/>
        <Route path="/LetrusB" element={<LetrusB/>}/>
      </Routes>
    </Router>
  );
}

export default App;
