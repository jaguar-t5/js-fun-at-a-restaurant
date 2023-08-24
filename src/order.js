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
module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}