// Q1
/*
async function greet() {
    return (
        "Hello World"
    )
}
greet()
.then(result=>{
 console.log(result);
});




//  Q2
function getUser(){
    return ({
        name: "Aman"
    })
}

getUser()
.then(user=>{
    console.log(user);
})


// Q3.
async function getProduct(){
    return  ["chips", "coke", "pepsi", "Redbull" ]
}
getProduct().then(Product=>{
    console.log(Product);
})



// Q4.
async function currentDate() {
    return new Date();
}
currentDate().then(Date=>{
    console.log(Date);
})


// Q5.

//Q6.

// Q7

// Q8

// Q9

// Q10


//Q11
async function getUser() {
    return "Aman";
}

async function main() {
    const user = await getUser();
    console.log(user);
}

main();


//Q12.

async function getProduct() {
    return "Laptop";
}

async function main() {
    console.log(await getProduct());
}

main();

// Q13.

async function getOrders() {
    return ["Mobile", "Shoes"];
}

async function main() {
    console.log(await getOrders());
}

main();

// Q14

async function getPayment() {
    return "Payment Successful";
}

async function main() {
    console.log(await getPayment());
}

main();

// Q15

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

wait(2000).then(() => {
    console.log("Done");
});

// Q16

// Q17

//Q18

async function greet() {
    return "Good Morning";
}

async function main() {
    console.log(await greet());
}

main();

// Q19

async function verifyOTP(otp) {
    return otp === 1234;
}

async function main() {
    console.log(await verifyOTP(1234));
}

main();

// Q20

async function login() {
    return "Login Successful";
}

async function main() {
    console.log(await login());
}

main();

// Q21

async function getError() {
    throw "Something went wrong";
}

async function main() {
    try {
        await getError();
    } catch (error) {
        console.log(error);
    }
}

main();

// Q22

async function login() {
    throw "Invalid Login";
}

async function main() {
    try {
        const data = await login();
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}

main();

// Q23

async function withdraw(balance, amount) {

    if(amount > balance) {
        throw new Error("Insufficient Balance");
    }

    return "Withdrawal Successful";
}

async function main() {
    try {
        const result = await withdraw(1000, 2000);
        console.log(result);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

// Q24

async function payment() {
    return "Payment Successful";
}

async function main() {
    try {
        const result = await payment();
        console.log(result);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

// Q25

async function register(name) {

    if(!name) {
        throw new Error("Name Required");
    }

    return "Registration Successful";
}

async function main() {
    try {
        const result = await register("Aman");
        console.log(result);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

// Q26

// Q27

async function validatePassword(password) {

    if(password.length < 6) {
        throw new Error("Weak Password");
    }

    return "Strong Password";
}

async function main() {
    try {
        const result = await validatePassword("123456");
        console.log(result);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

// Q28

async function atm() {
    return "Cash Withdrawn";
}

async function main() {
    try {
        const result = await atm();
        console.log(result);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

// Q29

async function purchaseProduct() {
    return "Product Purchased";
}

async function main() {
    try {
        const result = await purchaseProduct();
        console.log(result);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

// Q30

async function cancelOrder() {
    return "Order Cancelled";
}

async function main() {
    try {
        const result = await cancelOrder();
        console.log(result);
    }
    catch(err) {
        console.log(err.message);
    }
}

main();

// Q31

async function login() {
    return "Login Success";
}

async function getUser() {
    return "User Found";
}

async function getOrders() {
    return "Orders Found";
}

async function payment() {
    return "Payment Success";
}

async function run() {
    console.log(await login());
    console.log(await getUser());
    console.log(await getOrders());
    console.log(await payment());
}

run();

// Q32

async function selectMovie() {
    return "Movie Selected";
}

async function selectSeat() {
    return "Seat Selected";
}

async function payment() {
    return "Payment Done";
}

async function ticket() {
    return "Ticket Booked";
}

async function run() {
    console.log(await selectMovie());
    console.log(await selectSeat());
    console.log(await payment());
    console.log(await ticket());
}

run();

//Q33

// Q34

// Q35

async function selectMovie() {
    return "Movie Selected";
}

async function selectSeat() {
    return "Seat Selected";
}

async function payment() {
    return "Payment Done";
}

async function ticket() {
    return "Ticket Booked";
}

async function run() {
    console.log(await selectMovie());
    console.log(await selectSeat());
    console.log(await payment());
    console.log(await ticket());
}

run();


// Q36
async function getUsers() {
    return "Users";
}

async function getProducts() {
    return "Products";
}

async function getOrders() {
    return "Orders";
}

async function run() {
    const data = await Promise.all([
        getUsers(),
        getProducts(),
        getOrders()
    ]);

    console.log(data);
}

run();

// Q37

// Q38

async function getUser() {
    return "User";
}

async function getOrders() {
    return "Orders";
}

async function getProducts() {
    return "Products";
}

async function getNotifications() {
    return "Notifications";
}

async function run() {
    const dashboard = await Promise.all([
        getUser(),
        getOrders(),
        getProducts(),
        getNotifications()
    ]);

    console.log(dashboard);
}

run();

// Q39

// Q46
async function server1() {
    throw "Server 1 Failed";
}

async function server2() {
    throw "Server 2 Failed";
}

async function server3() {
    return "Server 3 Success";
}

async function run() {
    const result = await Promise.any([
        server1(),
        server2(),
        server3()
    ]);

    console.log(result);
}

run();

// Q47
function api() {
    return new Promise(resolve =>
        setTimeout(() => resolve("API Success"), 3000)
    );
}

function timeout() {
    return new Promise((_, reject) =>
        setTimeout(() => reject("Request Timeout"), 2000)
    );
}

async function run() {
    try {
        const result = await Promise.race([
            api(),
            timeout()
        ]);

        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}

run();

// Q48

async function* students() {
    yield "Ram";
    yield "Shyam";
    yield "Mohan";
}

async function run() {
    for await (const student of students()) {
        console.log(student);
    }
}

run();

// Q49

// Q50
async function login() {
    return "Login Success";
}

async function getUser() {
    return "User Loaded";
}

async function getProducts() {
    return "Products Loaded";
}

async function getCart() {
    return "Cart Loaded";
}

async function applyCoupon() {
    return "Coupon Applied";
}

async function calculateTotal() {
    return "Total Calculated";
}

async function payment() {
    return "Payment Success";
}

async function generateInvoice() {
    return "Invoice Generated";
}

async function sendEmail() {
    return "Email Sent";
}

async function trackOrder() {
    return "Order Tracking Started";
}

async function delivery() {
    return "Order Delivered";
}

async function run() {
    console.log(await login());
    console.log(await getUser());
    console.log(await getProducts());
    console.log(await getCart());
    console.log(await applyCoupon());
    console.log(await calculateTotal());
    console.log(await payment());
    console.log(await generateInvoice());
    console.log(await sendEmail());
    console.log(await trackOrder());
    console.log(await delivery());
}

run();


*/
