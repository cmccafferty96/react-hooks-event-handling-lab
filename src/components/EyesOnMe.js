
function EyesOnMe(){

    function blurEvent(){
        console.log("Hey! Eyes on me!")
    }

    return(
        <button onFocus={() => {
            console.log("Good!")
        }}
        onBlur={blurEvent} >Eyes On Me</button>
    )
}

export default EyesOnMe;