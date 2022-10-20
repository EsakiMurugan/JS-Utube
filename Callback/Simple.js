function one(call_two){
    console.log('First Step')
    call_two()
}

function two(){
    console.log('Second Step')
}

one(two)

