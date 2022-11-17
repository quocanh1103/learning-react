import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Components/ProCards/Card';
import CardAll from './Components/ProCards/CardAll';
import Form from './Components/ProForms/Form';
import Head from './Components/Header/Head';

function App() {
  return (
    <div className="App">
      <div className='head-container'>
        <Head />
        
      </div>
      
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/products" element={<CardAll />} />
      </Routes>
      
    </div>
  );
}

export default App;
