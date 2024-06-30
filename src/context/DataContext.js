import { createContext,useState,useEffect, Children } from "react";

const DataContext=createContext({});
 const DataProvider =({children}) => {
    return(
        <DataContext.Provider value={{}}>
            {Children}
        </DataContext.Provider>
    )
}

export default DataContext