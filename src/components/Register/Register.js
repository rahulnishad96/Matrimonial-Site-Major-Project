import React,{useState} from 'react'
import Register1 from './Register1/Register1';
import Register2 from './Register2/Register2';
function Register(props) {
    const [Continue, setContinue] = useState(false);
    const onContinueHandler = () =>{
        setContinue(true);
    }
    const onPrevHandler = () =>{
        setContinue(false);
    }
    return (
        <div>
            {!Continue && <Register1 onContinue={onContinueHandler} onLogin={props.onLogin} onHome={props.onHome}/>}
            {Continue && <Register2 onPrev={onPrevHandler} onHome={props.onHome}/>}
        </div>
    )
}

export default Register
