import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import View from './View.tsx'




createRoot(document.getElementById('root')!).render(


    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view/:file" element={<View />} />
      </Routes>
    </Router>

)
