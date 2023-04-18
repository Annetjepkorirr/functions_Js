// Create an array containing the names of all items in the 
// inventory maximum of 10.

let itemsInventory= ["Apple","Mango","Pineapple","Banana","Kiwi","Pawpaw","Passion"]

// Create a separate array with the corresponding stock quantities of
//  each item maximum of 10.
let quantiesInventory =[50,30,40,10,35,60,24]

// Write a function to add a new item to the inventory,
//  updating both arrays.
function add(item,quantity){
   if(itemsInventory.length >= 10){
    console.log("It has is not available")
   } 
   else{
    itemsInventory.push(item)
    quantiesInventory.push(quantity)
   }
   console.log(item)
   } 
add("cucumber",20)

add("Watermeolon",39)

add("Lemon",70)
add(45)
console.log(itemsInventory)
console.log(quantiesInventory)


// Write a function to update the stock quantity of an existing item.
function update(){
    itemsInventory[2]=30
    console.log(itemsInventory)

}
update()
// Write a function to calculate the total number of items in the inventory
function calculate(){
    let num = 0
    for (let i = 0; i < quantiesInventory.length; i++) {
        num+=quantiesInventory[i]
     
    }
    console.log(num)
    }
    calculate()


// Write a function to find the item with the lowest stock quantity.
function lowestQuantity() {
    let item = Math.min(...quantiesInventory)
    console.log(item)
    for (let i = 0; i < quantiesInventory.length; i++) {
       item =Math.min(item,quantiesInventory[i])
        
    }

}
lowestQuantity()
