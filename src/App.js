import "./App.css";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GridDesign } from "./components/GridDesign";
import { DirectorsPage } from "./pages/DirectorsPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <div>
      <NavBar />
      <GridDesign />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/directors"} element={<DirectorsPage />}></Route>
        <Route path={"/contact"} element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
