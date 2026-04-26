import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SpiritualProgram from './pages/SpiritualProgram';
import SpiritualOuting from './pages/SpiritualOuting';
import Festival from './pages/Festival';
import TalkToUs from './pages/TalkToUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spiritual-program" element={<SpiritualProgram />} />
          <Route path="spiritual-outing" element={<SpiritualOuting />} />
          <Route path="festival" element={<Festival />} />
          <Route path="talk-to-us" element={<TalkToUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
