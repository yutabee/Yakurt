import './App.css';
import { UserProvider } from './providers/UserProvider';
import Router from './Router';


function App() {
  return (
      <UserProvider>
        <Router />
      </UserProvider>
  );
}


export default App;
