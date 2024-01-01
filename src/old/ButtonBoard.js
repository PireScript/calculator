import './Button.css'
import Button from './Button';
export default function ButtonBoard () {
    const operatorButtonColor = {
        backgroundColor: '#0e0e0f',
    };
    const setButtonColor ={
        backgroundColor: '#37393a',
    }
    return(
        <div className="button-container">
            <div className="button" > 
                <Button number='7'/> 
                <Button number='8'/>
                <Button number='9'/>
                <Button 
                    customStyle = { operatorButtonColor } 
                    number = '/'/>
            </div>
            <div className="button" > 
                <Button number='4'/> 
                <Button number='5'/>
                <Button number='6'/>
                <Button 
                    customStyle = { operatorButtonColor } 
                    number = 'x'/>
            </div>
            <div className="button" > 
                <Button number='1'/>
                <Button number='2'/>
                <Button number='3'/>
                <Button 
                    customStyle = { operatorButtonColor } 
                    number = '-'/>
            </div>
            <div className="button" > 
                <Button customStyle = { setButtonColor } number ='.'/>
                <Button number='0'/>
                <Button customStyle = { setButtonColor } number ='c'/>
                <Button 
                    customStyle = { operatorButtonColor } 
                    number = '+'/>
            </div>
        </div>
        
    );
}
