import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import mainPage from './pages/mainPage'
import loginPage from './pages/loginPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Link to='/' component={loginPage}></Link>
          <Link to='/main' component={mainPage}></Link>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
