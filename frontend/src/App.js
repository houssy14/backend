import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Productbyid from "./pages/Productbyid";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from './components/search';
import Navbar from './components/Navbar';
import News from './components/News';
import Cardlist from "./components/Cardlist";
import Groupe from "./components/Groupe";







function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            <>
      <Route path="/Groupe" element={<Groupe />}/>
            <Route path="/CardList" element={<Cardlist />} />
            <Route path="/News" element={<News />} />
            <Route path="/Navbar" element={<Navbar/>} />
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<Add />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/product/:id" element={<Productbyid />} />
              <Route path='/search' element={<Search/>} />
         

            </>
          <>
        

          </>
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;