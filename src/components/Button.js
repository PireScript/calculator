import './button.css';

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
    const handleButtonClick = () => {
        console.log(value);
    }

    return (
    <button className={`button ${getStyleName(value)}`} onClick={ handleButtonClick }>
         { value }
    </button>);
}