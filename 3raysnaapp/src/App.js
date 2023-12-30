import logo from './logo.svg';
import './App.css';
import { UsersProvider } from './userContext';
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import EnterPage from './components/EnterPage';
import Manager from './components/Manager';
import Menu from './components/Menu';
import TakeAwayOrIn from './components/TakeAwayOrIn';


function App() {
  return (
    <div className="App">
    <UsersProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<EnterPage/>}/>
          <Route path='/Choose' element={<TakeAwayOrIn/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Manager' element={<Manager/>}/>
        </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
