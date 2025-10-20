
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import Button from './components/Button';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from "./pages/BlogPage";
import BlogSinglePage from "./pages/BlogSinglePage";
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import DashboardLayout from './pages/Dashboard/DashboardLayout'
import DashboardHome from './pages/Dashboard/DashboardHome'
import DashboardProfile from './pages/Dashboard/DashboardProfile'
import DashboardSettings from './pages/Dashboard/DashboardSettings'

function App() {
  return(
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
        <Header/>
        <main className="flex-grow container mx-auto p-6 mt-6 bg-white shadow-xl rounded-lg">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogSinglePage />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/dashboard" element={<DashboardLayout/>}>
              <Route index element={<DashboardHome/>} />
              <Route path="profile" element={<DashboardProfile/>} />
              <Route path="settings" element={<DashboardSettings/>} />
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App
