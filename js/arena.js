import Gladiator from './gladiator.js';
export default class Arena{
    constructor(name , gladiators = []){
        const name1 = name.toUpperCase();
        this.name = name1;
        this.gladiators = gladiators;
    }
    addGlaidiator(gladiator){
        if(this.gladiators.length < 2){
        this.gladiators.push(gladiator);
        }
        else {
            console.log(`You Can't Have More than Two Gladiotrs at a time`);
        }
    }
        fight(){
            if (this.gladiators[0].weapon === this.gladiators[1].weapon){
                this.gladiators = [];
                console.log(`It's A Tie`);
            }
            if (this.gladiators[1].weapon == 'Trident' && this.gladiators[0].weapon == 'Spear'|| this.gladiators[1].weapon == 'Club' && this.gladiators[0].weapon == "Trident"){
                this.gladiators.shift();
                console.log(`${this.gladiators[1]} Wins.`);
            }
           if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear' || this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == "Trident"){
                this.gladiators.pop();
                console.log(`${this.gladiators[0]} Wins.`);
            }
            else {
                console.log(`You Can't have this as a weapon`);
            }
        }
    }