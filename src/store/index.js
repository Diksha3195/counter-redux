import { createStore } from "redux";
const INITIAL_VAL = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VAL, action) => {
  if (action.type === "INC") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DEC") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUB") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;