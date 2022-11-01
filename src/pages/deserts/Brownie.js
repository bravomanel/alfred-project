import { useOutletContext } from "react-router-dom/dist";
import { AlfredButton } from "../../components/AlfredButton";

function Brownie() {

   const obj = useOutletContext();

   return (
      <main>
         <h2 id="recipeTitle">Brownie</h2>

         <AlfredButton toggleFunction={obj.toggleActive} />

         <div id="miseEnPlace" className="recipeStyle">
            <h3>Mise en Place</h3>
            <ul id="miseEnPlaceList">
               <label>
                  <input type='checkbox' />Butter
               </label>
               <label>
                  <input type='checkbox' />Chocolate
               </label>
               <label>
                  <input type='checkbox' />Sugar
               </label>
               <label>
                  <input type='checkbox' />Flower
               </label>
               <label>
                  <input type='checkbox' />Eggs
               </label>
               <label>
                  <input type='checkbox' />Instant Coffee
               </label>
               <label>
                  <input type='checkbox' />Spoon
               </label>
            </ul>
         </div>

         <div id="ingredients" className="recipeStyle">
            <h3>Ingredients</h3>
            <ul>
               <p>To make a 400g Brownie, which will serve around 10 portions, you will need:</p>
               <li>125g of butter</li>
               <li>125g of chocolate</li>
               <li>100g of sugar</li>
               <li>50g flower</li>
               <li>2 eggs</li>
               <li>1/4 spoon of salt (1,5g)</li>
            </ul>
         </div>

         <div id="considerations" className="recipeStyle">
            <h3>Considerations</h3>
            <p>The semisweet chocolate on this recipe is considered to be 50% Cocoa and 50% Sugar</p>
            <p>The best version of this recipe uses a 25% cocoa to 75% sugar, thus you could use pure cocoa with sugar or sweeter chocolates with less sugar, but changing the amounts to try to keep the proportion. </p>
            <p>For a precise amount use the calculator below:</p>
         </div>

         <div id="tips" className="recipeStyle">
            <h3>Tips</h3>
            <ul>
               <li>The dough must be at least 5cm tall, use a small size tray</li>
               <li>Use parchment paper with butter or oil below to grease</li>
               <li>Let it cool for about 10m on the tray, after this let it cool outside the tray</li>
               <li>You may use Vanilla Extract, Coffee Powder and Salt to enhance the flavours</li>
               <li>Sprinkle a bit of salt after halfway through cooking to enhance even more flavours</li>
               <li>Beat the eggs and sugar for a long time for maximum aeration</li>
               <li>Don't mix the 'dough' too much after putting the flour</li>
            </ul>
         </div>

         <div id="cooking" className="recipeStyle">
            <h3>Cooking Method</h3>
            <ol>
               <li>Turn the oven on at 170℃</li>
               <li>Put the butter in the pot and start melting on low temperature</li>
               <li>Add the chocolate and keep stirring</li>
               <li>Add 1 egg at the time</li>
               <li>Add the other ingredients</li>
               <li>After being homogenius, put in a baking dish</li>
               <li>Put in the oven farthest from the heat for about 20-30 minutes</li>
               <li>It's ready when the outside is kinda crispy and the inside it's still moist</li>
               <li>Enjoy!</li>
            </ol>
         </div>
      </main>
   )
}

export default Brownie;