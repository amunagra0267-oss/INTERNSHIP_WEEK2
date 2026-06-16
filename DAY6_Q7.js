function placeOrder(callback) {
    console.log("Order Placed");

    setTimeout(() => {
        callback();
    }, 1000);
}

function generateInvoice() {
    console.log("Invoice Generated");
}

placeOrder(generateInvoice);