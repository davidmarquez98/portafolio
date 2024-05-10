import { useState } from 'react';

export const useLocalStorage = (key, initialValue) =>{
    const [ storedValue, setStoredValue ] = useState(() => {
        try{
            const item = localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            return initialValue;
        }
    });

    return [ storedValue, setStoredValue ];

};