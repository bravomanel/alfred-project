import { Link } from "react-router-dom"

function Hamburguer() {
   return (
      <div>
         <h2>Hamburguer</h2>
         <ul>
            <li><Link to="meat">Hamburguer Meat</Link></li>
            <li>Litheratura Burguer</li>
            <li>Classic Burguer</li>
            <li></li>
        </ul>
      </div>
   )
}

export default Hamburguer;