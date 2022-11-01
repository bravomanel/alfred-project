import { Link } from 'react-router-dom';
import { useState } from "react";


function Header(props) {
   const [isActive, setActive] = useState(false);

   const toggleClass = () => {
      setActive(!isActive);
   }

   const disableClass = () => {
      if (isActive === true) {
         setActive(!isActive);
      }
   }

   // const btnHandler = () => {
   //    props.toggleFunction();
   //    alfredFunction();
   // }

   return (
      <header>

         <div id='titleContainer'>

            <div className={isActive ? "change" : null} id='mobileMenuButton' onClick={() => {
               toggleClass()
            }}>

               <div id='navSlash1'></div>
               <div id='navSlash2'></div>
               <div id='navSlash3'></div>
            </div>

            <h1 id='h1'>
               <Link to="/" className='link' onClick={disableClass}>
                  Alfred
               </Link>
            </h1>
         </div>

         <nav id="mobileMenuContainer" className={isActive ? null : "mobileMenuTransition "}>
            <ul id="navMenuMobile">
               <li>
                  <Link to="/hamburguer" onClick={disableClass}>Hamburguer</Link>
               </li>
               <li>
                  <Link to="/pasta" onClick={disableClass}>Pasta</Link>
               </li>
               <li>
                  <Link to="/pizza" onClick={disableClass}>Pizza</Link>
               </li>
               <li>
                  <Link to="/deserts" onClick={disableClass}>Deserts</Link>
               </li>
               <li>
                  <Link to="/eggs" onClick={disableClass}>Eggs</Link>
               </li>
            </ul>
         </nav>


         <nav id="desktopMenuContainer">
            <ul id="navMenuDesktop">
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
                  <Link to="/eggs">Eggs</Link>
               </li>
            </ul>
         </nav>

      </header>
   )
}

export default Header;