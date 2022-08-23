import { CreateEvent, Dashboard, DetailEvent, EditEvent, Login } from './Pages';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Role, Token } from './Utils';

const setToken = (userToken) => {
  sessionStorage.setItem('token', JSON.stringify(userToken));
};

const App = () => {
  const token = Token();
  const role = Role();

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ tokenAvailable, redirectPath = '/login' }) => {
    const location = useLocation();
    tokenAvailable = !!JSON.parse(localStorage.getItem('token'));

    return tokenAvailable ? (
      <Outlet />
    ) : (
      <Navigate to={redirectPath} replace state={{ from: location }} />
    );
  };

  // eslint-disable-next-line react/prop-types
  const ProtectedLogin = ({ tokenAvailable, redirectPath = '/' }) => {
    const location = useLocation();
    tokenAvailable = !!JSON.parse(localStorage.getItem('token'));

    return tokenAvailable ? (
      <Navigate to={redirectPath} replace state={{ from: location }} />
    ) : (
      <Outlet />
    );
  };

  // eslint-disable-next-line react/prop-types
  const ProtectedAdmin = ({ roleAdmin, redirectPath = '/' }) => {
    const location = useLocation();
    roleAdmin = JSON.parse(localStorage.getItem('role'));

    return roleAdmin === 'admin' ? (
      <Outlet />
    ) : (
      <Navigate to={redirectPath} replace state={{ from: location }} />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute tokenAvailable={token} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training/:id" element={<DetailEvent />} />
          <Route path="/mytraining/:id" element={<DetailEvent />} />
          <Route element={<ProtectedAdmin roleAdmin={role} />}>
            <Route path="/training/create" element={<CreateEvent />} />
            <Route path="/mytraining/edit/:id" element={<EditEvent />} />
            <Route path="/training/edit/:id" element={<EditEvent />} />
          </Route>
        </Route>

        <Route element={<ProtectedLogin tokenAvailable={token} />}>
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
