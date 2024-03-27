import Navbar from '../components/Utils/NavBar'; 
import Background from '../assets/background.webp'; 

import SkillsProgess from '../components/Skills/SkillsProgress';
import SkillsHeading from '../components/Skills/SkillsHeading';
// import MoreTechStacks from '../components/Skills/MoreTechsHeading';
import ToolsHeading from '../components/Skills/ToolsHeading';
import ToolsMenu from '../components/Skills/ToolsMenu';

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
            
            {/* <TechStack/> */}
            <ToolsHeading/>
            <ToolsMenu/>
          
      
          </div>
    )
}