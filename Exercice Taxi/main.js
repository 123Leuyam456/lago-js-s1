let musique = ["Wejdene - Anissa","Kendji Girac - Andalouse","Louane - Jour 1", "Ecrire sur les murs - Kids United","Sur Ma Route - Black M"]
var min=0; 
var max=5;
var random  

class Humain {
    constructor(name,pv){
        this.name = name
        this.pv = pv
    }

}

function randomSong(){
    random = Math.floor(Math.random() * (max - min)) + min; 
}           

let John = new Humain ("John", 10)

let nombreTaxi = 0;
let nombreFeu = 0;

while (nombreFeu <= 30 && John.pv>0){

    nombreFeu += 1
    randomSong()
    console.log("La musique est : "+ musique[random])


    if (random == 0){
        John.pv -= 1
        nombreTaxi += 1
        console.log("Aie Wejdene... Il lui reste " + John.pv +"pv, et encore " + (30-nombreFeu) + " feu à passe !")
        console.log("----------------------------------------------------------")
    }
    else {
        console.log("Le taxi avance au feu suivant ! Il reste à John " + John.pv +"pv, et encore " + (30-nombreFeu) + " feu !")
        console.log("----------------------------------------------------------")
    }


    if(nombreFeu == 30 && John.pv > 0){
        console.log("----------------------|||||||||||||||---------------------")
        console.log("----------------------|||||||||||||||---------------------")
        console.log("John est bien arrivé à destination")
        console.log("il a changé "+ nombreTaxi + " fois de taxi et a il lui reste une santé mental de :  " + John.pv)
        console.log("----------------------|||||||||||||||---------------------")
        console.log("----------------------|||||||||||||||---------------------")
        console.log("----------------------------------------------------------")
        break
    }
    else if(John.pv<=0){
        console.log("----------------------|||||||||||||||---------------------")
        console.log("----------------------|||||||||||||||---------------------")
        console.log("Trop c'est trop, la tête de John explose...")
        console.log("John aurra atteint le feu n° " + nombreFeu + ". Il aura changé de taxi " + nombreTaxi + " fois.")
        console.log("----------------------|||||||||||||||---------------------")
        console.log("----------------------|||||||||||||||---------------------")
        console.log("----------------------------------------------------------")
        break
    }

}