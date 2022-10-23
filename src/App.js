import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Stores from './components/Stores'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Card1 />
      <Card2 />
      <Stores />
    </div>
  );
}

export default App;
