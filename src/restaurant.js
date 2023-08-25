function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
  return restaurant
};

function addMenuItem(restaurant, menuItem) {
  if(menuItem.type === "lunch") {
    for(i = 0; i < restaurant.menus.lunch.length; i++) {
      if(restaurant.menus.lunch[i] === menuItem) {
        return restaurant.menus.lunch[i]
      };
    };
    return restaurant.menus.lunch.push(menuItem)
  }
  else if(menuItem.type === 'breakfast') {
    for(i = 0; i < restaurant.menus.breakfast.length; i++) {
      if(restaurant.menus.breakfast[i] === menuItem) {
        return restaurant.menus.breakfast[i]
      };
    };
    return restaurant.menus.breakfast.push(menuItem)
  }
  else {
    for(i = 0; i < restaurant.menus.dinner.length; i++) {
      if(restaurant.menus.dinner[i] === menuItem) {
        return restaurant.menus.dinner[i]
      };
    };
    return restaurant.menus.dinner.push(menuItem)
  };
};

function removeMenuItem(restaurant, menuItem, type) {
  if(type === "breakfast"){
    for(i = 0; i < restaurant.menus.breakfast.length; i++) {
      if(restaurant.menus.breakfast[i].name === menuItem) {
        restaurant.menus.breakfast.splice(i, 1)
        return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
      };
    };
  }
  else if(type === "lunch") {
    for(i = 0; i < restaurant.menus.lunch.length; i++) {
      if(restaurant.menus.lunch[i].name === menuItem) {
        restaurant.menus.lunch.splice(i, 1)
        return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
      };
    };
  }
  else {
    for(i = 0; i < restaurant.menus.dinner.length; i++) {
      if(restaurant.menus.dinner[i].name === menuItem) {
        restaurant.menus.dinner.splice(i, 1)
        return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
      };
    };
  };
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
};

function checkForFood(restaurant, item){
  if(item.type === "breakfast") {
    for(i = 0; i < restaurant.menus.breakfast.length; i++) {
      if(restaurant.menus.breakfast[i] === item) {
        return `Yes, we're serving ${item.name} today!`
      }
    }
  }
  if(item.type === "lunch") {
    for(i = 0; i < restaurant.menus.lunch.length; i++) {
      if(restaurant.menus.lunch[i] === item) {
        return `Yes, we're serving ${item.name} today!`
      }
    }
  }
  if(item.type === "dinner") {
    for(i = 0; i < restaurant.menus.dinner.length; i++) {
      if(restaurant.menus.dinner[i] === item) {
        return `Yes, we're serving ${item.name} today!`
      }
    }
  }
  return `Sorry, we aren't serving ${item.name} today.`
};
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}