import './App.css';
import Navbar from './components/Navbar';
import ForgotPage from './components/pages/ForgotPassword';
import Layout from './components/pages/Layout';
import LoginPage from './components/pages/LoginPage';
import NewPasswordPage from './components/pages/NewPasswordPage';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <ForgotPage/> */}
      {/* <NewPasswordPage/> */}
      {/* <Navbar/> */}
      <Layout/>
    </div>
  );
}

export default App;
