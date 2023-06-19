// Customer BUY_ICECREAM, BUY_CAKE --> Shopkeeper --> cakeWorld(20 Icecreams and 30 Cakes) 

const {createStore, combineReducers} = require("redux")

// STATE
const icecreamData = 
{
    noOfIcecreams: 20,
}
const cakeData = {
    noOfCakes: 30
}

function buyIcecream(){
    return{
        type: "BUY_ICECREAM"
    }
}
function buyCake(){
    return{
        type: "BUY_CAKE"
    }
}
const icecreamReducer = (state = icecreamData, action) =>{
    if(action.type == "BUY_ICECREAM"){
        return {
            noOfIcecreams: state.noOfIcecreams - 1
        }
    }
    else{
        return state
    }
}

const cakeReducer = (state = cakeData, action) =>{
    if(action.type = "BUY_CAKE"){
        return{
            noOfCakes: state.noOfCakes - 1
        }
    }
    else{
        return state
    }
}




//ACTION
function buyIcecream()
{
    return{
        type: "BUY_ICECREAM"
    }
    
}

function buyCake()
{
    return{
        type: "BUY_CAKE"
    }
    
}

const rootReducer = combineReducers({
    icecream: icecreamReducer,
    cake: cakeReducer
})



const cakeWorld = createStore(rootReducer)

cakeWorld.subscribe(function(){
    console.log(cakeWorld.getState())
})

//PRINT THE UPDATE DATA PRESENT INSIDE cakeWorld
// Get inside the cakeWorld, then we can get the data present in it


//CUSTOMER WILL CALL
cakeWorld.dispatch(buyIcecream())
cakeWorld.dispatch(buyCake())