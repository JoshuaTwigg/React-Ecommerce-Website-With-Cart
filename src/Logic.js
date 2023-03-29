

import { createContext, useContext, useState} from 'react';

export const shopContext = createContext(null)




export const shopContextProvider = (props)=>{
    const [cart,setCart] = useState([])
    return(
        <shopContext.Provider><div></div></shopContext.Provider>
    )
}


export default shopContextProvider