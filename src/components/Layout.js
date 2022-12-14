import { useState } from 'react';
import alfredFunction from '../functions/alfredFunction';

import Header from "./Header";
import Disclaimer from "./Disclaimer";
import Alfred from "./Alfred";
import { Outlet } from 'react-router-dom/dist';




function Layout(props) {
   const [isActive, setActive] = useState(false);

   // function to toggle Class and Active/Hide state CSS
   const toggleActive = () => {
      setActive(!isActive);
   }


   // COMPLEMENT OF ALFRED FUNCTION, to be replaced somewhere else
   const [theTitle, theContent] = alfredFunction();
   // const miseEnPlace = theContent[0];



   // let theMiseEnPlace = [miseEnPlace[0]]
   // theMiseEnPlace.push(miseEnPlace[1])
   //    // makeList(miseEnPlace[1])
   //    console.log(miseEnPlace[0])

   return (
      <section>
         <Header toggleFunction={props.toggleActive} />
         <div id='emptySpace'></div>

         <Outlet context={{toggleActive: toggleActive}} />
         <Alfred
            containerClass={isActive}
            toggleFunction={toggleActive}
            title={theTitle}
            content={theContent}
         />
         {/* <Disclaimer /> */}
      </section>
   )
}

export default Layout;