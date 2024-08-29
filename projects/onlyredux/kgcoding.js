const redux =require('redux');


const INITIAL_VALUE={counter:0};
const reducer =(store=INITIAL_VALUE,action)=>{
  let newStore=store
  if (action.type==='INCREMENT'){
    return {counter:store.counter+1};
    }
    if (action.type==='DECREMENT'){
      return {counter:store.counter-1};
      }

      if (action.type==='ADD'){
        return {counter:store.counter+action.pd.n};
        }
        
}

const store=redux.createStore(reducer);

const subscriber = () =>{
  const state=store.getState();
  console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'ADD',pd:{n:7}})

