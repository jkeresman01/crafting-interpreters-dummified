import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Preface from './pages/Preface';
import Introduction from './pages/Introduction';
import Jargon from './pages/Jargon';
import InterpretersVsCompilers from './pages/InterpretersVsCompilers';
import PhasesOfCompiler from './pages/PhasesOfCompiler';
import SmallBooberIntroduction from './pages/smallboober/Introduction';
import DataTypes from './pages/smallboober/DataTypes';
import Expressions from './pages/smallboober/Expressions';
import Statements from './pages/smallboober/Statements';
import ControlFlow from './pages/smallboober/ControlFlow';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Preface />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/jargon" element={<Jargon />} />
        <Route path="/interpreters-vs-compilers" element={<InterpretersVsCompilers />} />
        <Route path="/phases-of-compiler" element={<PhasesOfCompiler />} />
        <Route path="/smallboober/introduction" element={<SmallBooberIntroduction />} />
        <Route path="/smallboober/data-types" element={<DataTypes />} />
        <Route path="/smallboober/expressions" element={<Expressions />} />
        <Route path="/smallboober/statements" element={<Statements />} />
        <Route path="/smallboober/control-flow" element={<ControlFlow />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
