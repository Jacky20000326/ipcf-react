import React from 'react';
import { BrowserRouter,Routes,Route,} from "react-router-dom"
import Home from './pages/Home/Home';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
