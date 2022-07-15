class KioskCalc{
    constructor(fruit, quantity){

        this.fruit= fruit
        this.quantity = quantity
         
        this.price = {"mango": 45, "orange": 33,"avocado": 29} 
        this.getCost = function(){
            return `${quantity} ${fruit} for ksh ${quantity*this.price.avocado}`
        }
}
}
KioskCalc=new KioskCalc("mango", 8);
console.log(KioskCalc.getCost());



