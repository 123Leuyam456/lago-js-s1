var attaque1
var attaque2
let luckFinal

class Pokemon {
    constructor(name, attack, hp, defense, luck){
        this.name = name
        this.attack = attack
        this.hp = hp
        this.defense = defense
        this.luck = luck
    }
    isluck(){
        if (this.luck >= Math.random()){
            luckFinal = true
            console.log("well done")
        }   
        else{
            console.log("cheh")
            luckFinal = false
        }
    }
}

let Tortue = new Pokemon ("Tortue", 20, 200, 25, 0,6)
let Faucon = new Pokemon ("Faucon", 60, 120, 8, 0.35)

while (Tortue.hp > 0 && Faucon.hp > 0){
    Tortue.isluck();
    if (luckFinal = true) {
    
        attaque1 = (Tortue.attack - Faucon.defense)
        Faucon.hp = Faucon.hp - attaque1
        console.log(Faucon.name + " à recu une attaque de " + attaque1 + ". Il a donc " + Faucon.hp + "hp.")
        if (Faucon.hp <= 0){
            console.log("Tortue à gagné")
            break;
        }
console.log("---------------------------------------------")
    }

    else {
        console.log(Tortue.name + "à raté son coup !")
        console.log("---------------------------------------------")
    }


    Faucon.isluck();
    if (luckFinal= true){
        attaque2 = (Faucon.attack - Tortue.defense)
        Tortue.hp = Tortue.hp - attaque2
        console.log(Tortue.name + " à recu une attaque de " + attaque2 + ". Il a donc " + Tortue.hp + "hp.")
        console.log("---------------------------------------------")
        if (Tortue.hp <= 0){
            console.log("Faucon à gagné")
            break;
        } 
    }

    else {
        console.log(Faucon.name + "à raté son coup !")
        console.log("---------------------------------------------")
    }


}