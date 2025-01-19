import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import MainScreen from './screens/Main';
import Experience from './screens/Experience';
import Skills from './screens/Skills';
import Contact from './screens/Contact';
import Resume from './screens/Resume';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
