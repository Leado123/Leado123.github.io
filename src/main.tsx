import { createRoot } from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import View from './components/FileView.tsx';
import Admin from './pages/Admin.tsx';
import Flag from './pages/Flag.tsx';
import Reports from './pages/Reports.tsx';
import Syllabus from './pages/Syllabus.tsx';
import Layout from './Layout.tsx';
import UploadSyllabi from './pages/UploadSyllabi.tsx';
import Professor from './pages/Professor.tsx';
import Welcome from './welcome.tsx';
import UploadSuccessfull from './pages/UploadSuccessFull.tsx';

const server = "https://api.sharesyllabus.me";
export default server;

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/view/:file" element={<View />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/:highlightedSyllabusId" element={<Admin />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/" element={<Layout><Welcome /></Layout>} />
      <Route path="/app/:college?/:professor?/:class?" element={<Layout><App /></Layout>} />
      <Route path="/flag/:id" element={<Layout><Flag /></Layout>} />
      <Route path="/syllabus/:id" element={<Layout><Syllabus /></Layout>} />
      <Route path="/upload" element={<Layout><UploadSyllabi /></Layout>} />
      <Route path="/professor/:id" element={<Layout><Professor /></Layout>} />  
      <Route path="/upload_successfull/:id" element={<Layout><UploadSuccessfull /></Layout>} />
    </Routes>
  </HashRouter>
);
