'use strict';

// create an array for all products to be shown to Focus Group

var allProducts = [];

// create a Constructor function and Instances

function Products (name, id, filepath, timesShown, votes) {
    this.name = name;
    this.id = id;
    this.filepath = filepath;
    this.timesShown = timesShown;
    this.votes = votes;

    allProducts.push(this);

}
   function instantiateProducts() {
       var bag = ('R2-D2 Travel Case', 'r2d2-case');
       var banana = ('Banana Slicer', 'banana-slicer');
       var tpHolder = ('iPad Toilet Paper Holder', 'tpHolder');
       var boots = ('Toeless Rainboots', 'rainboots');
       var breakfast = ('Do-All Breakfast Cooker', 'mealCooker');
       var gum = ('Meatball Flavored Bubblegum', 'bubblegum');
       var chair = ('Red Plastic Convex Chair', 'redChair');
       var greenCreature = ('Cthulhu Doll', 'cthulhu');
       var dogMuzzle = ('Duck Bill Muzzle', 'dog-duck');
       var dragon = ('Dragon Meat in a Can', 'dragonMeat');
       var uPen = ('Utensil Pens', 'pens');
       var petSweep = ('Pet Paw Floor Polishers', 'pawSweepers');
       var scissors = ('Pizza Scissors', 'pizza');
       var shark = ('Shark Sleepingbag', 'sleepingBag');
       var sweep = ('Baby Sweep Unisuit', 'babySweep');
       var tauntaun = ('Tauntaun Sleeping Sack', 'sleepsack');
       var unicorn = ('Unicorn Meat in a Can', 'uniMeat');
       var usb = ('Tentacle USB', 'octaUsb');
       var waterCan = ('Self-Watering Water Can', 'selfWater');
       var wine = ('Big Dribble Wine Glass', 'wineGlass');
       
   } 
