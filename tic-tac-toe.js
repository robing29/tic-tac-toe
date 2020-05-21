//pseudocode
//var hit = 0, wenn das Feld noch nicht angeklickt wurde, hit = 1 wenn X, hit = 2 wenn O
//var isLastHitKreuz = true, wenn als letztes X gesetzt wurde. = false, wenn als letztes O gesetzt wurde.
//onclick -> if 0 -> schleife . else
//ein feld = object?
//properties = dialinksoben, dialinksunten, diarechtsoben, diarechtsunten, links, rechts, oben, unten
window.onload = function(){
    
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    
    var idgameover = document.getElementById("id-gameover");
    var resetBtn = document.getElementById("resetBtn");
    
    var isLastHitKreuz = true;
    
    var isGameOver = false;
    var isKreuzWin = false;
    var isKreisWin = false;

    var feldArray = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
    
    //hita1 = 0 wenn nicht geklickt. 1 wenn Kreis O, 2 wenn Kreuz X
    for(let i = 0; i < feldArray.length;i++){
        feldArray[i].hit = 0;
        }
    
    //for-loop to create onclick functions
    for(let i = 0; i < feldArray.length;i++){
        feldArray[i].onclick = function(){
            doEverything(feldArray[i]);
            console.log(feldArray[i].hit);
            console.log(isGameOver);
        }
    }

    //set gameover wenn Kreis oder Kreuz gewinnt
    function setzeGameover(){
        if(isGameOver==false){
            if(a1.hit==1 && a2.hit==1 && a3.hit==1 || a1.hit==1 && b1.hit==1 && c1.hit==1 || a1.hit==1 && b2.hit==1 && c3.hit==1 || a3.hit==1 && b2.hit==1 && c1.hit==1 || a3.hit==1 && b3.hit==1 && c3.hit==1 || b1.hit==1 && b2.hit==1 && b3.hit==1 || c1.hit==1 && c2.hit==1 && c3.hit==1 || a2.hit==1 && b2.hit==1 && c2.hit==1){
                alert("Kreis gewinnt");
                isKreisWin = true;
                isGameOver = true;
            } else if(a1.hit==2 && a2.hit==2 && a3.hit==2 || a1.hit==2 && b1.hit==2 && c1.hit==2 || a1.hit==2 && b2.hit==2 && c3.hit==2 || a3.hit==2 && b2.hit==2 && c1.hit==2 || a3.hit==2 && b3.hit==2 && c3.hit==2 || b1.hit==2 && b2.hit==2 && b3.hit==2 || c1.hit==2 && c2.hit==2 && c3.hit==2 || a2.hit==2 && b2.hit==2 && c2.hit==2){
                alert("Kreuz gewinnt");
                isKreuzWin = true;
                isGameOver = true;
            } else { 
                alert("Weiter geht's!");
                isGameOver = false;
            }
        } 
    }
    function displayGameOver(){
        if(isGameOver){
            if(isKreisWin==true){
                idgameover.innerHTML = "GameOver - Kreis gewinnt!";
            } else if(isKreuzWin==true){
                idgameover.innerHTML = "GameOver - Kreuz gewinnt!";
            }
            displayResetButton();         
        } 
    }
    function displayResetButton(){
        resetBtn.style.visibility = "visible";
    }
    function doEverything(feld){
                
        //Assigne Hit value 1 wenn kreis gezeichnet, Assigne Hit value 2 wenn kreuz
        function assignHitvalue(feld){
            if(feld.hit == 0){
                if(isLastHitKreuz){
                    feld.hit = 1;
                    isLastHitKreuz = false;
                } else {
                    feld.hit = 2;
                    isLastHitKreuz = true;
                }
            }
        }
        //Assigne Class wenn hit 1 oder hit 2
        function assignClass(feld){
            if(feld.hit == 1){
                feld.classList.toggle("Kreis",true);
            } else if (feld.hit == 2){
                feld.classList.toggle("Kreuz",true);
            }
        }
        if(isGameOver==true){
            return;
        }
        assignHitvalue(feld);
        assignClass(feld);
        setzeGameover();
        displayGameOver();
    }

  /*   a1.onclick = function(){
        doEverything(a1);
        console.log(a1.hit);
        console.log(isGameOver);
    }
    a2.onclick = function(){
        doEverything(a2);
        console.log(a2.hit);
        console.log(isGameOver);
    }
    a3.onclick = function(){
        doEverything(a3);
        console.log(a3.hit);
        console.log(isGameOver);
    }
    b1.onclick = function(){
        doEverything(b1);
        console.log(b1.hit);
        console.log(isGameOver);
    }
    b2.onclick = function(){
        doEverything(b2);
        console.log(b2.hit);
        console.log(isGameOver);
    }
    b3.onclick = function(){
        doEverything(b3);
        console.log(b3.hit);
        console.log(isGameOver);
    }
    c1.onclick = function(){
        doEverything(c1);
        console.log(c1.hit);
        console.log(isGameOver);
    }
    c2.onclick = function(){
        doEverything(c2);
        console.log(c2.hit);
        console.log(isGameOver);
    }
    c3.onclick = function(){
        doEverything(c3);
        console.log(c3.hit);
        console.log(isGameOver);
    } */
}
