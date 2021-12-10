import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ViewProducts from "./components/ViewProducts";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/viewproducts" element={<ViewProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
