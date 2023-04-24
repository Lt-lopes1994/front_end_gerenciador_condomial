import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function ProtectedRoutes({ redirectTo }) {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/registro' element={<Register />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}
