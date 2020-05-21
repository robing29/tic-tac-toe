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
    
    //Tabelle
    var field = document.getElementById("field");
    
    //GameOver-Span
    var idgameover = document.getElementById("id-gameover");

    //Reset-Button
    var resetBtn = document.getElementById("resetBtn");
    
    //Kreis und Kreuz-Button
    var kreisBtn = document.getElementById("kreisBtn");
    var kreuzBtn = document.getElementById("kreuzBtn");
    var startWith = this.document.getElementById("startwith");

    var isLastHitKreuz = true;
    var isHit = false;
    
    var isGameOver = false;
    var isKreuzWin = false;
    var isKreisWin = false;
    var isRemis = false;
    
    var feldArray = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
    

    //Hide Buttons after first click in cell
    function hideChangeButtons(){
        kreisBtn.style.visibility = "hidden";
        kreuzBtn.style.visibility = "hidden";
        startWith.style.visibility = "hidden";
    }

    kreisBtn.onclick = function(){
        isLastHitKreuz = true;
        hideChangeButtons();
        changeCursor();
    }
    kreuzBtn.onclick = function(){
        isLastHitKreuz = false;
        hideChangeButtons();
        changeCursor();
    }

    //Change Cursor depending on isLastHitKreuz == true
    function changeCursor(){
        if(isGameOver==false){
            if(isLastHitKreuz==true){
                field.classList.add("kreisCursor");
                field.classList.remove("kreuzCursor");
            } else if(isLastHitKreuz==false){
                field.classList.remove("kreisCursor");
                field.classList.add("kreuzCursor");
            }
        } else {
            field.classList.remove("kreisCursor", "kreuzCursor");
        }
        
    }
    
    //[i].hit = 0 wenn nicht geklickt. 1 wenn Kreis O, 2 wenn Kreuz X
    function setHitVariables(){
        for(let i = 0; i < feldArray.length;i++){
            feldArray[i].hit = 0;
        }
    }
    
    //for-loop to create onclick functions
    function setOnclickFunc(){
        for(let i = 0; i < feldArray.length;i++){
            feldArray[i].onclick = function(){
                doEverything(feldArray[i]);
                console.log(feldArray[i].hit);
                console.log(isGameOver);
            }
        }
    }
    
    //Check if every field has been hit by checking if every field in the array is not 0 anymore.
    function checkRemis(){
            //for(let i = 0; i < feldArray.length;)
            isHit = feldArray.every(x => x.hit != 0);
            console.log(isHit);
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
            } else if (isHit == true && isGameOver == false){
                isGameOver = true;
                isKreuzWin = false;
                isKreisWin = false;
                isRemis = true;
                console.log("Ist Remis");
            } else { 
                isGameOver = false;
            }
        } 
    }
    
    //Wenn gameover==true, dann wird gecheckt, welcher Spieler gewonnen hat und das Ergebnis angezeigt
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
    
    //Zeige ResetButton bei GameOver an, lasse Ihn die Page reloaden
    function displayResetButton(){
        resetBtn.style.visibility = "visible";
        resetBtn.onclick = function(){
            location.reload();
        }
    }
    
    //Nested function, takes a1 or b3 etc. as arguments
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
                feld.innerHTML = '<div class="Kreis"></div>';
            } else if (feld.hit == 2){
                feld.innerHTML = '<div class="Kreuz"></div>';
            }
        }
        //Wenn das Spiel vorbei ist, dann lasse keine onclick-Funktionen mehr zu
        if(isGameOver==true){
            return;
        }
        
        //Führe alle Funktionen aus
        hideChangeButtons();
        assignHitvalue(feld);
        assignClass(feld);
        checkRemis();
        setzeGameover();
        changeCursor();
        displayGameOver();
    }
    
    //Initialise Game:
    changeCursor();
    //Setze alle variablen auf 0
    setHitVariables();
    //Erstelle onclick-Funktionen, deren Inhalt doEverything() ist.
    setOnclickFunc();
    
}
