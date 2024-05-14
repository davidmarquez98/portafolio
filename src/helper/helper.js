import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) =>{

    const [ item, setItem ] = useState(initialValue);
    const [ sincronizedItem, setSincronizedItem ] = useState(false);

    localStorage.setItem(key, JSON.stringify(item));

    useEffect(() => {
        console.log(item);
        setItem(JSON.parse(localStorage.getItem(key)));
        setSincronizedItem(true);
    }, [sincronizedItem])

    const sincronizeItem = () => {
        setSincronizedItem(false);
    }

    return {
            item,
            sincronizeItem
        }

};