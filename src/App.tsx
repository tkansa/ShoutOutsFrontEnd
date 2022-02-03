import { Link } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ShoutOuts from './components/ShoutOuts';
import ShoutOutsByName from './components/ShoutOutsByName';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Shout Outs</h1>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<ShoutOuts />} />
          <Route path="/user/:name" element={< ShoutOutsByName />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
