import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserForm from "./components/UserForm";
import UsersList from "./pages/UsersList";
import { ToastContainer } from "react-toastify";
import { IdProvider} from "./contexts/idContext";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserForm />}/>
          
            <Route 
            path="/user-list" 
            element={<IdProvider><UsersList/></IdProvider>}
            />
            
            <Route 
            path="/update-user-list" 
            element={<IdProvider><UpdateUser/></IdProvider>}
            />            
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
