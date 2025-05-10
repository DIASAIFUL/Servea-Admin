import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

// Public Pages
import Login from './pages/Login';
import Register from './pages/Register';

// Protected Pages
import Dashboard from './components/dashboard/Dashboard';
import Users from './components/users/Users';
import Providers from './components/providers/Providers';
import Transactions from './components/transactions/Transactions';
import Careers from './components/careers/Careers';
import Community from './components/community/Community';
import NewsletterSubscribers from './components/newsletter/NewsletterSubscribers';
import Chats from './components/chats/Chats';
import Settings from './components/settings/Settings';
import CreateCategoryWithSubcategory from './pages/CreateCategoryWithSubcategory';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/community" element={<Community />} />
            <Route path="/newsletter-subscribers" element={<NewsletterSubscribers />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/categories" element={<CreateCategoryWithSubcategory />} />
            
          </Route>
          
          {/* Redirect any unknown routes to Dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;