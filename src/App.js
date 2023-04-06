
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'; 
import Pages from './components/pages/Pages';
import Upcom from './components/upcoming/Upcom';
import Moviedet from './components/movieDetail/Moviedet';
import Login from './components/Login/Login';
import Profile from './components/profile/Profile';
import Reg from './components/Reg/Reg';
import Tv from './components/tv/Tv';
import Search from './components/search/Search';
import NewR from './components/newrelease/NewR';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="log" element={<Login/>}></Route>
      <Route path="reg" element={<Reg/>}></Route>
      <Route path="prodb" element={<Profile/>}></Route>
      <Route path="/" element={<Pages/>}></Route>
      <Route path="upcom" element={<Upcom/>}></Route>
      <Route path="new" element={<NewR/>}></Route>
      <Route path="movie/:id" element={<Moviedet/>}></Route>
      <Route path="tv" element={<Tv/>}></Route>
      <Route path="search/:id" element={<Search/>}></Route>
    </Routes>
    </BrowserRouter></>
  );
}

export default App;
