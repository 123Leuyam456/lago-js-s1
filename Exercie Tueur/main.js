var prenom = ["Lucie", "Stéphane", "Hervé", "Maude", "Julien", "Julie", "Auguste", "Romain", "Mayeul", "Clément", "Sophie", "Constance", "Amélie"]
var classes = ["nerd", "maigre", 'muscle',"blonde", 'peureux']
var random1
var random2
var random3
var random4
max1 = 13
max2 = 5
max3 = 5
min = 0
min1 = 1

class tueur {
    constructor(name,hp){
        this.name = name
        this.hp = hp
    }
}

class hero {
    constructor(nom,classe,probD,probA,probDA,){
        this.nom = nom
        this.classe =classe
        this.probD = probD
        this.probA = probA
        this.probDA = probDA
    }

    randomName(){
        random1= Math.floor(Math.random() * (max1 - min)) + min; 
        max1 -=1
    }    
    randomPerso(){
        random4= Math.floor(Math.random() * (max3 - min1)) + min1;
    }  
    randomClasse(){
        random2= Math.floor(Math.random() * (max2 - min)) + min; 
        max2 -=1
        if (random2 == "nerd"){
            probD = 0.3
            probA =0.4
            probDA =0.3
        }
        else if (random2 == "maigre"){
            probD = 0.4
            probA =0.3
            probDA =0.3
        }
        else if (random2 == "muscle"){
            probD = 0.2
            probA =0.5
            probDA =0.3
        }
        else if (random2 == "blonde"){
            probD = 0.7
            probA =0.2
            probDA =0.1
        }
        else if (random2 == "peureux"){
            probD = 0.4
            probA =0.1
            probDA =0.5
        }
    }  
}
function randomDice(){
    random3= Math.random();
}  




var Jason = new tueur ("Jason", 100)

perso1.randomName()
perso1.randomClasse()
var perso1 = new hero (prenom[random1], classes[random2],probD,probA,probDA)
prenom.push(random1)
classes.push(random2)

perso2.randomName()
perso2.randomClasse()
var perso2 = new hero (prenom[random1], classes[random2],probD,probA,probDA)
prenom.push(random1)
classes.push(random2)

perso3.randomName()
perso3.randomClasse()
var perso3 = new hero (prenom[random1], classes[random2],probD,probA,probDA)
prenom.push(random1)
classes.push(random2)

perso4.randomName()
perso4.randomClasse()
var perso4 = new hero (prenom[random1], classes[random2],probD,probA,probDA)
prenom.push(random1)
classes.push(random2)

perso5.randomName()
perso5.randomClasse()
var perso5 = new hero (prenom[random1], classes[random2],probD,probA,probDA)
prenom.push(random1)
classes.push(random2)
console.log(perso3)



while (Jason.hp > 0){
    randomDice()
}