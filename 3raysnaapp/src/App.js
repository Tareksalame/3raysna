import logo from './logo.svg';
import './App.css';
import { UsersProvider } from './userContext';

import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import GetLocation from './components/GetLocation';
import EnterPage from './components/EnterPage';
import Manager from './components/Manager';


function App() {
  return (
    <div className="App">
    <UsersProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<EnterPage/>}/>
          <Route path='/Manager' element={<Manager/>}/>
        </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
