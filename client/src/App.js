import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <p>Hey</p>
      </div>
    </QueryClientProvider >
  );
}

export default App;
