import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Tambahdata from './component/tambahdata';
import Tampildata from './component/tampildata';
import EditData from './component/editdata';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tampildata/>} />
        <Route path="/tambah" element={<Tambahdata/>} />
        <Route path="/edit/:id" element={<EditData/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
