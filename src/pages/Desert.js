import { Link } from "react-router-dom";

function Deserts() {
   return (
         <main>
            <h2>Deserts</h2>
            <ul>
               <li><Link to="brownie">Brownie</Link></li>
               <li>Beijinho</li>
               <li>Brigadeiro</li>
               <li>Cake</li>
            </ul>

         </main>
   )
}

export default Deserts;