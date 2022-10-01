function Brownie() {
   return (
      <div>
         <h2>Brownie</h2>
         <button id="alfredBtn">Alfred's Guide</button>
         
         <div id="needed" class="recipeStyle">
            <h3>Itens you need</h3>
            <ul>
               <li>Butter</li>
               <li>Chocolate</li>
               <li>Sugar</li>
               <li>Flower</li>
               <li>Eggs</li>
               <li>Salt</li>
               <li>A pot</li>
               <li>A spoon</li>
            </ul>
         </div>

         <div id="ingredients" class="recipeStyle">
            <h3>Ingredients</h3>
            <ul>
               <h4>To make a 400g Brownie, which will serve around 10 portions, you will need:</h4>
               <li>125g of butter</li>
               <li>125g of chocolate</li>
               <li>100g of sugar</li>
               <li>50g flower</li>
               <li>2 eggs</li>
               <li>1/4 spoon of salt (1,5g)</li>
            </ul>
         </div>

         <div id="observations" class="recipeStyle">
            <h3>Observations</h3>
            <p>The semisweet chocolate on this recipe is considered to be 50% Cocoa and 50% Sugar</p>
            <p>The best version of this recipe uses a 25% cocoa to 75% sugar, thus you could use pure cocoa with sugar or sweeter chocolates with less sugar, but changing the amounts to try to keep the proportion. </p>
            <p>For a precise amount use the calculator below:</p>
         </div>

         <div id="tips">
            <h3>Tips</h3>
            <ul>
               <li>Use parchment paper with butter or oil below to grease</li>
               <li>Let it cool for about 10m on the board, after this let it cool outside the board</li>
               <li>You may use Vanilla Extract, Coffee Powder and Salt to enhance the flavours</li>
               <li>Sprinkle a bit of salt after halfway through cooking to enhance even more flavours</li>
               <li>Beat the eggs and sugar for a long time for maximum aeration</li>
               <li>Don't mix the 'dough' too much after putting the flour</li>
            </ul>
         </div>

         <div id="cooking" class="recipeStyle">
            <h3>Cooking Method</h3>
            <ol>
               <li>Turn the oven on at 170℃</li>
               <li>Put the butter in the pot and start melting on low temperature</li>
               <li>Add the chocolate and keep stirring</li>
               <li>Add 1 egg at the time</li>
               <li>Add the other ingredients</li>
               <li>After being homogenius, put in a baking dish</li>
               <li>The dough must be at least 5cm tall</li>
               <li>Put in the oven farthest from the heat for about 30m</li>
               <li>It's ready when the outside is kinda crispy and the inside it's still moist</li>
               <li>Enjoy!</li>
            </ol>
         </div>
      </div>
   )
}

export default Brownie;