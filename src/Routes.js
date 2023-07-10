import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import News from './pages/News.jsx';
import Bills from './pages/Bills.jsx';
import CommonAreas from './pages/CommonAreas.jsx';
import Test from './pages/Test.jsx';
import RulesOfProcedure from './pages/RulesOfProcedure.jsx';
import RoleDistribution from './pages/RoleDistribution.jsx';

// function ProtectedRoutes({ redirectTo }) {
//   const token = localStorage.getItem('token');
//   return token ? <Outlet /> : <Navigate to={redirectTo} />;
// }

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/registro' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/noticias' element={<News />} />
      <Route path='/contas' element={<Bills />} />
      <Route path='/areas-comuns' element={<CommonAreas />} />
      <Route path='/teste' element={<Test />} />
      <Route path='/regimento-interno' element={<RulesOfProcedure />} />
      <Route path='/permissoes' element={<RoleDistribution />} />
      <Route path='*' element={<h1>Not Found 404</h1>} />
    </Routes>
  );
}
