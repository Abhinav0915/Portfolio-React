import { SiGit, SiFlutter, SiDocker } from "react-icons/si";
import { SiFirebase, SiFigma, SiVisualstudiocode, SiAndroidstudio, SiTensorflow, SiPandas } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const ToolsMenu = () => {
           
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 1 } 
    }
};
    // Array for the icons
    const tools = [
        { tool: SiGit, name: "Github" },
        { tool: SiFlutter, name: "Flutter" },
        { tool: SiDocker, name: "Docker" },
        { tool: SiMongodb, name: "MongoDb" },
        { tool: SiFirebase, name: "Firebase" },
        { tool: SiFigma, name: "Figma" },
        { tool: SiVisualstudiocode, name: "Visual Studio Code" },
        { tool: SiAndroidstudio, name: "Android Studio" },
        { tool: SiTensorflow, name: "Tensorflow" },
        { tool: SiPandas, name: "Pandas" },
    ]

    return (
        
        <>
         <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            >
        <Marquee style={{ padding: '45px' }} speed={70} direction="right" >
            {tools.map(({ tool: Tool, name }, index) => ( // Renamed 'tool' to 'Tool' to avoid confusion with lowercase variable names
                <div key={index} className="tech-containers relative bg-transparent w-40 h-40 border-2 rounded-lg p-4 flex items-center justify-center shadow-md ml-10 mr-4">
                    <div className="text-center text-7xl" style={{ color: 'white' }}>
                        <Tool /> {/* Render the component using JSX syntax */}
                        <div className="text-sm mt-2">{name}</div>
                    </div>
                </div>
            ))}
        </Marquee>
        </motion.div>
    </>
    );
};

export default ToolsMenu;
