import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Tools from './components/Tools';

const AppRoutes: React.FC = () => (
  <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/tools" element={<Tools />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;