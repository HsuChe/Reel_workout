import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/workouts"
                element={
                  <PrivateRoute>
                    <div>My Workouts Page (Coming Soon)</div>
                  </PrivateRoute>
                }
              />
              <Route
                path="/discover"
                element={
                  <PrivateRoute>
                    <div>Discover Page (Coming Soon)</div>
                  </PrivateRoute>
                }
              />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
