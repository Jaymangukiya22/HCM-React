import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Input from './components/Input';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Container />} />
        <Route exact path='/details' element={<Input />} />
        <Route exact path='/checkup' element={<Input />} />
      </Routes>
    </Router>
  );
}

export default App;
