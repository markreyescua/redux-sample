const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: initialState.counter + 1,
    };
  }
  return state;
};

export default reducer;
