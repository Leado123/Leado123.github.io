import { createRoot } from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import View from './View.tsx';
import Admin from './Admin.tsx';
import Flag from './Flag.tsx';
import Reports from './Reports.tsx';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/view/:file" element={<View />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/:highlightedSyllabusId" element={<Admin />} />
      <Route path="/flag/:id" element={<Flag />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  </HashRouter>
);
