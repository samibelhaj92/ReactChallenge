import './App.css';
import About from './component/aboutme';
import Contact from './component/contact';
import Foooter from './component/foooter';
import Top from './component/header'
import Project from './component/project';

function App() {
  return (
    <div className="App">
      <Top/>
      <About/>
      <Project/>
      <Contact/>
      <Foooter/>
    </div>
  );
}

export default App;
