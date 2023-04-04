import React, { createContext,  useContext, useReducer } from 'react'
import { APP_STATES_TYPE, initialState } from './states';
import { appReducer } from './reducers';
import { REDUCER_ACTION_TYPE } from './actions';

const Store = createContext<{
    state: APP_STATES_TYPE,
    dispatch: React.Dispatch<REDUCER_ACTION_TYPE>;
}>({
    state: initialState, 
    dispatch: () => undefined
});


export const UseStore = () => useContext(Store);


export const StoreProvider = ({children}: { children: JSX.Element}) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    )

}

