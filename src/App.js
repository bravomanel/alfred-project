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
      <>

         {/* <div id='emptySpace'></div> */}
         <Routes>

            {/* MAIN */}
            <Route path="/" element={<Layout />}>
               <Route path="/index.html" element={<Layout />}/>
               <Route index element={<Main />}/>

            {/* Header Links */}
            <Route path="/pasta/" element={<Pasta />} />
            <Route path="/pizza/" element={<Pizza />} />

            {/* Deserts */}
            <Route path="deserts">
               <Route index element={<Desert />} />
               <Route path="brownie" element={<Brownie />} />
            </Route>

            {/* Hamburguer */}
            <Route path="/hamburguer">
               <Route index element={<Hamburguer />} />
               <Route path="meat" element={<Meat />} />
            </Route>

            {/* Eggs */}
            <Route path="/eggs">
               <Route index  element={<Eggs />}/>
               <Route path="/eggs/pan_fried" element={<PanFried />} />
            </Route>

            </Route>
         </Routes>
      </>
   );
}

export default App;
