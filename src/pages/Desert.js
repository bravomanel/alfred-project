import { Link } from "react-router-dom";

function Deserts() {
   return (

         <div>
            <h2>Deserts</h2>
            <ul>
               <li><Link to="/deserts/brownie">Brownie</Link></li>
               <li>Beijinho</li>
               <li>Brigadeiro</li>
               <li>Cake</li>
            </ul>

         </div>
   )
}

export default Deserts;