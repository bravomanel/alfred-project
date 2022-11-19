import { useOutletContext } from "react-router-dom/dist";
import { AlfredButton } from "../../components/AlfredButton";

function Esfiha() {

   const obj = useOutletContext();

   return (
      <main>
         <h2 id="recipeTitle">Esfiha</h2>

         <AlfredButton toggleFunction={obj.toggleActive} />

         <div id="miseEnPlace" className="recipeStyle">
            <h3>Mise en Place</h3>
            <ul id="miseEnPlaceList">
               <label>
                  <input type='checkbox' />Flower
               </label>
               <label>
                  <input type='checkbox' />Warm Milk
               </label>
               <label>
                  <input type='checkbox' />Warm Water
               </label>
               <label>
                  <input type='checkbox' />Biological Yeast
               </label>
               <label>
                  <input type='checkbox' />Salt
               </label>
               <label>
                  <input type='checkbox' />Sugar
               </label>
               <label>
                  <input type='checkbox' />Olive Oil (or any other oil)
               </label>
               <label>
                  <input type='checkbox' />Water
               </label>
            </ul>
         </div>

         <div id="ingredients" className="recipeStyle">
            <h3>Ingredients</h3>
            <ul>
               <p>To make 900 grams of Esfiha, which will serve around 20 portions, you will need:</p>
               <li>500g of Flower</li>
               <li>150g of Warm Water</li>
               <li>150g of Warm Milk</li>
               <li>10g of Dry Yeast</li>
               <li>15g of salt</li>
               <li>25g of Sugar</li>
               <li>50g of Olive Oil</li>
            </ul>
         </div>

         <div id="considerations" className="recipeStyle">
            <h3>Considerations</h3>
            <p>If you use fresh yeast, use 3x the amount</p>
         </div>

         <div id="tips" className="recipeStyle">
            <h3>Tips</h3>
            <p>You can use any oil, doesn't need to be Olive Oil, just remeber that changes the taste</p>
         </div>

         <div id="cooking" className="recipeStyle">
            <h3>Cooking Method</h3>
            <ol>
               <li>Mix the Water, Milk and Yeast until dissolve</li>
               <li>Add the sugar and about 200g of flower</li>
               <li>Rest for 15 minutes</li>
               <li>Add the rest of flower, oil</li>
               <li>Add the salt</li>
               <li>Knead for about 5 minutes</li>
               <li>Rest for another 15 minutes</li>
               <li>Preheat the oven on 240°C</li>
               <li>Cut in balls of around 40g</li>
               <li>Open with loads of flower, then remove the excess</li>
               <li>Cook for about 8 minutes</li>
            </ol>
         </div>
      </main>
   )
}

export default Esfiha;