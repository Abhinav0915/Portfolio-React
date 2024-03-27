import Navbar from '../components/Utils/NavBar'; 
import Background from '../assets/background.webp'; 
import TechStack from '../components/Skills/TechStack';
import SkillsProgess from '../components/Skills/SkillsProgress';
import SkillsHeading from '../components/Skills/SkillsHeading';

export default function Skills(){
    return(
        <div style={{ 
            backgroundImage: `url(${Background})`, // Apply the background image
            backgroundSize: 'cover', // Adjust the background size as needed
            backgroundPosition: 'center', // Adjust the background position as needed
            minHeight: '100vh', // Set a minimum height to cover the entire viewport
          }}>
            <Navbar />

            <SkillsHeading/>
            <SkillsProgess/>
            
            <TechStack/>
      
          
      
          </div>
    )
}