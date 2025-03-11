import { SiGit, SiFlutter, SiDocker, SiFirebase, SiFigma, SiVisualstudiocode, SiAndroidstudio, SiTensorflow, SiPandas, SiMongodb } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const ToolsMenu = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -10 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5 
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { 
        type: "spring",
        stiffness: 200 
      }
    }
  };

  const tools = [
    { tool: SiGit, name: "Git", color: "#F05032" },
    { tool: SiFlutter, name: "Flutter", color: "#02569B" },
    { tool: SiDocker, name: "Docker", color: "#2496ED" },
    { tool: SiMongodb, name: "MongoDB", color: "#47A248" },
    { tool: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { tool: SiFigma, name: "Figma", color: "#F24E1E" },
    { tool: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
    { tool: SiAndroidstudio, name: "Android Studio", color: "#3DDC84" },
    { tool: SiTensorflow, name: "TensorFlow", color: "#FF6D00" },
    { tool: SiPandas, name: "Pandas", color: "#150458" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-8"
    >
      <Marquee 
        speed={50} 
      >
        {tools.map(({ tool: Tool, name, color }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            
            className="mx-6"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-800 shadow-xl border border-gray-700">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-75" />
              
              {/* Inner content */}
              <div className="relative flex flex-col items-center justify-center h-full p-4">
                <Tool 
                  className="text-4xl mb-2" 
                  style={{ color: color }} 
                />
                <span 
                  className="text-sm font-medium text-white text-center"
                  style={{ 
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)' 
                  }}
                >
                  {name}
                </span>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,255,255,0.1)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Outer ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-[rgba(255,255,255,0.2)] transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default ToolsMenu;