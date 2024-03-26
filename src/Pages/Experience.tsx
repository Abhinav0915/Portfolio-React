import Navbar from '../components/Utils/NavBar'; 
import Background from '../assets/background.webp'; 

// import Timeline from '../Utils/ExpTimeline';

export default function Experience(){
    // const experiences = [
    //     {
    //       date: "2019 - Present",
    //       title: "Software Engineer",
    //       description: "Worked on various projects using React, Node.js, and MongoDB."
    //     },
    //     {
    //       date: "2017 - 2019",
    //       title: "Web Developer",
    //       description: "Developed and maintained websites using HTML, CSS, and JavaScript."
    //     },
    //     // Add more experiences as needed
    //   ];
    
    return(
        <div style={{ 
            backgroundImage: `url(${Background})`, // Apply the background image
            backgroundSize: 'cover', // Adjust the background size as needed
            backgroundPosition: 'center', // Adjust the background position as needed
            minHeight: '100vh', // Set a minimum height to cover the entire viewport
          }}>
            <Navbar />
         
            {/* <Timeline experiences={experiences}/> */}
          
         
      
          
      
          </div>
    )
}