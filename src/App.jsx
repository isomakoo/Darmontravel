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

function App() {
  const location = useLocation();
  
  // Sahifa yo'nalishlarini tekshirish
  const isMisrPage = location.pathname === '/misr';

  return (
    <>
      <Routes>
        <Route path="/parij" element={<Parij />} />
        <Route path="/app" element={<App></App>} />
        <Route path="/turkiya" element={<Turkiya />} />
        <Route path="/misr" element={<Misr />} />
        <Route path="/dubai" element={<Dubai />} />
      </Routes>

      {!isMisrPage && <Hero />}
      {!isMisrPage && <Main />}
      {!isMisrPage && <Sidebar />}
      {!isMisrPage && <Foother />}

    
    </>
  );
}

export default App;
