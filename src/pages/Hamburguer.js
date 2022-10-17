import { Link } from "react-router-dom"

function Hamburguer() {
   return (
      <main>
         <h2>Hamburguer</h2>
         <ul>
            <li><Link to="meat">Hamburguer Meat</Link></li>
            <li>Litheratura Burguer</li>
            <li>Classic Burguer</li>
            <li></li>
        </ul>
      </main>
   )
}

export default Hamburguer;