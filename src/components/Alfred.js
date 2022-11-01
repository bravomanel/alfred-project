import { useState } from "react";

function Alfred(props) {
   const [index, setIndex] = useState(0);
   // Creates a state so it can track the THREE (or more) phases of cooking, the mise en place, the ingredient list, and the cooking method

   const guideBtnHandle = (value) => {
      let indexValue = index + value;
      if (indexValue > 2) {
         setIndex(0)
      } else if (indexValue < 0) {
         setIndex(2)
      } else {
         setIndex(indexValue);
      }
   }

   const makeList = (part) => {
      const list = [...part];
      let listArray = [];
      for (let i = 0; i < list.length; i++) {
         listArray.push(<li key={i} >{list[i]}</li>);
      }
      return listArray;
   }

   const makeCheckbox = (part) => {
      const list = [...part];
      let listArray = [];
      for (let i = 0; i < list.length; i++) {
         listArray.push(<label key={i} class='itemLabel'><input type='checkbox' />{list[i]}</label>);
      }
      return listArray;
   }

   console.log(props.content[index])

   let finalList

   if (props.content[index][0] === 'Mise en Place') {
      finalList = makeCheckbox(props.content[index][1]);
   } else {
      finalList = makeList(props.content[index][1]);
   }

   return (
      <section id="alfredContainer" className={props.containerClass ? null : 'hidden'}>

         <div id="closeBtn" onClick={props.toggleFunction}>
            <div id='alfredCloseBtnSlash1'></div>
            <div id='alfredCloseBtnSlash2'></div>
         </div>

         <h2 id='alfredRecipeTitle'>{props.title}</h2>

         <div id='guideBody'>
            <div id='guideTitleContainer'>
               <button id="guideLeftBtn" className="guideBtn" onClick={() => { guideBtnHandle(-1) }}>{'<'}</button>
               <h3 id='guideTitle'>{props.content[index][0]}</h3>
               <button id="guideRightBtn" className="guideBtn" onClick={() => { guideBtnHandle(1) }}>{'>'}</button>
            </div>

            <div id="guideContent">
               <ol>
                  {finalList}
               </ol>
            </div>

         </div>

      </section>
   )
}

export default Alfred;