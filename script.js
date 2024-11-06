// toUpperCase
let celerates = 'Celerates'
celerates = celerates.toLocaleUpperCase()
console.log(celerates)

// toLowerCase
let newCelerates = celerates.toLocaleLowerCase()
console.log(newCelerates)

// Slice
const fruits = "           Apple, Banana, Mango       "
const trimmedFruits = fruits.trim()
console.log(trimmedFruits)
console.log(trimmedFruits.slice(0, 5))

// split
const foods = "Mie, Nasgor, Sate, Lontong, Naslor"
const newFoods = foods.split(', ')
console.log(newFoods)

// Replace
console.log(foods.replace('Mie', 'MIE GORENG'))

// ARRAY
// PUSH
const tropicalFruits = ['Coconut', 'Apple', 'Rambutan', 'Mango']
console.log(tropicalFruits.push('Durian'))
console.log(tropicalFruits)

// POP
const newTropicalFruits = tropicalFruits
newTropicalFruits.pop()
console.log(`tropicalFruits ${tropicalFruits}`)
console.log(`newTropicalFruits ${newTropicalFruits}`)

// Shift
tropicalFruits.shift()
console.log(tropicalFruits)

// Unshift
tropicalFruits.unshift('Pineapple', 'Banana')
console.log(tropicalFruits)

// Concat
// array baru
const nonTropicalFruits = ['Lychee', 'Bluberry', 'Peach']
const moreFruits = ['Mangosten', 'Melon']
const mixedFruits = tropicalFruits.concat(nonTropicalFruits, moreFruits)
console.log(mixedFruits)

// filter
// array baru
let numbers = [1,2,4,3,5]
let evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

// reduce
let reduceNumbers = numbers.reduce((acc, curr) => acc * curr, 1)
console.log(reduceNumbers)

//forEach
mixedFruits.forEach((fruit, index) => console.log(fruit + `Index ${index}`))
console.log(mixedFruits[0])
console.log(mixedFruits[1])

// find
let findNumLargerThan2 = numbers.find((num) => num > 2)
console.log(findNumLargerThan2)