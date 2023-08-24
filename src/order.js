function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order);
    return deliveryOrders
  }
  else {
    return deliveryOrders
  }
}

function refundOrder(orderNum, deliveryOrders){
  for(i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1);
      return deliveryOrders
    }
  }
}

function listItems(deliveryOrders) {
  var items = "";
  for(i = 0; i < deliveryOrders.length; i++) {
    if(i < deliveryOrders.length-1) {
      items += `${deliveryOrders[i].item}, `;
    }
    else {
      items += `${deliveryOrders[i].item}`;
    }
  }
  return items
}

function searchOrder(deliveryOrders, item) {
  for(i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === item) {
      return true
    }
  }
  return false
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}