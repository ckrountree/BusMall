'use strict';
console.log(Chart);

// create an array for all Productss to be shown to Focus Group

var allProducts = [];
console.log('is this working');
// var selectedIndices = [];
var prevThree = [];

// create a Constructor function and Instances

function Products(name, id, filepath) {
    this.name = name;
    this.id = id;
    this.filepath = filepath;
    this.timesShown = 0;
    this.votes = 0;

    allProducts.push(this);

}

//   create new objects with name, id, and filepath

function instantiateProducts() {
    var bag = new Products('R2-D2 Travel Case', 'r2d2-case', './images/bag.jpg');
    var banana = new Products('Banana Slicer', 'banana-slicer', './images/banana.jpg');
    var tpHolder = new Products('iPad Toilet Paper Holder', 'tpHolder', './images/bathroom.jpg');
    var boots = new Products('Toeless Rainboots', 'rainboots', './images/boots.jpg');
    var breakfast = new Products('Do-All Breakfast Cooker', 'mealCooker', './images/breakfast.jpg');
    var gum = new Products('Meatball Flavored Bubblegum', 'bubblegum', './images/bubblegum.jpg');
    var chair = new Products('Red Plastic Convex Chair', 'redChair', './images/chair.jpg');
    var greenCreature = new Products('Cthulhu Doll', 'cthulhu', './images/cthulhu.jpg');
    var dogMuzzle = new Products('Duck Bill Muzzle', 'dog-duck', './images/dog-duck.jpg');
    var dragon = new Products('Dragon Meat in a Can', 'dragonMeat', './images/dragon.jpg');
    var uPen = new Products('Utensil Pens', 'pens', './images/pen.jpg');
    var petSweep = new Products('Pet Paw Floor Polishers', 'pawSweepers', './images/pet-sweep.jpg');
    var scissors = new Products('Pizza Scissors', 'pizza', './images/scissors.jpg');
    var shark = new Products('Shark Sleepingbag', 'sleepingBag', './images/shark.jpg');
    var sweep = new Products('Baby Sweep Unisuit', 'babySweep', './images/sweep.png');
    var tauntaun = new Products('Tauntaun Sleeping Sack', 'sleepsack', './images/tauntaun.jpg');
    var unicorn = new Products('Unicorn Meat in a Can', 'uniMeat', './images/unicorn.jpg');
    var usb = new Products('Tentacle USB', 'octaUsb', './images/usb.gif');
    var waterCan = new Products('Self-Watering Water Can', 'selfWater', './images/water-can.jpg');
    var wine = new Products('Big Dribble Wine Glass', 'wineGlass', './images/wine-glass.jpg');
}

// var imageDisplay = document.getElementById('imageDisplay');
// var src = imageDisplay.getAttribute('src');

// shows the value of image for the element with id="imageDisplay"
// alert(image); 
//   create functions for tracking Display & Voting while on the page
//   only want to display 3 images at any given moment
//   begin voting count at zero (0)

var tracker = {
    display1: document.getElementsByClassName('display1')[0],
    display2: document.getElementsByClassName('display2')[0],
    display3: document.getElementsByClassName('display3')[0],
    imageDisplay: document.getElementById('imageDisplay'),
    votes: 0,

    //   create a function to select my random image

    randomIndex: function (array) {
        return Math.floor(Math.random() * array.length);
    },

    getIndices: function (array) {

        //  selectedIndices array is NaN, so use '.length' to create one
        //  declare avariable set to the first array to  ensure that same-images do not appear on next sequential page
        var selectedIndices = [];
        while (selectedIndices.length < 3) {
            var item = this.randomIndex(array);
            console.log('while loop working', item);


            //   using indexOf, run loop to make sure that same image doesn't show up twice in one round of display (-1 means image already used)

            if (selectedIndices.indexOf(item) === -1 && prevThree.indexOf(item) === -1) {
                console.log('inside of if block', item);
                selectedIndices.push(item);
                prevThree.push(item);
                allProducts[ item ].timesShown ++;
            }
            //   using indexOf, run loop to make sure that same image doesn't show up in next sequential page

        }
        prevThree = selectedIndices;
        console.log('selected indices' + selectedIndices);
        console.log('previous 3' + prevThree);
        return selectedIndices;

    },

    displayOptions: function () {
        console.log('you\'re getting 3 random images');
        // get 3 random product images
        var randomProducts = this.getIndices(allProducts);
        var index1 = randomProducts[0];
        var index2 = randomProducts[1];
        var index3 = randomProducts[2];

        var products1 = allProducts[index1];
        var products2 = allProducts[index2];
        var products3 = allProducts[index3];

        // append to the DOM
        this.display1.innerText = products1.name;
        this.display2.innerText = products2.name;
        this.display3.innerText = products3.name;

        this.display1.id = products1.id;
        this.display1.src = products1.filepath;
        this.display2.id = products2.id;
        this.display2.src = products2.filepath;
        this.display3.id = products3.id;
        this.display3.src = products3.filepath;


    },

    tallyVote: function (id) {
        this.votes += 1;


        //  run a 'for each' loop and show results
        allProducts.forEach(function runEach(product) {
            if (product.id === id) {
                console.log(product.id + ' what is this doing');
                product.votes += 1;
            }
        });

        if (this.votes > 24) {
            this.showResults();
        }
    },

    //   show results after user selects (clicks) 25 items
    showResults: function () {
        this.imageDisplay.removeEventListener('click', voteHandler);
        console.table(allProducts);
//   write a for loop to create and array of the data to go inside table

        var resultData = [];
        var labels = [];
        for (var j = 0; j < allProducts.length; j++) {
            resultData.push(allProducts[j].votes);
            console.log(resultData + ' votes working');
            labels.push(allProducts[j].id);
            console.log(labels + ' id working');
        }

        var canvas = document.getElementById('resultsChart');
            console.log(canvas);
        var itemChosen = new Chart (canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: resultData,
                    backgroundColor: 'rgba (255, 99, 132, 0.2)'
                }]
            },
            options: {
                title: {
                    display: true,
                    text: '\"Products of Interest\" Results'
                },
                responsive: false,
                maintainAspectRatio: true
            }
        })

    }

}

//   add an Event handler

tracker.imageDisplay.addEventListener('click', voteHandler);
function voteHandler() {
    if (event.target.id) {
        tracker.tallyVote(event.target.id);
        tracker.displayOptions();
    }
}


//  initialize app / call 

instantiateProducts();
tracker.displayOptions();
console.log(tracker);


