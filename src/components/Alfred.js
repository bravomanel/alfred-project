import { useState } from "react";

function Alfred(props) {
   const [index, setIndex] = useState(0);
   // Create a state so it can track the THREE (or more) phases of cooking, the mise en place, the ingredient list, and the 
   
   const guideBtnHandle = (value) => {
      let indexValue = index + value;
      if (!(indexValue > 2) && !(indexValue < 0) ) { 
         setIndex(indexValue)
      }
      console.log(index)
   }

   const makeList = (part) => {
      const list = [...part];
      let listArray = [];
      for (let i = 0; i < list.length; i++) {
         listArray.push(<li key={i}>{list[i]}</li>);
      }
      return listArray;
   }
   const finalList = makeList(props.content[index][1]);

   return (
      <section id="alfredContainer" className={props.containerClass ? null : 'hidden'}>
         <div id="closeBtn" onClick={props.toggleFunction}>
            <div id='alfredCloseBtnSlash1'></div>
            <div id='alfredCloseBtnSlash2'></div>
            <div id='alfredCloseBtnSlash3'></div>
         </div>
         <h2>{props.title}</h2>
         <div id='guideBody'>
            <button id="guideLeftBtn" className="guideBtn" onClick={() => {
               guideBtnHandle(-1)
               }}>{'<'}</button>
            <div id="guideContent">

               <h3>{props.content[index][0]}</h3>
               <ol>
                  {finalList}
               </ol>
            </div>
            <button id="guideRightBtn" className="guideBtn" onClick={() => {
               guideBtnHandle(1)
               }}>{'>'}</button>
         </div>

      </section>
   )
}

export default Alfred;