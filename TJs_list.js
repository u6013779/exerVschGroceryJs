var shopper = {
    name: "Joe Mama",
    store: "Trader Joes",
    timeOpen: 8,
    timeClose: 10,
    isopen: true,
    groceryCart: [ "apples", "bananas", "broccoli", "pasta", "chicken"],
    hoursOpen: function () {
        return this.timeOpen + " " + this.timeClose;
    }   
};

console.log(shopper)
