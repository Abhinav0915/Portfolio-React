import Background from '../assets/background.webp'; 

import WorkHeading from '../components/Headings/WorkHeading';
import Navbar from '../components/Utils/NavBar';
import WorkCards from '../components/Utils/WorkCards';


export default function Works(){
    return(
        <div style={{ 
            backgroundImage: `url(${Background})`, // Apply the background image
            backgroundSize: 'cover', // Adjust the background size as needed
            backgroundPosition: 'center', // Adjust the background position as needed
            minHeight: '100vh', // Set a minimum height to cover the entire viewport
          }}>
            <Navbar/>
            <WorkHeading/>
            <WorkCards/>
          </div>
    )
}