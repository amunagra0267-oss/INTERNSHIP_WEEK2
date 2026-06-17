/*1.
Promise = new Promise((resolve)=>{

    setTimeout(()=>{
        resolve("Hello World");
    },2000)
});

Promise.then(console.log);

//2.
const promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject("Server Down");
    },3000)
});

promise.catch((error)=>{

    console.log(error);
});

//3.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Success");
        } else {
            reject("Error");
        }
    }, 1000);
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });



// Q4
const promise = new Promise ((resolve,reject)=>{
    let age=19;

    if(age>=18){
        resolve ("Success");
    }
    else{
        reject("Failed");
    }
})

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});



// Q5.
//Q6.
//Q7.

function withdraw(balance,amount){

    return new Promise((resolve,reject)=>{
              
        if(balance>amount){
            resolve("Withdraw successfull");
        }

        else{
            reject("Insuficient Balance");
        }

    })
};

withdraw(1000,5000)
     .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });



// Q8

function ATM(enteredPass ,rightPass){

    return new Promise((resolve,reject)=>{
              
        if(enteredPass === rightPass){
            resolve("Access Granted");
        }

        else{
            reject("Wrong pin");
        }

    })
};

ATM(1254,2258)
     .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

    

// Q9.

  promise= new Promise((resolve,reject)=>{

            resolve({
                id:1,
                name:"Aman"
            })
        });

        promise.then(console.log);


// Q10.

//Q11.
Promise.resolve(10)
.then((num)=>{
    return num*2;
})
.then((num)=>{
    return num*2;
}).then((num)=>{
    return num*2;
}).then((num)=>{
    console.log(num);
});



//Q12.

Promise.resolve("Ram")
.then((name)=>{
   return name.toUpperCase();

})
.then((name)=>{
    return name;
}).then((name)=>{
    return name+ " Mohan";
}).then((name)=>{
    return name+ " Dixit";
}).then((name)=>{
   return name.toUpperCase();
}).then((name)=>{
    console.log(name);
});




// Q13.

Promise.resolve(1000)
.then((price)=>{
    return price + (price+18/100);
})
.then((price)=>{
    return price-100;
}).then((price)=>{
    console.log(price);
});

*/

// Q14


