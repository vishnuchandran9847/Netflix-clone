
import './App.css';

import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rawpost from './Components/Rawpost/Rawpost';

import {originals,actions,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from "./url";


function App() {
 


  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rawpost url={originals} title="Netflix Originals"     />
      <Rawpost url={actions} title="Action Movies" isSmall   />
      <Rawpost url={ComedyMovies} title="Comedy Movies" isSmall   />
      <Rawpost url={HorrorMovies} title="Horror Movies" isSmall   />
      <Rawpost url={RomanceMovies} title="Romance Movies" isSmall   />
      <Rawpost url={Documentaries} title="Documentaries" isSmall   />
     
    </div>
  );
}

export default App;
