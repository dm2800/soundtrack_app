import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SongForm from './components/SongForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/add" element={<SongForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
