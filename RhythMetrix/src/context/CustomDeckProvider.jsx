import { useState, useEffect} from 'react';
import CustomDeckContext from './CustomDeckContext';
// import { handleFetch } from '../utils';

const CustomDeckProvider = ({children}) => {
    return (
        < CustomDeckContext.Provider value={value} >
            {children}
        </CustomDeckContext.Provider>
    )
}

export default CustomDeckProvider;