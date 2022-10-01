import { Link } from 'react-router-dom';

function Header() {
   return (
      <header>
         <Link to="/">
            <h1 id='h1'>
               Alfred
            </h1>
         </Link>
         <nav id="nav">
            <ul id="categoriesHeader">
               <li>
                  <Link to="/hamburguer">Hamburguer</Link>
               </li>
               <li>
                  <Link to="/pasta">Pasta</Link>
               </li>
               <li>
                  <Link to="/pizza">Pizza</Link>
               </li>
               <li>
                  <Link to="/deserts">Deserts</Link>
               </li>
               <li>
                  <Link to="/egg">Eggs</Link>
               </li>
            </ul>
         </nav>
      </header>
   )

}

export default Header;