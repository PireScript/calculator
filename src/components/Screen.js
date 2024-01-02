import { useContext } from 'react';
import './screen.css';
import { CalculatorContext } from '../context/CalculatorContext';
import { Textfit } from 'react-textfit';

export default function Screen () {
    const { compute } = useContext(CalculatorContext);

    return (
    <Textfit 
        className="screen"
        forceSingleModeWidth
        mode='single'
        max={60}
        throttle={50}>
         { compute.number ? compute.number : compute.result }
    </Textfit>
    );
}