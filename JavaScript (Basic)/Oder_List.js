function processOrderList(orderList, orderId, state) {
    const newOrderList = orderList.map(order => {
        if (order.id === orderId) {
            if (state === 'Processing') {
                order.state = 'Processing';
            } else if (state === 'Delivered') {
                order.state = 'DELETE';
            }
        }
        return order;
    });

    const filteredOrders = newOrderList.filter(order => order.state !== 'DELETE');

    return filteredOrders;
}




