const {createStore} = require("redux")

const initialData = {
    noOfChocolate: 20
}

const chocolateReducer = (state=initialData) =>{
    if(action.type == "BUY_CHOCOLATE"){
        noOfChocolate: state.noOfChocolate - 1
    }
    else{
        return state
    }
}



function buy(){
    return{
        type: "BUY_CHOCOLATE"
    }
}

//Redux Store
const bakery = createStore(chocolateReducer)

//we need to get inside the bakery and count the remaining
bakery.subscribe(function(){
    console.log(bakery.getState())
})


bakery.dispatch(buy())
bakery.dispatch(buy())
bakery.dispatch(buy())
