function nameMenuItem(food) {
  menuItemName = `Delicious ${food}`
  return menuItemName
}

function createMenuItem(menuItemName, cost, meal) {
  var menuItem = {}
    menuItem.name = menuItemName
    menuItem.price = cost
    menuItem.type = meal
    return menuItem
}
function addIngredients(food, ingredients){
  if (ingredients.includes(food) === false){
    ingredients.push(food)
  }
  else {
    return ingredients
  }
  return ingredients
}
function formatPrice(initialPrice) {
  var formattedPrice = `$${initialPrice}`
  return formattedPrice
}
function decreasePrice(price) {
  var decreasedPrice = price - (price/10)
  return decreasedPrice
}
function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


