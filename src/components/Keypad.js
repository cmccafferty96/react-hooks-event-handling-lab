function Keypad(){

    function passwordSubmit(){
        console.log("Entering password...")
    }

    return (
        <input type="password" onChange={passwordSubmit} />

    )
}

export default Keypad;