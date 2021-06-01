import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { TestGet } from './pages/testGet';
import mainPage from './pages/mainPage'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Link to='/main' component={mainPage}></Link>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
