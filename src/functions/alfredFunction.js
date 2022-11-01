const alfredFunction = () => {
   const miseEnPlaceList = Array.from(document.querySelectorAll('#miseEnPlace label'));
   const ingredientsList = Array.from(document.querySelectorAll('#ingredients li'));
   const cookingList = Array.from(document.querySelectorAll('#cooking li'));
   let theTitle = 'opa'
   
   if (document.getElementById('recipeTitle')) {
      theTitle = document.getElementById('recipeTitle').textContent;
   }

   let miseEnPlace = []
   let ingredients = []
   let cooking = []

   for (let i = 0; i < miseEnPlaceList.length; i++) {
      miseEnPlace.push(miseEnPlaceList[i].textContent)
   }
   for (let i = 0; i < ingredientsList.length; i++) {
      ingredients.push(ingredientsList[i].textContent)
   }
   for (let i = 0; i < cookingList.length; i++) {
      cooking.push(cookingList[i].textContent)
   }

   const theContent = [[
      'Mise en Place',
      miseEnPlace,
   ],[
      'Ingredients',
      ingredients,
   ],[
      'Cooking',
      cooking,
   ]];

   return (
      [theTitle, theContent]
   )
}

export default alfredFunction;