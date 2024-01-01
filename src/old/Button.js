import './Button.css'


export default function Button ({ number, customStyle }) {
    function handleClick() {
        console.log(number);
        return number;
    }
    return <button onClick = { handleClick} style = { customStyle } className="btn"> { number } </button>;
}