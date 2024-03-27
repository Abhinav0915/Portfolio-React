import Typewriter from 'typewriter-effect'

function Type(){
    return(
        <Typewriter 
            options={{
                strings: [
                    "Software Developer",
                    "UI-UX Developer",
                    "Web Developer",
                    "Java Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                
            }}
            />
    )

}

export default Type;