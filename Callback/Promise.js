// Promise

let Stocks = {
    Fruits : ['Banana','Apple','Mango','Strawberry'],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let is_store_open = true;

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
