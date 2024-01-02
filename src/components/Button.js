import { useContext } from 'react';
import './button.css';
import { CalculatorContext } from '../context/CalculatorContext';

const getStyleName = btn => {
    const className = {
        '0' : 'zero',
        '/' : 'operator',
        '-' : 'operator',
        'x' : 'operator',
        '+' : 'operator',
        '=' : 'operator'
    }
    return className[btn]
}
export default function Button ({value}) {
    const { compute, setCompute} = useContext(CalculatorContext);
    
    // user click the dot/comma button
    const dotSignBtnClick = () => {
        setCompute({
            ...compute,
            number : !compute.number.toString().includes('.') ? 
                      compute.number + value : compute.number,
        })
    }

    // User Click the C button
    const clearButtonClick = () => {
        setCompute({ 
            number : 0,
            result : 0,
            sign : ''
        })
    }

    // User click any number between 0 and 9 
    const handleNumberBtnClick = () => {
        const numberString = value.toString();

        let numberValue;
        if (numberString === '0' && compute.number === 0){
            numberValue = '0';
        } else {
            numberValue = Number(compute.number + numberString);
        }

        setCompute({
            ...compute,
            number: numberValue,
        })
    }

    // sign button click 
    const signButtonClick = () => {
        setCompute({
            sign : value,
            result : !compute.result && compute.number ?
                      compute.number : compute.result,
            number: 0
        })
    }

    // handle click equal sign button
    const equalSignBtnClick = () => {

        if (compute.result && compute.number){
            const math = (num1, num2, operator) => {

                const results = {
                    '+': (num1, num2) => num1 + num2,
                    '-': (num1, num2) => num1 - num2,
                    'x': (num1, num2) => num1 * num2,
                    '/': (num1, num2) => num1 / num2, 
                }
    
                return results[operator](num1,num2);
            }

            setCompute({
                result: math(compute.result, compute.number, compute.sign),
                number: 0,
                sign: ''
            })
        }
    }

    // percentage button click
    const percentBtnClick = () => {
        setCompute({
            number : (compute.number / 100),
            result : (compute.result / 100),
            sign   : '',
        })
    }

    // click the invert button
    const invertSignBtnClick = () => {
        setCompute({
            number: compute.number ? compute.number * -1 : 0,
            result: compute.result ? compute.result * -1 : 0,
            sign: ''
        })
    }

    // Button click event handle
    const handleButtonClick = () => {
        const results = {
            '/' : signButtonClick,
            'x' : signButtonClick,
            '-' : signButtonClick,
            '+' : signButtonClick,
            'C' : clearButtonClick,
            '+-' : invertSignBtnClick,
            '%' : percentBtnClick,
            '.' : dotSignBtnClick,
            '=' : equalSignBtnClick,
        }
    
        if (results[value]){
            return results[value]()
        } else {
            return handleNumberBtnClick()
        }
    }
    return (
    <button className={`button ${getStyleName(value)}`} onClick={ handleButtonClick }>
         { value }
    </button>);
}
