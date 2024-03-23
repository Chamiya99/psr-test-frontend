
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Chamiya</h1>
        <button className="User-button" onClick={() => navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
