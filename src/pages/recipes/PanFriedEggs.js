import { useOutletContext } from "react-router-dom/dist";
import { AlfredButton } from "../../components/AlfredButton";

function PanFriedEggs() {

   const obj = useOutletContext();

   return (
      <main>
         <h2 id="recipeTitle">Pan Fried Eggs</h2>

         <AlfredButton toggleFunction={obj.toggleActive} />

         <div id="miseEnPlace" className="recipeStyle">
            <h3>Mise en Place</h3>
            <ul id="miseEnPlaceList">
               <label>
                  <input type='checkbox' />Egg(s)
               </label>
               <label>
                  <input type='checkbox' />Butter
               </label>
               <label>
                  <input type='checkbox' />Salt
               </label>
               <label>
                  <input type='checkbox' />A Pan
               </label>
            </ul>
         </div>

         <div id="ingredients" className="recipeStyle">
            <h3>Ingredients</h3>
            <p>To make each egg, you will need:</p>
            <ul>
               <li>1 Egg</li>
               <li>Half spoon of butter</li>
            </ul>
         </div>

         {/* <div id="considerations" className="recipeStyle">
            <h3>Considerations</h3>
            <p></p>
         </div>

         <div id="tips" className="recipeStyle">
            <h3>Tips</h3>
            <p></p>
         </div> */}

         <div id="cooking" className="recipeStyle">
            <h3>Cooking Method</h3>
            <ol>
               <li>
                  If you are using a Nonstick Pan, Put the butter in the pan while it's still cold
               </li>
               <li>
                  If not, heat the pan until a medium temperature and then thrown the butter
               </li>
               <li>
                  Turn the heat on low and wait for the butter to melt completelly, try not to get the pan too hot
               </li>
               <li>
                  If you want a more presentable eggs, you should add the salt (and pepper if desirable) below the eggs
               </li>
               <li>
                  Don't touch the egg until there's a layer of white totally cooked, after this, check if the eggs is not sticked
               </li>
               <li>
                  If the egg is sticked, try to loosen it by the sides first, then the yolk
               </li>
               <li>
                  The perfect fried egg is when the white is almost totally cooked, but the yolk is still most liquid
               </li>
            </ol>
         </div>
      </main>
   )
}

export default PanFriedEggs;