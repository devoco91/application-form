import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apply from './components/Apply';
import Contact from './components/Contact';
import Store from './components/Store';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
          <Route path="/" element={ <Store/> } />
          {/* <Route path="/" element={ <Apply/> } /> */}
          <Route path="/contact" element={ <Contact/> } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
