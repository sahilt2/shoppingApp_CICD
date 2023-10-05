import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import router from './router/Router';
import Header from "./Header";
import Footer from "./Footer";



function App() {
  return (
    <div >
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
    </div>
  );
}

export default App;
