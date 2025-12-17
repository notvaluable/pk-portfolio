import Home from './pages/Home'
import NotFound from './pages/Notfound'
import Portfolio from './pages/Portfolio'
import { Route, Routes } from 'react-router-dom'
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Education from './components/Education';
import Contact from './components/Contact';
import { useContext } from 'react';
import { HamburgerMenuContext } from './context/GlobalContext';

const App = () => {

  const [IsHamburgerActive] = useContext(HamburgerMenuContext);
  
  return (
    <div className={`bg-gray-300 h-screen md:overflow-auto ${IsHamburgerActive ? "overflow-hidden" : "overflow-auto"}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} >
            <Route path='about' element={ <About /> } />
            <Route path='work-experience' element={<Work />} />
            <Route path='skills-n-certificates' element={<Skills />} />
            <Route path='education' element={<Education />} />
            <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App