import './App.css';
import Nav from './Nav'
function App() {
  return (
    <div style={{width:'100%', height:'100vh', }} className="App">
      {Nav({color1:'black', color2:'pink'})}
    </div>
  );
}

export default App;
