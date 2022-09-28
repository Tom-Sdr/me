import {useEffect, useState} from "react";
import Advice from "./components/Advice";
import Popup from "./components/Popup";

function App() {

  const [currentPopup, setCurrentPopup] = useState(null);

  useEffect(() => {

    // causes popup not to render -> because of immedeate state reset
    /*document.addEventListener("click", () => {
      if(currentPopup != null) {
        setCurrentPopup(null);
      }
    })*/

    async function typewriter(elem) {
        let FinalInnerHTML = elem.innerHTML;
        elem.innerHTML = "";
        let twIntervall = setInterval(function() {
            elem.innerHTML = elem.innerHTML + FinalInnerHTML[elem.innerHTML.length];
            if(elem.innerHTML.length >= FinalInnerHTML.length) {
                clearInterval(twIntervall);
                setTimeout(() => {
                    document.querySelectorAll(".ScrollButton").forEach(elem => {
                        elem.style.display = "inline"
                    }
                )}, 100)
            }
        }, 100);
  }

  document.querySelectorAll(".nextPage").forEach((elem, index )=> {
      elem.addEventListener("click", () => {
          window.scrollTo({behavior: "smooth", top: window.innerHeight * (index + 1)})
      })
  })
  document.querySelectorAll(".toTop").forEach((elem, index )=> {
    elem.addEventListener("click", () => {
        window.scrollTo({behavior: "smooth", top: 0})
    })
})

  typewriter(document.getElementById("welcome"))    // still buggy...
    console.log("triggered?")
  }, []);

  return (
    <div className="App">
      <div className="Page">
            <div className="centerWrapper">
                <h1 id="welcome">Hi, ich bin Tom</h1>
                <span className="material-symbols-outlined ScrollButton nextPage">
                    expand_more
                </span>
            </div>
        </div>
        <div className="Page">
            <div className="centerWrapper">
                <div className="textWrapper">
                    <h1 className="accentFont">
                        Ich bin 17 Jahre alt,
                    </h1>
                    <h1 className="accentFont">
                        werde 2023 mein Abitur schreiben 
                    </h1>
                    <h1 className="accentFont">
                        und plane, danach mein <a className="link" href="https://www.nordakademie.de/duales-studium">duales Studium</a> anzutreten
                    </h1>
                    <h1 className="smallText">Weiter zu 'Meine Erfahrungen'</h1>
                </div>
                <span className="material-symbols-outlined ScrollButton nextPage">
                    expand_more
                </span>
            </div>
        </div>
        <div className="Page">
            <div className="buttonWrapper">
                <div className="SkillButton" onClick={() => setCurrentPopup("Js-Html-Css")}>Js, Html, Css</div>
                <div className="SkillButton" onClick={() => setCurrentPopup("React")}>React</div>
                <div className="SkillButton" onClick={() => setCurrentPopup("Java")}>Java</div>
            </div>
            <span className="material-symbols-outlined ScrollButton toTop">
                    expand_more
            </span>
            <Popup PopupName="Js-Html-Css" currentPopup={currentPopup} setCurrentPopup={setCurrentPopup}>
                <div className="TextWrapper" >
                    <h1 className="accentFont infoFont">
                        Mit (Vanilla) Javascript, HTML und CSS habe ich mir sowohl die Grundbausteine der Web-Entwicklung als auch die Prinzipien der Programmierung angeeignet
                    </h1>
                </div>
                <Advice/>
            </Popup>
            <Popup PopupName="React" currentPopup={currentPopup} setCurrentPopup={setCurrentPopup}>
                <div className="TextWrapper" >
                    <h1 className="accentFont infoFont">
                        Ich habe mich mit den Grundprinzipien von React vertraut gemacht und währenddessen unter anderem diese Website entwickelt
                    </h1>
                </div>
            </Popup>
            <Popup PopupName="Java" currentPopup={currentPopup} setCurrentPopup={setCurrentPopup}>
                <div className="TextWrapper">
                    <h1 className="accentFont infoFont">
                        Zurzeit versuche ich mich durch simples Minecraft-Modding Java anzunähern und dabei meine Kenntnisse zur Objektorientierten-Programmierung aufzufrischen und zu verbessern
                    </h1>
                </div>
            </Popup>
        </div>
    </div>
  );
}

export default App;
