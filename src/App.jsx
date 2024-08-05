import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Dubai from './Componet/Dubai/dubai';
import Hero from './Componet/Hero/Hero';
import Main from './Componet/Main/Main';
import Misr from './Componet/Misr/Misr';
import Parij from './Componet/Parij/Parij';
import Sidebar from './Componet/Sidebar/Sidebar';
import Foother from './Componet/foother/foother';
import Turkiya from './Componet/turkiya/turkiya';
import Home from './Componet/Home/home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parij" element={<Parij />} />
        <Route path="/app" element={<App />} />
        <Route path="/turkiya" element={<Turkiya />} />
        <Route path="/misr" element={<Misr />} />
        <Route path="/dubai" element={<Dubai />} />
      </Routes>
    </>
  );
}

export default App;
