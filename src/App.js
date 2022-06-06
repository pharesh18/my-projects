import './App.css';
import ComponentA from './Components/ComponentA';
import MainModal from './Components/MainModal';
import QuizApp from './Components/QuizApp';
import UserContext from './Components/userContext';
import PhoneLock from './Pages/PhoneLock';
import ToDoApp from './Pages/ToDoApp';
import WifiTurnOnOff from './Pages/WifiTurnOnOff';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedirectPhoneLock from './Pages/RedirectPhoneLock';
import PokemonAPI from './Pages/PokemonAPI';

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <MainModal /> */}


      {/* <QuizApp /> */}


      {/* <UserContext.Provider value={"Haresh Prajapati"}> */}
      {/* <ComponentA></ComponentA> */}
      {/* </UserContext.Provider> */}


      {/* <ToDoApp /> */}


      {/* <Routes>
          <Route path='/' element={<PhoneLock />} />
          <Route path='/redirect' element={<RedirectPhoneLock />} />
        </Routes> */}


      {/* <WifiTurnOnOff /> */}


      <PokemonAPI />
    </div>
    /* </Router> */
  );
}

export default App;





