import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.js'
import Create from './pages/Create.js'
import Edit from './pages/Edit.js'
import Home from './pages/Home.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
