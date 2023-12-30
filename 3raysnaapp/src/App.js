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


function App() {

  



  return (
    <div className="App">
    <UsersProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<EnterPage/>}/>
          <Route path='/Choose' element={<TakeAwayOrIn/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Informations' element={<InformationsPage/>}/>
          <Route path='/Meal' element={<Meal/>}/>
          <Route path='/Drink' element={<Drink/>}/>
        </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
