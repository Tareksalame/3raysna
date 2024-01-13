import logo from './logo.svg';
import './App.css';
import { UsersProvider } from './userContext';
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import EnterPage from './components/EnterPage';
import Menu from './components/Menu';
import TakeAwayOrIn from './components/TakeAwayOrIn';
import Meal from './components/Meal';
import Drink from './components/Drink';
import InformationsPage from './components/InformationsPage';
import FinalCartComponent from './components/FinalCartComponent';
import ThankYouPage from './components/ThankYouPage';
import Notes from './components/Notes';


function App() {

  



  return (
    <div className="App">
    <UsersProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<ThankYouPage/>}/>
          <Route path='/EnterPage' element={<EnterPage/>}/>
          <Route path='/Choose' element={<TakeAwayOrIn/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Informations' element={<InformationsPage/>}/>
          <Route path='/Meal' element={<Meal/>}/>
          <Route path='/Cart' element={<FinalCartComponent/>}/>
          <Route path='/Drink' element={<Drink/>}/>
          <Route path='/Notes' element={<Notes/>}/>


        </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
