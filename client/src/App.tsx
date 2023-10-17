import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Estates as EstatesPage } from './modules/estates';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from './modules/components';
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<EstatesPage />} />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
