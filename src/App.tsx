import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Preface from './pages/Preface';
import Introduction from './pages/Introduction';
import Jargon from './pages/Jargon';
import InterpretersVsCompilers from './pages/InterpretersVsCompilers';
import PhasesOfCompiler from './pages/PhasesOfCompiler';
import SmallBooberIntroduction from './pages/sealox/Introduction';
import DataTypes from './pages/sealox/DataTypes';
import Expressions from './pages/sealox/Expressions';
import Statements from './pages/sealox/Statements';
import ControlFlow from './pages/sealox/ControlFlow';
import Shortcuts from './pages/Shortcuts';
import LetsBegin from './pages/LetsBegin';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Preface />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/jargon" element={<Jargon />} />
        <Route path="/interpreters-vs-compilers" element={<InterpretersVsCompilers />} />
        <Route path="/phases-of-compiler" element={<PhasesOfCompiler />} />
        <Route path="/lets-begin" element={<LetsBegin />} />
        <Route path="/shortcuts" element={<Shortcuts />} />
        <Route path="/sealox/introduction" element={<SmallBooberIntroduction />} />
        <Route path="/sealox/data-types" element={<DataTypes />} />
        <Route path="/sealox/expressions" element={<Expressions />} />
        <Route path="/sealox/statements" element={<Statements />} />
        <Route path="/sealox/control-flow" element={<ControlFlow />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
