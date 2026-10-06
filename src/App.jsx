import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Kita mengimport folder halamannya.
// React otomatis akan mencari file index.jsx di dalam folder tersebut.
// import BerandaPage from './page/Beranda'
import {Base, FormPengajuan, Tanggal, Kas} from './page/base'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Tanggal />} />
        <Route path="/form-dana" element={<FormPengajuan />} />
        <Route path="/kas" element={<Kas />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App