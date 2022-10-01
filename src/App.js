import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Egg from "./pages/Egg";
import Hamburguer from "./pages/Hamburguer"
import Desert from "./pages/Desert";
import Pasta from "./pages/Pasta";
import Pizza from "./pages/Pizza";
import Brownie from "./pages/deserts/Brownie";

import "./styles/recipes.css";


function App() {
   return (
      <Layout>
         <Routes>

            {/* MAIN */}
            <Route path="/" element={<Main />} />

            {/* Header Links */}
            <Route path="/hamburguer/" element={<Hamburguer />} />
            <Route path="/pasta/" element={<Pasta />} />
            <Route path="/pizza/" element={<Pizza />} />
            <Route path="/deserts/" element={<Desert />} />
            <Route path="/egg/" element={<Egg />} />

            {/* Deserts */}
            <Route path="/deserts/brownie" element={<Brownie />} />

         </Routes>
      </Layout>
   );
}

export default App;
