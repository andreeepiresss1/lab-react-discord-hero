// src/App.jsx
import './App.css';
import Buttons from './Components/Buttons';
import Heading from './Components/Heading';
import NavigationBar from './Components/NavigationBar';
import logo1 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f646973636f72642d6c6f676f2d62672e706e67.png';
import logo2 from './assets/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f6d656e752d69636f6e2d62672e706e67.png';

function App() {
  return (
    <div className="App">
      <nav id="navBar">
        <img src={logo1} alt="example" id="logo1"/>
        <img src={logo2} alt="example" id="logo2"/>
      </nav>
      <Heading />
      <Buttons />
    </div>
  );
}

export default App;