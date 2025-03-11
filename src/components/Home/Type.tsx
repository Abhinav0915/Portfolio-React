import Typewriter from 'typewriter-effect'

function Type(){
    return(
        <Typewriter 
            options={{
                strings: [
                    "Software Developer",
                    "Full Stack Developer",
                    "Web Developer",
                    "Java Developer",
                    "MERN Stack Developer",
                    "Python Developer",
                    "JavaScript Developer",
                    "TypeScript Developer",
                    "React Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                
            }}
            />
    )

}

export default Type;