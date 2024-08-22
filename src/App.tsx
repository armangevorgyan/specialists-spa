import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Layout } from './components/layout.tsx';

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </Layout>

  );
};

export default App;
