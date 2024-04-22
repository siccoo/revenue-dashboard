import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Home />
      </div>
    </QueryClientProvider>
  )
}

export default App;
