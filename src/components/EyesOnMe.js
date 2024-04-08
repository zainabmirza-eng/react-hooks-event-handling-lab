// Code EyesOnMe Component Here

function EyesOnMe(){
        function handleButton(event){
            console.log('Good!')
        }

        function handleBlur(event){
            console.log('Hey! Eyes on me!')
        };
    return(
        <div>
            <button onFocus={handleButton} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;