function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order);
    return deliveryOrders
  }
  else {
    return deliveryOrders
  };
};

function refundOrder(orderNum, deliveryOrders){
  for(i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1);
      return deliveryOrders
    };
  };
};

function listItems(deliveryOrders) {
  var items = "";
  for(i = 0; i < deliveryOrders.length; i++) {
    if(i < deliveryOrders.length-1) {
      items += `${deliveryOrders[i].item}, `;
    }
    else {
      items += `${deliveryOrders[i].item}`;
    };
  };
  return items
};

//Initally had return false inside for loop, which stopped all iterations.
//Tried to refactor using includes, but could not.
//Iterates through the passed object looking for the specific food item. Returns t/f.
function searchOrder(deliveryOrders, foodItem) {
  for(i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === foodItem) {
      return true
    };
  };
  return false
};
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};