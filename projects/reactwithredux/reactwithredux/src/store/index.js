import {createStore} from 'redux' ;


const INITIAL_VALUE={counter:10};
const reducer =(store=INITIAL_VALUE,action)=>{
  let newStore=store
  if (action.type==='INCREMENT'){
    return {...store,counter:store.counter+1};
    }
    if (action.type==='DECREMENT'){
      return {...store,counter:store.counter-1};
      }

      if (action.type==='ADD'){
        return {...store,counter:store.counter+action.pd.n};
        }
    return newStore;
        
}

const reduxstore=createStore(reducer);
export default reduxstore

const subscriber = () =>{
  const state=reduxstore.getState();
  console.log(state);
}



/* 
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
<Provider store={store}><App/></Provider>*/



