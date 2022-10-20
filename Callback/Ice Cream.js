// Callback hell

// let stocks = {
//     Fruits : ['Banana','Apple','Mango','Strawberry'],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"]
// }

// let order = (Fruit_name,call_production) => {
//     setTimeout (() => {
//         call_production()
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//     },2000)
   
// }

// let production = () => {
//     setTimeout (() => {
//         console.log('Production has started')

//         setTimeout(() => {
//             console.log('Fruit has been chopped')

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//                 setTimeout(() => {
//                     console.log('Machine has been started')

//                     setTimeout(() => {
//                         console.log(`Ice cream was placed on ${stocks.holder[0]}`)

//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} has been selected`)

//                             setTimeout(() => {
//                                 console.log('Ice cream is ready to serve')
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//     },0000)
// }

// order(0,production)

// Promise

let Stocks = {
    Fruits : ['Banana','Apple','Mango','Strawberry'],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let is_store_open = false;

let Order = (time,work) => {
    return new Promise((resolve,reject) => {
    if(is_store_open){
        setTimeout(() => {
            resolve(work())
        },time)
    }
    else{
        reject(console.log('Stock not available'))
    }
    })
}

Order(2000,() => console.log(`${Stocks.Fruits[0]} was selected`))

.then(() => {
    return Order(0000,() => console.log('Production has started'))
})

.then(() => {
    return Order(2000,() => console.log('Fruit slicing going on'))
})

.then(() => {
    return Order(1000,() => console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} is added`))
})

.then(() => {
    return Order(1000,() => console.log('Machine has started'))
})

.then(() => {
    return Order(2000,() => console.log(`Ice cream is placed on the ${Stocks.holder[0]}`))
})

.then(() => {
    return Order(3000,() => console.log(`${Stocks.toppings[0]} was selected`))
})

.then(() => {
    return Order(2000,() => console.log('Ice cream is ready to serve'))
})

.catch(() => {
    console.log('Customer left')
})

.finally(() => {
    console.log('Day ended, Shop is closed')
})


