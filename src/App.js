import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Eggs from "./pages/Eggs";
import Hamburguer from "./pages/Hamburguer"
import Desert from "./pages/Desert";
import Pasta from "./pages/Pasta";
import Pizza from "./pages/Pizza";

import Brownie from "./pages/deserts/Brownie";

import Meat from "./pages/hamburguer/Meat";

import PanFried from "./pages/eggs/PanFried";

import "./styles/mainStyle.css";


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
            <Route path="/eggs/" element={<Eggs />} />

            {/* Deserts */}
            <Route path="/deserts/brownie" element={<Brownie />} />

            {/* Hamburguer */}
            <Route path="/hamburguer/meat" element={<Meat />} />

            {/* Eggs */}
            <Route path="/eggs/pan_fried" element={<PanFried />} />

         </Routes>
      </Layout>
   );
}

export default App;
