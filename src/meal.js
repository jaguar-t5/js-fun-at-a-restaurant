function nameMenuItem(food) {
  var menuItemName = `Delicious ${food}`;
  return menuItemName
};

function createMenuItem(menuItemName, cost, meal) {
  var menuItem = {
    name : menuItemName,
    price : cost,
    type: meal
  };
    return menuItem
};
function addIngredients(food, ingredients){
  if (ingredients.includes(food) === false){
    ingredients.push(food);
    return ingredients
  }
  else {
    return ingredients
  }
};
function formatPrice(initialPrice) {
  var formattedPrice = `$${initialPrice}`;
  return formattedPrice
};
function decreasePrice(price) {
  var decreasedPrice = price - (price/10);
  return decreasedPrice
};
function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe
};
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};


