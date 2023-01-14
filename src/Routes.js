import Login from './pages/Login';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const ProtectedRoutes = ({ redirectTo }) => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}