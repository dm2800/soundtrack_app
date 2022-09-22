import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SongForm from './components/SongForm';
import EditSong from './components/Edit';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Display from './components/Display';
     

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/add" element={<SongForm />} />
        <Route path="/edit/:id" element={<EditSong />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
