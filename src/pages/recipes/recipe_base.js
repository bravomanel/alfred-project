import { useOutletContext } from "react-router-dom/dist";
import { AlfredButton } from "../../components/AlfredButton";

function Title() {

   const obj = useOutletContext();

   return (
      <main>
         <h2 id="recipeTitle">Title</h2>

         <AlfredButton toggleFunction={obj.toggleActive} />

         <div id="miseEnPlace" className="recipeStyle">
            <h3>Mise en Place</h3>
            <ul id="miseEnPlaceList">
               <label>
                  <input type='checkbox' />Butter
               </label>
               <label>
                  <input type='checkbox' />Butter
               </label>
            </ul>
         </div>

         <div id="ingredients" className="recipeStyle">
            <h3>Ingredients</h3>
            <ul>
               <p>To make X grams of Y, which will serve around Z portions, you will need:</p>
               <li></li>
            </ul>
         </div>

         <div id="considerations" className="recipeStyle">
            <h3>Considerations</h3>
            <p></p>
         </div>

         <div id="tips" className="recipeStyle">
            <h3>Tips</h3>
            <p></p>
         </div>

         <div id="cooking" className="recipeStyle">
            <h3>Cooking Method</h3>
            <ol>
               <li></li>
            </ol>
         </div>
      </main>
   )
}

export default Title;