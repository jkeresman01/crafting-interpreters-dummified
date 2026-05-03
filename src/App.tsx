import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Preface from './pages/Preface';
import Introduction from './pages/Introduction';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Preface />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
