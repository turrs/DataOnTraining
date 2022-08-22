import { CreateEvent, Dashboard, DetailEvent, Login } from './Pages';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const setToken = (userToken) => {
  sessionStorage.setItem('token', JSON.stringify(userToken));
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login setToken={setToken} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/training/create" element={<CreateEvent />} />
        <Route path="/training/:id" element={<DetailEvent />} />
        <Route path="/mytraining/:id" element={<DetailEvent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
