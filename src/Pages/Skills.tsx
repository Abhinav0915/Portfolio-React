import Navbar from '../components/Utils/NavBar'; 

import SkillsProgess from '../components/Skills/SkillsProgress';
import SkillsHeading from '../components/Skills/SkillsHeading';
// import MoreTechStacks from '../components/Skills/MoreTechsHeading';
import ToolsHeading from '../components/Skills/ToolsHeading';
import ToolsMenu from '../components/Skills/ToolsMenu';

export default function Skills(){


    return(
        <>
            <Navbar />

            <SkillsHeading/>
            <SkillsProgess/>
            
            {/* <TechStack/> */}
            <ToolsHeading/>
            <ToolsMenu/>
          
      
          </>
    )
}