import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminProfile } from './pages/AdminProfile';
import { AdminSection } from './pages/AdminSection';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { ErpModules } from './pages/ErpModules';
import { ForgotPassword } from './pages/ForgotPassword';
import { Home } from './pages/Home';
import { Industries } from './pages/Industries';
import { Login } from './pages/Login';
import { Portfolio } from './pages/Portfolio';
import { ResetPassword } from './pages/ResetPassword';
import { Services } from './pages/Services';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/:section" element={<AdminSection title="Management Console" />} />
      <Route path="/admin/:group/:section" element={<AdminSection title="Management Console" />} />
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/erp-modules" element={<ErpModules />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}
