console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
     if (isFull() === false) {
        basket.push(item);
        console.log('Item added to the basket is:', item);    
        return true;
    } else {
        //since I am adding 5 items to the list it should show up as this result
        console.log('The basket is too full, cannot add:', item);
        return false; 
    }
};
//adding items to basket
addItem('hamburger');
addItem('buns');
addItem('ketchup');
addItem('onion');
addItem('root beer');

console.log(basket);

//looping through basket
let list = 0;
function listItems(array){
    for (list of array) {
        //This should list out all the items in basket
        console.log(list);
    }
    console.log('listItems running');
};
listItems(basket);
console.log(basket);

function empty(){
    console.log('Running Empty:');
    console.log('Basket:', basket, 'Basket length', basket.length);
    //basket.splice(0, basket.length);
    return basket.length=0;
};
empty();
console.log('Basket should be empty');
console.log(basket);

function isFull() {
    if (basket.length >= maxItems) {
        return true;
    } else{
        return false;
    }
}
//adding to see if it changes anything in removedItem
addItem('chips');
addItem('strawberrys');
addItem('grapes')
console.log(basket);

function removedItem(item) {
    let index = basket.indexOf(item);
    let spliceyBoy = null;
        if (index >= 0){
        spliceyBoy = basket.splice(index, 1);
        console.log('We removed', spliceyBoy[0]);
        return spliceyBoy[0];
        } else {
            return spliceyBoy;
        };
};
removedItem('chips');
console.log('Current basket', basket); //testing it out
//making null happen
empty();
removedItem('chips');
console.log('Current basket', basket);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
