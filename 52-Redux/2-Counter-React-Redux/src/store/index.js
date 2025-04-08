import { createStore } from "redux";
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
}; 
const counterStore = createStore(counterReducer);

export default counterStore;