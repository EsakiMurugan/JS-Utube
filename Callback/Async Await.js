// Async & Await supposed to be the better way to write promises
// Await JavaScript wait until a promise settles and returns its result.

let Stocks = {
    Fruits : ['Banana','Apple','Mango','Strawberry'],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

var is_store_open = true;

function time(ms){
    return new Promise((resolve,reject) => {
        if(is_store_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log('Shop closed'))
        }
    })
}

async function kitchen(){
    try{
    await time(2000)
    console.log(`${Stocks.Fruits[1]} has been selected`)

    await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${Stocks.holder[1]}`)

	await time(3000)
	console.log(`${Stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }
    catch{
        console.log('Stock not available')
    }
    finally{
        console.log('Shop closing time arrived')
    }
}

kitchen()