import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Kita mengimport folder halamannya.
// React otomatis akan mencari file index.jsx di dalam folder tersebut.
// import BerandaPage from './page/Beranda'
import {Base, FormPengajuan} from './page/base'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Base />} />
        <Route path="/form-dana" element={<FormPengajuan />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App