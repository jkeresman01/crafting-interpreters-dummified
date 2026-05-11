import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Preface from './pages/Preface';
import Introduction from './pages/Introduction';
import Jargon from './pages/Jargon';
import InterpretersVsCompilers from './pages/InterpretersVsCompilers';
import PhasesOfCompiler from './pages/PhasesOfCompiler';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Preface />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/jargon" element={<Jargon />} />
        <Route path="/interpreters-vs-compilers" element={<InterpretersVsCompilers />} />
        <Route path="/phases-of-compiler" element={<PhasesOfCompiler />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
