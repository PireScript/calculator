import './App.css';
import ButtonBoard from './components/ButtonBoard';
import Button from './components/Button';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';

const buttonValues = [
  ['C', '⁺-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

function App() {
  return (
      <Wrapper>
        <Screen />
        <ButtonBoard>
          {buttonValues.flat().map((row, i) => (
            <Button 
            value={row} 
            key={i}/>
          ))}
        </ButtonBoard>
      </Wrapper>
);
}

export default App;