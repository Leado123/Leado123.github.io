import { createRoot } from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import View from './View.tsx'
import Admin from './Admin.tsx'




createRoot(document.getElementById('root')!).render(


    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view/:file" element={<View />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>

)
