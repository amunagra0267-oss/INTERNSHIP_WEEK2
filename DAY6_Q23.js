setTimeout(() => {
    console.log("Order");

    setTimeout(() => {
        console.log("Cook");

        setTimeout(() => {
            console.log("Pack");

            setTimeout(() => {
                console.log("Deliver");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);