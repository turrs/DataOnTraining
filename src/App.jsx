import { Dashboard, Login } from './Pages';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Role, Token } from './Utils';
const setToken = (userToken) => {
  sessionStorage.setItem('token', JSON.stringify(userToken));
};
const App = () => {
  const token = Token();
  const role = Role();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
