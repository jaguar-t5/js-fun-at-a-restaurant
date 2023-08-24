function nameMenuItem(food) {
  menuItemName = `Delicious ${food}`;
  return menuItemName
};

function createMenuItem(menuItemName, cost, meal) {
  menuItem = {
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
  formattedPrice = `$${initialPrice}`;
  return formattedPrice
};
function decreasePrice(price) {
  decreasedPrice = price - (price/10);
  return decreasedPrice
};
function createRecipe(title, ingredients, menuItemType) {
  recipe = {
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


