import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/caixa" element={<Index />} />

        <Route path="/" element={<div>Página Inicial</div>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
