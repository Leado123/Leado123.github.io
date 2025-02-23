import { createRoot } from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import View from './View.tsx';
import Admin from './Admin.tsx';
import Flag from './Flag.tsx';
import Reports from './Reports.tsx';
import Syllabus from './Syllabus.tsx';
import Layout from './Layout.tsx';
import UploadSyllabi from './UploadSyllabi.tsx';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout><App/></Layout>} />
      <Route path="/view/:file" element={<View />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/:highlightedSyllabusId" element={<Admin />} />
      <Route path="/flag/:id" element={<Layout><Flag /></Layout>} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/syllabus/:id" element={<Layout><Syllabus/></Layout>} />
      <Route path="/upload" element={<Layout><UploadSyllabi/></Layout>} />
    </Routes>
  </HashRouter>
);
