import './App.css';
import { AuthProvider } from './providers/UserProvider';
import Router from './Router';


function App() {
  return (
      <AuthProvider>
        <Router />
      </AuthProvider>
  );
}

export default App;
 