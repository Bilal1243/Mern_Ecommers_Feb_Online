import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
      </Routes>
    </>
  );
}

export default App;
