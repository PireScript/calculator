import { useContext } from 'react'
import './screen.css'
import { CalculatorContext } from '../context/CalculatorContext'
import { Textfit } from 'react-textfit';
export default function Screen () {
    const { compute } = useContext(CalculatorContext);
    return (
    <Textfit 
        className="screen"
        mode='single'
        max={55}>
         { compute.number ? compute.number : compute.result }
    </Textfit>);
}