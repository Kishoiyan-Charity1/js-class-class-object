let shop={
    fruit: "apple",
    price: "35.00",
    

    cost: function(quantity){
        return `You have bought ${quantity} ${this.fruit} for KESH ${this.price*quantity}`
    }
}
console.log(shop.cost("6"));










