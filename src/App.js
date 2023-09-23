import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import BioScreen from './pages/BioScreen/BioScreen';
import BioEditScreen from './pages/BioEditScreen/BioEditScreen';
import SkillsEditScreen from './pages/SkillsEditScreen/SkillsEditScreen';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<BioScreen />} />
            <Route path='/editBio' element={<BioEditScreen />} />
            <Route path='/editSkills' element={<SkillsEditScreen />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
