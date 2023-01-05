import './App.css';
import Container from '@mui/material/Container';
import { About, Contact, Experiences } from './pages';


function App() {
  return (
    <div className="App">
      <Container>
      <About />
      <Contact />
      <Experiences />
      </Container>
    </div>
  );
}

export default App;
