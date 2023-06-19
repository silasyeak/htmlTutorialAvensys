const { createStore } = require("redux");

const initialData = {
  noOfLaptops: 40,
};

function buyLaptop() {
  return {
    type: "BUY_LAPTOP",
  };
}

function sellLaptop() {
  return {
    type: "SELL_LAPTOP",
  };
}

const myReducer = (state = initialData, action) => {
  if (action.type === "BUY_LAPTOP") {
    return {
      noOfLaptops: state.noOfLaptops + 1,
    };
  }
  if (action.type === "SELL_LAPTOP") {
    return {
      noOfLaptops: state.noOfLaptops - 1,
    };
  } else {
    return state;
  }
};

const laptopWorld = createStore(myReducer);

laptopWorld.subscribe(function () {
  console.log(laptopWorld.getState());
});

laptopWorld.dispatch(buyLaptop());
