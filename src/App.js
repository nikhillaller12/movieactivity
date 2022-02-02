import './App.css';
import Moviefetch from './Components/Moviefetch';
import Navbar from './Components/Navbar';


  const App = () => {
          return (
            <div className='container-fluid movie-app'>
              <div className='column'>
                <Navbar/>
              <Moviefetch/>
              </div>
            </div>
          );
  };

export default App;
