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
function clearSet(Set) {
    if (Set.size > 2) {
        Set.clear()
    } 
}

clearSet(foodSet)

console.log(foodSet)