import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Header from './components/Header';

//pages
import Upload from './pages/Upload.js';
import Home from './pages/Home.js';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/upload' element={<Upload />}></Route>
            <Route path='/videos/:id' element={<Home />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
