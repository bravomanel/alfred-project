import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import Main from "./pages/Main";
import Eggs from "./pages/Eggs";
import Hamburguer from "./pages/Hamburguer"
import Desert from "./pages/Desert";
import Pasta from "./pages/Pasta";
import Pizza from "./pages/Pizza";

import Brownie from "./pages/recipes/Brownie";
import Esfiha from "./pages/recipes/Esfiha";
import Meat from "./pages/recipes/Meat";
import PanFriedEggs from "./pages/recipes/PanFriedEggs";

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
               <Route path="pan-fried-eggs" element={<PanFriedEggs />} />
            </Route>

            {/* Pizza */}
            <Route path="/pizza">
               <Route index  element={<Pizza />}/>
               <Route path="esfiha" element={<Esfiha />} />
            </Route>

            </Route>
         </Routes>
      </>
   );
}

export default App;
