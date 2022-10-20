// Callback hell

let stocks = {
    Fruits : ['Banana','Apple','Mango','Strawberry'],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let order = (Fruit_name,call_production) => {
    setTimeout (() => {
        call_production()
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    },2000)
   
}

let production = () => {
    setTimeout (() => {
        console.log('Production has started')

        setTimeout(() => {
            console.log('Fruit has been chopped')

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(() => {
                    console.log('Machine has been started')

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]}`)

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} has been selected`)

                            setTimeout(() => {
                                console.log('Ice cream is ready to serve')
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
}

order(0,production)



