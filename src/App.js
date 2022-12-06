import Student from './pages/student'
import Tutore from './pages/tutore'
import Admin from  './pages/admin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/1'} element={<Student />}/>
        <Route path={'/2'} element={<Tutore />}/>
        <Route path={'/3'} element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
