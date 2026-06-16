setTimeout(() => {
    console.log("Cart");

    setTimeout(() => {
        console.log("Payment");

        setTimeout(() => {
            console.log("Order Confirmed");

            setTimeout(() => {
                console.log("Delivered");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);