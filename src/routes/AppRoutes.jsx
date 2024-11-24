import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from '../pages/auth/login/Login'
import RegisterForm from '../pages/auth/register/Register'
import CustomerManagement from '../pages/dashboard/features/customer-management/CustomerManagement'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/customer-management" element={<CustomerManagement />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default AppRoutes
