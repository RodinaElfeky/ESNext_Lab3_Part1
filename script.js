var food = ['Burger', 'Pizza', 'Donuts', 'Pizza', 'Koshary', 'Donuts', 'Seafood','Burger']

//------1)
var foodSet = new Set(food)

//------2)
foodSet.add('Pasta')
console.log(foodSet)

//------3)
foodSet.delete('Burger')
console.log(foodSet)

//------4)
function clear(Set) {
    if (Set.size > 2) {
        Set.clear()
    } 
}

clear(foodSet)

console.log(foodSet)