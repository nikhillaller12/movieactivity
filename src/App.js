import './App.css';
import Moviefetch from './Components/Moviefetch';
import Navbar from './Components/Navbar';
import Favourite from './Components/Favourite';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import {MovieContextProvider} from './Components/Context'


  const App = () => {
          return <>
          <MovieContextProvider>
            <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Moviefetch/>}/>
        <Route exact path='/f'element={<Favourite/>}/>
      </Routes>
      </Router>
      </MovieContextProvider>
          </>
  };

export default App;
