//pseudocode
//var hit = 0, wenn das Feld noch nicht angeklickt wurde, hit = 1 wenn X, hit = 2 wenn O
//var lasthitkreuz = true, wenn als letztes X gesetzt wurde. = false, wenn als letztes O gesetzt wurde.
//onclick -> if 0 -> schleife . else
//ein feld = object?
//properties = dialinksoben, dialinksunten, diarechtsoben, diarechtsunten, links, rechts, oben, unten
window.onload = function(){

    let a1 = document.getElementById("a1");
    let a2 = document.getElementById("a2");
    let a3 = document.getElementById("a3");
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");
    
    let lasthitkreuz = true;
    
    var gameover = false;
    
    
    
    //hita1 = 0 wenn nicht geklickt. 1 wenn Kreis O, 2 wenn Kreuz X
    let hita1 = 0;
    let hita2 = 0;
    let hita3 = 0;
    let hitb1 = 0;
    let hitb2 = 0;
    let hitb3 = 0;
    let hitc1 = 0;
    let hitc2 = 0;
    let hitc3 = 0;
    
    logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);

/*     feldGetsClicked = function(feld,feldvariable){
        if(feldvariable==0 && gameover==false){
            if(lasthitkreuz){
                feld.innerHTML = "Kreis";
                lasthitkreuz = false;
                feldvariable = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                feld.innerHTML = "Kreis";
                lasthitkreuz = true;
                feldvariable = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        }
    }
    
    a1.onclick = function(){
        feldGetsClicked(a1, hita1);
    }
    a2.onclick = function(){
        feldGetsClicked(a2, hita2);
    }
    a3.onclick = function(){
        feldGetsClicked(a3, hitc3);
    }
    b1.onclick = function(){
        feldGetsClicked(b1, hitb1);
    }
    b2.onclick = function(){
        feldGetsClicked(b2, hitb2);
    }
    b3.onclick = function(){
        feldGetsClicked(b3, hitc3);
    }
    c1.onclick = function(){
        feldGetsClicked(c1, hitc1);
    }
    c2.onclick = function(){
        feldGetsClicked(c2, hitc2);
    }
    c3.onclick = function(){
        feldGetsClicked(c3, hitc3);
    } */
    
     a1.onclick = function(){
        if (hita1==0 && gameover==false){
            if(lasthitkreuz){
                a1.innerHTML = "Kreis";
                lasthitkreuz = false;
                hita1 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                a1.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hita1 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    a2.onclick = function(){
        if (hita2==0 && gameover==false){
            if(lasthitkreuz){
                a2.innerHTML = "Kreis";
                lasthitkreuz = false;
                hita2 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                a2.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hita2 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    a3.onclick = function(){
        if (hita3==0 && gameover==false){
            if(lasthitkreuz){
                a3.innerHTML = "Kreis";
                lasthitkreuz = false;
                hita3 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                a3.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hita3 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    b1.onclick = function(){
        if (hitb1==0 && gameover==false){
            if(lasthitkreuz){
                b1.innerHTML = "Kreis";
                lasthitkreuz = false;
                hitb1 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                b1.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hitb1 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    b2.onclick = function(){
        if (hitb2==0 && gameover==false){
            if(lasthitkreuz){
                b2.innerHTML = "Kreis";
                lasthitkreuz = false;
                hitb2 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                b2.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hitb2 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    b3.onclick = function(){
        if (hitb3==0 && gameover==false){
            if(lasthitkreuz){
                b3.innerHTML = "Kreis";
                lasthitkreuz = false;
                hitb3 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                b3.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hitb3 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    c1.onclick = function(){
        if (hitc1==0 && gameover==false){
            if(lasthitkreuz){
                c1.innerHTML = "Kreis";
                lasthitkreuz = false;
                hitc1 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                c1.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hitc1 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    c2.onclick = function(){
        if (hitc2==0 && gameover==false){
            if(lasthitkreuz){
                c2.innerHTML = "Kreis";
                lasthitkreuz = false;
                hitc2 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                c2.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hitc2 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
    c3.onclick = function(){
        if (hitc3==0 && gameover==false){
            if(lasthitkreuz){
                c3.innerHTML = "Kreis";
                lasthitkreuz = false;
                hitc3 = 1;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            } else {
                c3.innerHTML = "Kreuz";
                lasthitkreuz = true;
                hitc3 = 2;
                logVars(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                gameover = checkWincondition(hita1,hita2,hita3,hitb1,hitb2,hitb3,hitc1,hitc2,hitc3);
                console.log(gameover);
            }
        } else{
            alert("Schon geklickt oder gameover");
            console.log(gameover);
        }
    }
}

checkWincondition = function(a1,a2,a3,b1,b2,b3,c1,c2,c3){
    if(a1==1 && a2==1 && a3==1 || a1==1 && b1==1 && c1==1 || a1==1 && b2==1 && c3==1 || a3==1 && b2==1 && c1==1 || a3==1 && b3==1 && c3==1 || b1==1 && b2==1 && b3==1 || c1==1 && c2==1 && c2==1 || a2==1 && b2==1 && b2==1){
        alert("Kreis gewinnt");
        return true;
    } else if (a1==2 && a2==2 && a3==2 || a1==2 && b1==2 && c1==2 || a1==2 && b2==2 && c3==2 || a3==2 && b2==2 && c1==2 || a3==2 && b3==2 && c3==2 || b1==2 && b2==2 && b3==2 || c1==2 && c2==2 && c2==2 || a2==2 && b2==2 && b2==2){
        alert("Kreuz gewinnt");
        return true;
    } else
    alert("Weiter geht's!");
    return false;
}

logVars = function(a1,a2,a3,b1,b2,b3,c1,c2,c3){
    for(let i = 0; i < 9; i++){
        console.log(i+"="+arguments[i]);
    }
}

