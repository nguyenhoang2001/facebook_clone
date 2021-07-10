import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, childreen}) => (
    <StateContext.Provider value= {useReducer(reducer,initialState)}>
        {childreen}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);