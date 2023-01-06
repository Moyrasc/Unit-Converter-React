import { useEffect, useState } from 'react';
import './App.css';
import Conversor from './Components/Conversor/Conversor';
import Favorites from './Components/Favorites/Favorites';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favs")) || [])
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favorites))
  },[favorites])

  return (
    <div className="App">
     <Header />
     <main className='App-main'>
      <Conversor favorites={favorites} setFavorites={setFavorites}/>
      <Favorites favorites={favorites} setFavorites={setFavorites}/>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
