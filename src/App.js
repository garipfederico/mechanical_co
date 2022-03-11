import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsGrid from './components/Grid'

function App() {
  return (

    <div className="App bg-light bg-gradient">
      <header className='h3 p-3 bg-dark bg-gradient text-white'>Status Dashboard</header>
      <CardsGrid></CardsGrid>
    </div>
  );
}

export default App;
