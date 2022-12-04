import logo from './logo.svg';
import Search from './Components/Home';
import Container from './Components/Container';
import Recipe from './Components/Recipe';
import Home from './Components/Home';
import Header from './Components/Layout/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/recipe/:id" element={<Recipe />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
     </Router>
    
  );
}

export default App;
