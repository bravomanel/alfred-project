import { Link } from "react-router-dom"

function Eggs() {
   return (
      <section>
         <h2>Eggs</h2>
         <ul>
            <li><Link to="pan_fried">Pan Fried</Link></li>
            <li>Scrambled</li>
            <li>Poached</li>
            <li>Coocked</li>
            <li>Bain Marie</li>
         </ul>
      </section>
   )
}

export default Eggs;