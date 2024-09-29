import { useState } from "react";

const Message = () => {
    const [message, setMessage] = useState("Welcome To gx !!!");
    
    return (
        <>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Done for the day')}>Click me!</button>
        </>
    );
}

export default Message;
