import Navbar from '../components/Utils/NavBar'; 
import Background from '../assets/background.webp'; 


export default function Contact(){
    return(
        <div style={{ 
            backgroundImage: `url(${Background})`, // Apply the background image
            backgroundSize: 'cover', // Adjust the background size as needed
            backgroundPosition: 'center', // Adjust the background position as needed
            minHeight: '100vh', // Set a minimum height to cover the entire viewport
          }}>
            <Navbar />
         
      
            
      
          
      
          </div>
    )
}