import { QueryClient, QueryClientProvider } from 'react-query';
import { TestGet } from './pages/testGet';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <TestGet></TestGet>
      </div>
    </QueryClientProvider >
  );
}

export default App;
