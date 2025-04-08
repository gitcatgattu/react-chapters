import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      console.log(state, action);
      console.log("increment called");
    },
    decrement: (state, action) => {
      console.log(state, action);
    },
    add: (state, action) => {
      console.log(state, action);
    },
    subtract: (state, action) => {
      console.log(state, action);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export default counterStore;

/*

const INITIAL_VALUE={
  counter:0,
  privacy:false,
}


const counterReducer = (store=INITIAL_VALUE, action) => {
  if(action.type==='INCREMENT'){ 
    return {...store,counter:store.counter+1,privacy:store.privacy}//store is immutable so create new store//previous  value of counter is replaced with new value
  }
  else if(action.type==='DECREMENT'){
    return {...store,counter:store.counter-1,}
  }
  else if(action.type==='ADD'){
    return {...store,counter:store.counter+Number(action.payload.num),}
  }
  else if(action.type==='SUBTRACT'){
    return {...store,counter:store.counter-Number(action.payload.num),}
  }
  else if(action.type==='PRIVACY_TOGGLE'){
    return {...store,privacy:!store.privacy}
  }
  

  console.log('action received',action)
  return store;
}; */
