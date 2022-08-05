import './App.css';
import { UserProvider } from './providers/UserProvider';
import Router from './Router';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
}

export default App;
