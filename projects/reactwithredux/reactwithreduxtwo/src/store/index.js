import {configureStore, createSlice} from "@reduxjs/toolkit"


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
const counterSlice =createSlice({
  name:'counter',initialState:{counterval:5},
  reducers:{
    increment:(state)=>{
      state.counterval++
    },
  
    decrement:(state)=>{
     state.counterval--
    }
  }})
const counterStore=configureStore({reducer:{counter:counterSlice.reducer}})
export default counterStore
export const counteraction=counterSlice.actions

