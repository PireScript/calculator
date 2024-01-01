import { createContext, useState } from "react";

export const CalculatorContext = createContext();
const CalculatorProvider = ({ children }) => {
    const [compute, setCompute] = useState({
        sign : '',
        number : 0,
        result: 0
    });

    const providerValue = {
        compute,
        setCompute
    }
    return(
        <CalculatorContext.Provider value={ providerValue }>
            { children }
        </CalculatorContext.Provider>
    );
}

export default CalculatorProvider;