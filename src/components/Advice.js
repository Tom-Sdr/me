import React from 'react';
import {useRef, useEffect} from "react";
import "./Advice.css"

function Advice() {

    const adviceElem = useRef();
    const adviceDisplay = useRef();

    useEffect(() => {
        /*adviceElem.current.addEventListener("mouseover", () => {
            addAdviceTooltip(adviceElem.current);
        })*/

        //document.addEventListener("mousemove", checkMouseOver)

          displayAdvice(adviceElem)

          return () => {
            //document.removeEventListener("mousemove", checkMouseOver)
          }
    })

    // future plans
    /*function checkMouseOver(e) {
        if(!(e.clientX > adviceElem.current.getBoundingClientRect().left 
        && e.clientX < adviceElem.current.getBoundingClientRect().right
        && e.clientY > adviceElem.current.getBoundingClientRect().top
        && e.clientY < adviceElem.current.getBoundingClientRect().bottom)){
            if(document.getElementById("Tooltip")){
                document.getElementById("Tooltip").remove();
                console.log("remove")
            }
        } else {
            if(!document.getElementById("Tooltip")){
                addAdviceTooltip();
            }
        }
      }*/


    function addAdviceTooltip() {
      adviceDisplay.current.innerHTML = "<div id='Tooltip'>Dieser Rat stammt von der Advice-Slip-Api: https://api.adviceslip.com/</div>" + adviceDisplay.current.innerHTML;
      console.log("add");
    }

    return (
        <div ref={adviceDisplay} id="adviceDisplay">
            <h5 ref={adviceElem} id="advice" onClick={() => displayAdvice(document.getElementById('advice'))}>Klicke mich!</h5>
        </div>
  )
}

async function getAdvice() {
    let advice = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"});
    let adviceData = await advice.json();
    let adviceString = adviceData.slip.advice;
  
    return adviceString;
  }
  
  async function displayAdvice(elem) {
    elem.innerHTML = await getAdvice();
  }

export default Advice